import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import AccessGate from "../components/AccessGate";

const phases = [
  {
    id:"p1", label:"Phase 1", title:"Fondamentaux & Volume", period:"Oct → Déc · 12 sem.", color:"rgba(192,57,43,.12)",
    desc:"Construction des bases techniques et du volume de travail. Priorité au drilling, à la précision et à la gestion du rythme.",
    seances:[
      {j:"Lun", t:"Technique",  items:["Warmup 10min","Drill position dominante 4×5min","Sparring positionnel 3×6min","Cooldown"]},
      {j:"Mer", t:"Sparring",   items:["Warmup 10min","Flow rolling 2×8min","Sparring intensif 5×5min","Debriefing technique"]},
      {j:"Sam", t:"Open Mat",   items:["Sparring libre 60–90min","Travail des points faibles","Vidéo analyse optionnel"]},
    ],
    tags:["Drilling","Positionnement","Garde","Passage de garde","Étranglements de base"],
  },
  {
    id:"p2", label:"Phase 2", title:"Intensification", period:"Jan → Fév · 8 sem.", color:"rgba(192,57,43,.16)",
    desc:"Montée en intensité progressive. Introduction du sparring compétition avec partenaires de niveau.",
    seances:[
      {j:"Lun", t:"Technique + Drilling", items:["Warmup 10min","Séquence technique ciblée 3×8min","Sparring thématique 4×6min","Stretching"]},
      {j:"Mer", t:"Sparring intensif",    items:["Warmup 10min","Sparring compétition 6×5min","1min récup entre rounds","Analyse post-sparring"]},
      {j:"Sam", t:"Compétition simulée",  items:["Format compétition IBJJF","3 matchs simulés 7min","Arbitrage officiel","Debriefing vidéo"]},
    ],
    tags:["Chaînes de soumissions","Back take","Leg lock entries","Pressure passing","Guillotine"],
  },
  {
    id:"p3", label:"Phase 3", title:"Affûtage Pré-Compétition", period:"J-8 → J-1 · 2 sem.", color:"rgba(192,57,43,.08)",
    desc:"Réduction progressive du volume, maintien de l'intensité. Préservation du système nerveux et confiance maximale à J-1.",
    seances:[
      {j:"J-8 → J-5", t:"Réduction volume",   items:["60% du volume habituel","Sparring léger flow","Révision des techniques signature","Récupération active"]},
      {j:"J-4 → J-2", t:"Maintien intensité", items:["2–3 rounds sparring vif max","Travail mental & visualisation","Nutrition & sommeil priorité","Pas de blessure = objectif 1"]},
      {j:"J-1",        t:"Activation",         items:["Légère activation 20min","Stretching dynamique","Visualisation du tournoi","Coucher tôt, repas contrôlé"]},
    ],
    tags:["Récupération","Visualisation","Poids de forme","Sommeil","Hydratation"],
  },
];

export default function ModalCompetiteur({ open, onClose, openContact }) {
  const [phase, setPhase] = useState(null);

  return (
    <ModalWrapper open={open} onClose={onClose} title="PROGRAMME COMPÉTITEUR">
      <div className="modal-body">
        <div className="m-tag">Performance & Compétition</div>
        <h2 className="m-h2">PROGRAMME<br/>COMPÉTITEUR</h2>
        <div className="m-divider"/>
        <p className="m-text">Périodisation sur mesure pour préparer les compétitions IBJJF, CFJJB et Grappling. 3 phases progressives pour arriver au pic de forme le jour J.</p>
        <AccessGate title="PROGRAMME COMPÉTITEUR">
          <div className="m-grid2" style={{marginBottom:24}}>
            {[{v:"3 phases",l:"Périodisation"},{v:"3×/sem.",l:"Fréquence idéale"},{v:"22 sem.",l:"Durée cycle"},{v:"IBJJF / CFJJB",l:"Référentiel"}].map(c => (
              <div key={c.l} className="m-cell"><div className="m-cell-val">{c.v}</div><div className="m-cell-lbl">{c.l}</div></div>
            ))}
          </div>
          {phases.map(p => (
            <div key={p.id} className="comp-phase">
              <div className="comp-phase-header" onClick={() => setPhase(phase===p.id ? null : p.id)} style={{background:phase===p.id?p.color:"var(--dark2)"}}>
                <div>
                  <div className="comp-phase-title">{p.label} — {p.title}</div>
                  <div className="comp-phase-sub">{p.period}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{transform:phase===p.id?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0}}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
              {phase===p.id && (
                <div className="comp-phase-body">
                  <p className="m-text" style={{marginBottom:16}}>{p.desc}</p>
                  <div className="pp-week">
                    {p.seances.map(s => (
                      <div key={s.j} className="pp-day">
                        <div className="pp-day-label">{s.j}</div>
                        <div className="pp-day-title">{s.t}</div>
                        <ul className="pp-day-items">{s.items.map(item => <li key={item}>{item}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <div className="m-tags">{p.tags.map(t => <span key={t} className="m-tag-pill">{t}</span>)}</div>
                </div>
              )}
            </div>
          ))}
          <div className="m-section">
            <div className="m-section-title">Suivi personnalisé</div>
            <p className="m-text">Ce programme est adapté individuellement lors d'un bilan initial. Karim analyse tes points forts et ton calendrier de compétitions.</p>
            <div className="m-cta" style={{marginTop:16}}>
              <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>Demander un bilan gratuit</button>
            </div>
          </div>
        </AccessGate>
      </div>
    </ModalWrapper>
  );
}
