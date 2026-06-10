"use client";

import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import { toPng } from "html-to-image";

import { archetypes } from "@/data/archetypes";
import { questions } from "@/data/questions";
import {
  calculateConfidence,
  calculateScores,
  findBestArchetype,
  type DimensionScores,
} from "@/lib/scoring";
import type { Answer, Archetype } from "@/types/quiz";

const dimensionLabels = {
  initiative: "推进力",
  structure: "结构感",
  expression: "表达欲",
  boundary: "边界感",
  stability: "稳定性",
  empathy: "共情度",
  ambition: "野心值",
  reflection: "反思度",
};

export default function ResultPage() {
  const cardRef = useRef<HTMLDivElement>(null);

  const savedAnswers = useSyncExternalStore(
    () => () => {},
    () => localStorage.getItem("worksona_answers"),
    () => null
  );

  let scores: DimensionScores | null = null;
  let archetype: Archetype | null = null;
  let confidence = 0;

  if (savedAnswers) {
    const answerObject = JSON.parse(savedAnswers) as Record<string, number>;

    const answers: Answer[] = Object.entries(answerObject).map(
      ([questionId, value]) => ({
        questionId,
        value,
      })
    );

    scores = calculateScores(questions, answers);
    archetype = findBestArchetype(scores, archetypes);
    confidence = calculateConfidence(answers);
  }

  async function handleDownload() {
    if (!cardRef.current) return;

    const dataUrl = await toPng(cardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = "obti-result.png";
    link.href = dataUrl;
    link.click();
  }

  if (!scores || !archetype) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl">还没有测试结果。</p>
          <Link
            href="/test"
            className="mt-6 inline-flex rounded-full bg-zinc-50 px-6 py-3 text-zinc-950"
          >
            去测试
          </Link>
        </div>
      </main>
    );
  }

    return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-12">
        <section className="mx-auto max-w-3xl">
        <div
            ref={cardRef}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl"
        >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Worksona Result
            </p>

            <div className="mt-6 text-7xl">{archetype.emoji}</div>

            <h1 className="mt-5 text-4xl font-bold">{archetype.name}</h1>

            <p className="mt-2 text-xl text-zinc-400">
            {archetype.englishName}
            </p>

            <p className="mt-6 text-2xl font-medium">{archetype.title}</p>

            <p className="mt-6 leading-8 text-zinc-300">
            {archetype.description}
            </p>

            <div className="mt-8 rounded-2xl bg-zinc-950 p-5">
            <p className="text-sm text-zinc-400">结果可信度</p>
            <p className="mt-2 text-3xl font-semibold">{confidence}%</p>
            </div>
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold">人格特质解释</h2>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
            这个结果由你的 8 个职场行为维度计算得出。它不是心理诊断，而是一面帮助你理解工作模式的镜子。
            </p>

            <div className="mt-6 space-y-6 text-zinc-300">
            <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Core Pattern
                </h3>
                <p className="mt-3 leading-8">{archetype.traitSummary}</p>
            </section>

            <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Workplace Pattern
                </h3>
                <p className="mt-3 leading-8">{archetype.workplacePattern}</p>
            </section>

            <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                How Others See You
                </h3>
                <p className="mt-3 leading-8">{archetype.howOthersSeeYou}</p>
            </section>

            <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Inner Conflict
                </h3>
                <p className="mt-3 leading-8">{archetype.innerConflict}</p>
            </section>
            </div>
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold">你的维度分数</h2>

            <div className="mt-6 space-y-5">
            {Object.entries(scores).map(([dimension, score]) => (
                <div key={dimension}>
                <div className="flex justify-between text-sm">
                    <span>
                    {dimensionLabels[dimension as keyof typeof dimensionLabels]}
                    </span>
                    <span>{score}</span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-zinc-800">
                    <div
                    className="h-2 rounded-full bg-zinc-100"
                    style={{ width: `${score}%` }}
                    />
                </div>
                </div>
            ))}
            </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-xl font-semibold">你的超能力</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
                {archetype.strengths.map((item) => (
                <li key={item}>• {item}</li>
                ))}
            </ul>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-xl font-semibold">你的风险</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
                {archetype.risks.map((item) => (
                <li key={item}>• {item}</li>
                ))}
            </ul>
            </div>
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold">未来 7 天建议</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
            {archetype.advice.map((item) => (
                <li key={item}>• {item}</li>
            ))}
            </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
            onClick={handleDownload}
            className="rounded-full bg-zinc-50 px-6 py-3 text-center font-medium text-zinc-950"
            >
            Save Result Card
            </button>

            <Link
            href="/test"
            className="rounded-full border border-zinc-700 px-6 py-3 text-center font-medium text-zinc-100 hover:bg-zinc-900"
            >
            Retake Test
            </Link>

            <a
            href="https://github.com/disco686/disco"
            target="_blank"
            className="rounded-full border border-zinc-700 px-6 py-3 text-center font-medium text-zinc-100 hover:bg-zinc-900"
            >
            Star on GitHub
            </a>
        </div>
        </section>
    </main>
    );
  
}