import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Image as ImageIcon, Wand2, Key } from 'lucide-react';

interface ImageGeneratorProps {
  onImageGenerated: (type: 'hero' | 'service', index: number | null, base64: string) => void;
}

const PROMPTS = {
  hero: {
    title: "Hero Image",
    prompt: "A cinematic, photorealistic close-up shot of a warm and compassionate moment between a gentle female caregiver (30s, wearing professional but soft attire in warm neutral tones) and a happy elderly woman (80s). The caregiver is gently resting a hand on the senior's shoulder while they share a genuine, joyful laugh, looking at a family photo album. Lighting: The room is illuminated by soft, golden late-afternoon sunlight streaming through sheer curtains, creating a halo effect. Colors: The scene is dominated by soft creams, warm stone greys, and a specific accent of terracotta orange in a throw blanket or pillow to match the brand color #c86f56. Depth: Shallow depth of field (f/1.8) blurring a cozy, tidy living room background to focus entirely on the emotional connection and trust. High resolution, 4k, emotive.",
    aspectRatio: "1:1"
  },
  services: [
    {
      title: "Personal Care",
      prompt: "A dignified and gentle close-up photograph of a caregiver's hands helping an elderly gentleman button a warm beige cardigan. Focus: The image focuses on the hands to symbolize support and attention to detail, without feeling clinical. Atmosphere: Morning light, fresh and clean. Colors: Soft whites, oatmeal textures, and warm skin tones. Style: Macro photography, sharp details on the fabric and hands, soft background.",
      aspectRatio: "4:3"
    },
    {
      title: "Companionship",
      prompt: "A heartwarming lifestyle shot of a caregiver and a senior woman sitting at a rustic wooden kitchen table, arranging fresh flowers into a vase together. Action: They are engaged in conversation, smiling naturally. Props: Fresh flowers with hints of orange and amber. Tea cups on the table. Atmosphere: Homely, vibrant, and combating loneliness. Colors: Warm amber, natural greens from the stems, and soft wood tones.",
      aspectRatio: "4:3"
    },
    {
      title: "Respite Care",
      prompt: "A conceptual lifestyle shot representing peace of mind for family. An adult daughter (40s) standing in a hallway or doorway smiling and looking relaxed, while in the softly blurred background, a caregiver is attentively reading a book to her elderly father. Emotion: Relief, trust, partnership. Lighting: Bright and airy. Colors: Light stone grays, soft blues, and warm neutrals.",
      aspectRatio: "4:3"
    },
    {
      title: "24/7 Support",
      prompt: "A peaceful, cozy evening scene. An elderly person is resting comfortably in a bed with high-quality linens, while a caregiver sits quietly in a comfortable chair nearby by the light of a warm lamp, keeping watch. Mood: Safe, secure, protective, serene. Lighting: Low-light, warm lamp glow (tungsten), creating a sense of security during the night. Colors: Deep warm browns, soft golds, and shadows.",
      aspectRatio: "4:3"
    }
  ]
};

export default function ImageGenerator({ onImageGenerated }: ImageGeneratorProps) {
  const [loadingState, setLoadingState] = useState<{ type: string; index: number | null }>({ type: '', index: null });
  const [error, setError] = useState<string | null>(null);

  const changeApiKey = async () => {
    try {
      const aistudio = (window as any).aistudio;
      if (aistudio) {
        await aistudio.openSelectKey();
      }
    } catch (e) {
      console.error("Failed to open key selector", e);
    }
  };

  const generateImage = async (type: 'hero' | 'service', index: number | null, prompt: string, aspectRatio: string = "1:1") => {
    setLoadingState({ type, index });
    setError(null);

    try {
      // 1. Check/Get API Key
      const aistudio = (window as any).aistudio;
      if (aistudio && !await aistudio.hasSelectedApiKey()) {
        await aistudio.openSelectKey();
      }
      
      // 2. Initialize Client
      // Always create a new instance to grab the latest key from process.env
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // 3. Call API
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio, 
            imageSize: "1K"
          }
        },
      });

      // 4. Extract Image
      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64String = `data:image/png;base64,${part.inlineData.data}`;
          onImageGenerated(type, index, base64String);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        throw new Error("No image data found. The model may have returned text instead.");
      }

    } catch (e: any) {
      console.error(e);
      let errorMessage = e.message || "Failed to generate image. Please try again.";
      
      // Handle specific auth/model errors by prompting for key again
      if (errorMessage.includes("Requested entity was not found") || errorMessage.includes("403") || errorMessage.includes("404")) {
        errorMessage = "Access denied or model not found. Please ensure you are using a paid API Key.";
        const aistudio = (window as any).aistudio;
        if (aistudio) {
           try {
             await aistudio.openSelectKey();
           } catch(k) { console.error(k); }
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoadingState({ type: '', index: null });
    }
  };

  return (
    <div className="bg-stone-100 border-t border-stone-200 p-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Wand2 className="w-6 h-6 text-brand" />
            <h2 className="text-2xl font-bold text-stone-900 font-serif">Asset Generator</h2>
          </div>
          <button 
             onClick={changeApiKey}
             className="flex items-center gap-2 text-sm text-stone-600 hover:text-brand px-4 py-2 rounded-lg border border-stone-300 hover:border-brand bg-white transition-all shadow-sm"
          >
             <Key className="w-4 h-4" />
             Change API Key
          </button>
        </div>
        
        <p className="mb-6 text-stone-600 max-w-2xl">
          Use Gemini 3 Pro (Nano Banana Pro) to generate custom assets for the site. 
          <span className="block mt-2 text-sm bg-amber-50 text-amber-800 p-2 rounded border border-amber-200">
             Note: This requires a paid API key from a Google Cloud Project with the API enabled.
          </span>
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start gap-2">
            <div className="mt-0.5 min-w-[16px]">⚠️</div>
            <div>{error}</div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hero Generator */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-bold text-lg mb-4 text-stone-800 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> Hero Section
            </h3>
            <p className="text-xs text-stone-500 mb-4 italic line-clamp-3">{PROMPTS.hero.prompt}</p>
            <button
              onClick={() => generateImage('hero', null, PROMPTS.hero.prompt, PROMPTS.hero.aspectRatio)}
              disabled={!!loadingState.type}
              className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition-colors disabled:opacity-50"
            >
              {loadingState.type === 'hero' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Generating...
                </>
              ) : (
                'Generate Hero Image'
              )}
            </button>
          </div>

          {/* Services Generator */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
             <h3 className="font-bold text-lg mb-4 text-stone-800 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> Service Icons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROMPTS.services.map((service, idx) => (
                <div key={idx} className="p-3 border border-stone-100 rounded-lg bg-stone-50">
                  <span className="text-sm font-medium text-stone-700 block mb-2">{service.title}</span>
                  <button
                    onClick={() => generateImage('service', idx, service.prompt, service.aspectRatio)}
                    disabled={!!loadingState.type}
                    className="w-full text-xs flex items-center justify-center gap-1 bg-white border border-stone-300 text-stone-700 py-2 rounded hover:border-brand hover:text-brand transition-colors disabled:opacity-50"
                  >
                     {loadingState.type === 'service' && loadingState.index === idx ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : 'Generate'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}