import Image from "next/image";

import Button from "@/components/ui/Button";

const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Send Web to Kindle"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="font-[var(--font-lora)] font-semibold text-ink text-lg leading-tight">
            Send Web to <span className="text-amber">Kindle</span>
          </span>
        </div>
        <Button
          href={CWS_URL}
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add to Chrome
        </Button>
      </div>
    </header>
  );
}
