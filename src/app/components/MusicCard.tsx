"use client";
import React from "react";

export default function SpotifyCard() {
  return (
    <div className="w-full mx-auto shadow-xl rounded-xl overflow-hidden">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/7BF14ip3pzySwWJ5ZUi67T?utm_source=generator"
        width="100%"
        height="152"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl"
      ></iframe>
    </div>
  );
}
