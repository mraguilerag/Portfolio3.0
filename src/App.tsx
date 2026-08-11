import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#8b3ff0"
        BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        SPLAT_FORCE={4500}
        DENSITY_DISSIPATION={4}
      />
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
