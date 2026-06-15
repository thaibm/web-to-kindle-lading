import {
  CheckCircleIcon,
  LockIcon,
  StarOutlineIcon,
  TextLinesIcon,
} from "@/components/icons";

const badges = [
  { icon: <CheckCircleIcon />, text: "Fully local — runs in your browser" },
  { icon: <LockIcon />, text: "No server receives your articles" },
  { icon: <StarOutlineIcon />, text: "No account required to download EPUB" },
  { icon: <TextLinesIcon />, text: "Clean reading — ads & menus removed" },
];

export default function SocialProofBar() {
  return (
    <section className="bg-parchment border-y border-border py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <li
              key={badge.text}
              className="flex items-center gap-2 text-ink-light text-sm"
            >
              <span className="text-sage">{badge.icon}</span>
              {badge.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
