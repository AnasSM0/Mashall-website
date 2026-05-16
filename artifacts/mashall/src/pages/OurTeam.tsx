import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const TEAM = {
  board: [
    {
      name: "Dr. Kausar S. Khan",
      role: "Chairperson",
      bio: "Over four decades advancing health equity, gender inclusion, and community empowerment in Pakistan and internationally. A visionary leader shaping MASHALL's strategic direction.",
      initials: "KK"
    },
    {
      name: "Zafar Ali Dehraj",
      role: "Board Member",
      bio: "25+ years in public health, mental health, governance. Led transformative initiatives with government and international partners.",
      initials: "ZD"
    },
    {
      name: "Huma Halepoto",
      role: "Board Member",
      bio: "12+ years in mental health, social protection, inclusive service delivery. Worked with World Bank, UNDP, USAID, Australian Aid.",
      initials: "HH"
    }
  ],
  management: [
    {
      name: "Jawaid Mehmood Shah",
      role: "CEO",
      bio: "Mental health and social development leader with extensive experience designing and scaling community-based programs across Pakistan.",
      initials: "JS"
    },
    {
      name: "Dr. Anjum Fatima",
      role: "Capacity Building, M&E & Research Lead",
      bio: "25+ years in health systems strengthening, monitoring & evaluation, and evidence-based programming.",
      initials: "AF"
    },
    {
      name: "Dr. Zahoor Ahmed",
      role: "Community Mental Health Lead",
      bio: "Psychiatrist with deep expertise in community-based mental health care, psychosocial support, and clinical strategy.",
      initials: "ZA"
    },
    {
      name: "Mohammad Aayan",
      role: "Finance & Sustainability Lead",
      bio: "Strategic financial oversight, transparency, long-term sustainability, and resource optimization.",
      initials: "MA"
    },
    {
      name: "Talha Hamid",
      role: "Media & Communications Lead",
      bio: "Graphic designer and brand strategist, amplifying MASHALL's voice for mental health awareness.",
      initials: "TH"
    },
    {
      name: "Muhammad Uris",
      role: "Business Development Lead",
      bio: "Strategic partnerships, growth acceleration, and resource mobilization.",
      initials: "MU"
    }
  ],
  advisors: [
    { name: "Muhammad Zaid", role: "Chartered Accountant", initials: "MZ" },
    { name: "Nisar ul Haq", role: "Tax and Company Advisor", initials: "NH" }
  ]
};

function TeamCard({ member }: { member: any }) {
  return (
    <motion.div 
      variants={FADE_IN}
      className="bg-card rounded-3xl p-8 border border-border/50 hover-elevate transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6 shadow-sm border-2 border-background">
        <span className="text-3xl font-display font-bold text-muted-foreground">{member.initials}</span>
      </div>
      <h3 className="text-xl font-bold font-display text-foreground mb-2">{member.name}</h3>
      <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
      {member.bio && (
        <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
      )}
    </motion.div>
  );
}

export default function OurTeam() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.h1 variants={FADE_IN} className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              Our <span className="text-primary">Team</span>
            </motion.h1>
            <motion.p variants={FADE_IN} className="text-xl text-muted-foreground font-light leading-relaxed">
              Dedicated professionals working together to build resilient, mental-health inclusive communities across Pakistan.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="mb-24"
          >
            <motion.h2 variants={FADE_IN} className="text-3xl font-bold font-display text-foreground mb-10 text-center">
              Board of Directors
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.board.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="mb-24"
          >
            <motion.h2 variants={FADE_IN} className="text-3xl font-bold font-display text-foreground mb-10 text-center">
              Management Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.management.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 variants={FADE_IN} className="text-3xl font-bold font-display text-foreground mb-10 text-center">
              External Advisors
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TEAM.advisors.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
