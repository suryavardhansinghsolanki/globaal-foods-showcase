import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ArrowRight, User } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { coloredPastaBulk, glostaPohaForest } from "@/assets/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Globaal Foods — Premium Food Manufacturer in Jaipur" },
      {
        name: "description",
        content:
          "Learn about Globaal Foods, a Jaipur-based manufacturer of Poha, Pasta, Macaroni and Vermicelli led by Abhishek Agarwal.",
      },
      { property: "og:title", content: "About Globaal Foods" },
      {
        property: "og:description",
        content:
          "Premier food manufacturer in Jaipur producing the finest Poha, Pasta, Macaroni and Vermicelli.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h1 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Wholesome food, <span className="text-secondary">honestly made</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Built on trust, hygiene, and an obsession with quality — Globaal Foods is redefining
            India's staple food manufacturing.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/10 blur-2xl" />
            <ImagePlaceholder label="Our Facility" src={coloredPastaBulk} ratio="landscape" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              From Jaipur to kitchens across India
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Welcome to Globaal Foods, a premier food manufacturing company based in Jaipur,
              Rajasthan. Under the leadership of Abhishek Agarwal, we have dedicated ourselves to
              producing the finest quality Poha, Pasta, Macaroni, and Vermicelli.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our state-of-the-art manufacturing facility in Riddhi Siddhi Nagar ensures that every
              batch meets the highest standards of hygiene and taste — the kind of food you'd be
              proud to serve at your own table.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Purpose"
            title="Our mission & vision"
            description="What drives us every morning at the mill."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-secondary bg-card p-8 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To nourish families with wholesome, authentic, and delicious food products while
                building lasting relationships with our B2B distributors and retail partners.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-primary bg-card p-8 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To become India's most trusted name in staple and ready-to-cook foods — known for
                quality, consistency, and the strength of our partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid md:grid-cols-[1fr_2fr]">
            <ImagePlaceholder label="Abhishek Agarwal" src={glostaPohaForest} ratio="square" className="rounded-none border-0" />
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <User className="h-3.5 w-3.5" /> Leadership
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                Abhishek Agarwal
              </h3>
              <p className="text-sm text-muted-foreground">Founder, Globaal Foods</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A hands-on operator with a passion for clean, high-quality food. Abhishek leads
                Globaal Foods with a simple promise — make every packet count, every time.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
