"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Calendar from "@cloudscape-design/components/calendar";
import { Badge, Box } from "@cloudscape-design/components";
import "./globals.css";

export default function Home() {
  const date = new Date();
  const [horoscopeDate, setHoroscopeDate] = React.useState(
    date.toISOString().split("T")[0],
  );

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
        <div className="flex items-center">
          <Image
            src={"/profile.jpg"}
            alt={"profile photo"}
            width={160}
            height={160}
          />
          <Box margin={{ left: "l" }} padding={{ top: "xxxl", bottom: "xxxl" }}>
            <blockquote className="text-xl font-medium">
              <p>I have a dream.</p>
            </blockquote>
            <p className="text-lg font-medium mt-6 ml-4">
              — Martin Luther King Jr.
            </p>
          </Box>
        </div>

        <Box>
          <Badge color="green">{horoscopeDate}</Badge>
          <Calendar
            onChange={({ detail }) => setHoroscopeDate(detail.value)}
            value={horoscopeDate}
          />
        </Box>
      </main>

      {/* Footer (optional) */}
      <footer className="flex gap-6 items-center justify-center py-4 border-t border-gray-200">
        {/* Add footer items here if needed */}
      </footer>
    </div>
  );
}
