import { useEffect, useRef } from 'react';
import s from './Projects.module.css';

const PROJECTS = [
  {
    num: '01',
    title: 'Agentic Honeypot API',
    desc: 'AI-powered honeypot that autonomously detects scam intent via pattern matching + GPT-4.5 LLM analysis. Engages scammers in realistic dialogue to extract bank accounts, UPI IDs and phishing links. Serverless-ready on Vercel.',
    stack: ['FastAPI', 'OpenAI GPT-4.5', 'Redis', 'Vercel', 'Python'],
    code: 'https://github.com/abhiteshchauhan/HONEYPOT-API-FINAL.git7',
    color: '#00f5a0',
    featured: true,
  },
  {
    num: '02',
    title: 'FOODII',
    desc: 'Full-stack food delivery platform. React frontend, Express backend, MongoDB for data, Clerk auth for secure sessions, and RESTful APIs for ordering + user interactions.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'Clerk', 'Node.js'],
    live: 'https://foodii-spch.vercel.app/',
    code: 'https://github.com/Divyansh9917/Foodii.git',
    color: '#00d9f5',
    featured: false,
  },
  {
    num: '03',
    title: 'INVOIQ — AI Billing Platform',
    desc: 'Open-source AI-powered billing PWA with offline-first architecture. Invoice generation from natural language, smart line-item suggestions and expense categorization modules.',
    stack: ['React', 'Vite', 'Zustand', 'Dexie.js', 'MongoDB', 'Node.js'],
    code: 'https://github.com/divyansh9917',
    color: '#f5c800',
    featured: false,
  },
];

function IconExternal() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.classList.add('in');
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className={s.projects}>
      <div ref={ref} className={`reveal ${s.inner}`}>
        <div className="sec-label">Projects</div>
        <h2 className="sec-heading">
          Things I've <span style={{ color: 'var(--e1)' }}>shipped</span>
        </h2>

        <div className={s.list}>
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className={`${s.card} ${p.featured ? s.featured : ''}`}
              style={{ '--pc': p.color }}
            >
              <div className={s.cardTop}>
                <span className={s.num}>{p.num}</span>
                <div className={s.btns}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener" className={s.iconBtn} title="Live" data-hover>
                      <IconExternal />
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener" className={s.iconBtn} title="Source" data-hover>
                      <IconCode />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={s.title}>{p.title}</h3>
              <p className={s.desc}>{p.desc}</p>

              <div className={s.stack}>
                {p.stack.map(t => (
                  <span key={t} className={s.stackTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
