import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ImageGenerator from './components/ImageGenerator';

export type GeneratedImages = {
  hero: string | null;
  services: (string | null)[];
};

export default function App() {
  const [images, setImages] = useState<GeneratedImages>({
    hero: null,
    services: [null, null, null, null]
  });

  const handleImageGenerated = (type: 'hero' | 'service', index: number | null, base64: string) => {
    setImages(prev => {
      if (type === 'hero') {
        return { ...prev, hero: base64 };
      } else if (type === 'service' && index !== null) {
        const newServices = [...prev.services];
        newServices[index] = base64;
        return { ...prev, services: newServices };
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <LandingPage images={images} />
      <ImageGenerator onImageGenerated={handleImageGenerated} />
    </div>
  );
}