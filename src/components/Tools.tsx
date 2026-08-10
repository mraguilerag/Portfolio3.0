import { motion } from "framer-motion";
import { designTools, frontEndTools, otherTools } from "../data/skills";

const groups = [
  { title: "Diseño", items: designTools },
  { title: "Front-End", items: frontEndTools },
  { title: "Herramientas", items: otherTools },
];

export default function Tools() {
  return (
    <section className="relative bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400">
            STACK
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Herramientas y tecnologías
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="mb-5 text-sm font-semibold text-ink-dim">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-2.5 text-sm text-ink transition-colors hover:border-violet-500/40 hover:text-violet-300"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
