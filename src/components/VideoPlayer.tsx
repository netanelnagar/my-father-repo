'use client';

import { Suspense } from 'react';
import { FiLoader } from 'react-icons/fi';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
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

function VideoPlayerInternal({ src, blur }: { src: string; blur: boolean }) {
  return (
    <MediaPlayer
      src={src}
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
      playsInline
      preload="metadata"
    >
        <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
      <MediaProvider />
    </MediaPlayer>
  );
}

export function VideoPlayer({ src, blur = false }: { src: string; blur?: boolean }) {
  return (
    <Suspense fallback={<VideoPlayerFallback />}>
      <VideoPlayerInternal src={src} blur={blur} />
    </Suspense>
  );
}