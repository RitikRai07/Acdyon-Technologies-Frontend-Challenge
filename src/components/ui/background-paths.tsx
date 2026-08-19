"use client";

import { motion } from "motion/react";
import { memo, useMemo } from "react";

interface Point {
  x: number;
  y: number;
}

interface PathData {
  id: string;
  d: string;
  opacity: number;
  width: number;
  duration: number;
  delay: number;
}

// Path generation function
function generateAestheticPath(
  index: number,
  position: number,
  type: "primary" | "secondary" | "accent"
): string {
  const baseAmplitude =
    type === "primary" ? 150 : type === "secondary" ? 100 : 60;
  const phase = index * 0.2;
  const points: Point[] = [];
  const segments = type === "primary" ? 10 : type === "secondary" ? 8 : 6;

  const startX = 2400;
  const startY = 800;
  const endX = -2400;
  const endY = -800 + index * 25;

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments;
    const eased = 1 - (1 - progress) ** 2;

    const baseX = startX + (endX - startX) * eased;
    const baseY = startY + (endY - startY) * eased;

    const amplitudeFactor = 1 - eased * 0.3;
    const wave1 =
      Math.sin(progress * Math.PI * 3 + phase) *
      (baseAmplitude * 0.7 * amplitudeFactor);
    const wave2 =
      Math.cos(progress * Math.PI * 4 + phase) *
      (baseAmplitude * 0.3 * amplitudeFactor);
    const wave3 =
      Math.sin(progress * Math.PI * 2 + phase) *
      (baseAmplitude * 0.2 * amplitudeFactor);

    points.push({
      x: baseX * position,
      y: baseY + wave1 + wave2 + wave3,
    });
  }

  const pathCommands = points.map((point: Point, i: number) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prevPoint = points[i - 1];
    const tension = 0.4;
    const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension;
    const cp1y = prevPoint.y;
    const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension);
    const cp2y = point.y;
    return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  });

  return pathCommands.join(" ");
}

const generateUniqueId = (prefix: string): string =>
  `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

// Memoized FloatingPaths component
export const FloatingPaths = memo(function FloatingPaths({
  position,
}: {
  position: number;
}) {
  const paths: PathData[] = useMemo(() => {
    const generated: PathData[] = [];

    // Primary flowing paths
    for (let i = 0; i < 12; i++) {
      generated.push({
        id: generateUniqueId(`primary-${position}-${i}`),
        d: generateAestheticPath(i, position, "primary"),
        opacity: 0.15 + (i % 4) * 0.05,
        width: 1.5 + (i % 3) * 0.5,
        duration: 18 + i * 1.5,
        delay: i * 0.6,
      });
    }

    // Secondary smooth paths
    for (let i = 0; i < 12; i++) {
      generated.push({
        id: generateUniqueId(`secondary-${position}-${i}`),
        d: generateAestheticPath(i, position, "secondary"),
        opacity: 0.1 + (i % 3) * 0.04,
        width: 1 + (i % 2) * 0.4,
        duration: 22 + i * 1.2,
        delay: i * 0.8,
      });
    }

    // Accent fine paths
    for (let i = 0; i < 10; i++) {
      generated.push({
        id: generateUniqueId(`accent-${position}-${i}`),
        d: generateAestheticPath(i, position, "accent"),
        opacity: 0.08 + (i % 3) * 0.03,
        width: 0.8 + (i % 2) * 0.3,
        duration: 26 + i * 1.8,
        delay: i * 1.1,
      });
    }

    return generated;
  }, [position]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full text-[#2563eb] dark:text-[#3b82f6] opacity-40 dark:opacity-30"
        viewBox="-2400 -800 4800 1600"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, pathOffset: 0 }}
            animate={{
              pathOffset: [0, 1],
              opacity: [path.opacity * 0.4, path.opacity, path.opacity * 0.4],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
});

export function BackgroundPaths({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      {children}
    </div>
  );
}

export default BackgroundPaths;
