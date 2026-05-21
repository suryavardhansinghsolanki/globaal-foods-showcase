import { MessageCircle } from "lucide-react";

const PHONE = "919116945577";
const MSG = encodeURIComponent(
  "Hi Globaal Foods, I'd like to enquire about your products.",
);

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-secondary-foreground shadow-xl ring-4 ring-secondary/20 transition hover:bg-secondary/90 hover:ring-secondary/40"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-secondary/40" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
