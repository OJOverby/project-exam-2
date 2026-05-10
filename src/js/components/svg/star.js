import React from "react";

const STAR_PATH =
  "M256 24l72.9 147.7 163.1 23.7-118 115 27.9 162.5L256 396.2 110.1 472.9 138 310.4 20 195.4l163.1-23.7L256 24z";

export function StarSVG({ fillPercent = 0, size = 20 }) {
  const generatedId = React.useId?.();
  const fallbackId = React.useMemo(
    () => `star-${Math.random().toString(36).slice(2)}`,
    [],
  );

  const id = generatedId || fallbackId;
  const clamped = Math.max(0, Math.min(100, fillPercent));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <rect x="0" y="0" width={`${clamped}%`} height="100%" />
        </clipPath>
      </defs>

      <path
        d={STAR_PATH}
        fill="#e5e7eb"
        stroke="#cbd5e1"
        strokeWidth="20"
        strokeLinejoin="round"
      />

      <path
        d={STAR_PATH}
        clipPath={`url(#${id}-clip)`}
        fill="#f59e0b"
        stroke="#f59e0b"
        strokeWidth="20"
        strokeLinejoin="round"
      />
    </svg>
  );
}