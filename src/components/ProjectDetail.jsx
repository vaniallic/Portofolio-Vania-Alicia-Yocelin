import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { projects } from '../data/content.js';

const host = (url) => (url || '').replace(/^https?:\/\//, '').replace(/\/$/, '');

/* Case study page. Opens over the site, Esc closes it. */
export default function ProjectDetail({ index, onClose, onGo }) {
  const p = projects[index] || projects[0];
  const box = useRef(null);
  const [zoom, setZoom] = useState(null);
  const zoomRef = useRef(null);
  zoomRef.current = zoom;
  const nextIndex = (index + 1) % projects.length;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (zoomRef.current) setZoom(null);
      else onClose();
    };
    window.addEventListener('keydown', onKey);
    box.current && box.current.focus();
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  useEffect(() => { box.current && box.current.scrollTo({ top: 0 }); setZoom(null); }, [index]);

  const web = p.layout === 'web';

  return (
    <div className="detail case" role="dialog" aria-modal="true" aria-labelledby="detail-title" ref={box} tabIndex={-1}>
      <div className="detail-bg" />
      <div className="detail-top">
        <button type="button" onClick={onClose}><Icon name="arrowLeft" size={14} /> Back to all work</button>
        <span className="pager">{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
      </div>

      <header className={`case-hero ${web ? 'is-web' : 'is-mobile'}`}>
        <div className="case-info">
          <div className="kind">{p.type} · {p.year}{p.status && <span className="status-chip">{p.status}</span>}</div>
          <h1 id="detail-title">{p.name}</h1>
          <p className="sum">{p.summary}</p>
          <div className="case-facts">
            {p.facts.map((f) => <div key={f.label}><small>{f.label.toUpperCase()}</small>{f.value}</div>)}
          </div>
          <div className="detail-cta">
            {p.live && <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Visit live site <Icon name="external" size={13} /></a>}
            {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer"><Icon name="github" /> View code</a>}
          </div>
        </div>
        <div className="case-shot">
          {web ? (
            <>
              <div className="browser">
                <div className="bar"><i /><i /><i /><span className="url">{host(p.live)}</span></div>
                <img src={p.hero || p.cover} alt={`${p.name} on desktop`} />
              </div>
              {p.phones && p.phones[1] && <div className="phone"><img src={p.phones[1]} alt={`${p.name} on mobile`} /></div>}
            </>
          ) : (
            p.phones.slice(0, 3).map((src, i) => <div key={src} className={`phone ph-${i}`}><img src={src} alt={`${p.name} screen ${i + 1}`} /></div>)
          )}
        </div>
      </header>

      {p.story && (
        <section className="case-sec">
          <h2>{p.story.title} <em>{p.story.accent}</em>{p.story.after ? ` ${p.story.after}` : ''}</h2>
          <div className="case-cards">
            {p.story.items.map((it, i) => (
              <div key={it.problem} className="case-card glass">
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <p className="prob"><b>{it.problem}</b> {it.detail}</p>
                <p className="fix">{it.fix}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="case-sec">
        <h2>{p.galleryTitle[0]} <em>{p.galleryTitle[1]}</em></h2>
        <div className={`case-gallery ${web ? '' : 'phones'}`}>
          {p.gallery.map((g) => (
            <figure key={g.src} className={g.mobile ? 'is-mobile' : ''}>
              <button type="button" onClick={() => setZoom(g)} aria-label={`Enlarge: ${g.cap}`}>
                <img src={g.src} alt={g.cap} loading="lazy" />
              </button>
              <figcaption>{g.cap}</figcaption>
            </figure>
          ))}
        </div>
        {p.note && <p className="case-note">{p.note}</p>}
      </section>

      <section className="case-sec">
        <h2>Built <em>with</em></h2>
        <div className="case-stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
      </section>

      <div className="next-proj">
        <button type="button" onClick={() => onGo(nextIndex)}>
          Next project
          <b>{projects[nextIndex].name} <Icon name="arrowRight" size={16} /></b>
        </button>
      </div>

      {zoom && (
        <button type="button" className="zoom" onClick={() => setZoom(null)} aria-label="Close preview">
          <img src={zoom.src} alt={zoom.cap} className={zoom.mobile ? 'is-mobile' : ''} />
          <span>{zoom.cap}</span>
        </button>
      )}
    </div>
  );
}
