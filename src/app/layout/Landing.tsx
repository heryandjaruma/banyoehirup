"use client";

import React, { useEffect, useState } from "react";
import FigmaScreen from "./FigmaScreen";
import { Fira_Code } from "next/font/google";
import Modal from "../component/Modal";

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

  // for modal window
  const [isModalShown, setIsModalShown] = useState(false);
  const toggleModal = () => {
    setIsModalShown((prev) => !prev);
  };

  return (
    <div className="relative">
      <audio ref={audioRef} src="/music/UnderTheOcean.mp3" loop />

      {!isLandingVisible && (
        <div className="absolute top-2 right-2 opacity-30 hover:opacity-100 transition-opacity duration-300 flex items-center z-50">
          <button onClick={toggleMute}>{isMuted ? "🔇" : "🔊"}</button>
          {/* Hide on small screens and display on larger screens */}
          <input
            type="range"
            min="0"
            max="0.3"
            step="0.01"
            value={volumeLevel.toString()}
            onChange={handleVolumeChange}
            className="w-14 ml-2 hidden 2xl:block" // Hide on mobile, display on medium and larger screens
          />
        </div>
      )}

      {isLandingVisible && (
        <div
          className={`h-screen flex items-center justify-center ${fira_code.className} text-white`}
          onClick={handleLandingClick}
        >
          <div className="max-w-sm p-4">
            <p>NASA Space Apps 2023 Challenge</p>
            <p>by BJIR</p>
            <br />
            <p>To maximize the experience, use a desktop device</p>
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

      <Modal isShown={isModalShown} onClose={toggleModal} />

      {!isLandingVisible && (
        <div className="absolute bottom-2 right-2">
          <button
            onClick={toggleModal}
            className="rounded-full p-3 w-6 h-6 bg-white flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300"
          >
            <p>?</p>
          </button>
        </div>
      )}
    </div>
  );
}
