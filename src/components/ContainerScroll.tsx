"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.4], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);

  return (
    <div
      ref={containerRef}
      className="h-[60rem] md:h-[75rem] flex items-center justify-center relative p-2 md:p-20"
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} translateY={translateY}>
          {children}
        </Card>
      </div>
    </div>
  );
}

export const Header = ({ titleComponent }: { titleComponent: React.ReactNode }) => {
  return (
    <motion.div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translateY,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY,
        boxShadow:
          "0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className="max-w-5xl -mt-4 md:-mt-8 mx-auto h-[30rem] md:h-[42rem] w-full border-4 border-[#27272a] p-2 md:p-6 bg-[#18181b] rounded-[30px] shadow-2xl overflow-hidden"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#09090b]">
        {children}
      </div>
    </motion.div>
  );
};
