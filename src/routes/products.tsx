import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGallery } from "@/components/ProductGallery";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — Poha, Pasta, Macaroni & Vermicelli | Globaal Foods" },
      {
        name: "description",
        content:
          "Premium Poha, Pasta, Macaroni and Vermicelli manufactured by Globaal Foods in Jaipur. Bulk and retail supply available.",
      },
      { property: "og:title", content: "Our Premium Product Range — Globaal Foods" },
      {
        property: "og:description",
        content:
          "Discover Globaal Foods' meticulously manufactured Poha, Pasta, Macaroni and Vermicelli.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const categories = [
  {
    title: "Premium Poha",
    tag: "Breakfast Staple",
    desc: "Made from the finest paddy, our Poha is perfectly flattened, hygienic, and packed with nutrients. Ideal for a healthy, traditional Indian breakfast.",
    points: ["Selected fine paddy", "Uniform thickness", "Cooks in minutes"],
  },
  {
    title: "Pasta & Macaroni",
    tag: "Wheat Goodness",
    desc: "Crafted from high-grade wheat, our Pasta and Macaroni offer the perfect 'al dente' bite. Available in bulk packaging for distributors and restaurants.",
    points: ["High-grade durum-style wheat", "Consistent shape & cook", "Bulk packaging ready"],
  },
  {
    title: "Vermicelli",
    tag: "Sweet & Savory",
    desc: "Roasted and non-roasted vermicelli perfect for sweet kheer or savory upma. Manufactured untouched by hand to guarantee absolute purity.",
    points: ["Roasted & plain variants", "Hand-free production", "Long shelf life"],
  },
];

function Products() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Products
          </span>
          <h1 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Our Premium <span className="text-secondary">Product Range</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Discover our diverse range of meticulously manufactured food products. Whether you're
            looking for traditional breakfast staples or modern pasta varieties, Globaal Foods
            delivers unmatched quality.
          </p>
        </div>
      </section>

      {/* Zigzag categories */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:space-y-28 lg:px-8">
          {categories.map((c, i) => (
            <div
              key={c.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/10 blur-2xl" />
                <ImagePlaceholder label={c.title} ratio="landscape" />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  0{i + 1} — {c.tag}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{c.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside our product range"
            description="Hover any image for a closer look. Real product photos will be swapped in here."
          />
          <div className="mt-14">
            <ProductGallery />
          </div>
        </div>
      </section>
    </>
  );
}
