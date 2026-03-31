import ModalWrapper from "./ModalWrapper";

export default function ModalHoraires({ open, onClose, openContact }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="HORAIRES & TARIFS">
      <div className="modal-body">

        <div className="m-section">
          <div className="m-section-title">Horaires 2025–2026</div>
          {[
            { d: "Lundi",    t: "19h30 – 20h30", c: "JJB Adultes & Ados — Débutants" },
            { d: "Mercredi", t: "19h30 – 20h30", c: "JJB / Grappling — Tous niveaux" },
            { d: "Samedi",   t: "À confirmer",   c: "Open Mat — Sparring libre" },
          ].map(s => (
            <div key={s.d} className="m-row">
              <span className="m-row-day">{s.d}</span>
              <div>
                <div className="m-row-time">{s.t}</div>
                <div className="m-row-cat">{s.c}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="m-section">
          <div className="m-section-title">Lieu · Clamart (92140)</div>
          <p className="m-text">La salle d'entraînement est située à Clamart (92140), Hauts-de-Seine. L'adresse exacte est communiquée après inscription.</p>
          <div className="maps-embed">
            <iframe
              title="SK TEAM JJB Clamart"
              src="https://maps.google.com/maps?q=Clamart,92140,France&output=embed"
              width="100%" height="180"
              style={{ border: 0, display: "block" }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="m-section">
          <div className="m-section-title">Découverte</div>
          <div className="m-tarif-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            <div className="m-tarif feat">
              <div className="m-tarif-price"><sup>€</sup>10</div>
              <div className="m-tarif-lbl">1ère séance</div>
              <ul className="m-tarif-items">
                <li>Sans engagement</li>
                <li>Tous niveaux</li>
                <li>Tenue prêtée si besoin</li>
              </ul>
              <button className="btn-red" style={{ marginTop: 14, width: "100%", padding: "10px", fontSize: 12, cursor: "pointer" }}
                onClick={() => { onClose(); setTimeout(openContact, 200); }}>
                Réserver
              </button>
            </div>
            <div className="m-tarif">
              <div className="m-tarif-price"><sup>€</sup>50</div>
              <div className="m-tarif-lbl">Forfait 6 séances</div>
              <ul className="m-tarif-items">
                <li>Valable 2 mois</li>
                <li>Flexible</li>
                <li>Tous niveaux</li>
              </ul>
              <button className="btn-red" style={{ marginTop: 14, width: "100%", padding: "10px", fontSize: 12, cursor: "pointer" }}
                onClick={() => { onClose(); setTimeout(openContact, 200); }}>
                Réserver
              </button>
            </div>
          </div>
        </div>

        <div className="m-section">
          <div className="m-section-title">Abonnements annuels</div>
          <div className="m-tarif-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            <div className="m-tarif">
              <div className="m-tarif-price"><sup>€</sup>200<span className="per">/an</span></div>
              <div className="m-tarif-lbl">Kids & Ados</div>
              <ul className="m-tarif-items">
                <li>6 à 17 ans</li>
                <li>Licence FFJDA / CFJJB</li>
                <li>Programme Kids SK TEAM</li>
              </ul>
              <button className="btn-red" style={{ marginTop: 14, width: "100%", padding: "10px", fontSize: 12, cursor: "pointer" }}
                onClick={() => { onClose(); setTimeout(openContact, 200); }}>
                S'inscrire
              </button>
            </div>
            <div className="m-tarif feat">
              <div className="m-tarif-price"><sup>€</sup>300<span className="per">/an</span></div>
              <div className="m-tarif-lbl">Adulte</div>
              <ul className="m-tarif-items">
                <li>Dès 15 ans</li>
                <li>Licence FFJDA / CFJJB</li>
                <li>Programme SK TEAM</li>
              </ul>
              <button className="btn-red" style={{ marginTop: 14, width: "100%", padding: "10px", fontSize: 12, cursor: "pointer" }}
                onClick={() => { onClose(); setTimeout(openContact, 200); }}>
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        <div className="m-section">
          <div className="m-section-title">Tarifs Famille</div>
          <div className="m-tarif-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <div className="m-tarif">
              <div className="m-tarif-price"><sup>€</sup>350<span className="per">/an</span></div>
              <div className="m-tarif-lbl">2 Enfants</div>
              <ul className="m-tarif-items">
                <li>2 enfants inscrits</li>
                <li>Licences incluses</li>
                <li>Économie 50€</li>
              </ul>
            </div>
            <div className="m-tarif feat">
              <div className="m-tarif-price"><sup>€</sup>450<span className="per">/an</span></div>
              <div className="m-tarif-lbl">Adulte + 1 Enfant</div>
              <ul className="m-tarif-items">
                <li>1 adulte + 1 enfant</li>
                <li>Licences incluses</li>
                <li>Économie 50€</li>
              </ul>
            </div>
            <div className="m-tarif">
              <div className="m-tarif-price"><sup>€</sup>500<span className="per">/an</span></div>
              <div className="m-tarif-lbl">3 Enfants</div>
              <ul className="m-tarif-items">
                <li>3 enfants inscrits</li>
                <li>Licences incluses</li>
                <li>Économie 100€</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 12, lineHeight: 1.7 }}>
            Pass Sport et ANCV acceptés. Paiement en plusieurs fois possible. Contactez-nous pour tout renseignement.
          </p>
        </div>

        <div className="m-cta">
          <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>
            Nous contacter
          </button>
        </div>

      </div>
    </ModalWrapper>
  );
}
