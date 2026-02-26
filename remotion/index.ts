import { registerComposition } from 'remotion';
import { IntroVideo } from './IntroVideo';

registerComposition('Intro', {
  component: IntroVideo,
  durationInFrames: 150,
  fps: 30,
  width: 1080,
  height: 1920,
});
