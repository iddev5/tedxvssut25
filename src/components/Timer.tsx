"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Timer.css"; // Import Tailwind and custom styles for Aldrich font

const targetDate = new Date("2025-11-01T00:00:00");

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  const renderDigits = (value: number) => {
    const digits = value.toString().padStart(2, "0").split("");

    return digits.map((digit, index) => (
      <motion.div
        key={index}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5 }}
        className="digit"
      >
        {digit}
      </motion.div>
    ));
  };

  return (
    <div className="timer-container font-aldrich text-white text-center">
      <div className="time-section">
        <div className="time-value">{renderDigits(timeLeft.days)}</div>
        <div className="time-label">Days</div>
      </div>
      <div className="time-section">
        <div className="time-value">{renderDigits(timeLeft.hours)}</div>
        <div className="time-label">Hours</div>
      </div>
      <div className="time-section">
        <div className="time-value">{renderDigits(timeLeft.minutes)}</div>
        <div className="time-label">Minutes</div>
      </div>
      <div className="time-section">
        <div className="time-value">{renderDigits(timeLeft.seconds)}</div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;
