import React from "react";
import cardImage from "./card.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const DSAProgress = () => {
  const platforms = [
    { name: "LeetCode", solved: 350, bg: "bg-yellow-500" },
    { name: "Codeforces", solved: 50, bg: "bg-blue-500" },
    { name: "GeeksforGeeks", solved: 200, bg: "bg-green-500" },
  ];

  return (
    <section id="dsa" className="min-h-screen py-20 px-6 bg-black-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        
        {/* Left: DSA Cards */}
        <RevealOnScroll>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">
            My DSA Progress
          </h2>
          <div className="flex flex-wrap gap-6">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className={`w-64 p-6 rounded-2xl shadow-xl ${platform.bg} text-white transform hover:-translate-y-2 transition`}
              >
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-xl">Problems Solved: {platform.solved}</p>
                <div className="mt-4 bg-white/30 h-3 rounded-full">
                  <div
                    className="h-3 rounded-full bg-white"
                    style={{ width: `${Math.min(platform.solved, 300) / 3}%` }}
                  ></div>
                </div>
                {platform.name === "LeetCode" && (
                  <div className="mt-4 flex items-center justify-center text-white/90">
                    <span className="rising-arrow text-2xl">↑</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </RevealOnScroll>

        {/* Right: Profile Image */}
    <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={cardImage}
            alt="Profile"
            className="w-[500px] h-[500px] md:w-2/3 float"
          />
        </div>

      </div>
    </section>
  );
};
