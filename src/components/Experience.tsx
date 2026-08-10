import { motion } from "framer-motion";

const timeline = [
  {
    period: "2026 — Actualidad",
    title: "Plataforma web · Iluminación y paneles solares",
    place: "Proyecto independiente",
    description:
      "Diseño y desarrollo de una plataforma web para una empresa de iluminación y paneles solares, integrando UX/UI y herramientas de IA.",
  },
  {
    period: "2024 — 2025",
    title: "UX/UI Designer",
    place: "Desafío Latam",
    description:
      "Formación intensiva en diseño UX/UI: investigación de usuarios, arquitectura de información, prototipado y pruebas de usabilidad aplicadas a un caso de estudio real.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400">
            EXPERIENCIA
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Mi trayectoria
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
