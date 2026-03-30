import { useEffect, useRef } from 'react';
import s from './About.module.css';

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.classList.add('in');
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className={s.about}>
      <div ref={ref} className={`reveal ${s.inner}`}>
        <div className="sec-label">About me</div>
        <h2 className={`sec-heading ${s.heading}`}>
          Who's<br /><span className={s.accent}>building?</span>
        </h2>

        <div className={s.grid}>
          {/* terminal card */}
          <div className={s.terminal}>
            <div className={s.termBar}>
              <span className={s.dot} style={{ background: '#ff5f57' }} />
              <span className={s.dot} style={{ background: '#febc2e' }} />
              <span className={s.dot} style={{ background: '#28c840' }} />
              <span className={s.termTitle}>profile.json</span>
            </div>
            <pre className={s.termBody}>
{`{
  `}<span className={s.key}>"name"</span>{`:    `}<span className={s.str}>"Divyansh Mishra"</span>{`,
  `}<span className={s.key}>"role"</span>{`:    `}<span className={s.str}>"B.Tech Mechatronics"</span>{`,
  `}<span className={s.key}>"college"</span>{`: `}<span className={s.str}>"IIIT Bhagalpur"</span>{`,
  `}<span className={s.key}>"batch"</span>{`:   `}<span className={s.str}>"2024 – 2028"</span>{`,
  `}<span className={s.key}>"cgpa"</span>{`:    `}<span className={s.num}>8.43</span>{`,
  `}<span className={s.key}>"stack"</span>{`: [`}
{`    `}<span className={s.str}>"MERN"</span>{`, `}<span className={s.str}>"FastAPI"</span>{`,`}
{`    `}<span className={s.str}>"C++"</span>{`,  `}<span className={s.str}>"Next.js"</span>
{`  ],`}
{`  `}<span className={s.key}>"interests"</span>{`: [`}
{`    `}<span className={s.str}>"AI Systems"</span>{`, `}<span className={s.str}>"CompProg"</span>{`,`}
{`    `}<span className={s.str}>"3D Printing"</span>
{`  ]`}
{`}`}
            </pre>
            <span className={s.cursor} />
          </div>

          {/* right copy */}
          <div className={s.copy}>
            <p className={s.bio}>
              I'm a <span className={s.hl}>Mechatronics & Automation</span> student at IIIT Bhagalpur,
              obsessed with building products at the intersection of hardware
              intuition and software craftsmanship.
            </p>
            <p className={s.bio}>
              From <span className={s.hl}>AI-powered honeypot systems</span> to full-stack food
              delivery apps, I love turning complex ideas into clean, scalable
              products. I was a <span className={s.hl}>Top 2% Finalist</span> at the
              India AI Impact Buildathon, presenting at Bharat Mandapam, AI Impact Summit 2026.
            </p>
            <p className={s.bio}>
              I also mentor a cohort of 20 juniors as an{' '}
              <span className={s.hl}>Adhyaay Mentor</span> at IIIT Bhagalpur,
              helping them navigate college life.
            </p>

            <div className={s.pills}>
              {['IIIT Bhagalpur', 'Adhyaay Mentor', 'CodeChef 2★', 'LeetCode 50-day', 'AI Summit Finalist'].map(p => (
                <span key={p} className={s.pill}>{p}</span>
              ))}
            </div>

            <div className={s.links}>
              <a href="https://linkedin.com/in/divyansh-mishra" target="_blank" rel="noopener" className={s.lnk} data-hover>LinkedIn ↗</a>
              <a href="https://github.com/divyansh9917" target="_blank" rel="noopener" className={s.lnk} data-hover>GitHub ↗</a>
              <a href="mailto:divyanshm027@gmail.com" className={s.lnk} data-hover>Email ↗</a>
              <a href="tel:+918467063664" className={s.lnk} data-hover>+91 84670 63664 ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
