import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@workspace/api-client-react";
import { Mail, Briefcase, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    submitContact.mutate({ data: values }, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. We'll get back to you shortly.",
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive"
        });
      }
    });
  };

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
              Contact <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p variants={FADE_IN} className="text-xl text-muted-foreground font-light leading-relaxed">
              Have questions or want to learn more about our programs? We'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto mb-24">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="lg:col-span-4 flex flex-col gap-8"
            >
              <motion.div variants={FADE_IN} className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">General Inquiries</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  For general questions, information about our programs, or to say hello.
                </p>
                <a href="mailto:info@mashall.org" className="text-primary font-semibold hover:underline">
                  info@mashall.org
                </a>
              </motion.div>

              <motion.div variants={FADE_IN} className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#EE6C2D]/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-[#EE6C2D]" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">Careers</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Interested in joining our team? Send your resume and cover letter.
                </p>
                <a href="mailto:careers@mashall.org" className="text-[#EE6C2D] font-semibold hover:underline">
                  careers@mashall.org
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={FADE_IN}
              className="lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm"
            >
              <h2 className="text-3xl font-bold font-display text-foreground mb-8">Send a Message</h2>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-foreground mb-4">Message Sent!</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Thank you for reaching out to MASHALL. We have received your message and will respond as soon as possible.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8 rounded-full">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" className="bg-background rounded-xl h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="jane@example.com" type="email" className="bg-background rounded-xl h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="bg-background rounded-xl min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full md:w-auto px-10 bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-lg font-semibold"
                      disabled={submitContact.isPending}
                    >
                      {submitContact.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>

          </div>

          {/* FAQs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={FADE_IN}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-10">Frequently Asked Questions</h2>
            <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-border/50">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                    What regions in Pakistan do you currently operate in?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    MASHALL operates across multiple districts in Sindh and Punjab, with plans to expand our community-based mental health initiatives to other provinces in the coming years. We prioritize underserved areas with limited access to psychiatric care.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-border/50">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                    Are your mental health services free of cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    Our community-based care and psychosocial support programs are deeply subsidized or fully free for vulnerable populations. We work with local health systems to integrate sustainable, low-cost mental health support into existing infrastructure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-border/50">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                    Can I partner with MASHALL for my company's CSR initiatives?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    Absolutely. We actively collaborate with corporate partners for employee wellbeing workshops, community outreach funding, and capacity-building programs. Please reach out to our Business Development Lead via info@mashall.org to discuss partnership opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-none">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                    How can I volunteer my professional skills (e.g., psychology, marketing)?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    We value diverse skills! While clinical volunteers need specific licensing, we also need help in awareness campaigns, research, IT, and community outreach. Please fill out the volunteer form on our "Get Involved" page and detail your specific skill set.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
          
        </div>
      </section>
    </Layout>
  );
}
