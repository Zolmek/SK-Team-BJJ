import ModalWrapper from "./ModalWrapper";

export default function ModalClub({ open, onClose }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="LE CLUB">
      <div className="modal-body">
        <div className="m-tag">Association loi 1901</div>
        <h2 className="m-h2">SK TEAM<br/>JJB</h2>
        <div className="m-divider"/>
        <p className="m-text">SK TEAM JJB est une association déclarée loi 1901, affiliée à la Fédération Française de Judo, Jujitsu, Kendo et Disciplines Associées (FFJDA), à la Confédération Française de Jiu-Jitsu Brésilien (CFJJB) et au Comité Départemental Judo 92.</p>
        <p className="m-text">Fondée à Clamart (92140), l'association propose un cadre structuré, progressif et bienveillant pour tous les niveaux — du débutant complet au compétiteur.</p>
        <div className="m-grid2">
          {[
            {v:"FFJDA",    l:"Affiliée"},
            {v:"IBJJF",    l:"Certifiée"},
            {v:"FFL",      l:"Affiliée Grappling"},
            {v:"Loi 1901", l:"Association déclarée"},
          ].map(c => (
            <div key={c.v} className="m-cell">
              <div className="m-cell-val">{c.v}</div>
              <div className="m-cell-lbl">{c.l}</div>
            </div>
          ))}
        </div>
        <div className="m-section">
          <div className="m-section-title">Bureau</div>
          <div className="m-row">
            <span style={{fontSize:14,fontWeight:600}}>Karim SADAT</span>
            <span style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--muted)"}}>Directeur Technique</span>
          </div>
          <div className="m-row">
            <span style={{fontSize:14,fontWeight:600}}>Belkacem SADAT</span>
            <span style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--muted)"}}>Président · Trésorier</span>
          </div>
          <div className="m-row">
            <span style={{fontSize:14,fontWeight:600}}>Amar SADAT</span>
            <span style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--muted)"}}>Secrétaire</span>
          </div>
        </div>
        <div className="m-section">
          <div className="m-section-title">Objet social</div>
          <p className="m-text">Promouvoir et développer la pratique du Brazilian Jiu-Jitsu, du Grappling et de la Self-Défense sur la commune de Clamart et ses environs, dans le respect des valeurs des arts martiaux.</p>
        </div>
      </div>
    </ModalWrapper>
  );
}
