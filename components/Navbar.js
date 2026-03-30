import { useEffect, useState } from 'react';
import s from './Navbar.module.css';

const NAV = [
  { n: '01', label: 'About',        href: '#about'        },
  { n: '02', label: 'Skills',       href: '#skills'       },
  { n: '03', label: 'Projects',     href: '#projects'     },
  { n: '04', label: 'Wins',         href: '#achievements' },
  { n: '05', label: 'Contact',      href: '#contact'      },
];

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open,  setOpen]  = useState(false);

  useEffect(() => {
    const h = () => setStuck(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`${s.nav} ${stuck ? s.stuck : ''}`}>
        <a href="#hero" className={s.logo}>DM<span className={s.logoDot} /></a>

        <ul className={s.links}>
          {NAV.map(({ n, label, href }) => (
            <li key={href}>
              <a href={href}><span className={s.num}>{n}</span>{label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:divyanshm027@gmail.com" className={s.cta} data-hover>
          Hire Me ↗
        </a>

        <button
          className={`${s.burger} ${open ? s.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${s.mob} ${open ? s.mobOpen : ''}`}>
        {NAV.map(({ label, href }) => (
          <a key={href} href={href} className={s.mobLink} onClick={close}>
            {label}
          </a>
        ))}
        <a href="mailto:divyanshm027@gmail.com" className={s.mobCta} onClick={close}>
          Hire Me ↗
        </a>
      </div>
    </>
  );
}
