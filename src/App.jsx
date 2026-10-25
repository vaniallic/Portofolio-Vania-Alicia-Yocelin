import { useCallback, useEffect, useRef, useState } from 'react';
import Backdrop from './components/Backdrop.jsx';
import Navbar from './components/Navbar.jsx';
import Cursor from './components/Cursor.jsx';
import Landing from './components/Landing.jsx';
import Hook from './components/Hook.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Work from './components/Work.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import AllProjects from './components/AllProjects.jsx';
import ContactPage from './components/ContactPage.jsx';
import Footer from './components/Footer.jsx';
import { useTheme, useRevealAll, useActiveSection, useSceneSnap } from './hooks/hooks.js';

const SECTION_IDS = ['about', 'skills', 'experience', 'work', 'contact'];

// pages that open over the site; they also get a URL hash so the Back button closes them
const pageFromHash = () => {
  const h = window.location.hash;
  if (h === '#projects') return { page: 'projects', detail: null };
  if (h === '#contact-me') return { page: 'contact', detail: null };
  const m = h.match(/^#project-(\d+)$/);
  if (m) return { page: null, detail: Number(m[1]) };
  return { page: null, detail: null };
};

export default function App() {
  const { theme, setTheme, themes } = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const [route, setRoute] = useState(pageFromHash);
  useRevealAll();
  useSceneSnap();

  useEffect(() => {
    const onPop = () => setRoute(pageFromHash());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // each overlay remembers how many overlay steps deep it is, so we can leave all of them at once
  const depth = () => (window.history.state && window.history.state.depth) || 0;

  const open = useCallback((hash, replace = false) => {
    if (window.location.hash !== hash) {
      const prev = window.history.state || {};
      // "from" = the page this overlay was opened from (kept when a page replaces another)
      const state = replace
        ? { overlay: true, depth: depth(), from: prev.from || '' }
        : { overlay: true, depth: depth() + 1, from: window.location.hash };
      if (replace) window.history.replaceState(state, '', hash);
      else window.history.pushState(state, '', hash);
    }
    setRoute(pageFromHash());
  }, []);

  // one step back (All projects, Contact)
  const close = useCallback(() => {
    if (depth() > 0) window.history.back();
    else { window.history.replaceState(null, '', window.location.pathname); setRoute({ page: null, detail: null }); }
  }, []);

  // case study back -> All projects (step back if we came from there, otherwise swap to it)
  const closeDetail = useCallback(() => {
    if ((window.history.state || {}).from === '#projects') window.history.back();
    else open('#projects', true);
  }, [open]);

  const openDetail = useCallback((i) => open(`#project-${i}`), [open]);
  // next project inside a case study replaces the page instead of stacking history
  const goDetail = useCallback((i) => open(`#project-${i}`, true), [open]);
  const openAll = useCallback(() => open('#projects'), [open]);
  const openContact = useCallback(() => open('#contact-me'), [open]);

  return (
    <>
      <Backdrop />
      <Cursor />
      <Navbar active={active} theme={theme} themes={themes} setTheme={setTheme} onContact={openContact} />
      <main className="content">
        <Landing theme={theme} themes={themes} setTheme={setTheme} />
        <Hook onContact={openContact} />
        <About />
        <Skills />
        <Experience />
        <Work onOpen={openDetail} onAll={openAll} />
        <Footer onContact={openContact} />
      </main>
      {route.page === 'projects' && <AllProjects onClose={close} onOpen={openDetail} />}
      {route.page === 'contact' && <ContactPage onClose={close} />}
      {route.detail !== null && <ProjectDetail index={route.detail} onClose={closeDetail} onGo={goDetail} />}
      <div className="grain" aria-hidden="true" />
    </>
  );
}
