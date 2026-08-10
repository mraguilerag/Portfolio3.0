import { motion } from "framer-motion";
import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section id="work" className="relative bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400">
            PROYECTOS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-ink-dim">
            Una selección de trabajos donde combino investigación UX, diseño
            de interfaces y desarrollo front-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={`group flex flex-col overflow-hidden rounded-2xl border bg-surface transition-colors ${
                project.placeholder
                  ? "border-dashed border-white/15 hover:border-violet-500/40"
                  : "border-white/10 hover:border-violet-500/40"
              }`}
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-700/20 via-surface to-surface-raised">
                <LayoutTemplate className="h-10 w-10 text-violet-400/60" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {project.description}
                </p>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-violet-400">
                  {project.role}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-ink-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex-1" />

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200"
                  >
                    Ver proyecto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint">
                    {project.linkLabel ?? "Link próximamente"}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
