import { registerComposition } from 'remotion';
import { IntroVideo } from './IntroVideo';

// Total frames = 60 + 70 + 80 + 60 = 270
registerComposition('Intro', {
  component: IntroVideo,
  durationInFrames: 270,
  fps: 30,
  width: 1080,
  height: 1920,
});
