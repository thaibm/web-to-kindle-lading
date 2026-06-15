import FeatureCard from "@/components/ui/FeatureCard";
import {
  AlignLeftIcon,
  FileImageIcon,
  FileListIcon,
  PagePreviewIcon,
  DownloadFileIcon,
  SendKindleIcon,
} from "@/components/icons";

const features = [
  {
    icon: <AlignLeftIcon />,
    title: "Distraction-free extraction",
    description:
      "Strips menus, footers, sidebars, and ads using Defuddle — leaving only the article you actually want to read.",
  },
  {
    icon: <FileImageIcon />,
    title: "EPUB generated in-browser",
    description:
      "Creates valid EPUB files client-side with preserved headings, lists, tables, code blocks, and embedded images.",
  },
  {
    icon: <FileListIcon />,
    title: "Auto table of contents",
    description:
      "Builds a navigable table of contents from article headings automatically — perfect for long-form reads.",
  },
  {
    icon: <PagePreviewIcon />,
    title: "Live preview in side panel",
    description:
      "Review the cleaned article in Chrome's side panel before saving — edit the title and author to your liking.",
  },
  {
    icon: <DownloadFileIcon />,
    title: "Save selections as EPUB",
    description:
      "Select any text on a page and convert just that passage to EPUB — great for research snippets or long threads.",
  },
  {
    icon: <SendKindleIcon />,
    title: "Send directly to Kindle",
    description:
      "Optionally deliver EPUBs straight to your Kindle email using your connected Gmail account — one click away.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 px-4 sm:px-6" id="features">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-[var(--font-lora)] text-3xl sm:text-4xl font-bold text-ink">
            Everything you need for better reading
          </h2>
          <p className="text-ink-light text-lg max-w-xl mx-auto">
            One extension. Clean articles. Your Kindle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
