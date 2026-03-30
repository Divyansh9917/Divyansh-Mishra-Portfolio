import { useEffect, useRef } from 'react';
import s from './Skills.module.css';

const GROUPS = [
  { icon: '⚡', label: 'Languages',      color: '#00f5a0', skills: ['C', 'C++', 'JavaScript'] },
  { icon: '🎨', label: 'Frontend',       color: '#00d9f5', skills: ['React.js', 'Next.js', 'HTML', 'CSS'] },
  { icon: '⚙️', label: 'Backend',        color: '#f5c800', skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
  { icon: '🗄️', label: 'Database',       color: '#f500b4', skills: ['MongoDB', 'Redis'] },
  { icon: '🧠', label: 'CS Core',        color: '#a855f7', skills: ['DSA', 'Competitive Programming', 'OOP'] },
  { icon: '🛠️', label: 'Tools & Cloud',  color: '#fb923c', skills: ['Git', 'GitHub', 'Vercel', 'Postman'] },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.classList.add('in');
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className={s.skills}>
      <div ref={ref} className={`reveal ${s.inner}`}>
        <div className="sec-label">Tech Stack</div>
        <h2 className="sec-heading">
          What I <span style={{ color: 'var(--e1)' }}>build with</span>
        </h2>

        <div className={s.grid}>
          {GROUPS.map((g) => (
            <div
              key={g.label}
              className={s.card}
              style={{ '--gc': g.color }}
            >
              <div className={s.cardHead}>
                <span className={s.icon}>{g.icon}</span>
                <span className={s.cardLabel}>{g.label}</span>
                <span className={s.cardDot} style={{ background: g.color }} />
              </div>
              <div className={s.tags}>
                {g.skills.map(sk => (
                  <span key={sk} className={s.tag}>{sk}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
