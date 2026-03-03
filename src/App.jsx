import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ValuePillars from './components/ValuePillars';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillGrid from './components/SkillGrid';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggleTheme = () => setDark((v) => !v);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar dark={dark} onToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <ValuePillars />
        <Experience />
        <Projects />
        <SkillGrid />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;