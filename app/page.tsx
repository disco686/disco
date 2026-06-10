import Link from "next/link";

const floatingCreatures = [
  { emoji: "🪷", label: "需求菩萨", className: "top-4 left-8 float-slow" },
  {
    emoji: "⏰",
    label: "Deadline 亡灵",
    className: "top-10 right-10 float-medium",
  },
  { emoji: "🪄", label: "PPT 法师", className: "bottom-12 left-6 float-fast" },
  {
    emoji: "🤿",
    label: "群聊潜水员",
    className: "bottom-6 right-12 float-slow",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 px-6 py-8 text-zinc-50">
      <section className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            OBTI
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/types"
              className="hidden rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900 sm:inline-flex"
            >
              职场生物图鉴
            </Link>

            <a
              href="https://github.com/disco686/disco"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              GitHub ⭐
            </a>
          </div>
        </nav>

        <div className="relative mt-16 grid min-h-[680px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-100">
              <span>🧪</span>
              <span>一个不太正经，但有点准的职场精神状态测试</span>
            </div>

            <h1 className="mt-8 max-w-4xl font-black leading-tight tracking-tight">
              <span className="block text-7xl sm:text-8xl lg:text-9xl">
                OBTI
              </span>

              <span className="mt-3 block text-lg font-semibold text-zinc-400 sm:text-2xl">
                (Office Beast Type Indicator)
              </span>

              <span className="neon-text mt-5 block text-3xl sm:text-5xl">
                别装正常了，测测你的职场物种
              </span>
            </h1>
            
            <p className="mt-7 max-w-2xl text-xl leading-9 text-zinc-300">
              会议、群聊、需求、deadline、绩效、背锅……
              用 3 分钟测测你到底是哪种职场生物。
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">
              这不是心理诊断，也不是 HR 工具。它只是一面照妖镜
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/test"
                className="rounded-full bg-zinc-50 px-8 py-4 text-center text-lg font-bold text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.18)] hover:bg-zinc-200"
              >
                开始被诊断 →
              </Link>

              <Link
                href="/types"
                className="rounded-full border border-zinc-700 px-8 py-4 text-center text-lg font-bold text-zinc-100 hover:bg-zinc-900"
              >
                先看看图鉴
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2">
                26 道职场场景题
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2">
                12 种职场生物
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2">
                可保存结果卡
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2">
                开源可 fork
              </span>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute inset-12 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="glass-card relative mx-auto flex h-[520px] max-w-[520px] items-center justify-center rounded-[2.5rem] border border-zinc-800 shadow-2xl">
              <div className="absolute inset-8 rounded-[2rem] border border-zinc-800/80" />

              <div className="relative z-10 text-center">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-zinc-700 bg-zinc-950 text-7xl shadow-2xl">
                  🧟‍♂️
                </div>

                <h2 className="mt-8 text-3xl font-black">Office Creature</h2>

                <p className="mx-auto mt-4 max-w-xs text-zinc-400">
                  正在扫描你的职场精神状态：
                  会议耐受度、背锅概率、deadline 复活能力……
                </p>

                <div className="mx-auto mt-8 h-3 w-64 overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-400 via-cyan-300 to-amber-200" />
                </div>
              </div>

              {floatingCreatures.map((item) => (
                <div
                  key={item.label}
                  className={`absolute ${item.className} rounded-3xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-xl`}
                >
                  <div className="text-4xl">{item.emoji}</div>
                  <p className="mt-2 whitespace-nowrap text-xs text-zinc-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8 text-center">
          <h2 className="text-3xl font-black">
            如果你上班时经常觉得：
            <span className="neon-text block">“我到底在经历什么？”</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
            那你可能不是一个人。你只是还没找到自己的职场生物学分类。
          </p>

          <Link
            href="/test"
            className="mt-8 inline-flex rounded-full bg-zinc-50 px-8 py-4 font-bold text-zinc-950 hover:bg-zinc-200"
          >
            立即开始测试
          </Link>
        </div>
      </section>
    </main>
  );
}