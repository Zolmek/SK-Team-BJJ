import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import AccessGate from "../components/AccessGate";

const programmes = {
  force: {
    label:"Force & Explosivité",
    intro:"Développer la force fonctionnelle et la puissance explosive spécifiques au BJJ.",
    semaine:[
      {j:"J1 – Lundi",    t:"Force max",           items:["Squat 4×5 (80%1RM)","Deadlift roumain 3×8","Développé couché 4×5","Rowing barre 4×6","Core : Planche 3×45s"]},
      {j:"J2 – Mercredi", t:"Explosivité",          items:["Box jump 4×5","Medicine ball slam 4×8","Kettlebell swing 4×10","Push press 4×5","Battle rope 4×20s"]},
      {j:"J3 – Vendredi", t:"Gainage & Spécifique", items:["Pont lutteur 3×20","Hip escape avec résistance 3×10","Sprawl explosif 4×8","Dead bug 3×12","Farmer carry 3×30m"]},
    ],
    tags:["Squat","Deadlift","Explosivité","Puissance","Gainage"],
  },
  endurance: {
    label:"Endurance Spécifique BJJ",
    intro:"Développer la capacité aérobie et anaérobie spécifique aux efforts intermittents du BJJ.",
    semaine:[
      {j:"J1 – Lundi",  t:"Intervalles courts", items:["Échauffement 10min","10×30s effort max / 30s récup","Sac de frappe ou shadowboxing","Récup active 5min","Étirements 10min"]},
      {j:"J2 – Jeudi",  t:"Capacité aérobie",   items:["Course continue 25–35min Z2","Corde à sauter 4×3min","Gainage cardio 15min","Récupération active"]},
      {j:"J3 – Samedi", t:"Simulation match",    items:["Rounds BJJ 5×7min","1min 30s récup entre rounds","Fréquence cardiaque cible >85%","Debriefing fatigue"]},
    ],
    tags:["HIIT","Zone 2","VO2max","Intervalles","Endurance de force"],
  },
  mobilite: {
    label:"Mobilité & Récupération",
    intro:"Prévenir les blessures, améliorer l'amplitude articulaire et accélérer la récupération.",
    semaine:[
      {j:"Quotidien – Matin",  t:"Réveil articulaire (10min)", items:["Cercles épaules & hanches","Cat-cow 2×10","Hip 90/90 2×45s/côté","Thoracic rotation 2×10","Neck mobility léger"]},
      {j:"Post-entraînement",  t:"Récupération (15min)",       items:["Pigeon pose 2min/côté","Frog stretch 2min","Épaules au mur 90s","Hamstring passif 90s/côté","Respiration diaphragmatique"]},
      {j:"J repos – Dédié",    t:"Séance mobilité complète",   items:["Yoga BJJ 45min","Deep squat work","Spine mobility flow","Rotateurs hanches","Icing / cryothérapie si besoin"]},
    ],
    tags:["Hanches","Épaules","Colonne","Flexibilité","Récupération active"],
  },
  circuit: {
    label:"Circuit Training Tatami",
    intro:"Entraînement fonctionnel directement sur le tatami, sans matériel.",
    semaine:[
      {j:"Circuit A – 4 tours",    t:"Explosivité + Technique", items:["Sprawl 10×","Shoot double leg 8×","Hip escape 10×/côté","Sit-out 8×","Granby roll 5×/côté","Repos 90s entre tours"]},
      {j:"Circuit B – 3 tours",    t:"Endurance Tatami",        items:["Turtle recovery 3×30s","Ponte 15×","Shrimp 10×/côté","Technical stand-up 10×","Uchi-komi takedown 10×","Repos 2min entre tours"]},
      {j:"Circuit C – EMOM 15min", t:"EMOM Spécifique BJJ",     items:["Min 1 : 10 sprawls","Min 2 : 15 hip escapes","Min 3 : 10 sit-outs","Répéter 5 cycles","Score : reps totales"]},
    ],
    tags:["Sprawl","Hip escape","No-gi","Tatami","Fonctionnel"],
  },
};

export default function ModalPrepPhysique({ open, onClose, openContact }) {
  const [tab, setTab] = useState("force");
  const prog = programmes[tab];

  return (
    <ModalWrapper open={open} onClose={onClose} title="PRÉPARATION PHYSIQUE">
      <div className="modal-body">
        <div className="m-tag">Conditionnement & Performance</div>
        <h2 className="m-h2">PRÉPARATION<br/>PHYSIQUE</h2>
        <div className="m-divider"/>
        <p className="m-text">4 programmes complémentaires pour développer toutes les qualités physiques du combattant.</p>
        <AccessGate title="PRÉPARATION PHYSIQUE">
          <div className="pp-tabs">
            {Object.entries(programmes).map(([k, v]) => (
              <button key={k} className={"pp-tab"+(tab===k?" active":"")} onClick={() => setTab(k)}>
                {v.label.split(" ")[0]}
              </button>
            ))}
          </div>
          <div style={{padding:"14px 18px",background:"rgba(192,57,43,.07)",border:"1px solid rgba(192,57,43,.15)",marginBottom:20}}>
            <div style={{fontFamily:"var(--fd)",fontSize:18,color:"var(--white)",marginBottom:8}}>{prog.label}</div>
            <p style={{fontSize:13,color:"rgba(255,255,255,.55)",lineHeight:1.75}}>{prog.intro}</p>
          </div>
          <div className="m-section-title">Planning hebdomadaire</div>
          <div className="pp-week">
            {prog.semaine.map(s => (
              <div key={s.j} className="pp-day">
                <div className="pp-day-label">{s.j}</div>
                <div className="pp-day-title">{s.t}</div>
                <ul className="pp-day-items">{s.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="m-tags">{prog.tags.map(t => <span key={t} className="m-tag-pill">{t}</span>)}</div>
          <div className="m-section">
            <div className="m-section-title">Intégration avec l'entraînement BJJ</div>
            <p className="m-text">Ces programmes sont conçus pour s'intégrer au calendrier d'entraînement BJJ sans créer de surcharge.</p>
            <div className="m-cta" style={{marginTop:16}}>
              <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>Demander un programme perso</button>
            </div>
          </div>
        </AccessGate>
      </div>
    </ModalWrapper>
  );
}
