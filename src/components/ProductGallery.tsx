import { ImagePlaceholder } from "./ImagePlaceholder";

const ratios = [
  "portrait", "landscape", "square", "tall",
  "square", "portrait", "landscape", "square",
  "tall", "square", "portrait", "landscape",
  "square", "tall", "square", "portrait",
  "landscape", "square", "portrait", "square",
  "tall", "landscape",
] as const;

export function ProductGallery() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
      {ratios.map((r, i) => (
        <ImagePlaceholder
          key={i}
          ratio={r}
          label={`Product ${String(i + 1).padStart(2, "0")}`}
          className="break-inside-avoid"
        />
      ))}
    </div>
  );
}
