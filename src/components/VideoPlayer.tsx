'use client';

import { useState } from 'react';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

type VideoPlayerProps = {
  src: string;
  blur?: boolean;
  poster?: string;
  classes?: string;
};

export function VideoPlayer({ src, poster = '', classes = '' }: VideoPlayerProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <div className={`relative ${classes}`}>
      {!videoLoaded && (
        <div className="absolute inset-0 z-10 bg-white">
          <div className="h-full w-full bg-[#d6dde1] animate-pulse rounded-lg" />
        </div>
      )}
      <MediaPlayer
        src={src}
        className="h-full w-full rounded-lg"
        playsInline
        preload="auto"
        dir="ltr"
        load="visible"
        posterLoad="visible"
        onLoadedMetadata={() => setVideoLoaded(true)}
      >
        {poster && <Poster src={poster} className="vds-poster" />}
        <DefaultVideoLayout icons={defaultLayoutIcons} />
        <MediaProvider />
      </MediaPlayer>
    </div>
  );
}