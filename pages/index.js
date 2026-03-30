import Head from 'next/head';
import Cursor       from '../components/Cursor';
import Navbar       from '../components/Navbar';
import Hero         from '../components/Hero';
import About        from '../components/About';
import Skills       from '../components/Skills';
import Projects     from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact      from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Divyansh Mishra — Builder & Dev</title>
        <meta name="description" content="Portfolio of Divyansh Mishra — Mechatronics, Full-Stack Developer, Competitive Programmer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
