import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { productImages } from "@/assets/products";

const ratios = ["portrait", "landscape", "square", "tall"] as const;
const categories = ["All", "Poha", "Pasta", "Macaroni", "Makhana"] as const;
type Filter = (typeof categories)[number];

export function ProductGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => productImages.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
              filter === c
                ? "border-secondary bg-secondary text-secondary-foreground shadow-sm"
                : "border-border bg-background text-foreground/70 hover:border-secondary/50 hover:text-secondary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
        {items.map((p, i) => (
          <ImagePlaceholder
            key={`${p.src}-${i}`}
            ratio={ratios[i % ratios.length]}
            label={p.label}
            src={p.src}
            onClick={() => setActive(i)}
            className="break-inside-avoid"
          />
        ))}
      </div>

      {active !== null && items[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next"
            className="absolute right-4 bottom-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:bottom-auto sm:top-1/2"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i + 1) % items.length));
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[active].src}
              alt={items[active].label}
              className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm font-medium text-white/90">
              {items[active].label} · {items[active].category}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
