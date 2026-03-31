import { useState, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";

const SUPABASE_URL = "https://vfdtctuhpbpccijnjjoa.supabase.co";
const SUPABASE_KEY = "sb_publishable_NVOrEM8DTBDP8EXzOwgmtA_ZBuMvfNb";

async function fetchAvis() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/avis?order=created_at.desc`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
  });
  return res.ok ? res.json() : [];
}

async function insertAvis(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/avis`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(data),
  });
  return res.ok;
}

function StarRating({ value, onChange, readonly = false }) {
  const [hover, setHover] = useState(0);
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[1, 2, 3, 4, 5].map(star => (
        <button key={star} type="button"
          onClick={() => !readonly && onChange && onChange(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          style={{
            background: "none", border: "none",
            cursor: readonly ? "default" : "pointer",
            fontSize: 28,
            color: star <= (hover || value) ? "#FFD700" : "rgba(255,255,255,.2)",
            padding: "0 2px", transition: "color .15s",
          }}
          aria-label={`${star} étoile${star > 1 ? "s" : ""}`}
        >★</button>
      ))}
    </div>
  );
}

export default function ModalAvis({ open, onClose }) {
  const [avis, setAvis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ nom: "", note: 0, commentaire: "", photoPreview: null });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetchAvis().then(data => { setAvis(data); setLoading(false); });
  }, [open]);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setForm(f => ({ ...f, photoPreview: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nom.trim()) { setError("Veuillez indiquer votre prénom."); return; }
    if (form.note === 0) { setError("Veuillez sélectionner une note."); return; }
    if (!form.commentaire.trim()) { setError("Veuillez écrire un commentaire."); return; }
    setError("");
    setSending(true);
    const ok = await insertAvis({
      nom: form.nom.trim(),
      note: form.note,
      commentaire: form.commentaire.trim(),
      photo: form.photoPreview || null,
      date: new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" }),
    });
    if (ok) {
      setSent(true);
      const updated = await fetchAvis();
      setAvis(updated);
      setForm({ nom: "", note: 0, commentaire: "", photoPreview: null });
      setTimeout(() => setSent(false), 4000);
    } else {
      setError("Erreur lors de l'envoi. Réessayez.");
    }
    setSending(false);
  };

  const moyenne = avis.length > 0
    ? (avis.reduce((s, a) => s + a.note, 0) / avis.length).toFixed(1)
    : null;

  return (
    <ModalWrapper open={open} onClose={onClose} title="AVIS & TÉMOIGNAGES">
      <div className="modal-body">
        <div className="m-tag">Communauté SK TEAM JJB</div>
        <h2 className="m-h2">AVIS &<br />TÉMOIGNAGES</h2>
        <div className="m-divider" />

        {moyenne && (
          <div style={{ textAlign: "center", padding: "20px", background: "rgba(255,215,0,.05)", border: "1px solid rgba(255,215,0,.15)", marginBottom: 24 }}>
            <div style={{ fontFamily: "var(--fd)", fontSize: 48, color: "#FFD700", lineHeight: 1 }}>{moyenne}</div>
            <div style={{ color: "#FFD700", fontSize: 22, margin: "6px 0" }}>{"★".repeat(Math.round(moyenne))}</div>
            <div style={{ fontFamily: "var(--fc)", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>{avis.length} avis</div>
          </div>
        )}

        <div className="m-section">
          <div className="m-section-title">Laisser un avis</div>
          {sent ? (
            <div style={{ padding: "20px", background: "rgba(37,211,102,.08)", border: "1px solid rgba(37,211,102,.3)", textAlign: "center", marginTop: 12 }}>
              <div style={{ fontSize: 28, color: "#25D366", marginBottom: 8 }}>✓</div>
              <div style={{ fontFamily: "var(--fc)", fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--white)" }}>Merci pour votre avis !</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
              {error && (
                <div style={{ padding: "10px 14px", background: "rgba(192,57,43,.15)", border: "1px solid rgba(192,57,43,.4)", color: "var(--red)", fontFamily: "var(--fc)", fontSize: 11, fontWeight: 700 }}>{error}</div>
              )}
              <input className="m-input" type="text" placeholder="Votre prénom *"
                value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} />
              <div>
                <div style={{ fontFamily: "var(--fc)", fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Note *</div>
                <StarRating value={form.note} onChange={note => setForm(f => ({ ...f, note }))} />
              </div>
              <textarea className="m-input m-textarea" placeholder="Votre commentaire *" rows={4}
                value={form.commentaire} onChange={e => setForm(f => ({ ...f, commentaire: e.target.value }))} />
              <div>
                <div style={{ fontFamily: "var(--fc)", fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Photo (optionnel)</div>
                <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", padding: "10px 14px", border: "1px dashed rgba(255,255,255,.2)", background: "rgba(255,255,255,.02)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                  <span style={{ fontFamily: "var(--fc)", fontSize: 11, color: "rgba(255,255,255,.5)" }}>Choisir une photo</span>
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={handlePhoto} />
                </label>
                {form.photoPreview && (
                  <img src={form.photoPreview} alt="Aperçu" style={{ width: 60, height: 60, objectFit: "cover", borderRadius: "50%", marginTop: 8, border: "2px solid var(--red)" }} />
                )}
              </div>
              <button type="submit" className="m-submit" disabled={sending}>
                {sending ? "Envoi en cours..." : "Publier mon avis"}
              </button>
            </form>
          )}
        </div>

        <div className="m-section">
          <div className="m-section-title">Avis de la communauté</div>
          {loading ? (
            <div style={{ textAlign: "center", padding: 20, color: "rgba(255,255,255,.3)", fontFamily: "var(--fc)", fontSize: 11, letterSpacing: "2px" }}>CHARGEMENT...</div>
          ) : avis.length === 0 ? (
            <p style={{ color: "rgba(255,255,255,.4)", fontSize: 13 }}>Soyez le premier à laisser un avis !</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 12 }}>
              {avis.map(a => (
                <div key={a.id} style={{ padding: "16px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    {a.photo ? (
                      <img src={a.photo} alt={a.nom} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--red)", flexShrink: 0 }} />
                    ) : (
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fd)", fontSize: 18, color: "var(--white)", flexShrink: 0 }}>
                        {a.nom[0].toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div style={{ fontFamily: "var(--fc)", fontSize: 13, fontWeight: 700, color: "var(--white)" }}>{a.nom}</div>
                      <div style={{ color: "#FFD700", fontSize: 14 }}>{"★".repeat(a.note)}{"☆".repeat(5 - a.note)}</div>
                    </div>
                    <div style={{ marginLeft: "auto", fontFamily: "var(--fc)", fontSize: 10, color: "rgba(255,255,255,.3)", letterSpacing: "1px" }}>{a.date}</div>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", lineHeight: 1.7, margin: 0 }}>{a.commentaire}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
}