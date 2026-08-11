import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import type { Project } from "../data/projects";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const rotateAmplitude = 8;
const scaleOnHover = 1.03;

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className={`group flex flex-col overflow-hidden rounded-2xl border bg-surface transition-colors ${
          project.placeholder
            ? "border-dashed border-white/15 hover:border-violet-500/40"
            : "border-white/10 hover:border-violet-500/40"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-44 w-full object-cover"
          />
        ) : (
          <div className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-700/20 via-surface to-surface-raised">
            <LayoutTemplate className="h-10 w-10 text-violet-400/60" />
          </div>
        )}

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
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-ink-dim"
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
              View project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint">
              {project.linkLabel ?? "Link coming soon"}
            </span>
          )}
        </div>
      </motion.article>
    </div>
  );
}
