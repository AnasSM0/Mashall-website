import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

import kausarKhan from "@assets/kausar-khan.png";
import zafarDehraj from "@assets/zafar-ali-dehraj.png";
import humaHalepoto from "@assets/huma-halepoto.png";
import jawaidShah from "@assets/jawaid-shah.jpg";
import anjumFatima from "@assets/anjum-fatima.png";
import drZahoor from "@assets/dr-zahoor.png";
import muhammadAayan from "@assets/muhammad-aayan.png";
import talhaHamid from "@assets/talha-hamid.png";
import muhammadUris from "@assets/muhammad-uris.png";
import muhammadZaid from "@assets/muhammad-zaid.png";

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo: string | null;
  initials?: string;
  facePosition?: string;
};

const TEAM: { board: TeamMember[]; management: TeamMember[]; advisors: TeamMember[] } = {
  board: [
    {
      name: "Dr. Kausar S. Khan",
      role: "Chairperson",
      bio: "Over four decades advancing health equity, gender inclusion, and community empowerment in Pakistan and internationally. A visionary leader shaping MASHALL's strategic direction.",
      photo: kausarKhan,
      facePosition: "object-[center_15%]"
    },
    {
      name: "Zafar Ali Dehraj",
      role: "Board Member",
      bio: "25+ years in public health, mental health, governance. Led transformative initiatives with government and international partners.",
      photo: zafarDehraj,
      facePosition: "object-[center_10%]"
    },
    {
      name: "Huma Halepoto",
      role: "Board Member",
      bio: "12+ years in mental health, social protection, inclusive service delivery. Worked with World Bank, UNDP, USAID, Australian Aid.",
      photo: humaHalepoto,
      facePosition: "object-[center_8%]"
    }
  ],
  management: [
    {
      name: "Jawaid Mehmood Shah",
      role: "Chief Executive Officer",
      bio: "Mental health and social development leader with extensive experience designing and scaling community-based programs across Pakistan.",
      photo: jawaidShah,
      facePosition: "object-[center_12%]"
    },
    {
      name: "Dr. Anjum Fatima",
      role: "Capacity Building, M&E & Research Lead",
      bio: "25+ years in health systems strengthening, monitoring & evaluation, and evidence-based programming.",
      photo: anjumFatima,
      facePosition: "object-[center_8%]"
    },
    {
      name: "Dr. Zahoor Ahmed",
      role: "Community Mental Health Lead",
      bio: "Psychiatrist with deep expertise in community-based mental health care, psychosocial support, and clinical strategy.",
      photo: drZahoor,
      facePosition: "object-[center_5%]"
    },
    {
      name: "Mohammad Aayan",
      role: "Finance & Sustainability Lead",
      bio: "Strategic financial oversight, transparency, long-term sustainability, and resource optimization.",
      photo: muhammadAayan,
      facePosition: "object-[center_5%]"
    },
    {
      name: "Talha Hamid",
      role: "Media & Communications Lead",
      bio: "Graphic designer and brand strategist, amplifying MASHALL's voice for mental health awareness.",
      photo: talhaHamid,
      facePosition: "object-[center_8%]"
    },
    {
      name: "Muhammad Uris",
      role: "Business Development Lead",
      bio: "Strategic partnerships, growth acceleration, and resource mobilization.",
      photo: muhammadUris,
      facePosition: "object-[center_5%]"
    }
  ],
  advisors: [
    {
      name: "Muhammad Zaid",
      role: "Chartered Accountant",
      photo: muhammadZaid,
      facePosition: "object-[center_10%]"
    },
    {
      name: "Nisar ul Haq",
      role: "Tax and Company Advisor",
      photo: null,
      initials: "NH"
    }
  ]
};

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={FADE_IN}
      className="bg-card rounded-3xl p-8 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="w-28 h-28 rounded-full mb-6 shadow-md border-2 border-primary/20 overflow-hidden bg-muted flex items-center justify-center">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className={`w-full h-full object-cover ${member.facePosition ?? "object-top"}`}
          />
        ) : (
          <span className="text-3xl font-display font-bold text-muted-foreground">{member.initials}</span>
        )}
      </div>
      <h3 className="text-xl font-bold font-display text-foreground mb-1">{member.name}</h3>
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
