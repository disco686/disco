import Link from "next/link";
import { archetypes } from "@/data/archetypes";

export default function TypesPage() {
  return (
    <main className="min-h-screen grid-bg bg-zinc-950 px-6 py-16 text-zinc-50">
      <section className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Worksona Atlas
            </p>
            <h1 className="mt-4 text-5xl font-black">职场生物图鉴</h1>
          </div>

          <Link
            href="/test"
            className="rounded-full bg-zinc-50 px-6 py-3 font-medium text-zinc-950"
          >
            Start Test
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {archetypes.map((type) => (
            <div
              key={type.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 hover:border-zinc-600"
            >
              <div className="text-5xl">{type.emoji}</div>
              <h2 className="mt-5 text-2xl font-bold">{type.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">{type.englishName}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {type.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}