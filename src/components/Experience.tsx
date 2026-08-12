import { motion } from "framer-motion";

const timeline = [
  {
    period: "2026 — Present",
    title: "Web Platform · Lighting & Solar Panels",
    place: "Independent project",
    description:
      "Design and development of a website for a lighting and solar panel company, integrating UX/UI and AI tools.",
  },
  {
    period: "2024 — 2025",
    title: "UX/UI Designer",
    place: "Desafío Latam",
    description:
      "Intensive UX/UI design training: user research, information architecture, prototyping, and usability testing applied to a real case study.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-bg py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-700/15 blur-[130px]" />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-display text-xl font-medium tracking-wide text-violet-400 sm:text-2xl">
            EXPERIENCE
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            My journey
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-bg bg-violet-500 shadow-[0_0_12px_2px_rgba(168,85,247,0.6)]" />
              <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">
                {item.period}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-sm text-ink-faint">{item.place}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-dim">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
