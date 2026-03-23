/**
 * modals/ModalDisciplines.jsx — Fichier lazy-loadé
 * Pattern à reproduire pour toutes les modales :
 *   1. Import ModalWrapper depuis "./ModalWrapper"
 *   2. Import IMG depuis "../App" si besoin d'images
 *   3. Export default de la modale
 */
import ModalWrapper from "./ModalWrapper";
import { IMG } from "../App";

const Ic = ({ d, s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

export default function ModalDisciplines({ open, onClose, openContact }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="DISCIPLINES">
      <img
        className="modal-hero-img"
        src={IMG.disc}
        alt="Tatami du club SK TEAM JJB — Brazilian Jiu-Jitsu Clamart 92140"
        loading="lazy"
      />
      <div className="modal-body">
        <div className="m-tag">Ce qu&apos;on pratique</div>
        <h2 className="m-h2">NOS<br />DISCIPLINES</h2>
        <div className="m-divider" />
        {[
          {
            n: "01", t: "Brazilian Jiu-Jitsu",
            tags: ["Kimono", "No-Gi", "Compétition", "Loisir"],
            d: "L'art du sol. Maîtriser les positions, passages de garde et soumissions. Programme structuré selon le référentiel SK TEAM BJJ, avec suivi individuel de progression pour chaque pratiquant.",
          },
          {
            n: "02", t: "Grappling",
            tags: ["No-Gi", "FFL", "MMA Base"],
            d: "Combat sans kimono. Techniques de lutte, étranglements et clés articulaires adaptées au No-Gi. Coach certifié Ceinture Noire Grappling FFL. Base idéale pour la compétition et le MMA.",
          },
          {
            n: "03", t: "Self-Défense",
            tags: ["AFGSU2", "Tous niveaux", "Pratique"],
            d: "Techniques pratiques et réalistes basées sur le JJB et le Grappling. Pédagogie progressive adaptée à tous les niveaux, avec une approche situationnelle et efficace.",
          },
        ].map(disc => (
          <div key={disc.n} className="m-section">
            <div className="m-section-title">{disc.n} — {disc.t}</div>
            <p className="m-text">{disc.d}</p>
            <div className="m-tags">
              {disc.tags.map(t => <span key={t} className="m-tag-pill">{t}</span>)}
            </div>
          </div>
        ))}
        <div className="m-cta">
          <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>
            Réserver mon essai gratuit
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
