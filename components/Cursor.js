import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const pos  = useRef({ x: 0, y: 0 });
  const raf  = useRef(null);

  useEffect(() => {
    let rx = 0, ry = 0;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };

    const loop = () => {
      rx += (pos.current.x - rx) * 0.1;
      ry += (pos.current.y - ry) * 0.1;
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      raf.current = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      ring.current.style.transform += ' scale(1.8)';
      ring.current.style.borderColor = 'var(--e3)';
    };
    const onLeave = () => {
      ring.current.style.borderColor = 'var(--e1)';
    };

    window.addEventListener('mousemove', onMove);
    loop();

    const attachHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    // attach after a tick so DOM is ready
    setTimeout(attachHover, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const shared = {
    position: 'fixed', top: 0, left: 0,
    borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
    marginLeft: 0, marginTop: 0,
  };

  return (
    <>
      <div ref={dot} style={{ ...shared,
        width: 6, height: 6,
        background: 'var(--e1)',
        transform: 'translate(-100px,-100px)',
        transition: 'background 0.2s',
        marginLeft: -3, marginTop: -3,
      }} />
      <div ref={ring} style={{ ...shared,
        width: 38, height: 38,
        border: '1.5px solid var(--e1)',
        opacity: 0.55,
        transform: 'translate(-100px,-100px)',
        transition: 'border-color 0.3s, opacity 0.3s',
        marginLeft: -19, marginTop: -19,
      }} />
    </>
  );
}
