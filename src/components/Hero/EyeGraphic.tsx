/* Eye-themed SVG graphic — original, no stock photography */
export default function EyeGraphic() {
  return (
    <div aria-hidden="true" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "min(420px, 100%)", height: "auto" }}
        role="img"
        aria-label="Stylised eye diagnostic illustration"
      >
        {/* Outer focus rings */}
        <circle cx="240" cy="240" r="220" stroke="var(--brand-cyan-soft)" strokeWidth="1" strokeDasharray="8 6" opacity="0.6" />
        <circle cx="240" cy="240" r="190" stroke="var(--brand-cyan)" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.35" />

        {/* Eyelid curve top */}
        <path
          d="M 60 240 Q 150 100 240 96 Q 330 100 420 240"
          stroke="var(--brand-primary)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Eyelid curve bottom */}
        <path
          d="M 60 240 Q 150 370 240 376 Q 330 370 420 240"
          stroke="var(--brand-primary)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sclera fill */}
        <path
          d="M 60 240 Q 150 100 240 96 Q 330 100 420 240 Q 330 370 240 376 Q 150 370 60 240 Z"
          fill="var(--background-section)"
        />

        {/* Iris */}
        <circle cx="240" cy="240" r="82" fill="var(--brand-primary)" opacity="0.15" />
        <circle cx="240" cy="240" r="82" stroke="var(--brand-primary)" strokeWidth="3" fill="none" />

        {/* Iris texture lines */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1={240 + 50 * Math.cos((deg * Math.PI) / 180)}
            y1={240 + 50 * Math.sin((deg * Math.PI) / 180)}
            x2={240 + 80 * Math.cos((deg * Math.PI) / 180)}
            y2={240 + 80 * Math.sin((deg * Math.PI) / 180)}
            stroke="var(--brand-primary)"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}

        {/* Pupil */}
        <circle cx="240" cy="240" r="36" fill="var(--brand-primary-dark)" />

        {/* Corneal reflex highlight */}
        <circle cx="222" cy="222" r="11" fill="white" opacity="0.85" />
        <circle cx="259" cy="254" r="5" fill="white" opacity="0.4" />

        {/* Diagnostic crosshair */}
        <line x1="240" y1="152" x2="240" y2="172" stroke="var(--brand-cyan)" strokeWidth="2" strokeLinecap="round" />
        <line x1="240" y1="308" x2="240" y2="328" stroke="var(--brand-cyan)" strokeWidth="2" strokeLinecap="round" />
        <line x1="152" y1="240" x2="172" y2="240" stroke="var(--brand-cyan)" strokeWidth="2" strokeLinecap="round" />
        <line x1="308" y1="240" x2="328" y2="240" stroke="var(--brand-cyan)" strokeWidth="2" strokeLinecap="round" />

        {/* Corner brackets — top-left */}
        <path d="M 60 240 L 60 240" stroke="none" />
        <path d="M 100 160 L 100 140 L 120 140" stroke="var(--warning)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* top-right */}
        <path d="M 360 140 L 380 140 L 380 160" stroke="var(--warning)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* bottom-left */}
        <path d="M 100 320 L 100 340 L 120 340" stroke="var(--warning)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* bottom-right */}
        <path d="M 360 340 L 380 340 L 380 320" stroke="var(--warning)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Annotation pill — "Focus confirmed" */}
        <rect x="290" y="170" width="140" height="36" rx="18" fill="var(--brand-primary)" />
        <text x="360" y="193" textAnchor="middle" fill="white" fontSize="12" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
          Focus confirmed
        </text>

        {/* Annotation dot */}
        <line x1="286" y1="206" x2="265" y2="232" stroke="var(--brand-primary)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="262" cy="235" r="4" fill="var(--brand-cyan)" />

        {/* Animated pulse ring — CSS handles this */}
        <circle
          cx="240"
          cy="240"
          r="108"
          stroke="var(--brand-cyan)"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          className="pulse-ring"
        />

        <style>{`
          .pulse-ring {
            transform-origin: 240px 240px;
            animation: pulseRing 2.8s ease-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .pulse-ring { animation: none; }
          }
          @keyframes pulseRing {
            0%  { opacity: 0.5; transform: scale(0.92); }
            60% { opacity: 0;   transform: scale(1.12); }
            100%{ opacity: 0;   transform: scale(1.12); }
          }
        `}</style>
      </svg>
    </div>
  );
}
