import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring, Sequence } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Syne';
import { loadFont as loadCormorant } from '@remotion/google-fonts/CormorantGaramond';

const { fontFamily } = loadFont('normal', {
  weight: '800',
});

const { fontFamily: cormorant } = loadCormorant('normal', {
  weight: '400',
  style: 'italic',
});

const Scene1 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const textY = spring({
    frame: frame - 15,
    fps,
    config: { stiffness: 100 },
  });

  const translateY = interpolate(textY, [0, 1], [40, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a08' }}>
      <div style={{ opacity, transform: `scale(${logoScale})`, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ fontFamily, fontSize: '100px', fontWeight: 800, background: 'linear-gradient(90deg, #3F57AF 0%, #484DA9 32%, #6049A8 67%, #6F47A7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          anaqio
        </div>
        <div style={{ fontFamily: cormorant, fontSize: '36px', color: '#94A3B8', transform: `translateY(${translateY}px)`, opacity: interpolate(frame, [15, 30], [0, 1]) }}>
          the future of fashion commerce
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1]);
  const titleScale = spring({ frame, fps, config: { stiffness: 100 } });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a08' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
        <img 
          src="https://images.unsplash.com/photo-1539109132314-d4a8c77ee8c8?auto=format&fit=crop&q=80&w=1000" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Fashion"
        />
      </div>
      <div style={{ opacity: titleOpacity, transform: `scale(${titleScale})`, textAlign: 'center', zIndex: 10 }}>
        <div style={{ fontFamily, fontSize: '60px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          AI Visual Studio
        </div>
        <div style={{ fontFamily: cormorant, fontSize: '40px', color: '#2563EB', marginTop: '20px' }}>
          Crafted for Morocco
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const IntroVideo = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={75}>
        <Scene1 />
      </Sequence>
      <Sequence from={75} durationInFrames={75}>
        <Scene2 />
      </Sequence>
    </AbsoluteFill>
  );
};
