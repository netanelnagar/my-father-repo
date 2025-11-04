'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type GalleryImage = {
    name: string;
    classes: string;
    src: string;
    alt: string;
};

type ResponsiveGalleryProps = {
    images: GalleryImage[];
};

export function ResponsiveGallery({ images }: ResponsiveGalleryProps) {

    const initialState = useMemo(
        () => Object.fromEntries(images.map(({ name }) => [name, false])),
        [images],
    );

    const [loaded, setLoaded] = useState<Record<string, boolean>>(initialState);

    useEffect(() => {
        setLoaded(Object.fromEntries(images.map(({ name }) => [name, false])));
    }, [images]);

    return (
        <div className={`w-full grid grid-cols-1 gap-2 sm:grid-cols-3 sm:aspect-[3/2] rounded-lg overflow-hidden `}>
            {images.map(({ name, classes, src, alt }) => {
                return (
                    <div key={name} className={classes}>
                        {!loaded[name] && (
                            <div className="animate-pulse absolute inset-0 rounded-[inherit] bg-[#d6dde1]" />
                        )}
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            priority={name === 'primary'}
                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                            onLoad={(event) => {
                                setLoaded((prev) => ({ ...prev, [name]: true }));
                                event.currentTarget.classList.add('opacity-100');
                            }}
                            className="transition-opacity duration-700 opacity-0 object-cover"
                        />
                    </div>
                );
            })}
        </div>
    );
}