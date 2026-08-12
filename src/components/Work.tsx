import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-bg py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-violet-700/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <span className="font-display text-xl font-medium tracking-wide text-violet-400 sm:text-2xl">
            PROJECTS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-4 text-ink-dim">
            A selection of work where I combine UX research, interface
            design, and front-end development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title + i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
