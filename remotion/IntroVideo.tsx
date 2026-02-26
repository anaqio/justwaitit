import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Syne';
import { loadFont as loadCormorant } from '@remotion/google-fonts/CormorantGaramond';

const { fontFamily } = loadFont('normal', {
  weight: '800',
});

const { fontFamily: cormorant } = loadCormorant('normal', {
  weight: '400',
  style: 'italic',
});

export const IntroVideo = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  });

  const textY = spring({
    frame: frame - 15,
    fps,
    config: {
      stiffness: 100,
    },
  });

  const translateY = interpolate(textY, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0a08',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      {/* Background Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          opacity,
          transform: `scale(${logoScale})`,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div
          style={{
            fontFamily,
            fontSize: '80px',
            fontWeight: 800,
            letterSpacing: '-0.05em',
            background: 'linear-gradient(90deg, #3F57AF 0%, #484DA9 32%, #6049A8 67%, #6F47A7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          anaqio
        </div>

        <div
          style={{
            fontFamily: cormorant,
            fontSize: '32px',
            color: '#94A3B8',
            transform: `translateY(${translateY}px)`,
            opacity: interpolate(frame, [15, 30], [0, 1], { extrapolateRight: 'clamp' }),
          }}
        >
          the future of fashion commerce
        </div>
      </div>
    </AbsoluteFill>
  );
};
