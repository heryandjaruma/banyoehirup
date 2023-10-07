"use client";
import React, { useEffect, useState } from "react";
import { Fira_Code } from "next/font/google";
import FigmaScreen from "./FigmaScreen";

const fira_code = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  const [isLandingVisible, setLandingVisible] = useState(true);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleLandingClick = () => {
    // Play the audio
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.15;
    }

    // Hide the landing
    setLandingVisible(false);
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15; // Set default volume to 10%
    }
  }, []); // The empty dependency array ensures this runs once after the component mounts

  return (
    <div className="relative">
      <audio ref={audioRef} src="/music/UnderTheOcean.mp3" />

      {!isLandingVisible && (
        <div className="absolute top-2 right-2 opacity-10 hover:opacity-100 transition-opacity duration-300">
          <input
            type="range"
            min="0"
            max="0.3"
            step="0.005"
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            defaultValue="0.15"
            className="w-14"
          />
        </div>
      )}

      {isLandingVisible && (
        <div
          className={`w-screen h-screen grid place-items-center ${fira_code.className}`}
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
