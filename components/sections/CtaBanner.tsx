import Button from "@/components/ui/Button";
import { ChromeIcon } from "@/components/icons";

const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export default function CtaBanner() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
        <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
          Start reading better today
        </h2>
        <p className="text-ink-light text-lg">
          Free, open, and private. Add it to Chrome in seconds — no account, no
          server, no tracking.
        </p>
        <div className="flex justify-center">
          <Button href={CWS_URL} size="lg" target="_blank" rel="noopener noreferrer">
            <ChromeIcon />
            Add to Chrome — Free
          </Button>
        </div>
      </div>
    </section>
  );
}
