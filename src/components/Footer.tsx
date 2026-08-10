export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-bg py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-ink-faint sm:flex-row lg:px-12">
        <span>&copy; {year} María Aguilera</span>
        <span>Diseñado y construido por María Aguilera</span>
      </div>
    </footer>
  );
}
