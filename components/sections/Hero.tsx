import Button from "@/components/ui/Button";
import KindleIllustration from "@/components/illustrations/KindleIllustration";
import { StarFillIcon, DownloadCircleIcon } from "@/components/icons";

const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export default function Hero() {
  return (
    <section className="pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-amber/10 text-amber rounded-full px-4 py-1.5 text-sm font-medium w-fit">
            <StarFillIcon />
            Free Chrome Extension
          </div>

          <h1 className="font-[var(--font-lora)] text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Read the web on your{" "}
            <span className="text-amber">Kindle</span>
          </h1>

          <p className="text-ink-light text-lg leading-relaxed">
            Turn any article, blog post, or selected text into a clean EPUB —
            right inside Chrome. Download it or send it straight to your Kindle
            via Gmail. No server, no account required.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href={CWS_URL} size="lg" target="_blank" rel="noopener noreferrer">
              <DownloadCircleIcon />
              Add to Chrome — Free
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              How it works
            </Button>
          </div>
        </div>

        <div>
          <KindleIllustration />
        </div>
      </div>
    </section>
  );
}
