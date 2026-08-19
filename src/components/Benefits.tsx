"use client";

import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};


export default function Benefits() {
  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
            Why teams switch
          </p>
          <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold">
            Meetings are expensive. Updates are not.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 - Full width */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 bg-surface rounded-2xl border border-border p-8 hover:border-accent/20 transition-colors flex flex-col md:flex-row gap-8 md:items-center"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                No more &quot;Can everyone see my screen?&quot;
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Standups happen in real-time, forcing everyone into the same
                15-minute window. Drift lets each person record when they are
                sharpest and watch when they have a gap.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-3 bg-foreground/5 p-6 rounded-xl border border-border/50">
              <div className="flex justify-between items-center bg-surface p-3 rounded-lg border border-border text-sm shadow-sm">
                <span className="font-medium">SF</span>
                <span className="font-mono text-text-secondary">9:00 AM</span>
              </div>
              <div className="flex justify-between items-center bg-surface p-3 rounded-lg border border-border text-sm shadow-sm opacity-80">
                <span className="font-medium">London</span>
                <span className="font-mono text-text-secondary">5:00 PM</span>
              </div>
              <div className="flex justify-between items-center bg-surface p-3 rounded-lg border border-border text-sm shadow-sm opacity-50">
                <span className="font-medium">Tokyo</span>
                <span className="font-mono text-text-secondary">1:00 AM</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-surface rounded-2xl border border-border p-8 hover:border-accent/20 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">
              Everything stays searchable
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Auto-transcribed updates you can search by keyword, person, or
              date. Never ask &quot;what did we decide last Tuesday&quot; again.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-surface rounded-2xl border border-border p-8 hover:border-accent/20 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">
              Works across time zones
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Your Tokyo and London teams stop waking up early or staying late
              for a meeting that could have been a recording.
            </p>
          </motion.div>

          {/* Card 4 - Full width */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 bg-surface rounded-2xl border border-border p-8 hover:border-accent/20 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">
              Actually takes 90 seconds
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-[60ch]">
              The timer keeps updates focused. No tangents, no screen-sharing
              rabbit holes, no &quot;one more thing&quot; that adds ten minutes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
