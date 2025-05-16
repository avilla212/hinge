'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TalkingImageProps {
  src: string;
  alt: string;
  quote: string;
}

export default function TalkingImage({ src, alt, quote }: TalkingImageProps) {
  const [showQuote, setShowQuote] = useState(false);

  const toggleQuote = () => setShowQuote(!showQuote);

  return (
    <div
      onClick={toggleQuote}
      style={{
        width: '100%',
        maxWidth: '600px',
        margin: '2rem auto',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      {!showQuote ? (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 2' }}>
          <Image
            src={src}
            alt={alt}
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
            }}
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
      ) : (
        <div
          style={{
            padding: '2rem',
            borderRadius: '12px',
            background: '#f0f8ff',
            border: '1px solid #ccc',
            fontStyle: 'italic',
            color: '#333',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          “{quote}”
        </div>
      )}
    </div>
  );
}
