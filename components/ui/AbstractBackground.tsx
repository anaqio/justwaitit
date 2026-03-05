'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * AbstractBackground — CSS-based animated blob system
 *
 * Features:
 * - 6 GPU-composited blobs using transform3d (no canvas, no layout thrash)
 * - Mouse-follow parallax via CSS custom properties
 * - Device gyroscope support (DeviceOrientationEvent)
 * - Scroll-triggered morph (blob shape/scale/opacity transitions)
 * - Noise overlay via SVG feTurbulence
 * - Full prefers-reduced-motion support
 */

// Blob configuration: position offset %, size, color, drift speed, parallax factor
const BLOBS = [
  {
    id: 0,
    x: 15,
    y: 20,
    size: 420,
    color: '#2563EB',
    driftDur: 22,
    parallax: 0.04,
  },
  {
    id: 1,
    x: 70,
    y: 15,
    size: 380,
    color: '#7C3AED',
    driftDur: 28,
    parallax: 0.03,
  },
  {
    id: 2,
    x: 40,
    y: 60,
    size: 350,
    color: '#3F57AF',
    driftDur: 25,
    parallax: 0.05,
  },
  {
    id: 3,
    x: 80,
    y: 70,
    size: 300,
    color: '#6049A8',
    driftDur: 30,
    parallax: 0.02,
  },
  {
    id: 4,
    x: 25,
    y: 80,
    size: 280,
    color: '#6F47A7',
    driftDur: 26,
    parallax: 0.035,
  },
  {
    id: 5,
    x: 55,
    y: 35,
    size: 320,
    color: '#2563EB',
    driftDur: 24,
    parallax: 0.045,
  },
] as const;

const AbstractBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // Normalized [0,1]
  const gyroRef = useRef({ x: 0, y: 0 }); // Degrees mapped to [-1,1]
  const [scrollMorph, setScrollMorph] = useState(false);

  // Throttled mousemove → CSS custom properties
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };

    if (rafRef.current) return; // Already scheduled

    rafRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        const el = containerRef.current;
        el.style.setProperty('--mouse-x', String(mouseRef.current.x));
        el.style.setProperty('--mouse-y', String(mouseRef.current.y));
        // Blend gyro when available
        el.style.setProperty('--gyro-x', String(gyroRef.current.x));
        el.style.setProperty('--gyro-y', String(gyroRef.current.y));
      }
      rafRef.current = 0;
    });
  }, []);

  // Device orientation → gyro CSS vars
  const handleOrientation = useCallback((e: DeviceOrientationEvent) => {
    const gamma = e.gamma ?? 0; // left-right tilt [-90,90]
    const beta = e.beta ?? 0; // front-back tilt [-180,180]
    gyroRef.current = {
      x: Math.max(-1, Math.min(1, gamma / 45)), // Normalize to [-1,1]
      y: Math.max(-1, Math.min(1, (beta - 45) / 45)),
    };
  }, []);

  // Scroll-triggered morph
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    // Morph blobs once scrolled past first viewport
    setScrollMorph(scrollTop > window.innerHeight * 0.4);
  }, []);

  useEffect(() => {
    // Mouse tracking
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Device orientation (gyroscope)
    if (typeof DeviceOrientationEvent !== 'undefined') {
      window.addEventListener('deviceorientation', handleOrientation, {
        passive: true,
      });
    }

    // Scroll tracking
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize CSS vars
    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', '0.5');
      containerRef.current.style.setProperty('--mouse-y', '0.5');
      containerRef.current.style.setProperty('--gyro-x', '0');
      containerRef.current.style.setProperty('--gyro-y', '0');
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, handleOrientation, handleScroll]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      aria-hidden="true"
      style={
        {
          '--mouse-x': '0.5',
          '--mouse-y': '0.5',
          '--gyro-x': '0',
          '--gyro-y': '0',
        } as React.CSSProperties
      }
    >
      {/* Blur layer — single filter for all blobs */}
      <div
        className="absolute inset-0"
        style={{ filter: 'blur(80px)', willChange: 'transform' }}
      >
        {BLOBS.map((blob) => (
          <div
            key={blob.id}
            className={`abstract-blob ${scrollMorph ? 'abstract-blob--morphed' : ''}`}
            style={
              {
                '--blob-x': `${blob.x}%`,
                '--blob-y': `${blob.y}%`,
                '--blob-size': `${blob.size}px`,
                '--blob-color': blob.color,
                '--blob-drift-dur': `${blob.driftDur}s`,
                '--blob-parallax': blob.parallax,
                animationDelay: `${-blob.id * 3.5}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Noise overlay via SVG feTurbulence */}
      <div className="absolute inset-0 opacity-[0.035]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="abstract-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#abstract-noise)" />
        </svg>
      </div>
    </div>
  );
};

export default AbstractBackground;
