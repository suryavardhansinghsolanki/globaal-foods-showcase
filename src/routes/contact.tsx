import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, User } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Globaal Foods — Wholesale Enquiries & Quotes" },
      {
        name: "description",
        content:
          "Get in touch with Globaal Foods in Jaipur for wholesale, distribution and retail enquiries. Call +91 91169 45577 or email abhikagarwal@gmail.com.",
      },
      { property: "og:title", content: "Contact Globaal Foods" },
      {
        property: "og:description",
        content:
          "Wholesale, distribution & retail enquiries for Poha, Pasta, Macaroni and Vermicelli.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  inquiry: z.enum(["Wholesale", "Retail", "Distribution", "General"]),
  message: z.string().trim().min(10, "Please add a few more details").max(1000),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      inquiry: fd.get("inquiry"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const flat: Record<string, string> = {};
      for (const issue of parsed.error.issues) flat[issue.path[0] as string] = issue.message;
      setErrors(flat);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll get back within 24 hours.");
    }, 700);
  }

  const inputCls =
    "mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30";

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-background py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Let's talk <span className="text-secondary">business</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Wholesale, distribution, or a general enquiry — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10"
            noValidate
          >
            <h2 className="text-2xl font-bold text-foreground">Send us an enquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We respond to all enquiries within one business day.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input id="name" name="name" type="text" className={inputCls} placeholder="Your name" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input id="email" name="email" type="email" className={inputCls} placeholder="you@company.com" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={inputCls} placeholder="+91 …" />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="inquiry" className="text-sm font-medium text-foreground">
                  Inquiry Type
                </label>
                <select id="inquiry" name="inquiry" defaultValue="Wholesale" className={inputCls}>
                  <option>Wholesale</option>
                  <option>Retail</option>
                  <option>Distribution</option>
                  <option>General</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={inputCls}
                  placeholder="Tell us about your requirement — products, quantities, delivery location…"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition hover:bg-secondary/90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </form>

          {/* Contact Card */}
          <aside className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-secondary/25 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold">Reach us directly</h2>
              <p className="mt-2 text-sm text-white/75">
                Prefer a call or email? We're here Monday to Saturday.
              </p>

              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                    <User className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/55">Contact Person</p>
                    <p className="font-semibold text-white">Abhishek Agarwal</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/55">Phone</p>
                    <a href="tel:+919116945577" className="font-semibold text-white hover:text-secondary">
                      +91 91169 45577
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/55">Email</p>
                    <a
                      href="mailto:abhikagarwal@gmail.com"
                      className="font-semibold text-white hover:text-secondary break-all"
                    >
                      abhikagarwal@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/55">Address</p>
                    <p className="font-semibold text-white">
                      Plot No. 1, Riddhi Siddhi Nagar,<br />Jaipur – 302029, Rajasthan
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/55">Hours</p>
                    <p className="font-semibold text-white">Mon – Sat · 9:00 AM – 6:30 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
