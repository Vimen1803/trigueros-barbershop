import React from 'react';

export const FunBarberCharacter = ({ size = 48, className = "" }: { size?: number, className?: string }) => {
  return (
    <div className={`${className} select-none`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="faceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <style>
          {`
            @keyframes snip-upper {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-25deg); }
            }
            @keyframes snip-lower {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(15deg); }
            }
            @keyframes head-bop {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              25% { transform: translateY(2px) rotate(-2deg); }
              75% { transform: translateY(-1px) rotate(2deg); }
            }
            @keyframes arm-sway {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(5deg); }
            }
            .scissor-blade-upper { transform-origin: 75px 55px; animation: snip-upper 0.6s infinite ease-in-out; }
            .scissor-blade-lower { transform-origin: 75px 55px; animation: snip-lower 0.6s infinite ease-in-out; }
            .character-head { transform-origin: 50px 50px; animation: head-bop 2s infinite ease-in-out; }
            .comb-arm { transform-origin: 20px 70px; animation: arm-sway 3s infinite ease-in-out; }
          `}
        </style>

        {/* Body/Shoulders */}
        <path d="M20 90 Q 50 100 80 90 L 80 100 L 20 100 Z" fill="#1F2937" />

        {/* Head Group */}
        <g className="character-head">
          {/* Face Shape */}
          <rect x="30" y="30" width="40" height="45" rx="15" fill="url(#faceGradient)" />
          
          {/* Beard */}
          <path d="M30 60 Q 50 85 70 60 L 70 65 Q 50 95 30 65 Z" fill="#111827" />
          
          {/* Mouth (Smile) */}
          <path d="M42 68 Q 50 73 58 68" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />

          {/* Sunglasses */}
          <g transform="translate(0, 2)">
            <rect x="32" y="42" width="16" height="10" rx="2" fill="#111827" />
            <rect x="52" y="42" width="16" height="10" rx="2" fill="#111827" />
            <line x1="48" y1="45" x2="52" y2="45" stroke="#111827" strokeWidth="2" />
            {/* Glint on glasses */}
            <path d="M34 44 L 40 50" stroke="white" strokeWidth="1" opacity="0.3" />
            <path d="M54 44 L 60 50" stroke="white" strokeWidth="1" opacity="0.3" />
          </g>

          {/* Hair (Pompadour) */}
          <path d="M28 35 C 25 10, 75 10, 72 35 C 72 35, 75 25, 80 35 L 80 45 L 20 45 L 20 35 C 25 25, 28 35, 28 35" fill="#111827" />
        </g>

        {/* Left Hand holding Comb */}
        <g className="comb-arm">
           <rect x="10" y="50" width="10" height="30" rx="2" fill="#FCD34D" transform="rotate(-15 15 65)" /> {/* Arm */}
           <circle cx="15" cy="45" r="6" fill="#FCD34D" /> {/* Hand */}
           {/* Comb */}
           <g transform="translate(8, 30) rotate(-20)">
             <rect x="0" y="0" width="20" height="6" fill="#374151" />
             <path d="M2 6 V 12 M 5 6 V 12 M 8 6 V 12 M 11 6 V 12 M 14 6 V 12 M 17 6 V 12" stroke="#374151" strokeWidth="1" />
           </g>
        </g>

        {/* Right Hand holding Scissors */}
        <g transform="translate(10, 0)">
           <rect x="80" y="60" width="10" height="30" rx="2" fill="#FCD34D" transform="rotate(15 85 75)" /> {/* Arm */}
           <circle cx="85" cy="55" r="6" fill="#FCD34D" /> {/* Hand */}
           
           {/* Scissors */}
           <g transform="translate(85, 55) rotate(-10)">
              <g className="scissor-blade-upper">
                 <path d="M0 0 L 20 -15" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
                 <circle cx="0" cy="0" r="3" stroke="#4B5563" strokeWidth="1" fill="none" />
              </g>
              <g className="scissor-blade-lower">
                 <path d="M0 0 L 20 15" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
                 <circle cx="0" cy="0" r="3" stroke="#4B5563" strokeWidth="1" fill="none" />
              </g>
           </g>
        </g>

      </svg>
    </div>
  );
};
