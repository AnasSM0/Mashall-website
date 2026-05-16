import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BookOpen, Home, Briefcase, Microscope, Handshake } from "lucide-react";

import livelihoodsImg from "@/assets/images/livelihoods.png";

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
    title: "Capacity Building",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    description: "Empowering local stakeholders to become agents of change through comprehensive training programs. We believe sustainable mental health systems are built from within communities, not imposed from outside.",
    color: "bg-primary/5 border-primary/20",
    iconBg: "bg-primary/10"
  },
  {
    title: "Community Mental Health",
    icon: <Home className="w-8 h-8 text-[#9BCB63]" />,
    description: "Moving care from institutions to the heart of the community for accessible, sustainable, and dignified mental health support.",
    color: "bg-[#9BCB63]/5 border-[#9BCB63]/20",
    iconBg: "bg-[#9BCB63]/10"
  },
  {
    title: "Livelihoods & Socio-Economic Empowerment",
    icon: <Briefcase className="w-8 h-8 text-[#EE6C2D]" />,
    description: "Breaking the cycle where poverty and mental illness intersect through economic opportunity, skills training, and sustainable income generation.",
    color: "bg-[#EE6C2D]/5 border-[#EE6C2D]/20",
    iconBg: "bg-[#EE6C2D]/10"
  },
  {
    title: "Research & Policy Advocacy",
    icon: <Microscope className="w-8 h-8 text-[#DE4B4B]" />,
    description: "Building an evidence base to influence national priorities and create sustainable, government-supported mental health systems.",
    color: "bg-[#DE4B4B]/5 border-[#DE4B4B]/20",
    iconBg: "bg-[#DE4B4B]/10"
  },
  {
    title: "Collaborations & Partnerships",
    icon: <Handshake className="w-8 h-8 text-[#E9A52A]" />,
    description: "Ensuring long-term sustainability through strategic partnerships across government, corporate, academic, and civil society sectors.",
    color: "bg-[#E9A52A]/5 border-[#E9A52A]/20",
    iconBg: "bg-[#E9A52A]/10"
  }
];

export default function OurModel() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
           <img src={livelihoodsImg} alt="Background pattern" className="w-full h-full object-cover mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.h1 variants={FADE_IN} className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              Our <span className="text-primary">Model</span>
            </motion.h1>
            <motion.p variants={FADE_IN} className="text-xl text-muted-foreground font-light leading-relaxed">
              We believe in a holistic approach to mental health. Our five pillars work together to create lasting, systemic change in communities across Pakistan.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PILLARS.map((pillar, idx) => (
              <motion.div 
                key={idx}
                variants={FADE_IN}
                className={`rounded-3xl p-8 border ${pillar.color} hover-elevate transition-all duration-300 flex flex-col h-full`}
              >
                <div className={`w-16 h-16 rounded-2xl ${pillar.iconBg} flex items-center justify-center mb-6`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
