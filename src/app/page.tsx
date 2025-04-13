"use client";
import Link from "next/link";
import * as React from "react";
import { Calendar } from "@cloudscape-design/components";
import "./globals.css";
import MusicCard from "./components/MusicCard";
import { ZodiacCard } from "./components/ZodiacCard";
import { STAR_SIGNS, ZODIAC_SIGNS } from "./utils/constants";

export default function Home() {
  const date = new Date();
  const todayDate = date.toISOString().split("T")[0];
  const [horoscopeDate, setHoroscopeDate] = React.useState(todayDate);
  const dateText =
    horoscopeDate === todayDate
      ? `Today is ${todayDate}`
      : `Travel to ${horoscopeDate}`;

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Top Navigation */}
      <nav className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
        <Link href="/" className="text-2xl font-bold hover:opacity-80">
          Vandy Zhang.
        </Link>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <Link href="/experience" className="hover:underline">
              My Experience
            </Link>
          </li>
          <li>
            <Link href="/life" className="hover:underline">
              My Life
            </Link>
          </li>
          <li>
            <Link href="/list" className="hover:underline">
              Annual List
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start gap-12 px-8 py-12 flex-grow">
        <MusicCard />
        <div className="w-full flex flex-col items-center justify-center text-center">
          <p className="text-lg font-medium mt-10 ml-4">
            Hello 你好 안녕 こんにちは สวัสดี
          </p>
          <p className="text-lg font-medium mt-8 ml-4">
            Welcome to My Daily Horoscope
          </p>
        </div>
        <div className="max-w-3xl grid grid-cols-3 gap-4 mt-8 mx-auto">
          <ZodiacCard starSign={STAR_SIGNS.SUN} zodiacSign={ZODIAC_SIGNS.LEO} />
          <ZodiacCard
            starSign={STAR_SIGNS.MOON}
            zodiacSign={ZODIAC_SIGNS.GEMINI}
          />
          <ZodiacCard
            starSign={STAR_SIGNS.RISING}
            zodiacSign={ZODIAC_SIGNS.VIRGO}
          />
          <ZodiacCard
            starSign={STAR_SIGNS.MERCURY}
            zodiacSign={ZODIAC_SIGNS.VIRGO}
          />
          <ZodiacCard
            starSign={STAR_SIGNS.VENUS}
            zodiacSign={ZODIAC_SIGNS.CANCER}
          />
          <ZodiacCard
            starSign={STAR_SIGNS.MARS}
            zodiacSign={ZODIAC_SIGNS.SAGITTARIUS}
          />
        </div>

        <div className="w-full flex flex-col">
          <p className="text-lg font-medium mt-8 ml-4 mb-4">{dateText}</p>
          <Calendar
            onChange={({ detail }) => setHoroscopeDate(detail.value)}
            value={horoscopeDate}
          />
        </div>
      </main>

      {/* Footer (optional) */}
      <footer className="flex gap-6 items-center justify-center py-4 border-t border-gray-200">
        {/* Add footer items here if needed */}
      </footer>
    </div>
  );
}
