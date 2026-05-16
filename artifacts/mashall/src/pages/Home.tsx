import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Users, Activity, Target, Shield, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedCounter } from "@/components/AnimatedCounter";

import heroImg from "@/assets/images/hero.png";

const FADE_IN = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

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

      {/* Statistics Section */}
      <section className="py-24 bg-card">
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
              <motion.div key={i} variants={FADE_IN} className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 flex flex-col hover-elevate transition-all duration-300">
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

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-primary/5 rounded-3xl p-10 md:p-14 border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-32 h-32 text-primary" />
              </div>
              <h2 className="text-3xl font-bold font-display text-primary mb-6 relative z-10">Our Vision</h2>
              <p className="text-2xl text-foreground/80 leading-relaxed font-light relative z-10">
                "A society where mental health is respected, supported, and accessible for all."
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-[#9BCB63]/10 rounded-3xl p-10 md:p-14 border border-[#9BCB63]/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <HeartHandshake className="w-32 h-32 text-[#9BCB63]" />
              </div>
              <h2 className="text-3xl font-bold font-display text-[#9BCB63] mb-6 relative z-10">Our Mission</h2>
              <p className="text-2xl text-foreground/80 leading-relaxed font-light relative z-10">
                "To promote mental and social wellbeing through awareness, access to care, capacity building, and advocacy."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-foreground mb-6">Messages from Leadership</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center shrink-0 border-2 border-primary/20">
                  <span className="text-2xl font-bold text-muted-foreground font-display">KK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Dr. Kausar S. Khan</h3>
                  <p className="text-primary font-medium">Chairperson</p>
                </div>
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed font-light italic">
                "At MASHALL, our work is grounded in the belief that communities are not just recipients of care—they are central to creating change. Health systems become stronger when they listen to people, respect experiences, and respond to realities. Mental health requires approaches beyond services, addressing dignity, inclusion, and social justice. MASHALL reflects this vision by combining community engagement with evidence-based care. What gives me confidence is the collective strength of our team, partners, and communities. Together, we are working towards a future where mental health is understood, supported, and integrated into everyday life."
              </blockquote>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_IN}
              className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border/50"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center shrink-0 border-2 border-accent/20">
                  <span className="text-2xl font-bold text-muted-foreground font-display">JS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Jawaid Mehmood Shah</h3>
                  <p className="text-accent font-medium">CEO</p>
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
