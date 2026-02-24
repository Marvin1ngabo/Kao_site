import { Mail, Phone, MapPin } from "lucide-react";
import kasoLogo from "@/assets/kaso-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={kasoLogo} alt="Kaso Foundation" className="h-14 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We invite you to join us in our mission. Whether through volunteering, 
              donating, or spreading the word, your support makes a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Access</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Approaches", href: "#approaches" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+250788871118" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-kaso-green" />
                +250 788 871 118
              </a>
              <a href="mailto:info@kasofoundation.org" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-kaso-green" />
                info@kasofoundation.org
              </a>
              <a href="https://www.kasofoundation.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-4 h-4 text-kaso-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                www.kasofoundation.org
              </a>
              <span className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-kaso-green" />
                Kicukiro - Sonatube
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kaso Foundation. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
