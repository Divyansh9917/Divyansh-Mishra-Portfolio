import { useEffect, useRef, useState } from 'react';
import s from './Contact.module.css';

export default function Contact() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) ref.current?.classList.add('in');
    }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('divyanshm027@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className={s.section}>
      <div ref={ref} className={`reveal ${s.inner}`}>

        {/* big heading */}
        <div className="sec-label">Contact</div>
        <h2 className={s.heading}>
          <span className={s.g1}>Let's</span>
          <span className={s.g2}>BUILD.</span>
        </h2>
        <p className={s.sub}>
          Open to internships, collabs, and interesting conversations.
          Shoot me a message — I reply fast.
        </p>

        {/* email row */}
        <div className={s.emailRow}>
          <span className={s.emailAddr}>divyanshm027@gmail.com</span>
          <button className={s.copyBtn} onClick={copyEmail} data-hover>
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>

        {/* social buttons */}
        <div className={s.socials}>
          <a href="https://www.linkedin.com/in/divyansh9917/" target="_blank" rel="noopener" className={s.socialBtn} data-hover>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          <a href="https://github.com/Divyansh9917" target="_blank" rel="noopener" className={s.socialBtn} data-hover>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <a href="https://leetcode.com/u/divyansh_9917/" target="_blank" rel="noopener" className={s.socialBtn} data-hover>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
            LeetCode
          </a>

          <a href="https://www.codechef.com/users/divyansh_9917" target="_blank" rel="noopener" className={s.socialBtn} data-hover>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.257.004C5.055.265-.16 5.494.016 11.69c.17 5.958 4.966 10.754 10.924 10.923C17.137 22.79 22.363 17.576 22.624 11.374 22.9 4.786 17.726-.268 11.257.004zm.277 1.808c2.64-.063 5.17.902 7.04 2.77a9.186 9.186 0 0 1 2.23 9.39c-.96 2.86-3.14 5.11-5.97 6.15-3.04 1.1-6.44.63-9.08-1.24-2.39-1.71-3.92-4.38-4.12-7.22C1.3 7.13 3.9 2.88 8 1.5c1.12-.39 2.3-.57 3.53-.62l.003.933zM9.3 6.18c-.33.04-.64.18-.88.42-.25.24-.4.58-.4.92v.24h-.62c-.3 0-.58.12-.78.32-.2.2-.32.48-.32.78v5.97c0 .3.12.58.32.78.2.2.48.32.78.32h7.17c.3 0 .58-.12.78-.32.2-.2.32-.48.32-.78V8.84c0-.3-.12-.58-.32-.78-.2-.2-.48-.32-.78-.32h-.62v-.24c0-.34-.14-.68-.4-.92s-.6-.4-.96-.42H9.3zm.14 1.26h2.73c.08 0 .15.03.2.08.05.05.08.12.08.2v.24h-3.28v-.24c0-.08.03-.15.08-.2.05-.05.12-.08.2-.08l-.01.94zm-1.7 1.73h6.51v5.35H7.74V9.17zm2.27 1.25c-.38.04-.73.24-.95.56-.22.32-.28.72-.16 1.08.12.36.4.64.75.77v.9c0 .14.06.28.16.38.1.1.23.16.37.16.14 0 .28-.06.38-.16.1-.1.15-.24.15-.38v-.9c.35-.13.63-.41.75-.77.12-.36.06-.76-.16-1.08-.22-.32-.57-.52-.95-.56h-.34z"/>
            </svg>
            CodeChef
          </a>

          <a href="tel:+918467063664" className={s.socialBtn} data-hover>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91 84670 63664
          </a>
        </div>

        {/* footer */}
        <div className={s.footer}>
          <span className={s.ft}>Divyansh Mishra · IIIT Bhagalpur · Batch 2024–2028</span>
          <span className={s.ft}>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </section>
  );
}
