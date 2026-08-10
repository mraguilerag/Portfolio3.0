import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { socialLinks } from "../data/social";

const EMAIL = "mraguilerag@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400">
            CONTACT
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-5xl">
            Let's work together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-dim">
            Have a project in mind, or looking to add someone with a UX/UI
            and front-end eye to your team? Let's talk.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(139,63,240,0.8)] transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" />
              Hire me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-violet-500/40 hover:text-violet-300"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-violet-300"
              >
                <Icon className="h-4 w-4" />
                {label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
