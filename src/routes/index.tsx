import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wheat, Factory, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import {
  glostaPohaLifestyle,
  coloredPastaBulk,
  fusilli,
  macaroniElbow,
  glostaPohaForest,
  penne,
  flowerPasta,
} from "@/assets/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Globaal Foods — Premium Poha, Pasta & Vermicelli Manufacturer" },
      {
        name: "description",
        content:
          "Globaal Foods manufactures premium Poha, Pasta, Macaroni and Vermicelli in Jaipur. Wholesale and retail partners served nationwide.",
      },
      { property: "og:title", content: "Globaal Foods — Premium Food Manufacturer" },
      {
        property: "og:description",
        content:
          "Authentic taste, superior quality, state-of-the-art manufacturing of Poha, Pasta & Vermicelli.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Wheat, title: "High-Quality Ingredients", desc: "Sourced from trusted farms and mills, every grain handpicked for excellence." },
  { icon: Factory, title: "State-of-the-Art Manufacturing", desc: "Modern automated facility ensuring consistent quality at scale." },
  { icon: ShieldCheck, title: "100% Purity Guaranteed", desc: "Hygienic, untouched-by-hand production for absolute food safety." },
  { icon: Truck, title: "Bulk Supply Ready", desc: "Reliable wholesale & distributor partnerships across India." },
];

const products = [
  { title: "Premium Poha", desc: "Perfectly flattened, nutrient-rich rice flakes." },
  { title: "Pasta & Macaroni", desc: "High-grade wheat, perfect al-dente bite." },
  { title: "Vermicelli", desc: "Roasted and plain — for kheer, upma & more." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/40 via-background to-background" />
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute top-1/2 -left-32 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              Made in Jaipur, India
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Premium Quality{" "}
              <span className="text-primary">Poha, Pasta</span> &{" "}
              <span className="text-secondary">Vermicelli</span> Manufacturer
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Globaal Foods brings authentic taste, superior quality, and state-of-the-art
              manufacturing to your table. Serving wholesale and retail partners nationwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-dark hover:shadow-lg"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-secondary hover:text-secondary"
              >
                Contact Us
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              <div>
                <dt className="text-2xl font-bold text-primary">3+</dt>
                <dd className="text-xs text-muted-foreground">Product Lines</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-primary">100%</dt>
                <dd className="text-xs text-muted-foreground">Purity</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-primary">Pan-India</dt>
                <dd className="text-xs text-muted-foreground">Distribution</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-secondary/30 to-primary/20 blur-2xl" />
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder label="Glosta Poha" src={glostaPohaLifestyle} ratio="portrait" />
              <ImagePlaceholder label="Penne Pasta" src={penne} ratio="square" className="mt-8" />
              <ImagePlaceholder label="Elbow Macaroni" src={macaroniElbow} ratio="square" />
              <ImagePlaceholder label="Flower Pasta" src={flowerPasta} ratio="portrait" className="-mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Quality you can taste, trust you can build on"
            description="Four pillars that make Globaal Foods the partner of choice for distributors, retailers, and discerning kitchens."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <f.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Product Showcase */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Range"
            title="Crafted for every kitchen"
            description="From traditional breakfast staples to modern pasta — we make food families love."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { ...products[0], img: glostaPohaForest },
              { ...products[1], img: coloredPastaBulk },
              { ...products[2], img: fusilli },
            ].map((p, i) => (
              <Link
                key={p.title}
                to="/products"
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <ImagePlaceholder label={p.title} src={p.img} ratio="landscape" className="rounded-none border-0" />
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    0{i + 1} — Category
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                    View details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground shadow-xl sm:px-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Partner with Globaal Foods
                </h2>
                <p className="mt-3 max-w-xl text-white/80">
                  Bulk pricing, custom packaging, and reliable nationwide supply for distributors,
                  retailers, and HoReCa.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg transition hover:bg-secondary/90"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
