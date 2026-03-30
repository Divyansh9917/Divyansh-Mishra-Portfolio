import { useEffect, useRef } from 'react';
import s from './Hero.module.css';

/* ─── particle canvas ─── */
function runCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, pts = [], mouse = { x: -999, y: -999 }, raf;

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    build();
  };

  const build = () => {
    pts = [];
    const n = Math.floor((W * H) / 5500);
    for (let i = 0; i < n; i++) pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.3 + 0.4,
      a: Math.random() * 0.45 + 0.15,
    });
  };

  const tick = () => {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      // mouse repel
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d  = Math.hypot(dx, dy);
      const sz = d < 130 ? p.r * (1 + (130 - d) / 65) : p.r;

      ctx.beginPath();
      ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,245,160,${p.a})`;
      ctx.fill();

      // connect nearby
      for (let j = i + 1; j < pts.length; j++) {
        const q  = pts[j];
        const dd = Math.hypot(p.x - q.x, p.y - q.y);
        if (dd < 95) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,245,160,${0.07 * (1 - dd / 95)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(tick);
  };

  const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', onMove);
  resize(); tick();

  return () => {
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMove);
    cancelAnimationFrame(raf);
  };
}

export default function Hero() {
  const canvasRef  = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const cleanup = runCanvas(canvasRef.current);
    return cleanup;
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease';
      el.style.opacity = '1'; el.style.transform = 'translateY(0)';
    }, 150);
  }, []);

  return (
    <section id="hero" className={s.hero}>
      <canvas ref={canvasRef} className={s.canvas} />
      <div className={s.gridOverlay} />

      <div ref={contentRef} className={s.content}>
        {/* badge */}
        <div className={s.badge}>
          <span className={s.badgeDot} />
          Open to internships · 2025
        </div>

        {/* name */}
        <h1 className={s.name}>
          <span className={s.nameFirst}>DIVYANSH</span>
          <span className={s.nameLast}>MISHRA</span>
        </h1>

        {/* sub */}
        <div className={s.meta}>
          <span>B.Tech Mechatronics</span>
          <span className={s.metaDot} />
          <span>IIIT Bhagalpur</span>
          <span className={s.metaDot} />
          <span>Full-Stack · CP · AI</span>
        </div>

        {/* cta */}
        <div className={s.cta}>
          <a href="#projects" className={s.btnPrimary} data-hover>
            See Projects
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5h9M8 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/divyansh9917" target="_blank" rel="noopener" className={s.btnGhost} data-hover>
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/divyansh-mishra" target="_blank" rel="noopener" className={s.btnGhost} data-hover>
            LinkedIn ↗
          </a>
        </div>

        {/* stats */}
        <div className={s.stats}>
          <div className={s.stat}>
            <span className={s.statNum}>8.43</span>
            <span className={s.statLbl}>CGPA</span>
          </div>
          <div className={s.statDiv} />
          <div className={s.stat}>
            <span className={s.statNum}>Top 2%</span>
            <span className={s.statLbl}>AI Buildathon</span>
          </div>
          <div className={s.statDiv} />
          <div className={s.stat}>
            <span className={s.statNum}>#449</span>
            <span className={s.statLbl}>CodeChef Global</span>
          </div>
          <div className={s.statDiv} />
          <div className={s.stat}>
            <span className={s.statNum}>300+</span>
            <span className={s.statLbl}>Problems Solved</span>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className={s.scrollHint}>
        <div className={s.scrollTrack} />
        <span>scroll</span>
      </div>
    </section>
  );
}
