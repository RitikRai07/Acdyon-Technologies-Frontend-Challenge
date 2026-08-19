"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

function Counter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function AnimatedStat() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-foreground text-white rounded-3xl p-12 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tighter font-semibold text-white">
                The math is simple
              </h2>
              <p className="text-white/60 text-base mt-4 max-w-[45ch]">
                A 15-minute standup with 8 people costs 2 hours of collective time. Every single day.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 md:justify-end">
              <div className="text-center sm:text-left">
                <div className="font-mono text-5xl md:text-6xl font-bold text-white flex items-baseline justify-center sm:justify-start">
                  <Counter target={23} />
                  <span className="text-3xl md:text-4xl ml-2">min</span>
                </div>
                <p className="text-sm text-white/50 mt-2">
                  Average standup meeting
                </p>
              </div>

              <div className="text-white/30 text-2xl font-mono italic">
                vs
              </div>

              <div className="text-center sm:text-left">
                <div className="font-mono text-5xl md:text-6xl font-bold text-white flex items-baseline justify-center sm:justify-start">
                  <Counter target={90} />
                  <span className="text-3xl md:text-4xl ml-2">sec</span>
                </div>
                <p className="text-sm text-white/50 mt-2">
                  Average Drift update
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
