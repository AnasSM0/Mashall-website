import { Link } from "wouter";
import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import mashallLogo from "@assets/mashall-logo.jpg";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img
                src={mashallLogo}
                alt="MASHALL Logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Mental And Social Health for ALL. Making mental health care accessible, stigma-free, and community-centered across Pakistan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/our-model" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Model
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Get Involved</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Volunteer with Us
                </Link>
              </li>
              <li>
                <a href="mailto:careers@mashall.org" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@mashall.org" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@mashall.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MASHALL NGO. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
