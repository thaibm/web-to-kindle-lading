import Button from "@/components/ui/Button";
import { LogoIcon } from "@/components/icons";

const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="font-[var(--font-lora)] font-semibold text-ink text-lg leading-tight">
            Send Web to Kindle
          </span>
        </div>
        <Button href={CWS_URL} size="sm" target="_blank" rel="noopener noreferrer">
          Add to Chrome
        </Button>
      </div>
    </header>
  );
}
