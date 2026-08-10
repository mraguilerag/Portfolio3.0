import { motion } from "framer-motion";

const skills = [
  "UX Research",
  "Diseño de interacción",
  "Diseño UI",
  "Arquitectura de información",
  "Prototipado",
  "Pruebas de usabilidad",
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400">
            SOBRE MÍ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Diseño con intención,
            <br />
            construyo con código.
          </h2>

          <div className="mt-6 space-y-4 text-ink-dim">
            <p>
              Diseñadora UX/UI certificada y Front-End en formación. Me
              motiva resolver problemas reales a través de soluciones
              digitales centradas en las personas.
            </p>
            <p>
              Curiosa, creativa y en constante aprendizaje — disfruto llevar
              una idea desde la investigación y el wireframe hasta una
              interfaz funcional en el navegador.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-surface px-4 py-3 w-fit">
            <span className="text-xs uppercase tracking-wide text-ink-faint">
              Ubicación
            </span>
            <span className="text-sm font-medium text-ink">Latinoamérica</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-ink-faint">
            ENFOQUE
          </span>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-surface px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-violet-500/40"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
