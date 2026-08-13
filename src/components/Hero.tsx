import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";
import DepthText from "./DepthText";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

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
          className="h-full w-full object-cover object-[47%_24%] lg:translate-x-12 lg:object-[100%_27%]"
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
        <div className="flex min-h-[100dvh] flex-col px-6 pb-16 pt-28 lg:pl-32 lg:pr-12 lg:pt-24 xl:pl-44">
          <div className="mt-6 lg:mt-8">
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="mb-3 font-display text-xl font-light tracking-[0.05em] text-violet-400 sm:text-2xl"
            >
              Hello, I'm
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
                  fontSize="clamp(2.4rem, 7.9vw, 5.25rem)"
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
                  fontSize="clamp(2.4rem, 7.9vw, 5.25rem)"
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
              <span className="font-display text-base font-medium tracking-[0.1em] text-ink-dim sm:text-lg">
                UX/UI DESIGNER
              </span>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.35}
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-ink-dim"
            >
              I design fun & intuitive websites,
              <br />
              currently exploring AI as part of the process.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
