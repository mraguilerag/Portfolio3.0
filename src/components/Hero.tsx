import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroAvatar from "../assets/hero-avatar.png";
import { heroBubbles } from "../data/skills";
import { socialLinks } from "../data/social";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const bubbleLayout = [
  { size: 96, marginTop: 0, delay: 0.9 },
  { size: 74, marginTop: 30, delay: 1.05 },
  { size: 82, marginTop: 64, delay: 1.2 },
  { size: 66, marginTop: 84, delay: 1.35 },
  { size: 106, marginTop: 44, delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-700/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8 lg:px-12">
        <div className="relative flex gap-8">
          <div className="hidden flex-col items-center gap-5 pt-3 lg:flex">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-ink-dim transition-colors hover:text-violet-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div>
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="mb-4 text-sm font-semibold tracking-[0.3em] text-violet-400"
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="font-display text-5xl font-bold uppercase leading-[0.95] text-ink sm:text-6xl lg:text-7xl"
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
              className="mt-6 flex items-center gap-3"
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
              className="mt-6 max-w-md text-base leading-relaxed text-ink-dim"
            >
              Diseño experiencias digitales intuitivas y las llevo a la vida
              en la web.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.45}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(139,63,240,0.8)] transition-transform hover:scale-[1.03]"
              >
                See my work
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-violet-300"
              >
                Learn more
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink-dim/40 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-start gap-4">
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
                      className="flex flex-col items-center justify-center gap-1 rounded-full border border-violet-400/30 bg-surface/80 shadow-[0_0_25px_-6px_rgba(139,63,240,0.6)] backdrop-blur-sm"
                    >
                      <Icon style={{ color }} className="h-1/3 w-1/3" />
                      <span className="text-[10px] font-medium text-ink-dim">
                        {label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-violet-600/25 blur-[100px]" />

          <img
            src={heroAvatar}
            alt="Ilustración 3D de María Aguilera trabajando en su laptop"
            className="relative z-10 w-full select-none"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
