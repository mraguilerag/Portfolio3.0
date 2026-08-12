import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.png";
import { heroBubbles } from "../data/skills";
import DepthText from "./DepthText";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const bubbleLayout = [
  { size: 58, marginTop: 0, delay: 0.9 },
  { size: 43, marginTop: 16, delay: 1.05 },
  { size: 50, marginTop: 32, delay: 1.2 },
  { size: 40, marginTop: 43, delay: 1.35 },
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
          className="h-full w-full object-cover object-[47%_20%] lg:translate-x-12 lg:object-[100%_22%]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-bg/60 lg:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--color-bg)_0%,var(--color-bg)_24%,transparent_52%)] lg:block" />
        <div className="absolute inset-y-0 right-0 z-[1] hidden w-[30%] bg-gradient-to-l from-bg/58 via-bg/20 to-transparent blur-md lg:block" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="pointer-events-none absolute -left-48 top-1/4 z-0 h-72 w-72 rounded-full bg-violet-600/12 blur-[130px]" />

      <div className="relative z-10 mx-auto min-h-[100dvh] max-w-7xl">
        <div className="flex min-h-[100dvh] flex-col justify-center px-6 pb-16 pt-24 lg:pl-32 lg:pr-12 lg:pt-20 xl:pl-44">
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
            >
              <div>
                <DepthText
                  text="MARÍA"
                  className="font-display"
                  faceColor="#f6f4f9"
                  depthColor="#8b3ff0"
                  fontSize="clamp(2.75rem, 9vw, 6rem)"
                  fontWeight={600}
                  layers={28}
                  depth={2}
                  tilt={7}
                  orbitSpeed={0.3}
                  shadow={false}
                />
              </div>
              <div>
                <DepthText
                  text="AGUILERA"
                  className="font-display"
                  faceColor="#c4b5fd"
                  depthColor="#6d28d9"
                  fontSize="clamp(2.75rem, 9vw, 6rem)"
                  fontWeight={600}
                  layers={28}
                  depth={2}
                  tilt={7}
                  orbitSpeed={0.3}
                  shadow={false}
                />
              </div>
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
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-800 px-8 py-4 text-base font-semibold text-white shadow-[0_4px_18px_-6px_rgba(139,63,240,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_-4px_rgba(139,63,240,0.7)]"
            >
              See my work
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>

          <div className="mt-[18px] flex flex-wrap items-start gap-4">
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
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ width: size, height: size }}
                    className="flex flex-col items-center justify-center gap-0.5 rounded-full border border-violet-400/10 bg-surface/60 shadow-[0_0_9px_-6px_rgba(139,63,240,0.25)] opacity-80 backdrop-blur-sm transition-opacity hover:opacity-100"
                  >
                    <Icon
                      style={{ color }}
                      className={`h-4 opacity-80 ${label === "Figma" ? "w-auto" : "w-4"}`}
                    />
                    <span className="text-[9px] font-medium text-ink-faint">
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
