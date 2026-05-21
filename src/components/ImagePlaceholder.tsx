import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  src?: string;
  ratio?: "square" | "portrait" | "landscape" | "tall";
  className?: string;
  onClick?: () => void;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

export function ImagePlaceholder({ label, src, ratio = "square", className = "", onClick }: Props) {
  const interactive = typeof onClick === "function";
  return (
    <div
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent via-cream to-muted ${ratioClass[ratio]} ${interactive ? "cursor-zoom-in" : ""} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-primary/40 transition-transform duration-500 group-hover:scale-105">
          <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
          <span className="font-display text-xs font-semibold uppercase tracking-wider">
            {label}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-md">
          {label}
        </span>
      </div>
    </div>
  );
}
