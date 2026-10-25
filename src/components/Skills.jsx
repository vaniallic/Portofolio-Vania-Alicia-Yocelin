import { useRef, useState } from 'react';
import { useInView } from '../hooks/hooks.js';
import Icon from './Icon.jsx';
import { skills, skillFilters, coursework, certifications } from '../data/content.js';
import { skillIcons } from '../data/skillIcons.js';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const CATEGORY_LABEL = {
  languages: 'Language', web: 'Web & Mobile', ai: 'AI & Data', cloud: 'Backend & Cloud', security: 'Security', tools: 'Tool',
};
const LEVEL_CLASS = { 'Used in projects': 'lv-project', 'Used in labs': 'lv-lab', Coursework: 'lv-course', Daily: 'lv-daily' };

function SkillCard({ skill, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      style={{ '--i': index, '--bc': skill.color }}
      className={`card ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${skill.name}. ${flipped ? `Used in: ${skill.used}. ${skill.level}.` : 'Flip to see where I used it'}`}
    >
      <span className="card-inner">
        <span className="face front">
          <span className="num">{ROMAN[index] || index + 1}</span>
          <span className={`seal ${skill.tone}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={skillIcons[skill.icon]} /></svg>
          </span>
          <span className="cname">{skill.name}</span>
          <span className="ccat">{CATEGORY_LABEL[skill.category]}</span>
        </span>
        <span className="face back">
          <span className="bh">{skill.name}</span>
          <span className="tag">{CATEGORY_LABEL[skill.category]}</span>
          <span className="ui">Used in</span>
          <span className="bp">{skill.used}</span>
          <span className="lvl"><i className={LEVEL_CLASS[skill.level]}>{skill.level}</i></span>
        </span>
      </span>
    </button>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState('languages');
  const deckRef = useRef(null);
  const inView = useInView(deckRef, 0.15);
  const list = skills.filter((s) => filter === 'all' || s.category === filter);
  const count = (id) => (id === 'all' ? skills.length : skills.filter((s) => s.category === id).length);

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="skills-head" data-reveal>
        <span className="label center">Skills</span>
        <h2 id="skills-title" className="h2">My <em>toolkit.</em></h2>
        <p>Flip a card to see where I&apos;ve used it.</p>
      </div>
      <div className="tabs" role="group" aria-label="Filter skills" data-reveal style={{ '--d': '150ms' }}>
        {skillFilters.map((f) => (
          <button key={f.id} type="button" className="tab" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label} <span className="count">{count(f.id)}</span>
          </button>
        ))}
      </div>
      <div className={`deck ${inView ? 'is-in' : ''}`} ref={deckRef} key={filter}>
        {list.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
      </div>

      <div className="skills-extra" data-stagger style={{ '--base': '150ms' }}>
        <div className="extra-panel glass" style={{ '--i': 0 }}>
          <div className="ep-head"><h3>Coursework</h3><span>BINUS University</span></div>
          {coursework.map((g) => (
            <div key={g.group} className="course-group">
              <div className="cg-label">{g.group}</div>
              <div className="course-chips">
                {g.items.map((c) => (
                  <span key={c.name} className={`course ${c.now ? 'is-now' : ''}`}>
                    {c.name}{c.now && <em>Now</em>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="extra-panel glass" style={{ '--i': 1 }}>
          <div className="ep-head"><h3>Certification</h3><span>{certifications[0]?.meta[1]?.split(' ').pop()}</span></div>
          {certifications.map((c) => (
            <div key={c.title} className="cert">
              <a className="cert-thumb" href={c.file} target="_blank" rel="noreferrer" aria-label={`Open certificate: ${c.title}`}>
                <img src={c.thumb} alt="" loading="lazy" />
              </a>
              <div>
                <h4>{c.title}</h4>
                <div className="cert-by">{c.issuer}</div>
                <div className="cert-meta">{c.meta.map((m) => <span key={m}>{m}</span>)}</div>
                <a className="btn cert-btn" href={c.file} target="_blank" rel="noreferrer">
                  View certificate <Icon name="external" size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
