import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SplashCursor = lazy(() => import("./components/SplashCursor"));

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    setIsDesktop(query.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {isDesktop && (
        <Suspense fallback={null}>
          <SplashCursor
            RAINBOW_MODE={false}
            COLOR="#8b3ff0"
            BACK_COLOR={{ r: 0, g: 0, b: 0 }}
            SPLAT_FORCE={4500}
            DENSITY_DISSIPATION={4}
          />
        </Suspense>
      )}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
