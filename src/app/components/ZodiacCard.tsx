// ZodiacCard.js
import Image from "next/image";
import { Astloch } from "next/font/google";
import React from "react";

export interface ZodiacCardProps {
  starSign: string;
  zodiacSign: string;
}

const astloch = Astloch({
  subsets: ["latin"],
  weight: "700",
});

export const ZodiacCard = (zodiacSignProps: ZodiacCardProps) => {
  const { starSign, zodiacSign } = zodiacSignProps;
  return (
    <div className="w-32 h-32 max-w-xs bg-white dark:bg-gradient-to-b from-slate-800 to-[var(--bluepurple)] opacity-90 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className={astloch.className}>
        <div className="p-2 text-center">
          <p className="text-lg font-semibold">{starSign}</p>
        </div>

        <div className="flex justify-center">
          <Image
            src={`/${zodiacSign.toLowerCase()}.png`}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <div className="p-1 text-center">
          <p className="text-s font-medium">{zodiacSign}</p>
        </div>
      </div>
    </div>
  );
};
