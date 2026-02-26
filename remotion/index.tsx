import React, { Fragment } from 'react';
import { Composition } from 'remotion';
import { IntroVideo } from './IntroVideo';

// Total frames = 60 + 70 + 80 + 60 = 270
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Intro"
      component={IntroVideo}
      durationInFrames={270}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
