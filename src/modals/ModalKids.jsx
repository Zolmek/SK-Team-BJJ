import ModalWrapper from "./ModalWrapper";

export default function ModalKids({ open, onClose, openContact }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="PROGRAMME KIDS & ADOS">
      <div className="modal-body">
        <div className="m-tag">Jeunes pratiquants</div>
        <h2 className="m-h2">KIDS &amp;<br/>ADOS BJJ</h2>
        <div className="m-divider"/>
        <p className="m-text">Le Brazilian Jiu-Jitsu est un sport idéal pour les enfants et les adolescents. Il développe la confiance en soi, la discipline, la coordination et l'esprit d'équipe dans un environnement sécurisé et bienveillant.</p>
        <div className="kids-grid">
          <div className="kids-card">
            <div className="kids-card-age">6–9</div>
            <div className="kids-card-title">Mini BJJ</div>
            <div className="kids-card-sub">6 à 9 ans</div>
            <p className="kids-card-desc">Découverte du JJB par le jeu. Développement de la motricité, de l'équilibre et de la coordination. Séances ludiques, progressives et sécurisées.</p>
            <div className="kids-card-tags">
              {["Jeux","Motricité","Confiance","Sécurité"].map(t => <span key={t} className="kids-card-tag">{t}</span>)}
            </div>
          </div>
          <div className="kids-card">
            <div className="kids-card-age">10–14</div>
            <div className="kids-card-title">Junior BJJ</div>
            <div className="kids-card-sub">10 à 14 ans</div>
            <p className="kids-card-desc">Apprentissage des techniques fondamentales du JJB. Introduction au sparring encadré. Développement de la discipline, du respect et de la persévérance.</p>
            <div className="kids-card-tags">
              {["Technique","Sparring","Discipline","Respect"].map(t => <span key={t} className="kids-card-tag">{t}</span>)}
            </div>
          </div>
          <div className="kids-card">
            <div className="kids-card-age">15–17</div>
            <div className="kids-card-title">Ados BJJ</div>
            <div className="kids-card-sub">15 à 17 ans</div>
            <p className="kids-card-desc">Programme technique avancé, sparring progressif et préparation à la compétition. Passage de grades possible. Transition vers les cours adultes.</p>
            <div className="kids-card-tags">
              {["Avancé","Compétition","Grades","Performance"].map(t => <span key={t} className="kids-card-tag">{t}</span>)}
            </div>
          </div>
        </div>
        <div className="m-section">
          <div className="m-section-title">Les bénéfices du BJJ pour les jeunes</div>
          <div className="kids-values">
            {[
              {icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title:"Confiance en soi", desc:"Le JJB apprend à gérer la pression et à croire en ses capacités"},
              {icon:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75", title:"Esprit d'équipe", desc:"Apprendre à travailler avec un partenaire, respect mutuel"},
              {icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title:"Discipline", desc:"Régularité, écoute et respect des règles sur le tatami et dans la vie"},
              {icon:"M22 12h-4l-3 9L9 3l-3 9H2", title:"Condition physique", desc:"Force, souplesse, coordination et endurance développés naturellement"},
            ].map(v => (
              <div key={v.title} className="kids-value">
                <div className="kids-value-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={v.icon}/></svg>
                </div>
                <div className="kids-value-text"><strong>{v.title}</strong>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="m-section">
          <div className="m-section-title">Informations pratiques</div>
          <ul className="m-list">
            <li>Cours encadrés par Karim Sadat, Ceinture Noire 1er Dan IBJJF</li>
            <li>Groupes homogènes par tranches d'âge</li>
            <li>Licence FFJDA / CFJJB obligatoire (assurance incluse)</li>
            <li>Tarifs spéciaux famille disponibles</li>
            <li>Première séance à 10€</li>
          </ul>
        </div>
        <div className="m-cta">
          <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>
            Réserve ton essai
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
