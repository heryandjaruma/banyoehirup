"use client";

import React, { useEffect, useState } from "react";
import FigmaScreen from "./FigmaScreen";
import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  const [isLandingVisible, setLandingVisible] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(0.15);
  const [isMuted, setIsMuted] = useState(false); // State for mute
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleLandingClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setLandingVisible(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolumeLevel(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel;
    }
  }, []);

  return (
    <div className="relative">
      <audio ref={audioRef} src="/music/UnderTheOcean.mp3" />

      {!isLandingVisible && (
        <div className="absolute top-2 right-2 opacity-20 hover:opacity-100 transition-opacity duration-300 flex items-center">
          <button onClick={toggleMute}>{isMuted ? "🔇" : "🔊"}</button>
          {/* Hide on small screens and display on larger screens */}
          <input
            type="range"
            min="0"
            max="0.3"
            step="0.01"
            value={volumeLevel.toString()}
            onChange={handleVolumeChange}
            className="w-14 ml-2 hidden md:block" // Hide on mobile, display on medium and larger screens
          />
        </div>
      )}

      {isLandingVisible && (
        <div
          className={`h-screen grid place-items-center ${fira_code.className} aspect-video`}
          onClick={handleLandingClick}
        >
          <div className="">
            <p>NASA Space Apps 2023 Challenge</p>
            <p>by BJIR</p>
            <br />
            <span className="animate-blink">&gt;</span>{" "}
            <button className="underline">Start</button>
          </div>
        </div>
      )}

      {!isLandingVisible && (
        <div>
          <FigmaScreen />
        </div>
      )}
    </div>
  );
}
