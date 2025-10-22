'use client';

import { Suspense } from 'react';
import { FiLoader } from 'react-icons/fi';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

function VideoPlayerFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg">
      <FiLoader className="w-8 h-8 text-[#13a4ec] animate-spin" />
    </div>
  );
}

function VideoPlayerInternal({ src, blur, poster }: { src: string; blur: boolean; poster: string }) {
  return (
    <MediaPlayer
      src={src}
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
      playsInline
      preload="metadata"
      dir='ltr'
      load="visible" 
      posterLoad="visible"
    >
      <Poster src={poster} className="vds-poster" />
      <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
      <MediaProvider />
    </MediaPlayer>
  );
}

export function VideoPlayer({ src, blur = false, poster = '' }: { src: string; blur?: boolean; poster?: string }) {
  return (
    <Suspense fallback={<VideoPlayerFallback />}>
      <VideoPlayerInternal src={src} blur={blur} poster={poster} />
    </Suspense>
  );
}