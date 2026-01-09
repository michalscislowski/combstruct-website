"use client";

import { useState } from "react";

export default function CombBeamDiagram() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-white cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Interactive diagram of Combstruct comb-beam wall system. Hover to see construction layers."
    >
      {/* Hover instruction */}
      <div
        className={`absolute top-4 left-4 text-xs font-medium text-muted transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        Hover to explore layers
      </div>

      {/* SVG Isometric Wall Diagram */}
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[400px] max-h-[300px]"
        style={{ overflow: "visible" }}
      >
        {/* Definitions for gradients and shadows */}
        <defs>
          <linearGradient id="woodGrain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="50%" stopColor="#C49A6C" />
            <stop offset="100%" stopColor="#B8956A" />
          </linearGradient>
          <linearGradient id="insulationGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5E6A3" />
            <stop offset="100%" stopColor="#EDD98B" />
          </linearGradient>
          <linearGradient id="claddingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="100%" stopColor="#2D3748" />
          </linearGradient>
          <linearGradient id="interiorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F7FAFC" />
            <stop offset="100%" stopColor="#EDF2F7" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Layer 5: Exterior Cladding (front-most when expanded) */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "translate(-60px, -40px)" : "translate(0, 0)",
          }}
          filter="url(#shadow)"
        >
          {/* Isometric cladding panel */}
          <polygon
            points="80,80 200,20 200,180 80,240"
            fill="url(#claddingGrad)"
            stroke="#1A202C"
            strokeWidth="1"
          />
          {/* Cladding lines (horizontal boards) */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line
              key={`clad-${i}`}
              x1="80"
              y1={100 + i * 20}
              x2="200"
              y2={40 + i * 20}
              stroke="#1A202C"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
          {/* Label */}
          <text
            x="60"
            y="160"
            fontSize="10"
            fill="#2D3748"
            fontWeight="500"
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Cladding
          </text>
        </g>

        {/* Layer 4: Battens / Air Gap */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "translate(-30px, -20px)" : "translate(0, 0)",
          }}
          filter="url(#shadow)"
        >
          {/* Vertical battens */}
          {[0, 1, 2].map((i) => (
            <polygon
              key={`batten-${i}`}
              points={`${100 + i * 40},${70 - i * 12} ${110 + i * 40},${66 - i * 12} ${110 + i * 40},${226 - i * 12} ${100 + i * 40},${230 - i * 12}`}
              fill="#8B7355"
              stroke="#5D4E37"
              strokeWidth="0.5"
            />
          ))}
          {/* Label */}
          <text
            x="85"
            y="140"
            fontSize="10"
            fill="#5D4E37"
            fontWeight="500"
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Battens
          </text>
        </g>

        {/* Layer 3: Insulation */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "translate(0, 0)" : "translate(0, 0)",
          }}
          filter="url(#shadow)"
        >
          <polygon
            points="120,60 240,0 240,160 120,220"
            fill="url(#insulationGrad)"
            stroke="#D4A017"
            strokeWidth="1"
          />
          {/* Insulation texture pattern */}
          {[0, 1, 2, 3, 4, 5].map((row) =>
            [0, 1, 2].map((col) => (
              <circle
                key={`ins-${row}-${col}`}
                cx={140 + col * 30 + (row % 2) * 15}
                cy={80 + row * 25 - col * 10}
                r="8"
                fill="none"
                stroke="#D4A017"
                strokeWidth="0.5"
                opacity="0.4"
              />
            ))
          )}
          {/* Label */}
          <text
            x="245"
            y="80"
            fontSize="10"
            fill="#B7950B"
            fontWeight="500"
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Insulation
          </text>
        </g>

        {/* Layer 2: Comb-Beam Structure (the key element!) */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "translate(30px, 20px)" : "translate(0, 0)",
          }}
          filter="url(#shadow)"
        >
          {/* Main beam frame */}
          <polygon
            points="160,40 280,-20 280,140 160,200"
            fill="url(#woodGrain)"
            stroke="#8B6914"
            strokeWidth="1.5"
          />
          {/* Comb teeth pattern - the signature element */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={`comb-${i}`}>
              {/* Horizontal comb tooth */}
              <polygon
                points={`${165},${60 + i * 25} ${220},${35 + i * 25} ${220},${45 + i * 25} ${165},${70 + i * 25}`}
                fill="#C49A6C"
                stroke="#8B6914"
                strokeWidth="0.5"
              />
              {/* Vertical connector */}
              <rect
                x={218}
                y={35 + i * 25 - i * 1}
                width="4"
                height="12"
                fill="#B8956A"
                transform={`skewY(-30)`}
              />
            </g>
          ))}
          {/* Comb-beam label */}
          <text
            x="285"
            y="60"
            fontSize="10"
            fill="#8B6914"
            fontWeight="600"
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Comb-Beam
          </text>
          <text
            x="285"
            y="72"
            fontSize="9"
            fill="#8B6914"
            fontWeight="400"
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Structure
          </text>
        </g>

        {/* Layer 1: Interior Finish (back-most when expanded) */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "translate(60px, 40px)" : "translate(0, 0)",
          }}
          filter="url(#shadow)"
        >
          <polygon
            points="200,20 320,-40 320,120 200,180"
            fill="url(#interiorGrad)"
            stroke="#CBD5E0"
            strokeWidth="1"
          />
          {/* Interior panel lines */}
          <line x1="200" y1="100" x2="320" y2="40" stroke="#E2E8F0" strokeWidth="1" />
          {/* Label */}
          <text
            x="325"
            y="40"
            fontSize="10"
            fill="#718096"
            fontWeight="500"
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Interior
          </text>
          <text
            x="325"
            y="52"
            fontSize="9"
            fill="#718096"
            fontWeight="400"
            className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            Finish
          </text>
        </g>

        {/* Title when not hovered */}
        <text
          x="200"
          y="280"
          textAnchor="middle"
          fontSize="12"
          fill="#4A5568"
          fontWeight="500"
          className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
        >
          Comb-Beam Wall System
        </text>
      </svg>
    </div>
  );
}
