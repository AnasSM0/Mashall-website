import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Handshake, ArrowLeft, Mail } from "lucide-react";

export default function Partner() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background min-h-[80vh] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-card rounded-3xl p-10 md:p-14 border border-border/50 shadow-sm text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#E9A52A]/10 flex items-center justify-center mx-auto mb-8">
              <Handshake className="w-10 h-10 text-[#E9A52A]" />
            </div>
            
            <h1 className="text-4xl font-bold font-display text-foreground mb-6">
              Partner With Us
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Sustainable change requires collective action. We partner with government bodies, corporations, academic institutions, and other NGOs to scale impactful mental health interventions.
            </p>

            <div className="bg-[#E9A52A]/5 rounded-2xl p-6 border border-[#E9A52A]/10 mb-10 text-left">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#E9A52A]" />
                Start a Conversation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                To discuss corporate social responsibility (CSR) initiatives, academic research collaborations, or institutional partnerships, please reach out to our Business Development team:
              </p>
              <a href="mailto:info@mashall.org" className="text-xl font-semibold text-[#E9A52A] hover:underline">
                info@mashall.org
              </a>
            </div>

            <Button asChild variant="outline" className="rounded-full">
              <Link href="/get-involved"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Get Involved</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
