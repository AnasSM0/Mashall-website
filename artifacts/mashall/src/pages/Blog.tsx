import { motion, type Variants } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FiveBarsAccent } from "@/components/FiveBars";
import { BookOpen, Lightbulb, Send } from "lucide-react";

const FADE_IN: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
};

const TOPICS = [
  "Community Mental Health",
  "Stigma & Awareness",
  "Policy & Advocacy",
  "Personal Stories",
  "Research Insights",
  "Capacity Building",
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 md:py-44 bg-background overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Decorative blurred blobs */}
        <div
          className="absolute top-[-80px] left-[-80px] w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#9BCB63" }}
        />
        <div
          className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#168A84" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ backgroundColor: "#DE4B4B" }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="relative z-10 max-w-2xl mx-auto px-6"
        >
          {/* Icon */}
          <motion.div
            variants={FADE_IN}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center shadow-sm">
              <BookOpen className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Five bars */}
          <motion.div variants={FADE_IN} className="flex justify-center mb-10">
            <FiveBarsAccent />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={FADE_IN}
            className="text-5xl md:text-7xl font-bold font-display text-foreground mb-6 leading-tight"
          >
            Stories &amp; <span className="text-primary">Insights</span>
          </motion.h1>

          {/* Coming soon label */}
          <motion.div variants={FADE_IN} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Coming Soon
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={FADE_IN}
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-4"
          >
            We are building a space for voices that matter — stories from communities, insights from practitioners, and perspectives on mental health in Pakistan. Check back soon.
          </motion.p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border/60 mx-8 md:mx-24" />

      {/* Topics preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="text-center"
          >
            <motion.p variants={FADE_IN} className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60 font-display mb-6">
              Topics we will cover
            </motion.p>
            <motion.div variants={FADE_IN} className="flex flex-wrap justify-center gap-3">
              {TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-full bg-card border border-border/60 text-sm font-medium text-muted-foreground"
                >
                  {topic}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Submit idea */}
      <section className="py-20 bg-card border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="max-w-2xl mx-auto bg-background rounded-3xl border border-border/50 shadow-sm p-10 md:p-14 text-center"
          >
            <motion.div variants={FADE_IN} className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#E9A52A]/10 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-[#E9A52A]" strokeWidth={1.8} />
              </div>
            </motion.div>

            <motion.h2 variants={FADE_IN} className="text-3xl font-bold font-display text-foreground mb-4">
              Have something to share?
            </motion.h2>

            <motion.p variants={FADE_IN} className="text-muted-foreground leading-relaxed mb-8">
              We welcome perspectives from practitioners, researchers, community members, and anyone passionate about mental health. Submit your idea or draft and our editorial team will be in touch.
            </motion.p>

            <motion.a
              variants={FADE_IN}
              href="mailto:info@mashall.org?subject=Blog%20Submission%20Idea"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-4 text-base transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5" />
              Submit Your Idea
            </motion.a>

            <motion.p variants={FADE_IN} className="text-sm text-muted-foreground/70 mt-6">
              Send to{" "}
              <a href="mailto:info@mashall.org" className="text-primary hover:underline font-medium">
                info@mashall.org
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
