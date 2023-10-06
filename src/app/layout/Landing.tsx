"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Landing() {
  const [isLandingVisible, setLandingVisible] = useState(true);

  // Function to hide Landing when it's clicked
  const hideLanding = () => {
    setLandingVisible(false);
  };

  if (!isLandingVisible) {
    return null;
  }

  return (
    <div className="" onClick={hideLanding}>
      <Image
        src="/image/landing.svg"
        width={1920}
        height={1080}
        className="pointer-events-none select-none w-[100w]"
        priority
        alt="landing-image"
      />
    </div>
  );
}
