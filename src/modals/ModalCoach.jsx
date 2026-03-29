import ModalWrapper from "./ModalWrapper";
import { IMG } from "../App";

export default function ModalCoach({ open, onClose }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="LE COACH">
      <img className="modal-hero-img" src={IMG.action} alt="Karim Sadat en action — coach BJJ Ceinture Noire IBJJF SK TEAM JJB" style={{objectPosition:"center 30%"}} loading="lazy"/>
      <div className="modal-body">
        <div className="m-tag">Votre coach</div>
        <h2 className="m-h2">KARIM<br/>SADAT</h2>
        <div className="m-divider"/>
        <p className="m-text">Pratiquant de Brazilian Jiu-Jitsu depuis plus de 13 ans, Karim Sadat cumule plus de 2 000 heures d'enseignement. Compétiteur au niveau national et international — Championnats de France, IBJJF European Championships.</p>
        <p className="m-text">Titulaire du CQP Moniteur Arts Martiaux (spécialité JJB) et arbitre en formation auprès de la FFJDA. Immersion au Brésil — BJJ College by Melqui Galvão à Jundiaí, São Paulo. Stage Z-TEAM avec Joao Miyao à Boulogne-Billancourt.</p>
        <div className="m-grid2">
          {[
            {v:"CN 1er Dan", l:"IBJJF / CFJJB"},
            {v:"CN Grappling", l:"FFL"},
            {v:"CQP MAM", l:"Moniteur Arts Martiaux"},
            {v:"AFGSU2", l:"FFJDA"},
            {v:"2 000+ heures", l:"Enseignement"},
            {v:"13+ ans", l:"Pratique"},
          ].map(c => (
            <div key={c.v} className="m-cell">
              <div className="m-cell-val">{c.v}</div>
              <div className="m-cell-lbl">{c.l}</div>
            </div>
          ))}
        </div>
        <div className="m-section">
          <div className="m-section-title">Immersion — Brésil</div>
          <div className="immersion-grid">
            <div className="immersion-item">
              <img src={IMG.melqui} alt="Karim Sadat avec Melqui Galvão" loading="lazy"/>
              <div className="immersion-cap">
                <div className="immersion-name">Melqui Galvão</div>
                <div className="immersion-role">Fondateur BJJ College</div>
              </div>
            </div>
            <div className="immersion-item">
              <img src={IMG.mika} alt="Karim Sadat avec Mika Galvão" loading="lazy"/>
              <div className="immersion-cap">
                <div className="immersion-name">Mika Galvão</div>
                <div className="immersion-role">Champion du Monde IBJJF</div>
              </div>
            </div>
          </div>
          <div style={{marginTop:20}}>
            <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--red)",marginBottom:12}}>🇧🇷 Brésil — São Paulo</div>
            <ul className="m-list">
              <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>BJJ College by Melqui Galvão</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>Jundiaí, São Paulo</span></li>
            </ul>
          </div>
          <div style={{marginTop:20}}>
            <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--red)",marginBottom:12}}>🇺🇸 États-Unis — New York</div>
            <ul className="m-list">
              <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>Marcelo Garcia Academy</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>New York, NY</span></li>
              <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>Vitor Ribeiro Shaoling</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>New York, NY</span></li>
            </ul>
          </div>
          <div style={{marginTop:20}}>
            <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--red)",marginBottom:12}}>🇺🇸 États-Unis — Floride</div>
            <ul className="m-list">
              <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>Roberto Cyborg De Abreu Filho</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>Floride</span></li>
              <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>Robson Moura</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>Floride</span></li>
              <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>Renato Tavares</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>Floride</span></li>
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
