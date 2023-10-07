"use client";

import React, { useState, useEffect } from "react";
import About from "./About";
import Instruction from "./Instruction";
import Resources from "./Resources";

interface ModalProps {
  isShown: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isShown, onClose }) => {
  const [isVisible, setIsVisible] = useState(isShown);
  const [activeTab, setActiveTab] = useState<
    "instruction" | "resources" | "about"
  >("instruction");

  useEffect(() => {
    if (isShown) {
      setIsVisible(true);
    }
  }, [isShown]);

  const handleTransitionEnd = () => {
    if (!isShown) {
      setIsVisible(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "instruction":
        return <Instruction />;
      case "resources":
        return <Resources />;
      case "about":
        return <About />;
      default:
        return null;
    }
  };

  const tabButtonStyle =
    "mr-4 px-4 py-2 rounded-t-lg hover:bg-slate-700 transition-colors duration-200 text-sm";
  const activeTabButtonStyle = "bg-slate-600";

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity ease-in-out duration-300 ${
        isShown
          ? "bg-black bg-opacity-50 opacity-100"
          : "bg-black bg-opacity-0 opacity-0"
      }`}
      onClick={onClose}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className="p-6 rounded-lg shadow-lg relative bg-slate-900 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          x
        </button>

        {/* Tabs */}
        <div className="flex mb-4 border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab("instruction")}
            className={`${tabButtonStyle} ${
              activeTab === "instruction" ? activeTabButtonStyle : ""
            }`}
          >
            Instruction
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`${tabButtonStyle} ${
              activeTab === "resources" ? activeTabButtonStyle : ""
            }`}
          >
            Resources & Credit
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`${tabButtonStyle} ${
              activeTab === "about" ? activeTabButtonStyle : ""
            }`}
          >
            About
          </button>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Modal;
