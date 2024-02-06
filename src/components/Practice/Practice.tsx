"use client";
import React, { useEffect, useState } from "react";

function Practice() {
  const text = "The quick brown fox jumps over the lazy dog";
  const [input, setInput] = useState("");



  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace") {
        setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
      } else {
        setInput((prevInput) => prevInput + event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-[80vh] w-screen">
      <h1 className="text-gray-500 text-4xl">
        {text.split("").map((char, index) => {
          let color;
          if (input[index] !== undefined) {
            color = char === input[index] ? "text-white" : "text-red-700";
          } else {
            color = "text-gray-400";
          }
          return (
            <span key={index} className={color}>
              {char}
            </span>
          );
        })}
      </h1>

    </div>
  );
}

export default Practice;