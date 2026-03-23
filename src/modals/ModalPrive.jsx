import { useState } from "react";
import ModalWrapper from "./ModalWrapper";

export default function ModalPrive({ open, onClose, openContact }) {
  const [discipline, setDiscipline] = useState(null);

  return (
    <ModalWrapper open={open} onClose={onClose} title="COURS PRIVÉS">
      <div className="modal-body">
        <div className="m-tag">Suivi personnalisé</div>
        <h2 className="m-h2">COURS<br/>PRIVÉS</h2>
        <div className="m-divider"/>
        <div style={{marginBottom:28}}>
          <p style={{fontFamily:"var(--fc)",fontSize:11,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}}>Choisissez votre discipline</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:1,background:"var(--border)",border:"1px solid var(--border)"}}>
            {[
              {id:"bjj",      label:"Jiu-Jitsu Brésilien", icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", desc:"Gi & No-Gi"},
              {id:"grappling",label:"Grappling",            icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", desc:"No-Gi · MMA Base"},
            ].map(d => (
              <button key={d.id} onClick={() => setDiscipline(d.id)}
                style={{
                  background: discipline===d.id ? "rgba(192,57,43,.15)" : "var(--dark2)",
                  border: discipline===d.id ? "2px solid var(--red)" : "2px solid transparent",
                  padding:"24px 20px", cursor:"pointer", textAlign:"center",
                  transition:"all .2s", color:"var(--white)"
                }}>
                <div style={{display:"flex",justifyContent:"center",marginBottom:12}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={discipline===d.id?"var(--red)":"rgba(255,255,255,.4)"} strokeWidth="2">
                    <path d={d.icon}/>
                  </svg>
                </div>
                <div style={{fontFamily:"var(--fd)",fontSize:20,letterSpacing:"1px",lineHeight:1.1,marginBottom:6}}>{d.label}</div>
                <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:discipline===d.id?"var(--red)":"var(--muted)"}}>{d.desc}</div>
                {discipline===d.id && (
                  <div style={{marginTop:10,fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--red)"}}>✓ Sélectionné</div>
                )}
              </button>
            ))}
          </div>
        </div>
        {discipline && (
          <div style={{padding:"18px 20px",background:"rgba(192,57,43,.06)",border:"1px solid rgba(192,57,43,.15)",marginBottom:20}}>
            <div style={{fontFamily:"var(--fd)",fontSize:16,letterSpacing:"1px",color:"var(--white)",marginBottom:8}}>
              {discipline==="bjj" ? "Brazilian Jiu-Jitsu — Gi & No-Gi" : "Grappling — No-Gi"}
            </div>
            <p style={{fontSize:13,color:"rgba(255,255,255,.5)",lineHeight:1.75}}>
              {discipline==="bjj"
                ? "Travail des positions, passages de garde, soumissions et défenses. Adapté à votre niveau, du débutant au compétiteur. Cours en kimono (Gi) ou sans (No-Gi) selon votre objectif."
                : "Techniques de lutte, étranglements et clés articulaires sans kimono. Idéal pour la compétition No-Gi, le MMA ou renforcer votre jeu au sol. Approche dynamique et efficace."
              }
            </p>
          </div>
        )}
        <p className="m-text">Un cours privé avec Karim Sadat, c'est une heure entière consacrée uniquement à toi. Technique personnalisée, correction en temps réel, progression accélérée. Idéal pour corriger des points précis, préparer une compétition ou progresser plus vite.</p>
        <div className="priv-grid">
          <div className="priv-card">
            <div className="priv-price"><sup>€</sup>50</div>
            <div className="priv-label">1 cours</div>
            <ul className="priv-items">
              <li>1 heure avec Karim Sadat</li>
              <li>Technique personnalisée</li>
              <li>Correction en temps réel</li>
              <li>Sans engagement</li>
            </ul>
          </div>
          <div className="priv-card featured">
            <div className="priv-price"><sup>€</sup>450</div>
            <div className="priv-label">10 cours</div>
            <div className="priv-eco">Économie de 50€</div>
            <ul className="priv-items">
              <li>10 heures de coaching</li>
              <li>Programme structuré</li>
              <li>Suivi de progression</li>
              <li>Valable 6 mois</li>
            </ul>
          </div>
          <div className="priv-card">
            <div className="priv-price"><sup>€</sup>800</div>
            <div className="priv-label">20 cours</div>
            <div className="priv-eco">Économie de 200€</div>
            <ul className="priv-items">
              <li>20 heures de coaching</li>
              <li>Programme compétition</li>
              <li>Bilan mensuel inclus</li>
              <li>Valable 12 mois</li>
            </ul>
          </div>
        </div>
        <div className="m-section">
          <div className="m-section-title">Ce que comprend un cours privé</div>
          <ul className="m-list">
            <li>1 heure de cours individuel avec Karim Sadat, CN 1er Dan IBJJF</li>
            <li>Analyse de tes points forts et axes de progression</li>
            <li>Technique personnalisée selon ton niveau et tes objectifs</li>
            <li>Drilling intensif sur les techniques ciblées</li>
            <li>Sparring dirigé et correction en temps réel</li>
            <li>Compte-rendu et plan de travail personnel</li>
          </ul>
        </div>
        <div className="m-section">
          <div className="m-section-title">Réserver votre cours</div>
          <p className="m-text">Les cours privés se déroulent à Clamart (92140). Contactez-nous pour convenir d'un créneau.</p>
          <div className="m-cta" style={{marginTop:16}}>
            <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>
              Réserver mon cours privé
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
