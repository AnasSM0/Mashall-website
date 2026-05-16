import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, ArrowLeft, Mail } from "lucide-react";

export default function Donate() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background min-h-[80vh] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-card rounded-3xl p-10 md:p-14 border border-border/50 shadow-sm text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#9BCB63]/10 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[#9BCB63]" />
            </div>
            
            <h1 className="text-4xl font-bold font-display text-foreground mb-6">
              Support Our Mission
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Your contribution helps us bring vital mental health services, training, and support to communities across Pakistan. Every donation breaks down stigma and builds resilience.
            </p>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mb-10 text-left">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Donation Inquiries
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We are currently upgrading our online payment portal. To make a donation via bank transfer or discuss other funding opportunities, please contact our team directly:
              </p>
              <a href="mailto:info@mashall.org" className="text-xl font-semibold text-primary hover:underline">
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
