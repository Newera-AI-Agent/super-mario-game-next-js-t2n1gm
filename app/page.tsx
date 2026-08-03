"use client";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#1a1a2e] flex items-center justify-center overflow-hidden">
      <iframe
        src="/mario/game.html"
        className="w-full h-full max-w-[850px] max-h-[520px] border-none"
        title="Super Mario"
      />
    </main>
  );
}
