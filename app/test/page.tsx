"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";


const options = [
  { label: "这谁？不是我", value: 1 },
  { label: "非常不同意", value: 2 },
  { label: "不同意", value: 3 },
  { label: "不确定", value: 4 },
  { label: "同意", value: 5 },
  { label: "非常同意", value: 6 },
  { label: "别念了，这就是我", value: 7 },
];


export default function TestPage() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const currentQuestion = questions[currentIndex];

  function handleAnswer(value: number) {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };

    setAnswers(nextAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      localStorage.setItem("worksona_answers", JSON.stringify(nextAnswers));
      router.push("/result");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-6">
      <section className="w-full max-w-2xl">
        <div className="mb-8">
          <p className="text-sm text-zinc-400">
            Question {currentIndex + 1} / {questions.length}
          </p>

          <div className="mt-3 h-2 rounded-full bg-zinc-800">
            <div
              className="h-2 rounded-full bg-zinc-100 transition-all"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl">
          <h1 className="text-2xl font-semibold leading-relaxed">
            {currentQuestion.text}
          </h1>

          <div className="mt-8 grid gap-3">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="rounded-2xl border border-zinc-700 px-5 py-4 text-left hover:bg-zinc-800 transition"
              >
                {option.label}
              </button>
              
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}