import { ShieldCheckIcon, DatabaseOffIcon, LockKeyIcon } from "@/components/icons";

const pillars = [
  {
    icon: <ShieldCheckIcon />,
    title: "Local processing only",
    description:
      "EPUB files are generated entirely inside your browser. Your article content never leaves your device or touches an app server.",
  },
  {
    icon: <DatabaseOffIcon />,
    title: "No data collection",
    description:
      "We do not collect, analyze, sell, or store your browsing history or article content. Settings like your Kindle email are stored locally in Chrome's storage only.",
  },
  {
    icon: <LockKeyIcon />,
    title: "Minimal permissions",
    description:
      "Google sign-in is optional and only requests gmail.send — it cannot read your inbox. The extension only accesses the active tab when you explicitly trigger it.",
  },
];

export default function PrivacySection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-parchment" id="privacy">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
            Your privacy, by design
          </h2>
          <p className="text-ink-light text-lg max-w-xl mx-auto">
            Built to work without ever touching a server. Your articles stay yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-cream border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="text-sage">{pillar.icon}</div>
              <h3 className="font-[var(--font-lora)] text-lg font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="text-ink-light text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
