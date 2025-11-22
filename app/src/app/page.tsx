"use client";

import { useMemo, useState } from "react";

const lightLayers = [
  {
    title: "بزوغ",
    description:
      "أول خيط للنور، لحظة يقظة تستشعر فيها الروح أن ما كان معتماً صار قابلاً للانفتاح.",
    tone: "from-amber-500/70 to-rose-500/40",
  },
  {
    title: "إشراق",
    description:
      "اتساع الدائرة حتى تلامس الآخرين. نور الكلمة يتعدى صاحبها ليعكس أثراً على الوجوه المحيطة.",
    tone: "from-sky-500/60 to-emerald-400/30",
  },
  {
    title: "سكينة",
    description:
      "ضوء داخلي هادئ، لا يصرخ ولا يخفت. إنما يثبت كنجمة تهدي السائرين وتطمئن القلوب.",
    tone: "from-violet-400/60 to-fuchsia-400/40",
  },
];

const reflections = [
  "النور كلمة إذا نطقت بها فاض قلبك بطمأنينةٍ لا تُحَد.",
  "من يزرع حرفاً نقياً يقرأه الآخرون على هيئة إشراقة.",
  "اللغةُ نورٌ حين تلامس الجوهر ولا تكتفي بالقشور.",
];

export default function Home() {
  const [intensity, setIntensity] = useState(62);
  const [warmth, setWarmth] = useState(48);

  const glowColor = useMemo(() => {
    const hue = 40 + warmth * 1.2;
    return `hsl(${hue}, 85%, ${60 + intensity * 0.25}%)`;
  }, [intensity, warmth]);

  const blurStrength = useMemo(() => {
    return `${Math.round(8 + intensity * 0.45)}px`;
  }, [intensity]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,214,113,0.38),rgba(16,16,16,0.05))] blur-3xl" />
        <div className="absolute right-[-8rem] top-[-10rem] h-[46rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(162,194,255,0.35),rgba(16,16,16,0.05))] blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(10,10,10,0.6))]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:pt-20">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <header className="flex flex-col items-center text-center sm:text-right lg:items-end lg:text-right">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-amber-200/70 sm:text-xs">
              <span className="h-px w-10 bg-amber-200/60" />
              كلمة نور
              <span className="h-px w-10 bg-amber-200/60" />
            </div>
            <div className="relative mt-8 rounded-3xl bg-zinc-900/40 px-10 py-12 shadow-[0_0_120px_rgba(255,209,124,0.15)] ring-1 ring-amber-100/10 backdrop-blur-xl">
              <div className="absolute inset-x-10 top-6 h-32 rounded-full bg-gradient-to-r from-amber-500/20 via-white/20 to-amber-400/15 blur-3xl" />
              <h1
                className="relative font-[var(--font-arabic)] text-8xl font-semibold leading-tight text-amber-100 drop-shadow-[0_0_35px_rgba(255,202,138,0.55)] sm:text-9xl"
                style={{
                  textShadow: `0 0 ${blurStrength} ${glowColor}`,
                  color: glowColor,
                }}
              >
                نور
              </h1>
              <p className="relative mt-8 max-w-xl text-lg leading-8 text-zinc-200/80">
                حروف ثلاثة تُضيء المعنى، وتمنح اللغةَ ممرّاً بين الداخل والخارج.
                حين نقول نوراً، نتخيل دفئاً ووضوحاً وأملاً يتسرب مع كل نفس.
              </p>
            </div>
          </header>

          <aside className="flex flex-col justify-between gap-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl">
            <div className="space-y-6" dir="rtl">
              <h2 className="text-2xl font-semibold text-amber-50">
                أنماط الوهج
              </h2>
              <p className="text-base leading-7 text-zinc-200/80">
                تحكم بدرجة الإشراق وحرارته لتختبر كيف تتبدل هالة الكلمة بين دفء
                عنبرٍ لطيف وسطوع شمسٍ لا تُحَد. التوازن بينهما يصنع قصتك الخاصة.
              </p>
            </div>

            <div className="space-y-8" dir="rtl">
              <label className="flex flex-col gap-3 text-sm text-zinc-300/90">
                شدة الوهج
                <input
                  type="range"
                  min={20}
                  max={100}
                  value={intensity}
                  onChange={(event) => setIntensity(Number(event.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-zinc-600/40 accent-amber-300"
                />
                <span className="text-xs text-zinc-400">
                  {intensity}% من الضوء المنبعث
                </span>
              </label>

              <label className="flex flex-col gap-3 text-sm text-zinc-300/90">
                دفء اللون
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={warmth}
                  onChange={(event) => setWarmth(Number(event.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-zinc-600/40 accent-sky-300"
                />
                <span className="text-xs text-zinc-400">
                  ميل إلى طيف {warmth < 50 ? "الفجر" : "الغروب"}
                </span>
              </label>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs tracking-[0.12em] text-white/70">
                <div className="flex items-center justify-between">
                  <span>GLARE</span>
                  <span>{Math.round(intensity * 1.6)} nits</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-zinc-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-200 to-sky-300"
                    style={{ width: `${intensity}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs text-zinc-300/70" dir="rtl">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <div className="text-[10px] uppercase tracking-[0.4em] text-amber-200/60">
                  hue
                </div>
                <div className="mt-2 text-lg" style={{ color: glowColor }}>
                  {Math.round(40 + warmth * 1.2)}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <div className="text-[10px] uppercase tracking-[0.4em] text-amber-200/60">
                  bloom
                </div>
                <div className="mt-2 text-lg">{blurStrength}</div>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {lightLayers.map((layer) => (
            <div
              key={layer.title}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-8 backdrop-blur-xl transition hover:border-amber-200/30"
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${layer.tone} opacity-0 transition duration-500 group-hover:opacity-100`}
                style={{ filter: "blur(90px)" }}
              />
              <div className="flex h-full flex-col gap-6" dir="rtl">
                <span className="text-sm uppercase tracking-[0.5em] text-amber-300/80">
                  {layer.title}
                </span>
                <p className="text-base leading-7 text-zinc-200/80">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8 rounded-3xl border border-white/5 bg-zinc-900/60 p-10 backdrop-blur-xl" dir="rtl">
            <h2 className="text-3xl font-semibold text-amber-100">
              رحلة الضوء في اللغة
            </h2>
            <div className="space-y-6 text-base leading-7 text-zinc-200/80">
              <p>
                في العربية، النورُ يتعدى الضوء الحسّي ليصف بصيرةً داخليةً،
                وتمييزاً بين الحق وتشوش الظلال. هو البيان، وهو الهداية، وهو ما
                يعيد ترتيب الأشياء في وضوحٍ تام.
              </p>
              <p>
                حروفه تبدأ بنونٍ مستديرة كقنديل، تليها واوٌ تحتضن المعنى، ثم
                راءٌ تُشير إلى الذروة حيث يتكثّف اللمعان. عند رسم الكلمة نشعر
                بأن الخط يلمع بإيقاع متزن بين الانحناء والاستقامة.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-amber-200/10 via-white/5 to-transparent p-10 backdrop-blur-xl" dir="rtl">
            <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-gradient-to-br from-amber-400/50 to-pink-400/20 blur-2xl" />
            <div className="absolute -left-6 bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/40 to-emerald-300/20 blur-2xl" />
            <div className="relative space-y-6 text-zinc-200/80">
              {reflections.map((reflection, index) => (
                <blockquote
                  key={reflection}
                  className="rounded-2xl border border-white/10 bg-black/50 p-6 text-sm leading-7 shadow-[0_0_30px_rgba(255,208,122,0.15)]"
                  style={{
                    borderColor: `rgba(255, 208, 122, ${0.15 + index * 0.1})`,
                  }}
                >
                  <span className="text-amber-200/70">﴿</span>
                  <span className="px-3">{reflection}</span>
                  <span className="text-amber-200/70">﴾</span>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-black/60 px-8 py-10 text-xs uppercase tracking-[0.35em] text-zinc-400/80 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <span>نور • كلمة تكتب الضوء</span>
          <span>Designed for luminous minds</span>
          <span>Intensity {intensity}% · Warmth {warmth}%</span>
        </footer>
      </main>
    </div>
  );
}
