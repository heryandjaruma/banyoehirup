"use client";
import React, { useState } from "react";
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
      audioRef.current.volume = 0.1;
    }

    // Hide the landing
    setLandingVisible(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/underwater_ambience_cut.mp3" />

      {isLandingVisible && (
        <div
          className={`w-screen h-screen grid place-items-center ${fira_code.className}`}
          onClick={handleLandingClick}
        >
          <div className="">
            <p>Nasa Space Apps 2023 Challenge</p>
            <p>by BJIR</p>
            <br />
            <button className="underline">Start</button>
          </div>
        </div>
      )}

      {!isLandingVisible && (
        <div>
          <FigmaScreen />
        </div>
      )}
    </>
  );
}
