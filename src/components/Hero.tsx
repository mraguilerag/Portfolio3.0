import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.png";
import { heroBubbles } from "../data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const bubbleLayout = [
  { size: 76, marginTop: 0, delay: 0.9 },
  { size: 58, marginTop: 20, delay: 1.05 },
  { size: 66, marginTop: 42, delay: 1.2 },
  { size: 52, marginTop: 56, delay: 1.35 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="3D illustration of María Aguilera working at her laptop"
          className="h-full w-full object-cover object-[75%_18%] lg:object-[100%_22%]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-bg/60 lg:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--color-bg)_0%,var(--color-bg)_24%,transparent_52%)] lg:block" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="pointer-events-none absolute -left-48 top-1/4 z-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[110px]" />

      <div className="relative z-10 mx-auto min-h-[100dvh] max-w-7xl">
        <div className="flex min-h-[100dvh] flex-col justify-center px-6 pb-16 pt-24 lg:pl-28 lg:pr-12 lg:pt-20 xl:pl-36">
          <div className="mt-6 lg:mt-8">
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="mb-3 text-sm font-semibold tracking-[0.3em] text-violet-400"
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-widest text-ink sm:text-6xl lg:text-7xl"
            >
              María
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                Aguilera
              </span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.25}
              variants={fadeUp}
              className="mt-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-violet-500/60" />
              <span className="text-xs font-semibold tracking-[0.2em] text-ink-dim">
                UX/UI DESIGNER · FRONT-END IN TRAINING
              </span>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.35}
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-ink-dim"
            >
              I design intuitive digital experiences
              <br />
              and bring them to life on the web.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.45}
            variants={fadeUp}
            className="mt-8"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-700 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_-8px_rgba(139,63,240,0.8)] transition-transform hover:scale-[1.03]"
            >
              See my work
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>

          <div className="mt-7 flex flex-wrap items-start gap-3">
            {heroBubbles.map(({ label, icon: Icon, color }, i) => {
              const { size, marginTop, delay } = bubbleLayout[i];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay, ease: "easeOut" }}
                  style={{ marginTop }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ width: size, height: size }}
                    className="flex flex-col items-center justify-center gap-0.5 rounded-full border border-violet-400/30 bg-surface/80 shadow-[0_0_25px_-6px_rgba(139,63,240,0.6)] backdrop-blur-sm"
                  >
                    <Icon style={{ color }} className="h-1/3 w-1/3" />
                    <span className="text-[9px] font-medium text-ink-dim">
                      {label}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
