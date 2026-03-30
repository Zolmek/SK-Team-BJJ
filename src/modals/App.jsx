import React, {
  useState, useEffect, useCallback, useMemo, useRef, lazy, Suspense,
} from "react";
import "./App.css";

import skLogo     from "./assets/logo.png";
import coachPhoto from "./assets/coach.webp";
import heroVideo  from "./assets/hero.mp4";
import imgDisc    from "./assets/disc.webp";
import imgAction  from "./assets/action.webp";
import imgCta     from "./assets/cta.webp";
import imgMelqui  from "./assets/melqui.webp";
import imgMika    from "./assets/mika.webp";

import gallery00 from "./assets/gallery_00.webp";
import gallery01 from "./assets/gallery_01.webp";
import gallery02 from "./assets/gallery_02.webp";
import gallery03 from "./assets/gallery_03.webp";
import gallery04 from "./assets/gallery_04.webp";
import gallery05 from "./assets/gallery_05.webp";
import gallery06 from "./assets/gallery_06.webp";
import gallery07 from "./assets/gallery_07.webp";
import gallery08 from "./assets/gallery_08.webp";
import gallery09 from "./assets/gallery_09.webp";
import gallery10 from "./assets/gallery_10.webp";
import gallery11 from "./assets/gallery_11.webp";
import gallery12 from "./assets/gallery_12.webp";
import gallery13 from "./assets/gallery_13.webp";
import gallery14 from "./assets/gallery_14.webp";
import gallery15 from "./assets/gallery_15.webp";
import gallery16 from "./assets/gallery_16.webp";
import gallery17 from "./assets/gallery_17.webp";
import gallery18 from "./assets/gallery_18.webp";
import gallery19 from "./assets/gallery_19.webp";
import gallery20 from "./assets/gallery_20.webp";
import gallery21 from "./assets/gallery_21.webp";
import gallery22 from "./assets/gallery_22.webp";
import gallery23 from "./assets/gallery_23.webp";
import gallery24 from "./assets/gallery_24.webp";
import gallery25 from "./assets/gallery_25.webp";
import gallery26 from "./assets/gallery_26.webp";
import gallery27 from "./assets/gallery_27.webp";
import gallery28 from "./assets/gallery_28.webp";
import gallery29 from "./assets/gallery_29.webp";
import gallery30 from "./assets/gallery_30.webp";
import gallery31 from "./assets/gallery_31.webp";
import gallery32 from "./assets/gallery_32.webp";
import gallery33 from "./assets/gallery_33.webp";
import gallery34 from "./assets/gallery_34.webp";
import gallery35 from "./assets/gallery_35.webp";
import gallery36 from "./assets/gallery_36.webp";
import gallery37 from "./assets/gallery_37.webp";
import gallery38 from "./assets/gallery_38.webp";
import gallery39 from "./assets/gallery_39.webp";
import gallery40 from "./assets/gallery_40.webp";
import gallery41 from "./assets/gallery_41.webp";

export const IMG = {
  coach: coachPhoto, melqui: imgMelqui, mika: imgMika,
  disc: imgDisc, action: imgAction, cta: imgCta,
};

const GALLERY_PHOTOS = [
  { img: gallery00, cap: "Séminaire respiration & mental", sub: "Avec Marcio Faraco — Préparateur mental Mika Galvão" },
  { img: gallery01, cap: "Cours Grappling — No-Gi", sub: "BJJ College — São Paulo" },
  { img: gallery02, cap: "Kaua Gabriel", sub: "BJJ College — São Paulo" },
  { img: gallery03, cap: "Tarcisio Felipetto", sub: "BJJ College — São Paulo" },
  { img: gallery04, cap: "Sami Galvão", sub: "Physiothérapeute de l'équipe — Ceinture Noire" },
  { img: gallery05, cap: "Tiago Lima", sub: "BJJ College — São Paulo" },
  { img: gallery06, cap: "Pédro Henrique Rangel", sub: "BJJ College — São Paulo" },
  { img: gallery07, cap: "Joao Miyao", sub: "Stage Z-TEAM — Boulogne-Billancourt" },
  { img: gallery08, cap: "Marcio Faraco", sub: "Préparateur mental — BJJ College" },
  { img: gallery09, cap: "Adriano Martins", sub: "BJJ College — São Paulo" },
  { img: gallery10, cap: "Pablo Rosales", sub: "BJJ College — São Paulo" },
  { img: gallery11, cap: "Diogo Reis", sub: "Champion ADCC · Champion One Championship" },
  { img: gallery12, cap: "Nicolas Renier", sub: "Fondateur NRFight — BJJ College" },
  { img: gallery13, cap: "Nicolas Renier & Diogo Reis", sub: "BJJ College — São Paulo" },
  { img: gallery14, cap: "Cours BJJ — Gi", sub: "BJJ College by Melqui Galvão" },
  { img: gallery15, cap: "Nicolas Renier · Poivron · Melqui Galvão", sub: "BJJ College — São Paulo" },
  { img: gallery16, cap: "Cours Grappling — No-Gi", sub: "BJJ College by Melqui Galvão" },
  { img: gallery17, cap: "Cours Grappling — No-Gi", sub: "BJJ College by Melqui Galvão" },
  { img: gallery18, cap: "Pablo Rosales · Mika Galvão · Pantoja", sub: "BJJ College — São Paulo" },
  { img: gallery19, cap: "Lucas Yan · Isaque Lima", sub: "BJJ College — São Paulo" },
  { img: gallery20, cap: "Gabriel", sub: "BJJ College — São Paulo" },
  { img: gallery21, cap: "Nathanaël Jackson", sub: "BJJ College — São Paulo" },
  { img: gallery22, cap: "Melqui Galvão", sub: "BJJ College by Melqui Galvão" },
  { img: gallery23, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery24, cap: "Claudio Ribeiro", sub: "BJJ College — São Paulo" },
  { img: gallery25, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery26, cap: "Alex Sodré", sub: "BJJ College — São Paulo" },
  { img: gallery27, cap: "Poivron", sub: "BJJ College — São Paulo" },
  { img: gallery28, cap: "Pantoja", sub: "BJJ College — São Paulo" },
  { img: gallery29, cap: "Isaque Lima", sub: "BJJ College — São Paulo" },
  { img: gallery30, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery31, cap: "Nathanaël Jackson", sub: "BJJ College — São Paulo" },
  { img: gallery32, cap: "Arthur Sousa", sub: "BJJ College — São Paulo" },
  { img: gallery33, cap: "Zangado", sub: "BJJ College — São Paulo" },
  { img: gallery34, cap: "Caleb Henrique", sub: "BJJ College — São Paulo" },
  { img: gallery35, cap: "Zangado", sub: "BJJ College — São Paulo" },
  { img: gallery36, cap: "Pédro Henrique Rangel", sub: "BJJ College — São Paulo" },
  { img: gallery37, cap: "Lívia Barassine", sub: "BJJ College — São Paulo" },
  { img: gallery38, cap: "Vinicius Dilan", sub: "BJJ College — São Paulo" },
  { img: gallery39, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery40, cap: "Arthur Sousa", sub: "BJJ College — São Paulo" },
  { img: gallery41, cap: "Alex Sodré", sub: "BJJ College — São Paulo" },
];

const EMAILJS_SERVICE_ID  = "votre_service_id";
const EMAILJS_TEMPLATE_ID = "votre_template_id";
const EMAILJS_PUBLIC_KEY  = "votre_public_key";

const ModalReglement    = lazy(() => import("./modals/ModalReglement"));
const ModalCompetiteur  = lazy(() => import("./modals/ModalCompetiteur"));
const ModalPrepPhysique = lazy(() => import("./modals/ModalPrepPhysique"));
const ModalPrive        = lazy(() => import("./modals/ModalPrive"));
const ModalKids         = lazy(() => import("./modals/ModalKids"));
const ModalDisciplines  = lazy(() => import("./modals/ModalDisciplines"));
const ModalCoach        = lazy(() => import("./modals/ModalCoach"));
const ModalProgramme    = lazy(() => import("./modals/ModalProgramme"));
const ModalHoraires     = lazy(() => import("./modals/ModalHoraires"));
const ModalClub         = lazy(() => import("./modals/ModalClub"));
const ModalContact      = lazy(() => import("./modals/ModalContact"));
const ModalAvis         = lazy(() => import("./modals/ModalAvis"));

const MODAL_TITLES = {
  disciplines: "Disciplines", coach: "Le Coach — Karim Sadat",
  programme: "Programme Adultes", horaires: "Horaires & Tarifs",
  club: "Le Club", contact: "Réserve ta séance", kids: "Kids & Ados",
  prive: "Cours Privés", competiteur: "Programme Compétiteur",
  prepphysique: "Préparation Physique", reglement: "Règlement du Club",
  avis: "Avis & Témoignages",
};

const SLIDE_DURATION = 4000;
export function useSlider(length, autoplay = true) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const rafRef = useRef(null);
  const startTs = useRef(null);
  const elapsedMs = useRef(0);

  const goTo = useCallback((idx) => {
    const next = typeof idx === "function" ? idx(slide) : idx;
    setSlide(next); setProgress(0); elapsedMs.current = 0;
  }, [slide]);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    if (paused || !autoplay) return;
    startTs.current = performance.now();
    const tick = () => {
      const spent = elapsedMs.current + (performance.now() - startTs.current);
      setProgress(Math.min((spent / SLIDE_DURATION) * 100, 100));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, slide, autoplay]);

  useEffect(() => {
    clearTimeout(timerRef.current);
    if (paused || !autoplay) return;
    const remaining = SLIDE_DURATION - elapsedMs.current;
    timerRef.current = setTimeout(() => {
      setSlide(s => (s + 1) % length); setProgress(0); elapsedMs.current = 0;
    }, Math.max(remaining, 200));
    return () => clearTimeout(timerRef.current);
  }, [paused, slide, length, autoplay]);

  const handlePause = useCallback(() => {
    elapsedMs.current += performance.now() - (startTs.current || performance.now());
    setPaused(true);
  }, []);
  const handleResume = useCallback(() => {
    startTs.current = performance.now(); setPaused(false);
  }, []);

  return { slide, paused, progress, goTo, handlePause, handleResume };
}

export function CompactDots({ total, current, onSelect, className = "" }) {
  const dots = useMemo(() => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i);
    const start = Math.max(0, Math.min(current - 2, total - 5));
    return Array.from({ length: 5 }, (_, i) => start + i);
  }, [total, current]);
  return (
    <div className={`compact-dots ${className}`}>
      {dots.map(i => (
        <button key={i} onClick={() => onSelect(i)} aria-label={`Photo ${i + 1}`}
          className={`compact-dot${i === current ? " active" : ""}`} />
      ))}
    </div>
  );
}

export const Ic = ({ d, s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

function SKLogo({ size = 44 }) {
  return <img src={skLogo} width={size} height={size} alt="Logo SK TEAM JJB"
    style={{ display: "block", objectFit: "contain", borderRadius: "50%" }} />;
}

function useFocusTrap(ref, active) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const el = ref.current;
    const focusable = el.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last?.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first?.focus(); } }
    };
    el.addEventListener("keydown", trap);
    first?.focus();
    return () => el.removeEventListener("keydown", trap);
  }, [active, ref]);
}

export function ModalWrapper({ open, onClose, title, children }) {
  const panelRef = useRef(null);
  useFocusTrap(panelRef, open);
  useEffect(() => {
    if (!open) return;
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal-panel" ref={panelRef} onClick={(e) => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">{title}</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function HomeSlider({ photos }) {
  const { slide, paused, progress, goTo, handlePause, handleResume } = useSlider(photos.length);
  return (
    <div className="home-slider" onMouseEnter={handlePause} onMouseLeave={handleResume}
      role="region" aria-label="Diaporama immersions Brésil">
      <div className="home-slider-bg" style={{ backgroundImage: `url(${photos[slide].img})` }} aria-hidden="true" />
      <div className="home-slider-track" aria-hidden="true">
        {photos.map((p, i) => (
          <img key={i} className={`home-slider-img${i === slide ? " active" : ""}`}
            src={p.img} alt={`${p.cap} — ${p.sub}`} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
        ))}
      </div>
      <div className="home-slider-overlay" aria-hidden="true" />
      <div className="home-slider-info">
        <div className="home-slider-cap">{photos[slide].cap}</div>
        <div className="home-slider-sub">{photos[slide].sub}</div>
      </div>
      <button className="home-slider-prev" onClick={() => goTo(s => (s - 1 + photos.length) % photos.length)} aria-label="Photo précédente">&#8249;</button>
      <button className="home-slider-next" onClick={() => goTo(s => (s + 1) % photos.length)} aria-label="Photo suivante">&#8250;</button>
      <div className="home-slider-counter" aria-hidden="true">{slide + 1} / {photos.length}</div>
      {paused && <div className="home-slider-pause">Pause</div>}
      <CompactDots total={photos.length} current={slide} onSelect={goTo} className="home-slider-dots" />
      <div className="home-slider-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    </div>
  );
}

function InscriptionStrip() {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!nom.trim() || !tel.trim()) return;
    setSending(true);
    const msg = encodeURIComponent(`Bonjour SK TEAM JJB ! Je souhaite réserver mon réserve ta séance.\nNom : ${nom}\nTél : ${tel}`);
    window.open(`https://wa.me/33650054954?text=${msg}`, "_blank");
    setSent(true);
    setSending(false);
  };

  return (
    <div className="inscription-strip">
      <div className="inscription-inner">
        <div className="inscription-text">
          <h2>RÉSERVE<br />TA SÉANCE</h2>
          <p>Sans engagement · Clamart (92140)<br />Adultes, Ados, Kids — tous niveaux</p>
          <div style={{ color: "#FFD700", fontFamily: "var(--fc)", fontSize: 11, marginTop: 8 }}>Clamart · 92140 — Tous niveaux</div>
        </div>
        {sent ? (
          <div className="inscription-success">Message envoyé — on vous recontacte rapidement !</div>
        ) : (
          <div className="inscription-form">
            <input className="inscription-input" placeholder="Votre prénom" value={nom} onChange={e => setNom(e.target.value)} />
            <input className="inscription-input" placeholder="Votre téléphone" value={tel} onChange={e => setTel(e.target.value)} type="tel" />
            <button className="inscription-btn" onClick={handleSubmit} disabled={sending}>
              {sending ? "Envoi..." : "Je réserve"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ModalContactInline({ open, onClose }) {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", telephone: "", discipline: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.prenom || !form.email) { setError("Veuillez renseigner votre prénom et votre email."); return; }
    setSending(true); setError("");
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        prenom: form.prenom, nom: form.nom, email: form.email,
        telephone: form.telephone, discipline: form.discipline || "Non précisé", message: form.message || "—",
      }, EMAILJS_PUBLIC_KEY);
      setSent(true);
    } catch (err) {
      const msg = encodeURIComponent(`Bonjour SK TEAM JJB !\nPrénom : ${form.prenom}\nEmail : ${form.email}\nTél : ${form.telephone}`);
      window.open(`https://wa.me/33650054954?text=${msg}`, "_blank");
      setSent(true);
    }
    setSending(false);
  };

  return (
    <ModalWrapper open={open} onClose={onClose} title="ESSAI GRATUIT">
      <div className="modal-body">
        <div className="m-tag">Rejoindre le club</div>
        <h2 className="m-h2">PRET A<br />COMMENCER ?</h2>
        <div className="m-divider" />
        <p className="m-text">Premier cours d'réserve ta séance, sans engagement. Venez découvrir le JJB à Clamart.</p>
        {sent ? (
          <div style={{ padding: "24px", background: "rgba(37,211,102,.08)", border: "1px solid rgba(37,211,102,.3)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--fd)", fontSize: 32, color: "#25D366", marginBottom: 8 }}>OK</div>
            <div style={{ fontFamily: "var(--fc)", fontSize: 13, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--white)" }}>Message envoyé !</div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", marginTop: 8 }}>Karim vous recontactera dans les 24h.</p>
          </div>
        ) : (
          <form className="m-form" onSubmit={handleSubmit} noValidate>
            {error && <div role="alert" style={{ padding: "10px 14px", background: "rgba(192,57,43,.15)", border: "1px solid rgba(192,57,43,.4)", color: "var(--red)", fontFamily: "var(--fc)", fontSize: 11, fontWeight: 700 }}>{error}</div>}
            <div className="m-form-row">
              <input className="m-input" type="text" name="prenom" placeholder="Prénom *" value={form.prenom} onChange={handleChange} required />
              <input className="m-input" type="text" name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} />
            </div>
            <input className="m-input" type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} required />
            <input className="m-input" type="tel" name="telephone" placeholder="Téléphone" value={form.telephone} onChange={handleChange} />
            <select className="m-input" name="discipline" value={form.discipline} onChange={handleChange}>
              <option value="">Discipline qui vous intéresse</option>
              <option value="Brazilian Jiu-Jitsu">Brazilian Jiu-Jitsu</option>
              <option value="Grappling">Grappling</option>
              <option value="Self-Défense">Self-Défense</option>
              <option value="Pas encore sûr(e)">Pas encore sûr(e)</option>
            </select>
            <textarea className="m-input m-textarea" name="message" placeholder="Message (optionnel)" value={form.message} onChange={handleChange} />
            <button type="submit" className="m-submit" disabled={sending}>
              {sending ? "Envoi en cours..." : "Envoyer ma demande d'essai"}
            </button>
          </form>
        )}
        <div className="m-section">
          <div className="m-section-title">Contact direct</div>
          <div className="social-links">
            <a href="mailto:sk.team.jjb@gmail.com" className="social-link">
              <Ic d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7-10-7" s={14} />
              sk.team.jjb@gmail.com
            </a>
            <a href="https://www.instagram.com/skteamjjb" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              @skteamjjb
            </a>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const fn = () => { if (!ticking) { requestAnimationFrame(() => { setScrolled(window.scrollY > 50); ticking = false; }); ticking = true; } };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { document.body.style.overflow = (menuOpen || modal) ? "hidden" : ""; }, [menuOpen, modal]);

  useEffect(() => {
    const base = "SK TEAM JJB — Brazilian Jiu-Jitsu & Grappling à Clamart (92140)";
    document.title = modal && MODAL_TITLES[modal] ? `${MODAL_TITLES[modal]} — SK TEAM JJB` : base;
  }, [modal]);

  useEffect(() => {
    document.documentElement.lang = "fr";
    document.title = "SK TEAM JJB — Brazilian Jiu-Jitsu & Grappling à Clamart (92140)";
    const setMeta = (name, content, isProp = false) => {
      const attr = isProp ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "SK TEAM JJB — Club de Brazilian Jiu-Jitsu, Grappling et Self-Défense à Clamart (92140). Ceinture noire 1er Dan IBJJF, affilié FFJDA et CFJJB. 1er cours d'réserve ta séance.");
    setMeta("robots", "index, follow");
    setMeta("og:type", "website", true);
    setMeta("og:title", "SK TEAM JJB — BJJ Clamart", true);
    setMeta("og:description", "Club BJJ à Clamart. Réserve ta séance !", true);
    setMeta("og:url", "https://sk-team-jjb.vercel.app", true);
    setMeta("og:image", "https://sk-team-jjb.vercel.app/og-image.jpg", true);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://sk-team-jjb.vercel.app";
    let schema = document.getElementById("schema-org");
    if (!schema) { schema = document.createElement("script"); schema.id = "schema-org"; schema.type = "application/ld+json"; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": ["SportsClub", "LocalBusiness"],
      "name": "SK TEAM JJB", "url": "https://sk-team-jjb.vercel.app",
      "email": "sk.team.jjb@gmail.com", "telephone": "+33650054954",
      "address": { "@type": "PostalAddress", "streetAddress": "26 rue de Normandie", "addressLocality": "Clamart", "postalCode": "92140", "addressCountry": "FR" },
      "founder": { "@type": "Person", "name": "Karim Sadat", "jobTitle": "Directeur Technique — Ceinture Noire 1er Dan IBJJF" },
      "sameAs": ["https://www.instagram.com/skteamjjb"],
    });
  }, []);

  const NAV_ITEMS = useMemo(() => [
    { id: "disciplines", l: "Disciplines" }, { id: "programme", l: "Programme" },
    { id: "coach", l: "Coach" }, { id: "horaires", l: "Horaires" }, { id: "club", l: "Le Club" },
  ], []);

  const NAV_MORE = useMemo(() => [
    { id: "kids", l: "Kids & Ados" }, { id: "prive", l: "Cours Privés" },
    { id: "competiteur", l: "Compétiteur" }, { id: "prepphysique", l: "Prépa Physique" },
    { id: "reglement", l: "Règlement" },
    { id: "avis", l: "Avis" },
  ], []);

  const open = useCallback(id => setModal(id), []);
  const close = useCallback(() => setModal(null), []);
  const openContact = useCallback(() => open("contact"), [open]);

  const CARDS = useMemo(() => [
    { id: "disciplines", n: "01", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", t: "Disciplines", d: "Brazilian Jiu-Jitsu — Grappling — Self-Défense. Trois arts martiaux complémentaires pour progresser à votre rythme." },
    { id: "coach", n: "02", icon: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z", t: "Le Coach", d: "Karim Sadat, ceinture noire 1er Dan IBJJF, 13 ans de pratique, 2 000+ heures d'enseignement." },
    { id: "programme", n: "03", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2 M9 5a2 2 0 002 2h2a2 2 0 002-2 M9 5a2 2 0 012-2h2a2 2 0 012 2", t: "Programme", d: "34 séances structurées sur 3 mésocycles selon le référentiel SK TEAM BJJ. Adultes débutants 15+." },
    { id: "horaires", n: "04", icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2", t: "Horaires & Tarifs", d: "Lundi et Mercredi 19h30–20h30. Tarifs à partir de 200 euros par an. 1er cours d'réserve ta séance." },
    { id: "club", n: "05", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75", t: "Le Club", d: "Association loi 1901, affiliée FFJDA et CFJJB, fondée à Clamart. Un cadre structuré et bienveillant pour tous les niveaux." },
    { id: "kids", n: "06", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75", t: "Kids & Ados", d: "BJJ pour les 6 à 17 ans. 3 groupes : Mini (6-9), Junior (10-14), Ados (15-17)." },
    { id: "reglement", n: "07", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2 M9 5a2 2 0 002 2h2a2 2 0 002-2 M9 5a2 2 0 012-2h2a2 2 0 012 2 M12 12h.01 M12 16h.01", t: "Règlement", d: "Hygiène, tenues, respect, ponctualité, sécurité. Les règles qui s'appliquent à tous les membres." },
    { id: "competiteur", n: "08", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", t: "Programme Compétiteur", d: "Périodisation 3 phases : volume, intensification, affûtage pré-compétition." },
    { id: "prepphysique", n: "09", icon: "M22 12h-4l-3 9L9 3l-3 9H2", t: "Préparation Physique", d: "4 programmes : Force et Explosivité, Endurance spécifique, Mobilité et Récupération, Circuit tatami." },
    { id: "avis", n: "10", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", t: "Avis & Témoignages", d: "Laissez votre avis et découvrez les témoignages de nos élèves." },
    { id: "contact", n: "11", icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z", t: "Contact & Inscription", d: "Réserve ta séance d'essai. Première séance à 10€, sans engagement." },
  ], []);

  const prefetchModal = useCallback((id) => {
    const map = {
      disciplines: () => import("./modals/ModalDisciplines"),
      coach: () => import("./modals/ModalCoach"),
      programme: () => import("./modals/ModalProgramme"),
      horaires: () => import("./modals/ModalHoraires"),
      club: () => import("./modals/ModalClub"),
      kids: () => import("./modals/ModalKids"),
      prive: () => import("./modals/ModalPrive"),
      competiteur: () => import("./modals/ModalCompetiteur"),
      prepphysique: () => import("./modals/ModalPrepPhysique"),
      reglement: () => import("./modals/ModalReglement"),
      avis: () => import("./modals/ModalAvis"),
    };
    map[id]?.();
  }, []);

  const ModalFallback = (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: "var(--fc)", fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>CHARGEMENT...</div>
    </div>
  );

  return (
    <>
      <Suspense fallback={ModalFallback}>
        <ModalReglement    open={modal === "reglement"}    onClose={close} />
        <ModalCompetiteur  open={modal === "competiteur"}  onClose={close} openContact={openContact} />
        <ModalPrepPhysique open={modal === "prepphysique"} onClose={close} openContact={openContact} />
        <ModalPrive        open={modal === "prive"}        onClose={close} openContact={openContact} />
        <ModalKids         open={modal === "kids"}         onClose={close} openContact={openContact} />
        <ModalDisciplines  open={modal === "disciplines"}  onClose={close} openContact={openContact} />
        <ModalCoach        open={modal === "coach"}        onClose={close} />
        <ModalProgramme    open={modal === "programme"}    onClose={close} />
        <ModalHoraires     open={modal === "horaires"}     onClose={close} openContact={openContact} />
        <ModalClub         open={modal === "club"}         onClose={close} />
        <ModalContact      open={modal === "contact"}      onClose={close} />
        <ModalAvis         open={modal === "avis"}         onClose={close} />
      </Suspense>

      <ModalContactInline open={modal === "contact"} onClose={close} />

      <nav className={`nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Navigation principale">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} role="link" tabIndex={0} onKeyDown={e => { if (e.key === "Enter") window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <SKLogo size={44} />
            <div>
              <div className="nav-logo-name">SK TEAM JJB</div>
              <div className="nav-logo-sub">Clamart · 92140</div>
            </div>
          </div>
          <ul className="nav-links" role="menubar">
            {NAV_ITEMS.map(({ id, l }) => (
              <li key={id} role="none">
                <button className={`nav-btn${modal === id ? " active" : ""}`} onClick={() => open(id)} onMouseEnter={() => prefetchModal(id)} role="menuitem">{l}</button>
              </li>
            ))}
            <li role="none">
              <div className={`nav-more-wrap${moreOpen ? " open" : ""}`} onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                <button className={`nav-btn${NAV_MORE.some(x => x.id === modal) ? " active" : ""}`} onClick={() => setMoreOpen(o => !o)} aria-haspopup="true" aria-expanded={moreOpen} role="menuitem">Plus</button>
                <div className="nav-more-dropdown" role="menu">
                  {NAV_MORE.map(({ id, l }) => (
                    <button key={id} className={`nav-more-item${modal === id ? " active" : ""}`} onClick={() => { setMoreOpen(false); open(id); }} onMouseEnter={() => prefetchModal(id)} role="menuitem">{l}</button>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <button className="nav-cta" onClick={() => open("contact")}>Réserve ta séance</button>
          <button className="burger" onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
            <span style={menuOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mob-menu${menuOpen ? " open" : ""}`} role="dialog" aria-modal={menuOpen}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--fc)", fontSize: 9, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--red)", marginBottom: 4 }}>COURS</div>
          {["disciplines", "programme", "kids", "prive"].map(id => {
            const item = [...NAV_ITEMS, ...NAV_MORE].find(x => x.id === id);
            return item ? <button key={id} className="mob-btn" style={{ fontSize: 32 }} onClick={() => { setMenuOpen(false); setTimeout(() => open(id), 100); }}>{item.l}</button> : null;
          })}
          <div style={{ fontFamily: "var(--fc)", fontSize: 9, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--red)", margin: "12px 0 4px" }}>CLUB</div>
          {["coach", "club", "reglement"].map(id => {
            const item = [...NAV_ITEMS, ...NAV_MORE].find(x => x.id === id);
            return item ? <button key={id} className="mob-btn" style={{ fontSize: 32 }} onClick={() => { setMenuOpen(false); setTimeout(() => open(id), 100); }}>{item.l}</button> : null;
          })}
          <div style={{ fontFamily: "var(--fc)", fontSize: 9, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--red)", margin: "12px 0 4px" }}>SPORT</div>
          {["competiteur", "prepphysique"].map(id => {
            const item = [...NAV_ITEMS, ...NAV_MORE].find(x => x.id === id);
            return item ? <button key={id} className="mob-btn" style={{ fontSize: 32 }} onClick={() => { setMenuOpen(false); setTimeout(() => open(id), 100); }}>{item.l}</button> : null;
          })}
          <div style={{ fontFamily: "var(--fc)", fontSize: 9, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--red)", margin: "12px 0 4px" }}>INFOS</div>
          {["horaires"].map(id => {
            const item = NAV_ITEMS.find(x => x.id === id);
            return item ? <button key={id} className="mob-btn" style={{ fontSize: 32 }} onClick={() => { setMenuOpen(false); setTimeout(() => open(id), 100); }}>{item.l}</button> : null;
          })}
        </div>
        <button className="mob-cta-btn" onClick={() => { setMenuOpen(false); setTimeout(() => open("contact"), 100); }}>Réserve ta séance</button>
      </div>

      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", background: "#000" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "contain",
            zIndex: 0,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-grad" />
        <div className="hero-content">
          <div className="hero-eyebrow">Clamart · Hauts-de-Seine · 92140</div>
          <h1 className="hero-h1"><em>BRAZILIAN</em>JIU-JITSU</h1>
          <p className="hero-desc">Club associatif affilié FFJDA et CFJJB, fondé à Clamart. Adultes débutants et compétiteurs — encadrés par un ceinture noire 1er Dan IBJJF.</p>
          <div className="hero-urgence">
            <span className="hero-urgence-dot" />
            Inscriptions ouvertes — Réserve ton cours d'essai
          </div>
          <div className="hero-actions">
            <button className="btn-red" onClick={() => open("contact")}>Réserve ta séance</button>
            <button className="btn-ghost-white" onClick={() => open("programme")}>Voir le programme</button>
          </div>
        </div>
        <div className="stats-bar">
          {[["13+", "Ans de pratique"], ["2 000+", "Heures enseignées"], ["34", "Séances/saison"], ["1er Dan", "Ceinture Noire IBJJF"]].map(([n, l]) => (
            <div className="stat" key={l}><div className="stat-n">{n}</div><div className="stat-l">{l}</div></div>
          ))}
        </div>
      </section>

      <section className="testi-bar">
        <div className="testi-inner">
          {[
            { t: "Karim a fait une immersion au Brésil chez Melqui Galvão. Sa pédagogie est claire, progressive et exigeante.", n: "Thomas R.", d: "Ceinture bleue · Élève depuis 6 mois" },
            { t: "Ambiance familiale, technique solide. Karim s'adapte à chaque niveau. Le meilleur club BJJ de Clamart.", n: "Mehdi L.", d: "Élève depuis 1 an" },
            { t: "J'ai commencé à zéro. En 6 mois j'ai progressé plus vite qu'en 2 ans dans ma salle précédente.", n: "Sébastien M.", d: "Débutant · Saison 2025" },
          ].map(item => (
            <div key={item.n} className="testi-item">
              <div className="testi-stars">5 étoiles</div>
              <blockquote className="testi-text">{item.t}</blockquote>
              <div className="testi-header">
                <div className="testi-avatar">{item.n[0]}</div>
                <div><div className="testi-name">{item.n}</div><div className="testi-detail">{item.d}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InscriptionStrip />

      <section className="home-section">
        <div className="home-section-inner">
          <div className="home-section-tag">Tout le club</div>
          <h2 className="home-section-title">EXPLOREZ<br />SK TEAM JJB</h2>
          <div className="cards-grid">
            {CARDS.map(c => (
              <button key={c.id} className="card" onClick={() => open(c.id)} onMouseEnter={() => prefetchModal(c.id)}>
                <div className="card-n">{c.n}</div>
                <div className="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon} /></svg></div>
                <div className="card-title">{c.t}</div>
                <p className="card-desc">{c.d}</p>
                <div className="card-arrow">Voir</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      
      <section style={{ background: "#111", borderTop: "1px solid var(--border)", padding: "60px 0" }}>
        <div className="home-section-inner">
          <div className="home-section-tag">Pour tous les niveaux</div>
          <h2 className="home-section-title">COURS<br />DÉBUTANTS</h2>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 15, lineHeight: 1.8, maxWidth: 600, marginBottom: 40 }}>
            Que vous ayez 6 ans ou 60 ans, aucune expérience requise. Karim adapte son enseignement à chaque profil avec une pédagogie progressive, bienveillante et structurée.
          </p>
          <div className="cards-grid">
            {[
              { id: "kids", emoji: "🥋", age: "6 – 9 ans", titre: "Mini BJJ", desc: "Découverte par le jeu. Motricité, équilibre, confiance en soi dans un cadre ludique et sécurisé." },
              { id: "kids", emoji: "🏆", age: "10 – 14 ans", titre: "Junior BJJ", desc: "Techniques fondamentales, sparring encadré, discipline et respect — les bases du vrai BJJ." },
              { id: "kids", emoji: "⚡", age: "15 – 17 ans", titre: "Ados BJJ", desc: "Programme avancé, compétition possible, transition vers les cours adultes." },
              { id: "programme", emoji: "💪", age: "Dès 18 ans", titre: "Adultes BJJ", desc: "Débutants bienvenus. Programme structuré sur 34 séances, progression garantie." },
              { id: "programme", emoji: "🎯", age: "35 ans et +", titre: "Masters BJJ", desc: "Rythme adapté, techniques efficaces. Le BJJ n'a pas d'âge — venez progresser à votre mesure." },
              { id: "prive", emoji: "🔑", age: "Tous âges", titre: "Cours Privés", desc: "Accompagnement individuel avec Karim. Progression accélérée, technique personnalisée." },
            ].map(c => (
              <button key={c.titre} className="card" onClick={() => open(c.id)}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.emoji}</div>
                <div className="card-n">{c.age}</div>
                <div className="card-title">{c.titre}</div>
                <p className="card-desc">{c.desc}</p>
                <div className="card-arrow">Voir →</div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "var(--dark)", borderTop: "1px solid var(--border)", padding: "60px 0" }}>
        <div className="home-section-inner">
          <div className="home-section-tag">Immersion Brésil</div>
          <h2 className="home-section-title" style={{ marginBottom: 0 }}>IMMERSION<br />BRESIL</h2>
          <HomeSlider photos={GALLERY_PHOTOS} />
        </div>
      </section>

      <section className="about-strip">
        <div className="about-inner">
          <div className="about-left">
            <div className="tag">Votre coach</div>
            <h2>KARIM<br />SADAT</h2>
            <p>Ceinture Noire 1er Dan IBJJF, 13+ ans de pratique, 2 000+ heures d'enseignement. Une pédagogie claire, progressive et bienveillante — du débutant au compétiteur. Immersion au Brésil chez Melqui Galvão, stage avec Joao Miyao. Fondateur de SK TEAM JJB, association loi 1901 à Clamart.</p>
            <button className="btn-red" onClick={() => open("coach")}>Découvrir le coach</button>
            <div className="about-stats" style={{ marginTop: 36 }}>
              {[["13+", "Ans de pratique"], ["2 000+", "Heures enseignées"], ["100+", "Adultes formés"], ["60+", "Jeunes encadrés"]].map(([n, l]) => (
                <div key={l} className="about-stat"><div className="about-stat-n">{n}</div><div className="about-stat-l">{l}</div></div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <img className="about-photo" src={coachPhoto} alt="Karim Sadat — Coach BJJ SK TEAM JJB Clamart" loading="lazy" />
            <div className="about-badge">
              <div className="about-badge-title">Immersion Brésil</div>
              <div className="about-badge-sub">BJJ College — Jundiaí, São Paulo</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-strip-bg" style={{ backgroundImage: `url(${IMG.cta})` }} />
        <div className="cta-strip-ov" />
        <div className="cta-strip-top" />
        <div className="cta-strip-inner">
          <div>
            <h2 className="cta-strip-h2">PRET A<br />COMMENCER ?</h2>
            <p className="cta-strip-sub">Premier cours d'réserve ta séance, sans engagement. Venez découvrir le JJB à Clamart dans une ambiance technique et bienveillante.</p>
          </div>
          <button className="btn-white" onClick={() => open("contact")}>Réserver ma séance</button>
        </div>
      </section>

      <div className="wa-wrap">
        <div className="wa-tooltip">WhatsApp</div>
        <a className="wa-btn" href="https://wa.me/33650054954?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20SK%20TEAM%20JJB%20%E2%80%94%20essai%20gratuit" target="_blank" rel="noopener noreferrer" aria-label="Contacter SK TEAM JJB sur WhatsApp">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-logo"><SKLogo size={36} /><span className="footer-logo-name">SK TEAM JJB</span></div>
              <p className="footer-tagline">Brazilian Jiu-Jitsu, Grappling et Self-Défense à Clamart (92140). Association loi 1901, affiliée FFJDA et CFJJB.</p>
              <div className="footer-affil">{["FFJDA", "CFJJB", "IBJJF", "FFL", "Loi 1901"].map(b => <span key={b} className="footer-badge">{b}</span>)}</div>
              <a href="https://www.instagram.com/skteamjjb" target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginTop: 16, display: "inline-flex" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                @skteamjjb
              </a>
            </div>
            <nav>
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-links">
                {NAV_ITEMS.map(({ id, l }) => <li key={id}><button onClick={() => open(id)}>{l}</button></li>)}
                <li><button onClick={() => open("contact")}>Réserve ta séance</button></li>
              </ul>
            </nav>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="mailto:sk.team.jjb@gmail.com">sk.team.jjb@gmail.com</a></li>
                <li className="plain">Clamart · 92140</li>
                <li className="plain">Hauts-de-Seine</li>
                <li style={{ marginTop: 14 }}><a href="https://www.instagram.com/skteamjjb" target="_blank" rel="noopener noreferrer">Instagram @skteamjjb</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">2025-2026 SK TEAM JJB — Association loi 1901 · Clamart (92140)</p>
            <p className="footer-copy">Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </>
  );
}
