'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';

import { type Bubble } from './AbstractBackground';

export const AbstractBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // Normalized [0,1]
  const gyroRef = useRef({ x: 0, y: 0 }); // Degrees mapped to [-1,1]
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

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
        // Gravitate offsets in normalized [-1,1]
        const gx = mouseRef.current.x * 2 - 1;
        const gy = mouseRef.current.y * 2 - 1;
        el.style.setProperty('--grav-x', String(gx));
        el.style.setProperty('--grav-y', String(gy));
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
      containerRef.current.style.setProperty('--grav-x', '0');
      containerRef.current.style.setProperty('--grav-y', '0');
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

  // Generate bubbles dynamically based on viewport
  useEffect(() => {
    const gen = () => {
      const w = window.innerWidth;
      const isSmall = w < 640;
      // Increased count for better "filling" of the screen
      const count = isSmall ? 6 : 12;
      const min = isSmall ? 40 : 60;
      const max = isSmall ? 100 : 180;

      const arr: Bubble[] = [];
      for (let i = 0; i < count; i++) {
        const size = Math.round(min + Math.random() * (max - min));
        // Spread more evenly but with overlap
        arr.push({
          id: `b-${i}`,
          x: Math.round(Math.random() * 100),
          y: Math.round(Math.random() * 100),
          size,
        });
      }
      setBubbles(arr);
    };
    gen();
    const onResize = () => {
      // throttle simple
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        gen();
        rafRef.current = 0;
      });
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={
        {
          '--mouse-x': '0.5',
          '--mouse-y': '0.5',
          '--grav-x': '0',
          '--grav-y': '0',
          '--gyro-x': '0',
          '--gyro-y': '0',
        } as React.CSSProperties
      }
    >
      {/* Blur layer — single filter for all blobs *}
            <div className="gravitate">
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
      
              {/* Glass bubbles (subtle, Apple-like) */}
      <div className="absolute inset-0">
        {bubbles.map((b, i) => (
          <div
            key={b.id}
            className="glass-bubble"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${i * -2}s`,
            }}
          />
        ))}
      </div>
    </div> /* Noise overlay via SVG feTurbulence */
  );

  {
    /* Noise overlay via SVG feTurbulence */
  }
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
  </div>;
};
