import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring, Series, Easing } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Syne';
import { loadFont as loadCormorant } from '@remotion/google-fonts/CormorantGaramond';
import { loadFont as loadJost } from '@remotion/google-fonts/Jost';

const { fontFamily: syne } = loadFont('normal', { weights: ['800'] });
const { fontFamily: cormorant } = loadCormorant('italic', { weights: ['400'] });
const { fontFamily: jost } = loadJost('normal', { weights: ['400', '600'] });

const BrandGradient = 'linear-gradient(135deg, #3F57AF 0%, #484DA9 32%, #6049A8 67%, #6F47A7 100%)';

const IdentityScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 15, stiffness: 80 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const logoY = interpolate(frame, [0, 30], [30, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a08' }}>
      {/* Animated background glow */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        opacity: interpolate(frame, [0, 30], [0, 0.6]),
        filter: 'blur(60px)',
        transform: `scale(${interpolate(frame, [0, 30], [0.8, 1.2])})`,
      }} />
      
      <div style={{ 
        opacity, 
        transform: `translateY(${logoY}px) scale(${scale})`,
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        <h1 style={{ 
          fontFamily: syne, 
          fontSize: '140px', 
          background: BrandGradient, 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: 0,
          letterSpacing: '-0.03em',
        }}>
          anaqio
        </h1>
        <p style={{ 
          fontFamily: cormorant, 
          fontSize: '36px', 
          color: '#94A3B8', 
          marginTop: '16px',
          fontStyle: 'italic',
          letterSpacing: '0.02em',
        }}>
          the future of fashion commerce
        </p>
      </div>
    </AbsoluteFill>
  );
};

const ProblemScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [0, 15], [30, 0], { extrapolateRight: 'clamp' });
  
  const lineScale = spring({ frame: frame - 15, fps, config: { stiffness: 100, damping: 15 } });
  
  const statOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: 'clamp' });
  const statY = interpolate(frame, [20, 35], [20, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#0a0a08',
      padding: '60px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '900px' }}>
        <h2 style={{ 
          fontFamily: syne, 
          fontSize: '56px', 
          color: 'white', 
          textTransform: 'uppercase', 
          letterSpacing: '0.15em',
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          lineHeight: 1.2,
        }}>
          Traditional shoots are
        </h2>
        
        <div style={{ 
          height: '3px', 
          width: interpolate(lineScale, [0, 1], [0, 120]),
          background: BrandGradient,
          margin: '30px auto',
          borderRadius: '2px',
        }} />
        
        <h3 style={{ 
          fontFamily: syne, 
          fontSize: '72px', 
          background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: '20px 0',
          letterSpacing: '-0.02em',
          opacity: statOpacity,
          transform: `translateY(${statY}px)`,
        }}>
          Expensive & Slow
        </h3>
        
        <p style={{ 
          fontFamily: cormorant, 
          fontSize: '36px', 
          color: '#64748B',
          marginTop: '30px',
          fontStyle: 'italic',
        }}>
          Weeks of planning. Thousands in DH.
        </p>
      </div>
    </AbsoluteFill>
  );
};

const SolutionScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const bgScale = interpolate(frame, [0, 60], [1.1, 1], { 
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    extrapolateRight: 'clamp' 
  });
  
  const titleY = spring({ frame, fps, config: { stiffness: 80, damping: 15 } });
  const titleOpacity = interpolate(titleY, [0.5, 1], [0, 1]);
  
  const statContainerY = spring({ frame: frame - 20, fps, config: { stiffness: 100, damping: 15 } });
  const statContainerOpacity = interpolate(statContainerY, [0.3, 1], [0, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background image with slow zoom */}
      <div style={{ 
        position: 'absolute', 
        inset: 0,
        transform: `scale(${bgScale})`,
      }}>
        <img
          src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=80"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
          alt="Marrakech"
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,8,0.6) 0%, rgba(10,10,8,0.8) 50%, rgba(10,10,8,0.9) 100%)',
        }} />
      </div>
      
      {/* Content */}
      <div style={{ 
        textAlign: 'center', 
        zIndex: 10, 
        transform: `translateY(${titleY * 50}px)`,
        opacity: titleOpacity,
        padding: '60px',
      }}>
        <h2 style={{ 
          fontFamily: syne, 
          fontSize: '64px', 
          color: 'white',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}>
          Enter the
        </h2>
        <h2 style={{ 
          fontFamily: syne, 
          fontSize: '80px', 
          background: BrandGradient, 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: '10px 0',
          letterSpacing: '-0.03em',
        }}>
          Virtual Studio
        </h2>
      </div>
      
      {/* Stats */}
      <div style={{
        position: 'absolute',
        bottom: '120px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '80px',
        transform: `translateY(${statContainerY * 30}px)`,
        opacity: statContainerOpacity,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontFamily: jost, 
            fontSize: '64px', 
            fontWeight: 600,
            color: '#3B82F6',
            letterSpacing: '-0.03em',
          }}>
            10x
          </div>
          <div style={{ 
            fontFamily: jost, 
            fontSize: '14px', 
            color: '#94A3B8',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginTop: '8px',
          }}>
            Faster
          </div>
        </div>
        
        <div style={{ 
          width: '2px', 
          height: '60px', 
          background: 'rgba(148, 163, 184, 0.3)',
          alignSelf: 'center',
        }} />
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontFamily: jost, 
            fontSize: '64px', 
            fontWeight: 600,
            color: '#8B5CF6',
            letterSpacing: '-0.03em',
          }}>
            90%
          </div>
          <div style={{ 
            fontFamily: jost, 
            fontSize: '14px', 
            color: '#94A3B8',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginTop: '8px',
          }}>
            Cheaper
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const OutroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const titleScale = spring({ frame, fps, config: { stiffness: 100, damping: 15 } });
  const titleOpacity = interpolate(titleScale, [0.5, 1], [0, 1]);
  
  const ctaY = spring({ frame: frame - 15, fps, config: { stiffness: 80, damping: 15 } });
  const ctaOpacity = interpolate(ctaY, [0.3, 1], [0, 1]);
  
  const locationOpacity = interpolate(frame, [0, 30], [0.4, 0.8]);

  return (
    <AbsoluteFill style={{ 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#0a0a08',
      overflow: 'hidden',
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: locationOpacity,
      }} />
      
      <div style={{ 
        textAlign: 'center',
        transform: `scale(${titleScale})`,
        opacity: titleOpacity,
        zIndex: 10,
      }}>
        <h2 style={{ 
          fontFamily: jost, 
          fontSize: '42px', 
          color: '#94A3B8',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          fontWeight: 400,
          marginBottom: '20px',
        }}>
          Start Creating in
        </h2>
        <h1 style={{ 
          fontFamily: syne, 
          fontSize: '120px', 
          background: BrandGradient, 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.03em',
          margin: 0,
        }}>
          Morocco
        </h1>
      </div>
      
      {/* CTA Button */}
      <div style={{
        marginTop: '60px',
        transform: `translateY(${ctaY * 40}px)`,
        opacity: ctaOpacity,
        zIndex: 10,
      }}>
        <div style={{ 
          padding: '24px 48px', 
          border: '2px solid #2563EB', 
          borderRadius: '16px',
          background: 'rgba(37, 99, 235, 0.1)',
          backdropFilter: 'blur(10px)',
        }}>
          <span style={{ 
            fontFamily: jost, 
            fontSize: '28px', 
            color: 'white',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}>
            Join the Waitlist
          </span>
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
