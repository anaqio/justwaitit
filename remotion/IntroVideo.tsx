import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring, Sequence, Series } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Syne';
import { loadFont as loadCormorant } from '@remotion/google-fonts/CormorantGaramond';

const { fontFamily: syne } = loadFont('normal', { weight: '800' });
const { fontFamily: cormorant } = loadCormorant('normal', { weight: '400', style: 'italic' });

const BrandGradient = 'linear-gradient(90deg, #3F57AF 0%, #484DA9 32%, #6049A8 67%, #6F47A7 100%)';

const IdentityScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 12 } });
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a08' }}>
      <div style={{ opacity, transform: `scale(${scale})`, textAlign: 'center' }}>
        <h1 style={{ fontFamily: syne, fontSize: '120px', background: BrandGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>
          anaqio
        </h1>
        <p style={{ fontFamily: cormorant, fontSize: '40px', color: '#94A3B8', marginTop: '10px' }}>
          the future of fashion commerce
        </p>
      </div>
    </AbsoluteFill>
  );
};

const ProblemScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 50, 60], [0, 1, 1, 0]);
  const blur = interpolate(frame, [0, 10], [10, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a08', opacity }}>
      <div style={{ filter: `blur(${blur}px)`, textAlign: 'center', padding: '60px' }}>
        <h2 style={{ fontFamily: syne, fontSize: '60px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Traditional shoots are<br />
          <span style={{ color: '#EF4444' }}>Expensive & Slow</span>
        </h2>
        <div style={{ height: '2px', width: '100px', background: '#EF4444', margin: '40px auto' }} />
        <p style={{ fontFamily: cormorant, fontSize: '32px', color: '#94A3B8' }}>
          Weeks of planning. Thousands in DH.
        </p>
      </div>
    </AbsoluteFill>
  );
};

const SolutionScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slide = spring({ frame, fps, config: { stiffness: 100 } });
  const translateY = interpolate(slide, [0, 1], [50, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a08' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <img 
          src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Marrakech"
        />
      </div>
      <div style={{ textAlign: 'center', zIndex: 10, transform: `translateY(${translateY}px)` }}>
        <h2 style={{ fontFamily: syne, fontSize: '70px', color: 'white' }}>
          Enter the <span style={{ background: BrandGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Virtual Studio</span>
        </h2>
        <p style={{ fontFamily: cormorant, fontSize: '40px', color: '#3b82f6', marginTop: '20px' }}>
          10x Faster. 90% Cheaper.
        </p>
      </div>
    </AbsoluteFill>
  );
};

const OutroScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a08', opacity }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: syne, fontSize: '50px', color: 'white', textTransform: 'uppercase' }}>
          Start Creating in
        </h2>
        <h1 style={{ fontFamily: syne, fontSize: '100px', background: BrandGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Morocco
        </h1>
        <div style={{ marginTop: '40px', padding: '20px 40px', border: '2px solid #2563EB', borderRadius: '20px' }}>
          <span style={{ fontFamily: syne, fontSize: '30px', color: 'white' }}>JOIN THE WAITLIST</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const IntroVideo = () => {
  return (
    <AbsoluteFill>
      <Series>
        <Series.Sequence durationInFrames={60}>
          <IdentityScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={70}>
          <ProblemScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={80}>
          <SolutionScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <OutroScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
