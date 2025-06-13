import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../../assets/logo.jpg";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-muted/50 border-t">
      <section className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="flex items-center mb-6"
          >
            <img
              src={logo}
              alt="BilVerkstad Logo"
              className="h-12 max-w-[200px] object-contain"
            />
          </a>
          <p className="text-muted-foreground mb-6 max-w-md">
            Sedan 2003 har vi levererat professionell bilservice med fokus på
            kvalitet, pålitlighet och kundnöjdhet. Vi är din betrodda partner
            för alla bilbehov.
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="tel:+46123456789"
                className="text-sm hover:text-primary transition-colors"
              >
                +46 123 456 789
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href="mailto:info@staketmek.se"
                className="text-sm hover:text-primary transition-colors"
              >
                info@staketmek.se
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Stäketvägen 15, 177 30 Järfälla
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <a
            href="#start"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Start
          </a>
          <a
            href="#about-team"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Om oss
          </a>
          <a
            href="#features"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Våra Tjänster
          </a>
          <a
            href="#howItWorks"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Så Fungerar Det
          </a>
          <a
            href="#testimonials"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Omdömen
          </a>
          <a
            href="#contact"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Kontakt
          </a>
        </div>

        {/* Services & Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-4">Tjänster & Info</h3>
          <a
            href="#features"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Motorservice
          </a>
          <a
            href="#features"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Bromsreparationer
          </a>
          <a
            href="#features"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Bilbesiktning
          </a>
          <a
            href="#features"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Däckbyte
          </a>
          <a
            href="/integritet"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Integritetspolicy
          </a>
          <a
            href="/villkor"
            className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors"
          >
            Allmänna villkor
          </a>
        </div>
      </section>

      {/* Opening Hours & Social */}
      <section className="container py-8 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Opening Hours */}
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <h4 className="font-semibold mb-2">Öppettider</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Måndag - Fredag: 07:00 - 17:00</div>
                <div>Lördag: 08:00 - 14:00</div>
                <div>Söndag: Stängt</div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:items-end">
            <h4 className="font-semibold mb-4">Följ oss</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="container py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; 2024 Stäket Mek & Däck. Alla rättigheter förbehållna.
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="/cookies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </a>
            <a
              href="/gdpr"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GDPR
            </a>
            <a
              href="/sitemap"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
