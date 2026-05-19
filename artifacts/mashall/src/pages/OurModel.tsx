import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Users, FileSearch, Brain, Wrench, Handshake } from "lucide-react";
import { FiveBarsAccent } from "@/components/FiveBars";

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const PILLARS = [
  {
    title: "Community Mental Health",
    icon: Users,
    description: "Moving care from institutions to the heart of the community for accessible, sustainable, and dignified mental health support.",
    barColor: "#9BCB63",
    iconColor: "#9BCB63",
    bgClass: "bg-[#9BCB63]/5 border-[#9BCB63]/20",
    iconBgClass: "bg-[#9BCB63]/15",
  },
  {
    title: "Research & Policy Advocacy",
    icon: FileSearch,
    description: "Building an evidence base to influence national priorities and create sustainable, government-supported mental health systems.",
    barColor: "#EE6C2D",
    iconColor: "#EE6C2D",
    bgClass: "bg-[#EE6C2D]/5 border-[#EE6C2D]/20",
    iconBgClass: "bg-[#EE6C2D]/15",
  },
  {
    title: "Capacity Building",
    icon: Brain,
    description: "Empowering local stakeholders to become agents of change through comprehensive training programs. Sustainable mental health systems are built from within communities.",
    barColor: "#DE4B4B",
    iconColor: "#DE4B4B",
    bgClass: "bg-[#DE4B4B]/5 border-[#DE4B4B]/20",
    iconBgClass: "bg-[#DE4B4B]/15",
  },
  {
    title: "Livelihoods & Socio-Economic Empowerment",
    icon: Wrench,
    description: "Breaking the cycle where poverty and mental illness intersect through economic opportunity, skills training, and sustainable income generation.",
    barColor: "#168A84",
    iconColor: "#168A84",
    bgClass: "bg-primary/5 border-primary/20",
    iconBgClass: "bg-primary/15",
  },
  {
    title: "Collaborations & Partnerships",
    icon: Handshake,
    description: "Ensuring long-term sustainability through strategic partnerships across government, corporate, academic, and civil society sectors.",
    barColor: "#E9A52A",
    iconColor: "#E9A52A",
    bgClass: "bg-[#E9A52A]/5 border-[#E9A52A]/20",
    iconBgClass: "bg-[#E9A52A]/15",
  },
];

export default function OurModel() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <motion.h1 variants={FADE_IN} className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              Our <span className="text-primary">Model</span>
            </motion.h1>
            <motion.p variants={FADE_IN} className="text-xl text-muted-foreground font-light leading-relaxed mb-10">
              We believe in a holistic approach to mental health. Our five pillars work together to create lasting, systemic change in communities across Pakistan.
            </motion.p>
          </motion.div>

          {/* Five bars accent — centered, mirrors the logo */}
          <div className="flex justify-center mb-20">
            <FiveBarsAccent />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-lg border border-border/40"
          >
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={FADE_IN}
                  className="bg-card hover:bg-card/80 transition-all duration-300 group flex flex-col overflow-hidden border-b border-r border-border/30 last:border-b-0"
                  style={{ borderColor: "rgba(0,0,0,0.06)" }}
                >
                  {/* Colored top bar — the logo bar motif */}
                  <div
                    className="h-1.5 w-full shrink-0 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: pillar.barColor }}
                  />
                  <div className="p-8 flex flex-col h-full">
                    <div
                      className={`w-14 h-14 rounded-2xl ${pillar.iconBgClass} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: pillar.iconColor }}
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
