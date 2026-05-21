import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/globaal-foods-logo.png";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.08 265)" }} className="text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2">
            <img src={logo} alt="Globaal Foods" className="h-12 w-auto" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Premium manufacturer of Poha, Pasta, Macaroni & Vermicelli — crafted with hygiene,
            taste, and purity at the core.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Our Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 transition hover:text-secondary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Business Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-secondary" />
              <div>
                <p>Mon – Sat</p>
                <p className="text-white/55">9:00 AM – 6:30 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-secondary" />
              <div>
                <p>Sunday</p>
                <p className="text-white/55">Closed</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li>
              <p className="font-semibold text-white">Abhishek Agarwal</p>
              <p className="text-white/55">Founder</p>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href="tel:+919116945577" className="hover:text-secondary">+91 91169 45577</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href="mailto:abhikagarwal@gmail.com" className="hover:text-secondary break-all">
                abhikagarwal@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>Plot No. 1, Riddhi Siddhi Nagar, Jaipur – 302029</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Globaal Foods. All rights reserved.</p>
          <p>Manufactured with care in Jaipur, Rajasthan.</p>
        </div>
      </div>
    </footer>
  );
}
