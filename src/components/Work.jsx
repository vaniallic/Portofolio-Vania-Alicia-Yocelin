import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { projects, profile } from '../data/content.js';

const host = (url) => (url || '').replace(/^https?:\/\//, '').replace(/\/$/, '');

/* Real screenshots: a browser + phone for web apps, three phones for mobile apps */
export function Stage({ project, compact = false }) {
  if (project.layout === 'web') {
    return (
      <div className={`stage-art web ${compact ? 'compact' : ''}`}>
        <div className="browser">
          <div className="bar">
            <i /><i /><i />
            {project.live ? (
              <a className="url" href={project.live} target="_blank" rel="noreferrer" tabIndex={-1}>{host(project.live)}</a>
            ) : <span className="url" />}
          </div>
          <img src={project.cover} alt={`${project.name} on desktop`} loading="lazy" />
        </div>
        {project.phones && project.phones[0] && (
          <div className="phone"><img src={project.phones[0]} alt={`${project.name} on mobile`} loading="lazy" /></div>
        )}
      </div>
    );
  }
  return (
    <div className={`stage-art mobile ${compact ? 'compact' : ''}`}>
      {project.phones.slice(0, 3).map((src, i) => (
        <div key={src} className={`phone ph-${i}`}><img src={src} alt={`${project.name} screen ${i + 1}`} loading="lazy" /></div>
      ))}
    </div>
  );
}

/* Small preview used on the All projects page */
export function Thumb({ project }) {
  if (project.layout === 'web') return <img src={project.cover} alt="" loading="lazy" />;
  return (
    <span className="thumb-phones">
      {project.phones.slice(0, 3).map((src) => <img key={src} src={src} alt="" loading="lazy" />)}
    </span>
  );
}

function Links({ p, onOpen }) {
  return (
    <span className="proj-acts">
      {p.live && (
        <a className="live-link" href={p.live} target="_blank" rel="noreferrer">
          <i aria-hidden="true" /> Live · {host(p.live)}
        </a>
      )}
      <button type="button" className="btn primary" onClick={() => onOpen(p.gi)}>View case study <Icon name="arrowRight" size={14} /></button>
      {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live site <Icon name="external" size={13} /></a>}
      {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} source code on GitHub`}><Icon name="github" size={15} /> Code</a>}
    </span>
  );
}

export default function Work({ onOpen, onAll }) {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);
  const swipe = useRef(null);
  // only "featured" projects here; everything is on the All projects page
  const featured = projects.map((pr, gi) => ({ ...pr, gi })).filter((pr) => pr.featured !== false);
  const p = featured[Math.min(active, featured.length - 1)];

  useEffect(() => {
    const el = swipe.current;
    if (!el) return undefined;
    const on = () => {
      const w = el.firstElementChild ? el.firstElementChild.getBoundingClientRect().width : 1;
      setSlide(Math.round(el.scrollLeft / w));
    };
    el.addEventListener('scroll', on, { passive: true });
    return () => el.removeEventListener('scroll', on);
  }, []);

  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="work-head">
        <div data-reveal>
          <span className="label">My Work</span>
          <h2 id="work-title" className="h2">Selected <em>work.</em></h2>
        </div>
        <button type="button" className="btn view-all" onClick={onAll} data-reveal style={{ '--d': '200ms' }}>
          View all projects <Icon name="arrowRight" size={14} />
        </button>
      </div>

      {/* desktop: list + preview */}
      <div className="work-grid" data-stagger>
        <div style={{ '--i': 0 }}>
          <ul className="proj-list v3">
            {featured.map((pr, i) => (
              <li key={pr.id} className={i === active ? 'is-active' : ''}>
                <button
                  type="button"
                  className="pl-head"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-expanded={i === active}
                >
                  <span className="t">{pr.name}</span>
                  <span className="y">{pr.year}</span>
                  <span className="k">{pr.type}</span>
                </button>
                {i === active && (
                  <div className="pl-body">
                    <p className="sum">{pr.summary}</p>
                    <p className="role">{pr.role}</p>
                    <span className="stack">{pr.stack.map((s) => <span key={s}>{s}</span>)}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <a className="more-link" href={profile.github} target="_blank" rel="noreferrer">More on GitHub <Icon name="external" size={13} /></a>
        </div>

        <div className="stage" style={{ '--i': 2 }}>
          <div key={p.id} className="stage-fade">
            <Stage project={p} />
            <Links p={p} onOpen={onOpen} />
          </div>
        </div>
      </div>

      {/* phone: one project per swipe */}
      <div className="work-mobile">
        <div className="swipe" ref={swipe}>
          {featured.map((pr) => (
            <div key={pr.id} className="swipe-card">
              <Stage project={pr} compact />
              <div className="swipe-info glass">
                <div className="kind">{pr.type} · {pr.year}</div>
                <h3>{pr.name}</h3>
                <p>{pr.summary}</p>
                <p className="role">{pr.role}</p>
                <Links p={pr} onOpen={onOpen} />
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="btn view-all-m" onClick={onAll}>View all projects <Icon name="arrowRight" size={13} /></button>
        <div className="dots" aria-hidden="true">
          {featured.map((pr, i) => <i key={pr.id} className={i === slide ? 'is-on' : ''} />)}
        </div>
      </div>
    </section>
  );
}
