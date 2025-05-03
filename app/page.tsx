import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link
        href="/studio"
        className="underline opacity-70 hover:opacity-100 transition-opacity"
      >
        Visit /studio
      </Link>
    </div>
  );
}
