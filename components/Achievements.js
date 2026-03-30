import { useEffect, useRef } from 'react';
import s from './Achievements.module.css';

const ACHS = [
  {
    icon: '🏆', color: '#f5c800',
    metric: 'Top 2%', title: 'India AI Impact Buildathon',
    sub: 'AI Impact Summit 2026',
    desc: 'Finalist among 40,000+ participants. Presented at the Grand Finale, Bharat Mandapam, New Delhi.',
  },
  {
    icon: '⚡', color: '#00d9f5',
    metric: '#449', title: 'CodeChef Global Rank',
    sub: 'Starters 210 — 1400+ Rating',
    desc: 'Top 1.82% globally among 24,608 participants. 2-Star rated competitive programmer.',
  },
  {
    icon: '🔥', color: '#f500b4',
    metric: '50-day', title: 'LeetCode Streak Badge',
    sub: '100+ Problems Solved',
    desc: 'Consistent 50-day challenge badge by solving 100+ curated algorithmic problems.',
  },
  {
    icon: '🎖️', color: '#a855f7',
    metric: '4 Badges', title: 'Coding Ninjas Topper',
    sub: 'Monthly — IIIT Bhagalpur',
    desc: 'Recognised as monthly coding topper; earned 4 Specialist badges on Coding Ninjas.',
  },
];

const CERTS = [
  { title: 'Introduction to Large Language Models', org: 'IBM', year: '2025' },
  { title: 'Trade Quest Competition', org: 'Techkriti 2025 — IIT Kanpur', year: '2025' },
  { title: 'Vibe Coding Session', org: 'Coding Ninjas × KodeinKGP (IIT KGP)', year: '2025' },
];

export default function Achievements() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.classList.add('in');
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="achievements" className={s.section}>
      <div ref={ref} className={`reveal ${s.inner}`}>
        <div className="sec-label">Achievements</div>
        <h2 className="sec-heading">
          Wins &amp; <span style={{ color: 'var(--e1)' }}>milestones</span>
        </h2>

        {/* achievement cards */}
        <div className={s.grid}>
          {ACHS.map((a) => (
            <div key={a.title} className={s.card} style={{ '--ac': a.color }}>
              <div className={s.icon}>{a.icon}</div>
              <div className={s.metric}>{a.metric}</div>
              <h3 className={s.title}>{a.title}</h3>
              <div className={s.sub}>{a.sub}</div>
              <p className={s.desc}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* certifications */}
        <div className={s.certBlock}>
          <div className={s.certLabel}>Certifications &amp; Events</div>
          <div className={s.certList}>
            {CERTS.map((c) => (
              <div key={c.title} className={s.certRow}>
                <span className={s.certDot} />
                <div>
                  <div className={s.certTitle}>{c.title}</div>
                  <div className={s.certOrg}>{c.org} · {c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* position of responsibility */}
        <div className={s.por}>
          <div className={s.porTop}>
            <span className={s.porBadge}>Position of Responsibility</span>
          </div>
          <h3 className={s.porTitle}>Adhyaay Mentor</h3>
          <div className={s.porSub}>Adhyaay Mentorship Board · IIIT Bhagalpur · Sep 2025 – Present</div>
          <p className={s.porDesc}>
            Guiding a cohort of 20 students in academic and personal development,
            facilitating their smooth transition into college life.
          </p>
        </div>

        <div className={s.por}>
          <div className={s.porTop}>
            <span className={s.porBadge}>Position of Responsibility</span>
          </div>
          <h3 className={s.porTitle}>Adhyaay Mentor</h3>
          <div className={s.porSub}>Adhyaay Mentorship Board · IIIT Bhagalpur · Sep 2025 – Present</div>
          <p className={s.porDesc}>
            Guiding a cohort of 20 students in academic and personal development,
            facilitating their smooth transition into college life.
          </p>
        </div>
      </div>
    </section>
  );
}
