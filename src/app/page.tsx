import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Intro />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
