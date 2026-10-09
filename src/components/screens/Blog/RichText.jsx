import Link from "next/link";

// Renders text containing [label](/path) links.
export default function RichText({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? (
      <Link key={i} href={m[2]}>
        {m[1]}
      </Link>
    ) : (
      part
    );
  });
}
