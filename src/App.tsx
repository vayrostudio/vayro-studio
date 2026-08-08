import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Process from './sections/Process';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Cursor from './components/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
