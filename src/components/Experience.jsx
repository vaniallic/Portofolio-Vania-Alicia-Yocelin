import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useInView } from '../hooks/hooks.js';
import Icon from './Icon.jsx';
import { experience, experienceFilters } from '../data/content.js';

const cats = (e) => (Array.isArray(e.category) ? e.category : [e.category]);
const photoSrc = (e, n) => `/experience/${e.folder}/${n}.webp`;
const labelOf = (e) => e.label || experienceFilters.find((f) => f.id === cats(e)[0])?.label;

/* Side panel (desktop) / bottom sheet (phone) with photos and details */
function ExperienceDetail({ item, onClose }) {
  const [shown, setShown] = useState(0);
  const panel = useRef(null);
  const thumbs = useRef(null);
  const total = item.photos || 0;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setShown((s) => (s + 1) % total);
      if (e.key === 'ArrowLeft') setShown((s) => (s - 1 + total) % total);
    };
    window.addEventListener('keydown', onKey);
    panel.current && panel.current.focus();
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [onClose, total]);

  useEffect(() => {
    const t = thumbs.current && thumbs.current.children[shown];
    t && t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [shown]);

  const caption = item.captions && item.captions[shown];

  return createPortal(
    <div className="xp-layer" role="presentation">
      <button type="button" className="xp-shade" aria-label="Close" onClick={onClose} />
      <aside className={`xp-panel cat-${cats(item)[0]}`} role="dialog" aria-modal="true" aria-labelledby="xp-panel-title" ref={panel} tabIndex={-1}>
        <span className="sheet-grip" aria-hidden="true" />
        <button type="button" className="icon-btn xp-close" onClick={onClose} aria-label="Close details"><Icon name="close" size={16} /></button>
        <span className="cat">{labelOf(item)} · {item.period}</span>
        <h3 id="xp-panel-title">{item.title}</h3>
        <div className="org">{item.org}</div>

        {total > 0 && (
          <>
            <div className="xp-cover">
              <img key={shown} src={photoSrc(item, shown + 1)} alt={caption || `${item.title}, photo ${shown + 1}`} />
              {total > 1 && (
                <>
                  <button type="button" className="cover-nav prev" onClick={() => setShown((s) => (s - 1 + total) % total)} aria-label="Previous photo"><Icon name="arrowLeft" size={16} /></button>
                  <button type="button" className="cover-nav next" onClick={() => setShown((s) => (s + 1) % total)} aria-label="Next photo"><Icon name="arrowRight" size={16} /></button>
                </>
              )}
              <span className="cover-count">{shown + 1} / {total}</span>
            </div>
            {caption && <p className="xp-cap">{caption}</p>}
            <div className="xp-thumbs" ref={thumbs}>
              {Array.from({ length: total }, (_, i) => (
                <button key={i} type="button" className={i === shown ? 'is-on' : ''} onClick={() => setShown(i)} aria-label={`Photo ${i + 1}`}>
                  <img src={photoSrc(item, i + 1)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </>
        )}

        <p className="xp-desc">{item.description}</p>

        {item.roles && (
          <>
            <span className="xp-sub">Roles</span>
            <ol className="xp-roles">
              {item.roles.map((r) => (
                <li key={r.title + r.period} className={r.now ? 'is-now' : ''}>
                  <span><b>{r.title}</b>{r.where && <small> · {r.where}</small>}</span>
                  <em>{r.period}</em>
                </li>
              ))}
            </ol>
          </>
        )}
        {item.highlights && (
          <>
            <span className="xp-sub">Committees &amp; events</span>
            <ul className="xp-highlights">
              {item.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </>
        )}
      </aside>
    </div>,
    document.body,
  );
}

export default function Experience() {
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);
  const scroller = useRef(null);
  const drag = useRef({ active: false, x: 0, left: 0, moved: false });
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, 0.2);

  const items = experience.filter((e) => filter === 'all' || cats(e).includes(filter));
  const count = (id) => (id === 'all' ? experience.length : experience.filter((e) => cats(e).includes(id)).length);
  const openItem = experience.find((e) => e.id === openId);
  const close = useCallback(() => setOpenId(null), []);

  // drag to scroll with the mouse (touch already scrolls natively)
  const onDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    drag.current = { active: true, x: e.clientX, left: scroller.current.scrollLeft, moved: false };
  };
  const onMove = (e) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) { drag.current.moved = true; scroller.current.classList.add('is-dragging'); }
    scroller.current.scrollLeft = drag.current.left - dx;
  };
  const onUp = () => {
    drag.current.active = false;
    scroller.current && scroller.current.classList.remove('is-dragging');
  };
  const open = (id) => { if (!drag.current.moved) setOpenId(id); };

  return (
    <section id="experience" className="section experience" aria-labelledby="exp-title">
      <div className="exp-head">
        <div data-reveal>
          <span className="label">Experience</span>
          <h2 id="exp-title" className="h2">Where I&apos;ve <em>grown.</em></h2>
        </div>
        <div className="tabs" role="group" aria-label="Filter experience" data-reveal style={{ '--d': '150ms' }}>
          {experienceFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`tab cat-${f.id}`}
              aria-pressed={filter === f.id}
              onClick={() => { setFilter(f.id); scroller.current && scroller.current.scrollTo({ left: 0 }); }}
            >
              {f.id !== 'all' && <span className="dot" />}
              {f.label} <span className="count">{count(f.id)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-wrap" ref={wrapRef}>
        <div
          className="timeline"
          ref={scroller}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          aria-label="Experience timeline, scroll sideways"
        >
          <div className={`track ${inView ? 'is-in' : ''}`} key={filter}>
            {items.length === 0 && <p className="empty-note">Nothing here yet, coming soon.</p>}
            {items.map((e, i) => (
              <article key={e.id} style={{ '--i': i }} className={`tl-item cat-${cats(e)[0]} ${i % 2 === 0 ? 'up' : 'down'} ${e.photos ? 'has-photos' : ''}`}>
                <span className="tl-node" />
                <span className="tl-stem" />
                <span className="tl-year">{e.year}</span>
                {e.polaroids && e.polaroids.map((n, k) => (
                  <span key={n} className={`polaroid p${k + 1}`} aria-hidden="true">
                    <img src={photoSrc(e, n)} alt="" loading="lazy" draggable="false" />
                  </span>
                ))}
                <button type="button" className="xp glass" onClick={() => open(e.id)} aria-haspopup="dialog">
                  <span className="cat">{labelOf(e)}</span>
                  <span className="when">{e.period}</span>
                  <span className="xp-title">{e.title}</span>
                  <span className="org">{e.subtitle || e.org}</span>
                  <span className="xp-text">{e.description}</span>
                  <span className="xp-meta">
                    {e.roles ? (
                      <span className="xp-pills"><i>{e.roles.length} roles</i>{e.highlights && <i>{e.highlights.length} events</i>}</span>
                    ) : (
                      <span className="xp-photos">{e.photos ? `${e.photos} photos` : ''}</span>
                    )}
                    <span className="xp-more">View details <Icon name="arrowRight" size={12} /></span>
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
      {openItem && <ExperienceDetail item={openItem} onClose={close} />}
    </section>
  );
}
