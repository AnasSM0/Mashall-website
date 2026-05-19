import { motion } from "framer-motion";
import { User, FileSearch, Brain, Wrench, Handshake } from "lucide-react";

export const LOGO_BARS = [
  { color: "#9BCB63", icon: User,       label: "Community"   },
  { color: "#EE6C2D", icon: FileSearch, label: "Research"    },
  { color: "#DE4B4B", icon: Brain,      label: "Mental Health", tall: true },
  { color: "#168A84", icon: Wrench,     label: "Capacity"    },
  { color: "#E9A52A", icon: Handshake,  label: "Partnerships" },
];

/** Thin full-width strip — place immediately inside/under a header */
export function FiveBarsStrip() {
  return (
    <div className="flex w-full h-[3px]" aria-hidden="true">
      {LOGO_BARS.map((bar) => (
        <div
          key={bar.label}
          className="flex-1 h-full"
          style={{ backgroundColor: bar.color }}
        />
      ))}
    </div>
  );
}

/** Standalone decorative accent — animated vertical bars with icons */
export function FiveBarsAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-2 ${className}`} aria-hidden="true">
      {LOGO_BARS.map((bar, i) => {
        const Icon = bar.icon;
        const heights = [56, 68, 88, 68, 56];
        const h = heights[i];
        return (
          <motion.div
            key={bar.label}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            style={{
              backgroundColor: bar.color,
              height: `${h}px`,
              transformOrigin: "bottom",
            }}
            className="w-12 rounded-t-xl flex items-center justify-center"
          >
            <Icon className="w-5 h-5 text-white/90" strokeWidth={1.8} />
          </motion.div>
        );
      })}
    </div>
  );
}

/** Card-top colored bar for pillar cards — pass the bar index (0–4) */
export function PillarBar({ index }: { index: number }) {
  const bar = LOGO_BARS[index];
  const Icon = bar.icon;
  return (
    <div
      className="flex items-center justify-center w-full h-2 rounded-t-3xl"
      style={{ backgroundColor: bar.color }}
      aria-hidden="true"
    />
  );
}
