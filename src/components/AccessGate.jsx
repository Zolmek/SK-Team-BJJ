import { useState } from "react";
import { useAccess } from "../hooks/useAccess";

export default function AccessGate({ children, title = "CONTENU ABONNÉ" }) {
  const { granted, userEmail, login, logout } = useAccess();
  const [email, setEmail]   = useState("");
  const [code,  setCode]    = useState("");
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));
    const result = login(email, code);
    if (!result.ok) setError(result.error);
    setLoading(false);
  };

  if (granted) {
    return (
      <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",marginBottom:20,background:"rgba(192,57,43,.08)",border:"1px solid rgba(192,57,43,.2)"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:14}}>🔓</span>
            <span style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"var(--red)"}}>Accès abonné</span>
            <span style={{fontFamily:"var(--fc)",fontSize:10,letterSpacing:"1px",color:"rgba(255,255,255,.4)"}}>— {userEmail}</span>
          </div>
          <button onClick={logout} style={{background:"none",border:"1px solid var(--border)",color:"var(--muted)",padding:"4px 10px",cursor:"pointer",fontFamily:"var(--fc)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase"}}>
            Déconnexion
          </button>
        </div>
        {children}
      </>
    );
  }

  return (
    <div style={{padding:"40px 20px",textAlign:"center",background:"var(--dark2)",border:"1px solid var(--border)",margin:"20px 0"}}>
      <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(192,57,43,.1)",border:"1px solid rgba(192,57,43,.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
      </div>
      <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",color:"var(--red)",marginBottom:8}}>Contenu réservé aux abonnés</div>
      <div style={{fontFamily:"var(--fd)",fontSize:28,letterSpacing:"1px",color:"var(--white)",marginBottom:8}}>{title}</div>
      <p style={{fontSize:13,color:"rgba(255,255,255,.4)",lineHeight:1.7,maxWidth:320,margin:"0 auto 28px"}}>Ce contenu est réservé aux membres SK TEAM JJB. Entrez votre email et le code d'accès reçu de votre coach.</p>
      <form onSubmit={handleSubmit} style={{maxWidth:320,margin:"0 auto",display:"flex",flexDirection:"column",gap:12}}>
        <input type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email"
          style={{background:"var(--dark)",border:"1px solid var(--border)",color:"var(--white)",padding:"14px 16px",fontSize:14,fontFamily:"var(--fb)",width:"100%"}}/>
        <input type="text" placeholder="Code d'accès (ex: SKTEAM2026)" value={code} onChange={e => setCode(e.target.value.toUpperCase())} required autoComplete="off"
          style={{background:"var(--dark)",border:"1px solid var(--border)",color:"var(--white)",padding:"14px 16px",fontSize:14,fontFamily:"var(--fb)",width:"100%",letterSpacing:"2px",textTransform:"uppercase"}}/>
        {error && (
          <div role="alert" style={{padding:"10px 14px",background:"rgba(192,57,43,.15)",border:"1px solid rgba(192,57,43,.4)",color:"var(--red)",fontFamily:"var(--fc)",fontSize:11,fontWeight:700,letterSpacing:"1.5px",textAlign:"left"}}>
            {error}
          </div>
        )}
        <button type="submit" disabled={loading}
          style={{background:"var(--red)",color:"#fff",border:"none",cursor:"pointer",padding:"16px 32px",fontFamily:"var(--fc)",fontSize:13,fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",opacity:loading?.7:1}}>
          {loading ? "Vérification..." : "Accéder au contenu →"}
        </button>
      </form>
      <p style={{marginTop:20,fontSize:12,color:"rgba(255,255,255,.25)",lineHeight:1.6}}>
        Pas encore de code ? Contactez Karim sur{" "}
        <a href="https://wa.me/33650054954" target="_blank" rel="noopener noreferrer" style={{color:"var(--red)"}}>WhatsApp</a>
      </p>
    </div>
  );
}