import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
