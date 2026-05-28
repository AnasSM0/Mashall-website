import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Target, HeartHandshake, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedCounter } from "@/components/AnimatedCounter";

import heroImg from "@/assets/images/hero.png";
import kausarKhan from "@assets/kausar-khan.png";
import jawaidShah from "@assets/jawaid-shah.jpg";
import { FiveBarsAccent } from "@/components/FiveBars";

const FADE_IN = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const CORE_VALUES = [
  "Respect and dignity",
  "Confidentiality and ethical practice",
  "Equity and inclusion",
  "Evidence-based and quality-driven approaches",
  "Community participation and ownership",
];

function PakistanMap() {
  return (
    <svg
      viewBox="0 0 360 410"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm drop-shadow-xl"
      aria-label="Map of Pakistan with Sindh highlighted"
    >
      {/* Gilgit-Baltistan */}
      <polygon
        fill="#C8D8B0"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        points="165,30 185,5 215,0 255,0 295,10 330,30 350,60 340,85 305,75 265,65 235,72 210,62 188,46"
      />
      {/* KPK */}
      <polygon
        fill="#B5C99A"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        points="50,68 78,35 118,18 165,30 188,46 210,62 200,88 182,112 162,122 140,118 112,104 86,88"
      />
      {/* Balochistan */}
      <polygon
        fill="#C8D8B0"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        points="0,108 28,65 50,68 86,88 112,104 140,118 152,148 158,185 158,222 150,260 138,298 120,332 98,362 68,390 34,400 8,388 0,360 0,280 0,180"
      />
      {/* Punjab */}
      <polygon
        fill="#B5C99A"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        points="162,122 182,112 200,88 210,62 235,72 265,65 305,75 340,85 344,118 330,154 315,188 296,212 270,228 244,232 220,226 202,214 158,222 158,185 152,148"
      />
      {/* Sindh — highlighted in MASHALL teal */}
      <polygon
        fill="#168A84"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        points="158,222 150,260 138,298 124,332 132,368 158,392 192,402 228,400 264,388 294,360 318,320 328,278 316,248 296,232 270,228 244,232 220,226 202,214"
      />
      {/* Sindh label */}
      <text
        x="230"
        y="318"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
        opacity="0.95"
      >
        Sindh
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Warm community health center"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.div variants={FADE_IN} className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-medium text-sm mb-6 border border-secondary/30 backdrop-blur-sm">
              Mental And Social Health for ALL
            </motion.div>
            <motion.h1 variants={FADE_IN} className="text-5xl md:text-7xl font-bold font-display text-foreground leading-[1.1] mb-6">
              Opening doors to a <span className="text-primary">caring community</span>.
            </motion.h1>
            <motion.p variants={FADE_IN} className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed font-light max-w-2xl">
              MASHALL works to make mental health care accessible and stigma-free by integrating services into communities, schools, and health systems across Pakistan.
            </motion.p>
            <motion.div variants={FADE_IN} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full text-lg h-14 px-8 shadow-lg shadow-primary/20">
                <Link href="/our-model">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-2 hover:bg-muted">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Five Bars Divider */}
      <div className="bg-card pt-16 pb-4 flex flex-col items-center gap-3">
        <FiveBarsAccent />
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground/60 mt-2 font-display">
          Five Pillars. One Mission.
        </p>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { num: 1, suffix: " in 4", text: "people in Pakistan suffer from mental health challenges", color: "text-[#DE4B4B]" },
              { num: 24, suffix: "M+", text: "people require psychiatric assistance", color: "text-[#168A84]" },
              { num: 4, suffix: "%", text: "of Pakistan's total disease burden is mental disorders", color: "text-[#EE6C2D]" },
              { num: 0.19, suffix: "", text: "psychiatrists per 100,000 people in Pakistan", decimals: 2, color: "text-[#E9A52A]" },
            ].map((stat, i) => (
              <motion.div key={i} variants={FADE_IN} className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className={`text-5xl md:text-6xl font-bold font-display mb-4 ${stat.color}`}>
                  <AnimatedCounter end={stat.num} suffix={stat.suffix} decimals={stat.decimals} />
                </h3>
                <p className="text-muted-foreground font-medium leading-snug">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About MASHALL */}
      <section className="py-24 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="max-w-4xl mx-auto"
          >
            <motion.p variants={FADE_IN} className="text-xs font-semibold tracking-widest uppercase text-primary/70 font-display mb-4 text-center">
              Who We Are
            </motion.p>
            <motion.h2 variants={FADE_IN} className="text-4xl md:text-5xl font-bold font-display text-foreground mb-10 text-center">
              About <span className="text-primary">MASHALL</span>
            </motion.h2>
            <motion.div variants={FADE_IN} className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                Mental health is a major and growing public health challenge globally and in Pakistan. According to the World Health Organization, nearly one in eight people worldwide lives with a mental health condition, making mental illness a leading cause of disability and reduced quality of life. In low- and middle-income countries, more than 75% of people with mental health conditions receive no treatment at all.
              </p>
              <p>
                In Pakistan, the situation is particularly concerning. National and academic estimates suggest that approximately 24% to 34% of adults experience common mental health conditions, including depression and anxiety. Among them, nearly 70% to 80% remain unable to access appropriate care due to a severe shortage of trained professionals, social stigma, lack of awareness, financial constraints, and weak referral and support systems. Women, children, adolescents, youth, and low-income and marginalized communities are disproportionately affected.
              </p>
              <p>
                Keeping this context in view, MASHALL (Mental and Social Health for All) was established in 2025 as a non-profit organization to respond to the growing and unmet mental health needs of individuals and communities across Pakistan. MASHALL aims to bridge the treatment and care gap through community-based approaches, evidence-driven programs, and compassionate mental health and psychosocial support services, integrating mental health with social well-being and basic human rights.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-background rounded-3xl p-10 border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-28 h-28 text-primary" />
              </div>
              <h2 className="text-2xl font-bold font-display text-primary mb-5 relative z-10">Our Vision</h2>
              <p className="text-xl text-foreground/80 leading-relaxed font-light relative z-10">
                "A Pakistan where mental health care and dignity are rights for all."
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-background rounded-3xl p-10 border border-[#9BCB63]/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <HeartHandshake className="w-28 h-28 text-[#9BCB63]" />
              </div>
              <h2 className="text-2xl font-bold font-display text-[#9BCB63] mb-5 relative z-10">Our Mission</h2>
              <p className="text-xl text-foreground/80 leading-relaxed font-light relative z-10">
                "To empower people with mental illness and psychosocial disabilities across Pakistan through inclusive mental health support, social inclusion, and community-based programs that promote dignity and opportunity."
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-background rounded-3xl p-10 border border-[#E9A52A]/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Star className="w-28 h-28 text-[#E9A52A]" />
              </div>
              <h2 className="text-2xl font-bold font-display text-[#E9A52A] mb-5 relative z-10">Core Values</h2>
              <ul className="space-y-3 relative z-10">
                {CORE_VALUES.map((value) => (
                  <li key={value} className="flex items-start gap-3 text-foreground/80 font-light">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#E9A52A] shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={FADE_IN}>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 font-display mb-4">
                Our Reach
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
                Where We <span className="text-primary">Work</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
                Currently focused in <strong className="text-foreground font-semibold">Sindh, Pakistan</strong>, with a vision to expand nationwide.
              </p>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="w-4 h-4 rounded-full bg-primary shrink-0" />
                <p className="text-foreground/80 font-medium">
                  Sindh Province — Community-based programs, psychosocial support, and capacity building
                </p>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-muted/60 border border-border/40 mt-4">
                <div className="w-4 h-4 rounded-full bg-muted-foreground/30 shrink-0" />
                <p className="text-muted-foreground font-medium">
                  Nationwide expansion — Planned for future phases
                </p>
              </div>
            </motion.div>

            <motion.div variants={FADE_IN} className="flex justify-center">
              <PakistanMap />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-24 bg-card border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chairperson's Message */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
            >
              <h2 className="text-2xl font-bold font-display text-foreground mb-8">Chairperson's Message</h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full shrink-0 border-2 border-primary/20 overflow-hidden bg-muted">
                  <img
                    src={kausarKhan}
                    alt="Dr. Kausar S. Khan"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground">Dr. Kausar S. Khan</h3>
                  <p className="text-primary font-medium">Chairperson</p>
                </div>
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed font-light italic">
                "At MASHALL, our work is grounded in the belief that communities are not just recipients of care—they are central to creating change. Health systems become stronger when they listen to people, respect experiences, and respond to realities. Mental health requires approaches beyond services, addressing dignity, inclusion, and social justice. MASHALL reflects this vision by combining community engagement with evidence-based care. What gives me confidence is the collective strength of our team, partners, and communities. Together, we are working towards a future where mental health is understood, supported, and integrated into everyday life."
              </blockquote>
            </motion.div>

            {/* CEO's Message */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
            >
              <h2 className="text-2xl font-bold font-display text-foreground mb-8">CEO's Message</h2>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full shrink-0 border-2 border-[#EE6C2D]/20 overflow-hidden bg-muted">
                  <img
                    src={jawaidShah}
                    alt="Jawaid Mehmood Shah"
                    className="w-full h-full object-cover object-[center_12%]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground">Jawaid Mehmood Shah</h3>
                  <p className="text-[#EE6C2D] font-medium">Chief Executive Officer</p>
                </div>
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed font-light italic">
                "At MASHALL, we believe mental health is a human issue touching every family. In Pakistan, many face challenges without access to care, support, or understanding. The gap is not only in services, but also in awareness, inclusion, and opportunity. Our work brings mental health care closer to communities, creating pathways for early help, dignity, and inclusion. This includes clinical care, psychosocial support, community engagement, and opportunities for social and economic inclusion. We believe sustainable impact is only possible through partnerships. By working with government, development partners, and communities, we build scalable, inclusive, lasting systems. Our commitment remains clear: to ensure mental health care reaches those who need it most."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
