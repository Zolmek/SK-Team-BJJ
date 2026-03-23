import { useState } from "react";
import ModalWrapper from "./ModalWrapper";

const EMAILJS_SERVICE_ID  = "votre_service_id";
const EMAILJS_TEMPLATE_ID = "votre_template_id";
const EMAILJS_PUBLIC_KEY  = "votre_public_key";

export default function ModalContact({ open, onClose }) {
  const [form, setForm]       = useState({ prenom: "", nom: "", email: "", telephone: "", discipline: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState("");

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.prenom || !form.email) {
      setError("Veuillez renseigner votre prénom et votre email.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          prenom:     form.prenom,
          nom:        form.nom,
          email:      form.email,
          telephone:  form.telephone,
          discipline: form.discipline || "Non précisé",
          message:    form.message || "—",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      const msg = encodeURIComponent(
        `Bonjour SK TEAM JJB !\nPrénom : ${form.prenom}\nEmail : ${form.email}\nTéléphone : ${form.telephone}\nDiscipline : ${form.discipline || "Non précisé"}\n${form.message}`
      );
      window.open(`https://wa.me/33650054954?text=${msg}`, "_blank");
      setSent(true);
    }
    setSending(false);
  };

  return (
    <ModalWrapper open={open} onClose={onClose} title="ESSAI GRATUIT">
      <div className="modal-body">
        <div className="m-tag">Rejoindre le club</div>
        <h2 className="m-h2">PRÊT À<br/>COMMENCER ?</h2>
        <div className="m-divider"/>
        <p className="m-text">Premier cours d'essai gratuit, sans engagement. Venez découvrir le JJB dans une ambiance technique et bienveillante à Clamart.</p>

        {sent ? (
          <div role="status" style={{padding:"24px",background:"rgba(37,211,102,.08)",border:"1px solid rgba(37,211,102,.3)",textAlign:"center"}}>
            <div style={{fontFamily:"var(--fd)",fontSize:32,color:"#25D366",marginBottom:8}}>✓</div>
            <div style={{fontFamily:"var(--fc)",fontSize:13,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"var(--white)"}}>Message envoyé !</div>
            <p style={{fontSize:13,color:"rgba(255,255,255,.55)",marginTop:8}}>Karim vous recontactera dans les 24h.</p>
          </div>
        ) : (
          <form className="m-form" onSubmit={handleSubmit} noValidate>
            {error && (
              <div role="alert" style={{padding:"10px 14px",background:"rgba(192,57,43,.15)",border:"1px solid rgba(192,57,43,.4)",color:"var(--red)",fontFamily:"var(--fc)",fontSize:11,fontWeight:700,letterSpacing:"1.5px"}}>
                {error}
              </div>
            )}
            <div className="m-form-row">
              <input className="m-input" type="text" name="prenom" placeholder="Prénom *" value={form.prenom} onChange={handleChange} required autoComplete="given-name"/>
              <input className="m-input" type="text" name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} autoComplete="family-name"/>
            </div>
            <input className="m-input" type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} required autoComplete="email"/>
            <input className="m-input" type="tel" name="telephone" placeholder="Téléphone" value={form.telephone} onChange={handleChange} autoComplete="tel"/>
            <select className="m-input" name="discipline" value={form.discipline} onChange={handleChange}>
              <option value="">Discipline qui vous intéresse</option>
              <option value="Brazilian Jiu-Jitsu">Brazilian Jiu-Jitsu</option>
              <option value="Grappling">Grappling</option>
              <option value="Self-Défense">Self-Défense</option>
              <option value="Pas encore sûr(e)">Pas encore sûr(e)</option>
            </select>
            <textarea className="m-input m-textarea" name="message" placeholder="Message (optionnel)" value={form.message} onChange={handleChange}/>
            <button type="submit" className="m-submit" disabled={sending}>
              {sending ? "Envoi en cours..." : "Envoyer ma demande d'essai"}
            </button>
          </form>
        )}

        <div className="m-section">
          <div className="m-section-title">Contact direct</div>
          <div className="social-links">
            <a href="mailto:sk.team.jjb@gmail.com" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              sk.team.jjb@gmail.com
            </a>
            <a href="https://www.instagram.com/skteamjjb" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              @skteamjjb
            </a>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
