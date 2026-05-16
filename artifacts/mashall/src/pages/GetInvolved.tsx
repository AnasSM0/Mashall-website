import { useState } from "react";
import { Link } from "wouter";
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
import { useSubmitVolunteer } from "@workspace/api-client-react";
import { Heart, Handshake, Users } from "lucide-react";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please tell us how you'd like to help"),
});

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function GetInvolved() {
  const { toast } = useToast();
  const submitVolunteer = useSubmitVolunteer();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof volunteerSchema>>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof volunteerSchema>) => {
    submitVolunteer.mutate({ data: values }, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Application Submitted",
          description: "Thank you for your interest. Our team will contact you soon.",
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
              Get <span className="text-primary">Involved</span>
            </motion.h1>
            <motion.p variants={FADE_IN} className="text-xl text-muted-foreground font-light leading-relaxed">
              We cannot do this alone. Whether you give your time, your resources, or your partnership, you are helping build a healthier society.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Options */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="flex flex-col gap-8"
            >
              <motion.div variants={FADE_IN} className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col items-start hover-elevate transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#9BCB63]/10 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#9BCB63]" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">Make a Donation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your financial support directly enables community-based care, training programs, and advocacy efforts. Every contribution brings hope closer to home.
                </p>
                <Button asChild className="bg-[#9BCB63] hover:bg-[#9BCB63]/90 text-white font-semibold rounded-full mt-auto">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </motion.div>

              <motion.div variants={FADE_IN} className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col items-start hover-elevate transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#E9A52A]/10 flex items-center justify-center mb-6">
                  <Handshake className="w-7 h-7 text-[#E9A52A]" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">Become a Partner</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We collaborate with governments, corporations, and civil society. Let's combine resources to create sustainable, scalable mental health solutions.
                </p>
                <Button asChild variant="outline" className="text-[#E9A52A] border-[#E9A52A] hover:bg-[#E9A52A]/5 font-semibold rounded-full mt-auto">
                  <Link href="/partner">Partner With Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Volunteer Form */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={FADE_IN}
              className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground">Volunteer with Us</h3>
                  <p className="text-muted-foreground text-sm">Join our team on the ground.</p>
                </div>
              </div>

              {isSuccess ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-foreground mb-4">Thank You!</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Your volunteer application has been received. Our team will contact you soon to discuss how we can work together.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8 rounded-full">
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1 flex flex-col">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+92 300 0000000" className="bg-background rounded-xl h-12" {...field} />
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
                        <FormItem className="flex-1 flex flex-col">
                          <FormLabel>How would you like to help?</FormLabel>
                          <FormControl className="flex-1 min-h-[120px]">
                            <Textarea 
                              placeholder="Tell us about your skills and interests..." 
                              className="bg-background rounded-xl resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-lg font-semibold mt-auto"
                      disabled={submitVolunteer.isPending}
                    >
                      {submitVolunteer.isPending ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
