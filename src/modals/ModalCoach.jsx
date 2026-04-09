import ModalWrapper from "./ModalWrapper";
import { IMG } from "../App";

const DIPLOMES = [
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    titre: "Ceinture Noire 1er Dan — BJJ",
    organisme: "IBJJF / CFJJB",
    date: "21 novembre 2025 — États-Unis",
    couleur: "#C0392B",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    titre: "Ceinture Noire — Grappling",
    organisme: "Fédération Française de Lutte (FFL)",
    date: "18 janvier 2016 — Grigny",
    couleur: "#C0392B",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    titre: "Certificat d'Animateur Fédéral JJB",
    organisme: "France Judo / FFJDA — N° M26041977SADAT01",
    date: "26 mai 2025",
    couleur: "#2980B9",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    titre: "CQP Moniteur Arts Martiaux — JJB",
    organisme: "En cours de validation — France Judo",
    date: "2025–2026",
    couleur: "#2980B9",
  },
  {
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    titre: "IBJJF Rules Webinar — Score 90%",
    organisme: "International Brazilian Jiu-Jitsu Federation",
    date: "21 novembre 2025",
    couleur: "#27AE60",
  },
  {
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    titre: "AFGSU Niveau 2",
    organisme: "Croix Rouge Française — Ministère de la Santé",
    date: "16 février 2016 — Paris",
    couleur: "#E74C3C",
  },
  {
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    titre: "Association Loi 1901 — SK TEAM BJJ",
    organisme: "Récépissé W921011860 — Sous-Préfecture Hauts-de-Seine",
    date: "26 mars 2026 — Clamart",
    couleur: "#8E44AD",
  },
];

const COMPETITIONS = [
  { annee: "2013–2025", titre: "Championnats de France BJJ", orga: "CFJJB" },
  { annee: "2018, 2022", titre: "IBJJF European Championships", orga: "Lisbonne & Paris" },
  { annee: "2023", titre: "IBJJF European Masters", orga: "Barcelone" },
];

export default function ModalCoach({ open, onClose }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="LE COACH">
      <img
        className="modal-hero-img"
        src={IMG.action}
        alt="Karim Sadat en action — coach BJJ Ceinture Noire IBJJF SK TEAM JJB"
        style={{ objectPosition: "center 37.5%" }}
        loading="lazy"
      />
      <div className="modal-body">
        <div className="m-tag">Votre coach</div>
        <h2 className="m-h2">KARIM<br />SADAT</h2>
        <div className="m-divider" />
        <p className="m-text">Pratiquant de Brazilian Jiu-Jitsu depuis plus de 13 ans, Karim Sadat cumule plus de 2 000 heures d'enseignement. Compétiteur au niveau national et international — Championnats de France, IBJJF European Championships.</p>
        <p className="m-text">Titulaire du CQP Moniteur Arts Martiaux (spécialité JJB), Animateur Fédéral France Judo et arbitre en formation auprès de la FFJDA. Immersion au Brésil — BJJ College by Melqui Galvão à Jundiaí, São Paulo.</p>

        <div className="m-grid2">
          {[
            { v: "CN 1er Dan", l: "IBJJF / CFJJB" },
            { v: "CN Grappling", l: "FFL" },
            { v: "CAF JJB", l: "France Judo" },
            { v: "CQP MAM", l: "En cours" },
            { v: "2 000+ heures", l: "Enseignement" },
            { v: "13+ ans", l: "Pratique" },
          ].map(c => (
            <div key={c.v} className="m-cell">
              <div className="m-cell-val">{c.v}</div>
              <div className="m-cell-lbl">{c.l}</div>
            </div>
          ))}
        </div>

        <div className="m-section">
          <div className="m-section-title">Diplômes & Certifications</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
            {DIPLOMES.map(d => (
              <div key={d.titre} style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "14px 16px",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.07)",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                  background: `${d.couleur}22`,
                  border: `1px solid ${d.couleur}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={d.couleur} strokeWidth="2">
                    <path d={d.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--fd)", fontSize: 14, color: "var(--white)", marginBottom: 3 }}>{d.titre}</div>
                  <div style={{ fontFamily: "var(--fc)", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 2 }}>{d.organisme}</div>
                  <div style={{ fontFamily: "var(--fc)", fontSize: 10, color: d.couleur, letterSpacing: "1px" }}>{d.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="m-section">
          <div className="m-section-title">Palmarès Compétition</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
            {COMPETITIONS.map(c => (
              <div key={c.titre} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 16px",
                background: "rgba(192,57,43,.05)",
                border: "1px solid rgba(192,57,43,.12)",
              }}>
                <div>
                  <div style={{ fontFamily: "var(--fc)", fontSize: 12, fontWeight: 700, color: "var(--white)", letterSpacing: "1px" }}>{c.titre}</div>
                  <div style={{ fontFamily: "var(--fc)", fontSize: 10, color: "rgba(255,255,255,.4)", letterSpacing: "1px", marginTop: 2 }}>{c.orga}</div>
                </div>
                <div style={{ fontFamily: "var(--fd)", fontSize: 13, color: "var(--red)", flexShrink: 0, marginLeft: 12 }}>{c.annee}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="m-section">
          <div className="m-section-title">Immersion — Brésil</div>
          <div className="immersion-grid">
            <div className="immersion-item">
              <img src={IMG.melqui} alt="Karim Sadat avec Melqui Galvão" loading="lazy" />
              <div className="immersion-cap">
                <div className="immersion-name">Melqui Galvão</div>
                <div className="immersion-role">Fondateur BJJ College</div>
              </div>
            </div>
            <div className="immersion-item">
              <img src={IMG.mika} alt="Karim Sadat avec Mika Galvão" loading="lazy" />
              <div className="immersion-cap">
                <div className="immersion-name">Mika Galvão</div>
                <div className="immersion-role">Champion du Monde IBJJF</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: "var(--fc)", fontSize: 10, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>Brésil — São Paulo</div>
            <ul className="m-list">
              <li><strong style={{ color: "var(--white)" }}>BJJ College by Melqui Galvão</strong><span style={{ marginLeft: 8, color: "rgba(255,255,255,.4)" }}>Jundiaí, São Paulo</span></li>
            </ul>
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontFamily: "var(--fc)", fontSize: 10, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>États-Unis — New York</div>
            <ul className="m-list">
              <li><strong style={{ color: "var(--white)" }}>Marcelo Garcia Academy</strong><span style={{ marginLeft: 8, color: "rgba(255,255,255,.4)" }}>New York, NY</span></li>
              <li><strong style={{ color: "var(--white)" }}>Vitor Ribeiro Shaoling</strong><span style={{ marginLeft: 8, color: "rgba(255,255,255,.4)" }}>New York, NY</span></li>
            </ul>
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontFamily: "var(--fc)", fontSize: 10, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--red)", marginBottom: 12 }}>États-Unis — Floride</div>
            <ul className="m-list">
              <li><strong style={{ color: "var(--white)" }}>Roberto Cyborg De Abreu Filho</strong></li>
              <li><strong style={{ color: "var(--white)" }}>Robson Moura</strong></li>
              <li><strong style={{ color: "var(--white)" }}>Renato Tavares</strong></li>
            </ul>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/skteamjjb" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            @skteamjjb
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
}
