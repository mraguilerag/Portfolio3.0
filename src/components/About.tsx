import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";

const skills = [
  "UX Research",
  "Interaction Design",
  "UI Design",
  "Information Architecture",
  "Prototyping",
  "Usability Testing",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-violet-700/15 blur-[130px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-xl font-medium tracking-wide text-violet-400 sm:text-2xl">
            ABOUT ME
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            I design with intention,
            <br />
            I build with code.
          </h2>

          <div className="mt-6 space-y-4 text-ink-dim">
            <p>
              Certified UX/UI Designer and Front-End Developer in training.
              I'm driven by solving real problems through digital solutions
              centered on people.
            </p>
            <p>
              Curious, creative, and always learning — I love taking an idea
              from research and wireframes all the way to a working
              interface in the browser.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-surface px-4 py-3 w-fit">
            <span className="text-xs uppercase tracking-wide text-ink-faint">
              Location
            </span>
            <span className="text-sm font-medium text-ink">Latin America</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-ink-faint">
            FOCUS
          </span>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <BorderGlow
                key={skill}
                borderRadius={12}
                backgroundColor="#120f1a"
                glowRadius={16}
                edgeSensitivity={35}
              >
                <div className="px-4 py-4 text-sm font-medium text-ink transition-colors">
                  {skill}
                </div>
              </BorderGlow>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
