import ModalWrapper from "./ModalWrapper";

export default function ModalProgramme({ open, onClose }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="PROGRAMME ADULTES">
      <div className="modal-body">
        <div className="m-tag">Structure pédagogique</div>
        <h2 className="m-h2">SK TEAM<br/>FONDAMENTAUX</h2>
        <div className="m-divider"/>
        <p className="m-text">Saison complète d'octobre à juin — 34 semaines, 2 séances par semaine. Structuré en 3 mésocycles progressifs selon le programme SK TEAM BJJ, adapté aux adultes débutants en séances d'une heure.</p>
        <div className="m-grid2">
          {[
            {v:"Ados · Adultes · Masters", l:"Public cible"},
            {v:"1h00", l:"Durée séance"},
            {v:"2/semaine", l:"Fréquence"},
            {v:"34 séances", l:"Par saison"},
            {v:"Attestation", l:"Fin de saison"},
          ].map(c => (
            <div key={c.v} className="m-cell">
              <div className="m-cell-val">{c.v}</div>
              <div className="m-cell-lbl">{c.l}</div>
            </div>
          ))}
        </div>
        {[
          {n:"Mésocycle 01", p:"Octobre → Janvier · 10 sem.", t:"Fondamentaux", d:"Bases posturales, positionnement, gestion de la distance et premiers mouvements au sol.", ts:["Posture","Guard Closed","Armbar","Guillotine","Hip Escape","Bridge"]},
          {n:"Mésocycle 02", p:"Février → Mars · 12 sem.", t:"Développement Technique", d:"Passages de garde, contrôle latéral et premières soumissions en situation. Sparring directionnel progressif.", ts:["Toreando Pass","Leg Drag","Side Control","Key Lock","Mount","Back Take","Double Leg"]},
          {n:"Mésocycle 03", p:"Avril → Juin · 12 sem.", t:"Consolidation & Sparring", d:"Révisions intensives, sparring thématique progressif et évaluation finale. Autonomie tactique.", ts:["Drills","Sparring positionnel","Sparring libre","Évaluation","Attestations"]},
        ].map(m => (
          <div key={m.n} className="m-section">
            <div className="m-section-title">{m.n} — {m.t}</div>
            <p style={{fontSize:11,fontFamily:"var(--fc)",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"var(--muted)",marginBottom:10}}>{m.p}</p>
            <p className="m-text">{m.d}</p>
            <div className="m-tags">{m.ts.map(t => <span key={t} className="m-tag-pill">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </ModalWrapper>
  );
}
