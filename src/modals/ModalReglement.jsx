import ModalWrapper from "./ModalWrapper";

const sections = [
  {
    icon:"🧼", title:"Hygiène",
    items:[
      "Kimono propre et lavé obligatoire à chaque séance",
      "Ongles courts, mains et pieds propres avant d'entrer sur le tatami",
      "Cheveux longs attachés — bijoux interdits sur le tatami",
      "Tenue No-Gi propre obligatoire pour les cours sans kimono",
      "En cas de blessure ouverte, la plaie doit être couverte avant de pratiquer",
    ]
  },
  {
    icon:"🥋", title:"Tenues obligatoires",
    items:[
      "Gi (kimono) blanc, bleu ou noir — patch SK TEAM souhaité",
      "No-Gi : rash guard + shorts de grappling (sans poches ni fermetures éclair)",
      "Pieds nus sur le tatami uniquement — tongs obligatoires en dehors",
      "Aucune tenue de ville, jean ou vêtement avec boutons sur le tatami",
    ]
  },
  {
    icon:"🤝", title:"Respect & Comportement",
    items:[
      "Salut obligatoire au début et à la fin de chaque cours et de chaque sparring",
      "Respect du coach, des partenaires, des grades et du matériel",
      "Langage et comportement appropriés — tolérance zéro pour tout irrespect",
      "Le tap (abandon) est sacré — il est respecté immédiatement et sans exception",
      "L'ego est laissé au vestiaire — le tatami est un espace d'apprentissage",
    ]
  },
  {
    icon:"📅", title:"Assiduité & Ponctualité",
    items:[
      "Présence régulière fortement encouragée — la progression dépend de l'assiduité",
      "Arriver 5 minutes avant le début. Retard > 10 min = accès refusé au tatami",
      "En cas d'absence prévue, prévenir le coach au préalable",
      "Absences injustifiées répétées peuvent entraîner la résiliation de la licence",
      "Pas de pratique en cas de maladie contagieuse — santé de tous en priorité",
    ]
  },
  {
    icon:"📵", title:"Téléphone & Vestiaires",
    items:[
      "Téléphone interdit sur le tatami pendant les cours",
      "Les affaires personnelles restent dans les vestiaires — SK TEAM JJB décline toute responsabilité en cas de perte ou vol",
      "Les parents et accompagnateurs restent dans la zone dédiée — pas d'intervention pendant les séances",
      "Tout matériel prêté par le club doit être restitué propre et en bon état",
    ]
  },
  {
    icon:"⚠️", title:"Sécurité & Sanctions",
    items:[
      "Toute technique dangereuse délibérée est immédiatement sanctionnée",
      "Les sparrings se font avec contrôle — l'intensité est adaptée au niveau du partenaire",
      "Tout comportement irrespectueux répété peut entraîner l'exclusion définitive du club",
      "Le coach a l'autorité finale sur toutes les décisions prises sur le tatami",
    ]
  },
];

export default function ModalReglement({ open, onClose }) {
  return (
    <ModalWrapper open={open} onClose={onClose} title="RÈGLEMENT DU CLUB">
      <div className="modal-body">
        <div className="m-tag">SK TEAM JJB — Clamart</div>
        <h2 className="m-h2">RÈGLEMENT<br/>DU CLUB</h2>
        <div className="m-divider"/>
        <p className="m-text">Le règlement s'applique à tous les membres du club sans exception — Kids, Ados, Adultes et Masters. Il garantit un environnement sûr, respectueux et propice à la progression de chacun.</p>
        {sections.map(s => (
          <div key={s.title} className="m-section">
            <div className="m-section-title">{s.icon} {s.title}</div>
            <ul className="m-list">
              {s.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        <div style={{marginTop:28,padding:"16px 20px",background:"rgba(192,57,43,.07)",border:"1px solid rgba(192,57,43,.2)"}}>
          <p style={{fontFamily:"var(--fc)",fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--red)",marginBottom:6}}>Engagement du membre</p>
          <p style={{fontSize:13,color:"rgba(255,255,255,.55)",lineHeight:1.75}}>En rejoignant SK TEAM JJB, chaque membre s'engage à respecter ce règlement. La licence annuelle vaut acceptation de l'ensemble des règles du club.</p>
        </div>
      </div>
    </ModalWrapper>
  );
}
