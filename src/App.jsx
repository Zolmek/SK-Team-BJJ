import React, { useState, useEffect } from "react";

import skLogo  from "./assets/logo.png";
import coachPhoto from "./assets/coach.jpg";
import imgHero from "./assets/hero.webp";
import imgDisc   from "./assets/disc.jpg";
import imgAction from "./assets/action.jpg";
import imgCta    from "./assets/cta.jpg";
import imgMelqui from "./assets/melqui.jpg";
import imgMika   from "./assets/mika.jpg";
import gallery00 from "./assets/gallery_00.jpg";
import gallery01 from "./assets/gallery_01.jpg";
import gallery02 from "./assets/gallery_02.jpg";
import gallery03 from "./assets/gallery_03.jpg";
import gallery04 from "./assets/gallery_04.jpg";
import gallery05 from "./assets/gallery_05.jpg";
import gallery06 from "./assets/gallery_06.jpg";
import gallery07 from "./assets/gallery_07.jpg";
import gallery08 from "./assets/gallery_08.jpg";
import gallery09 from "./assets/gallery_09.jpg";
import gallery10 from "./assets/gallery_10.jpg";
import gallery11 from "./assets/gallery_11.jpg";
import gallery12 from "./assets/gallery_12.jpg";
import gallery13 from "./assets/gallery_13.jpg";
import gallery14 from "./gallery_14.jpg";
import gallery15 from "./gallery_15.jpg";
import gallery16 from "./gallery_16.jpg";
import gallery17 from "./gallery_17.jpg";
import gallery18 from "./gallery_18.jpg";
import gallery19 from "./gallery_19.jpg";
import gallery20 from "./gallery_20.jpg";
import gallery21 from "./gallery_21.jpg";
import gallery22 from "./gallery_22.jpg";
import gallery23 from "./gallery_23.jpg";
import gallery24 from "./gallery_24.jpg";
import gallery25 from "./gallery_25.jpg";

import gallery26 from "./assets/gallery_26.jpg";
import gallery27 from "./assets/gallery_27.jpg";
import gallery28 from "./assets/gallery_28.jpg";
import gallery29 from "./assets/gallery_29.jpg";
import gallery30 from "./assets/gallery_30.jpg";
import gallery31 from "./assets/gallery_31.jpg";
import gallery32 from "./assets/gallery_32.jpg";
import gallery33 from "./assets/gallery_33.jpg";
import gallery34 from "./assets/gallery_34.jpg";
import gallery35 from "./assets/gallery_35.jpg";
import gallery36 from "./assets/gallery_36.jpg";
import gallery37 from "./assets/gallery_37.jpg";
import gallery38 from "./assets/gallery_38.jpg";
import gallery39 from "./assets/gallery_39.jpg";
import gallery40 from "./assets/gallery_40.jpg";
import gallery41 from "./assets/gallery_41.jpg";

// Images pré-composées 1920×1440 — photo nette centrée sur fond flouté sombre
const GALLERY_PHOTOS = [
  { img: gallery00, cap: "Séminaire respiration & mental", sub: "Avec Marcio Faraco — Préparateur mental Mika Galvão" },
  { img: gallery01, cap: "Cours Grappling — No-Gi", sub: "BJJ College — São Paulo" },
  { img: gallery02, cap: "Kaua Gabriel", sub: "BJJ College — São Paulo" },
  { img: gallery03, cap: "Tarcisio Felipetto", sub: "BJJ College — São Paulo" },
  { img: gallery04, cap: "Sami Galvão", sub: "Physiothérapeute de l'équipe — Ceinture Noire" },
  { img: gallery05, cap: "Tiago Lima", sub: "BJJ College — São Paulo" },
  { img: gallery06, cap: "Pédro Henrique Rangel", sub: "BJJ College — São Paulo" },
  { img: gallery07, cap: "Joao Miyao", sub: "Stage Z-TEAM — Boulogne-Billancourt" },
  { img: gallery08, cap: "Marcio Faraco", sub: "Préparateur mental — BJJ College" },
  { img: gallery09, cap: "Adriano Martins", sub: "BJJ College — São Paulo" },
  { img: gallery10, cap: "Pablo Rosales", sub: "BJJ College — São Paulo" },
  { img: gallery11, cap: "Diogo Reis", sub: "Champion ADCC · Champion One Championship" },
  { img: gallery12, cap: "Nicolas Renier", sub: "Fondateur NRFight — BJJ College" },
  { img: gallery13, cap: "Nicolas Renier & Diogo Reis", sub: "BJJ College — São Paulo" },
  { img: gallery14, cap: "Cours BJJ — Gi", sub: "BJJ College by Melqui Galvão" },
  { img: gallery15, cap: "Nicolas Renier · Poivron · Melqui Galvão", sub: "BJJ College — São Paulo" },
  { img: gallery16, cap: "Cours Grappling — No-Gi", sub: "BJJ College by Melqui Galvão" },
  { img: gallery17, cap: "Cours Grappling — No-Gi", sub: "BJJ College by Melqui Galvão" },
  { img: gallery18, cap: "Pablo Rosales · Mika Galvão · Pantoja", sub: "BJJ College — São Paulo" },
  { img: gallery19, cap: "Lucas Yan · Isaque Lima", sub: "BJJ College — São Paulo" },
  { img: gallery20, cap: "Gabriel", sub: "BJJ College — São Paulo" },
  { img: gallery21, cap: "Nathanaël Jackson", sub: "BJJ College — São Paulo" },
  { img: gallery22, cap: "Melqui Galvão", sub: "BJJ College by Melqui Galvão" },
  { img: gallery23, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery24, cap: "Claudio Ribeiro", sub: "BJJ College — São Paulo" },
  { img: gallery25, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery26, cap: "Alex Sodré", sub: "BJJ College — São Paulo" },
  { img: gallery27, cap: "Poivron", sub: "BJJ College — São Paulo" },
  { img: gallery28, cap: "Pantoja", sub: "BJJ College — São Paulo" },
  { img: gallery29, cap: "Isaque Lima", sub: "BJJ College — São Paulo" },
  { img: gallery30, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery31, cap: "Nathanaël Jackson", sub: "BJJ College — São Paulo" },
  { img: gallery32, cap: "Arthur Sousa", sub: "BJJ College — São Paulo" },
  { img: gallery33, cap: "Zangado", sub: "BJJ College — São Paulo" },
  { img: gallery34, cap: "Caleb Henrique", sub: "BJJ College — São Paulo" },
  { img: gallery35, cap: "Zangado", sub: "BJJ College — São Paulo" },
  { img: gallery36, cap: "Pédro Henrique Rangel", sub: "BJJ College — São Paulo" },
  { img: gallery37, cap: "Lívia Barassine", sub: "BJJ College — São Paulo" },
  { img: gallery38, cap: "Vinicius Dilan", sub: "BJJ College — São Paulo" },
  { img: gallery39, cap: "Immersion Brésil", sub: "BJJ College — São Paulo" },
  { img: gallery40, cap: "Arthur Sousa", sub: "BJJ College — São Paulo" },
  { img: gallery41, cap: "Alex Sodré", sub: "BJJ College — São Paulo" },
];

const IMG = {
  coach:  coachPhoto,
  melqui: imgMelqui,
  mika:   imgMika,
  hero:   imgHero,
  disc:   imgDisc,
  action: imgAction,
  cta:    imgCta,
};


/* ── PHOTOS ── */




/* ══════════════════════════════════════════
   SK TEAM JJB — Design ATOS × SK TEAM × NRFight
   Tous les onglets = modales plein écran
══════════════════════════════════════════ */
const CSS = `
/* Fonts chargées via <link> async dans index.html pour meilleures performances */

:root {
  --black: #0A0A0A;
  --dark:  #111111;
  --dark2: #1A1A1A;
  --white: #FAFAF9;
  --off:   #F5F3F0;
  --red:   #C0392B;
  --red2:  #E74C3C;
  --border:#2A2A2A;
  --muted: #888480;
  --light: #E0DDD8;
  --fd: "Bebas Neue", sans-serif;
  --fc: "Barlow Condensed", sans-serif;
  --fb: "Inter", sans-serif;
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { background:var(--black); color:var(--white); font-family:var(--fb); overflow-x:hidden; line-height:1.6; }
a { color:inherit; text-decoration:none; }
img { max-width:100%; display:block; }
*:focus-visible { outline:2px solid var(--red); outline-offset:3px; }
::-webkit-scrollbar { width:4px; }
::-webkit-scrollbar-track { background:var(--dark); }
::-webkit-scrollbar-thumb { background:var(--red); border-radius:2px; }

/* ── NAV ── */
.nav {
  position:fixed; top:0; left:0; right:0; z-index:900;
  transition:all .3s;
}
.nav.scrolled {
  background:rgba(10,10,10,.97);
  border-bottom:1px solid var(--border);
  backdrop-filter:blur(20px);
}
.nav-inner {
  max-width:1240px; margin:0 auto;
  display:flex; align-items:center; justify-content:space-between;
  height:72px; padding:0 32px;
}
.nav-logo { display:flex; align-items:center; gap:12px; cursor:pointer; }
.nav-logo-name { font-family:var(--fd); font-size:22px; letter-spacing:3px; color:var(--white); line-height:1; }
.nav-logo-sub { font-size:9px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:var(--red); margin-top:2px; }
.nav-links { display:flex; align-items:center; gap:4px; list-style:none; }
.nav-btn {
  background:none; border:none; cursor:pointer;
  font-family:var(--fc); font-size:11px; font-weight:700;
  letter-spacing:2px; text-transform:uppercase;
  color:rgba(255,255,255,.5);
  padding:8px 14px; border-radius:4px;
  transition:all .2s;
}
.nav-btn:hover, .nav-btn.active { color:var(--white); background:rgba(255,255,255,.06); }
.nav-cta {
  background:var(--red); color:#fff;
  padding:13px 30px; border:none; cursor:pointer;
  font-family:var(--fc); font-size:12px; font-weight:700;
  letter-spacing:2.5px; text-transform:uppercase;
  transition:all .2s; margin-left:12px;
  box-shadow:0 4px 20px rgba(192,57,43,.4);
}
.nav-cta:hover { background:var(--red2); transform:translateY(-2px); box-shadow:0 6px 24px rgba(192,57,43,.5); }
.burger { display:none; flex-direction:column; gap:5px; padding:8px; background:none; border:none; cursor:pointer; }
.burger span { display:block; width:22px; height:2px; background:var(--white); transition:.3s; border-radius:1px; }
.mob-menu {
  display:none; position:fixed; inset:0; z-index:890;
  background:var(--dark); padding-top:72px;
  flex-direction:column; align-items:center; justify-content:center; gap:24px;
}
.mob-menu.open { display:flex; }
.mob-btn {
  background:none; border:none; cursor:pointer;
  font-family:var(--fd); font-size:44px; letter-spacing:2px; color:var(--white);
  transition:color .2s;
}
.mob-btn:hover { color:var(--red); }
.mob-cta-btn {
  background:var(--red); padding:14px 48px;
  font-family:var(--fd); font-size:32px; color:#fff; border:none; cursor:pointer;
  transition:background .2s; margin-top:8px;
}
.mob-cta-btn:hover { background:var(--red2); }

/* ── HERO ── */
.hero {
  position:relative; min-height:100vh;
  display:flex; flex-direction:column; justify-content:flex-end;
  overflow:hidden;
}
.hero-bg {
  position:absolute; inset:0;
  background-size:cover; background-position:center;
}
.hero-grad {
  position:absolute; inset:0;
  background:linear-gradient(
    to bottom,
    rgba(10,10,10,.3) 0%,
    rgba(10,10,10,.5) 50%,
    rgba(10,10,10,.92) 100%
  );
}
.hero-content {
  position:relative; z-index:2;
  max-width:1240px; margin:0 auto; padding:0 32px 120px; width:100%;
}
.hero-eyebrow {
  display:flex; align-items:center; gap:12px;
  font-family:var(--fc); font-size:12px; font-weight:700;
  letter-spacing:5px; text-transform:uppercase;
  color:rgba(255,255,255,.55); margin-bottom:20px;
}
.hero-eyebrow::before { content:""; display:block; width:32px; height:2px; background:var(--red); }
.hero-h1 {
  font-family:var(--fd);
  font-size:clamp(80px,11vw,160px);
  line-height:.85; letter-spacing:1px;
  color:#fff; margin-bottom:24px;
}
.hero-h1 em { color:var(--red); font-style:normal; display:block; }
.hero-desc {
  font-size:16px; color:rgba(255,255,255,.6);
  max-width:480px; line-height:1.75; font-weight:300;
  margin-bottom:44px;
}
.hero-actions { display:flex; align-items:center; gap:24px; flex-wrap:wrap; }
.btn-red {
  background:var(--red); color:#fff;
  padding:18px 44px; border:none; cursor:pointer;
  font-family:var(--fc); font-size:14px; font-weight:700;
  letter-spacing:3px; text-transform:uppercase;
  transition:all .2s; display:inline-block;
}
.btn-red:hover { background:var(--red2); transform:translateY(-2px); }
.btn-ghost-white {
  color:#fff; background:none; border:none; border-bottom:1px solid rgba(255,255,255,.3);
  padding:18px 0; cursor:pointer;
  font-family:var(--fc); font-size:14px; font-weight:700;
  letter-spacing:2.5px; text-transform:uppercase;
  transition:all .2s;
}
.btn-ghost-white:hover { border-color:#fff; }

/* ── STATS BAR ── */
.stats-bar {
  position:absolute; bottom:0; left:0; right:0; z-index:3;
  display:flex; border-top:1px solid rgba(255,255,255,.08);
  background:rgba(10,10,10,.88); backdrop-filter:blur(20px);
}
.stat { flex:1; padding:22px 24px; border-right:1px solid rgba(255,255,255,.06); text-align:center; }
.stat:last-child { border-right:none; }
.stat-n { font-family:var(--fd); font-size:clamp(30px,4vw,48px); color:var(--red); line-height:1; }
.stat-l { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:rgba(255,255,255,.4); margin-top:5px; }




/* ── COURS PRIVÉS ── */
.priv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); margin:24px 0; }
.priv-card { background:var(--dark2); padding:32px 24px; text-align:center; transition:background .2s; }
.priv-card:hover { background:#1a0a0a; }
.priv-card.featured { background:rgba(192,57,43,.08); border:1px solid rgba(192,57,43,.2); }
.priv-price { font-family:var(--fd); font-size:56px; letter-spacing:-1px; color:var(--white); line-height:1; }
.priv-price sup { font-size:.35em; vertical-align:super; color:var(--muted); }
.priv-price sub { font-size:.28em; color:var(--muted); }
.priv-label { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--muted); margin:10px 0 18px; }
.priv-eco { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:1px; color:var(--red); margin-bottom:14px; }
.priv-items { list-style:none; text-align:left; }
.priv-items li { font-size:12px; color:rgba(255,255,255,.4); padding:5px 0; display:flex; align-items:center; gap:8px; border-bottom:1px solid var(--border); }
.priv-items li:last-child { border-bottom:none; }
.priv-items li::before { content:""; width:4px; height:4px; background:var(--red); border-radius:50%; flex-shrink:0; }

/* ── DIAPORAMA PAGE PRINCIPALE ── */
.home-slider {
  position:relative; overflow:hidden;
  background:#0d0d0d;
  margin-top:36px;
  border:1px solid var(--border);
  height:360px;         /* hauteur réduite — compact sur la page */
}
.home-slider-track { position:absolute; inset:0; }
.home-slider-img {
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:contain; object-position:center center;
  display:block;
  opacity:0;
  transition:opacity .6s ease;
  will-change:opacity;
}
.home-slider-img.active { opacity:1; }
/* fond flouté de la photo courante — comble les bandes latérales */
.home-slider-bg {
  position:absolute; inset:0;
  background-size:cover; background-position:center;
  filter:blur(18px) brightness(0.28);
  transform:scale(1.05);
  z-index:0;
}
.home-slider-overlay { position:absolute; inset:0; background:linear-gradient(to right,rgba(0,0,0,.55) 0%,transparent 50%); pointer-events:none; z-index:2; }
.home-slider-info { position:absolute; bottom:22px; left:24px; z-index:4; }
.home-slider-cap { font-family:var(--fd); font-size:20px; letter-spacing:1px; color:#fff; line-height:1; text-shadow:0 2px 8px rgba(0,0,0,.7); }
.home-slider-sub { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,.6); margin-top:5px; }
.home-slider-prev, .home-slider-next { position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,0,0,.55); border:1px solid rgba(255,255,255,.2); color:#fff; width:40px; height:40px; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; z-index:4; }
.home-slider-prev { left:12px; }
.home-slider-next { right:12px; }
.home-slider-prev:hover, .home-slider-next:hover { background:var(--red); border-color:var(--red); transform:translateY(-50%) scale(1.05); }
.home-slider-dots { position:absolute; bottom:10px; right:16px; display:flex; gap:5px; z-index:4; }
.home-slider-dot { width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,.3); border:none; cursor:pointer; padding:0; transition:all .3s; }
.home-slider-dot.active { background:var(--red); width:16px; border-radius:3px; }
.home-slider-counter { position:absolute; top:12px; right:14px; font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; color:rgba(255,255,255,.5); z-index:4; background:rgba(0,0,0,.45); padding:2px 7px; }
.home-slider-progress { position:absolute; bottom:0; left:0; height:2px; background:var(--red); z-index:4; transition:width linear; }
.home-slider-pause { position:absolute; top:12px; left:12px; background:rgba(192,57,43,.85); padding:2px 8px; font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#fff; z-index:4; }
@media(max-width:768px){ .home-slider{ height:240px; } .priv-grid{grid-template-columns:1fr;} }

/* ── KIDS ── */
.kids-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); margin:24px 0; }
.kids-card { background:var(--dark2); padding:28px 24px; position:relative; overflow:hidden; }
.kids-card-age { font-family:var(--fd); font-size:48px; color:rgba(192,57,43,.15); line-height:1; margin-bottom:8px; }
.kids-card-title { font-family:var(--fd); font-size:22px; letter-spacing:.5px; color:var(--white); margin-bottom:8px; }
.kids-card-sub { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--red); margin-bottom:14px; }
.kids-card-desc { font-size:13px; line-height:1.75; color:rgba(255,255,255,.45); }
.kids-card-tags { display:flex; flex-wrap:wrap; gap:5px; margin-top:16px; }
.kids-card-tag { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; padding:3px 8px; border:1px solid rgba(192,57,43,.2); color:rgba(192,57,43,.8); }
.kids-values { display:grid; grid-template-columns:repeat(2,1fr); gap:1px; background:var(--border); border:1px solid var(--border); margin:20px 0; }
.kids-value { background:var(--dark2); padding:18px 16px; display:flex; align-items:center; gap:12px; }
.kids-value-icon { width:32px; height:32px; border:1px solid rgba(192,57,43,.3); display:flex; align-items:center; justify-content:center; color:var(--red); flex-shrink:0; }
.kids-value-text { font-size:13px; color:rgba(255,255,255,.55); line-height:1.5; }
.kids-value-text strong { display:block; font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--white); margin-bottom:3px; }
@media(max-width:600px){ .kids-grid { grid-template-columns:1fr; } .kids-values { grid-template-columns:1fr; } }

/* ── TESTI BAR ── */
.testi-bar{background:#111;border-top:3px solid var(--red);border-bottom:1px solid var(--border);}
.testi-inner{max-width:1240px;margin:0 auto;padding:40px 32px;display:flex;gap:48px;align-items:stretch;}
.testi-item{flex:1;border-left:3px solid var(--red);padding-left:20px;}
.testi-text{font-size:14px;font-style:italic;color:rgba(255,255,255,.5);line-height:1.7;margin-bottom:10px;}
.testi-name{font-family:var(--fc);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--white);}
.testi-detail{font-size:11px;color:var(--muted);}
@media(max-width:768px){.testi-inner{flex-direction:column;gap:24px;padding:32px 20px;}}

/* ── HOME CARDS (onglets interactifs) ── */
.home-section { padding:80px 0; background:var(--dark); }
.home-section-inner { max-width:1240px; margin:0 auto; padding:0 32px; }
.home-section-tag { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--red); margin-bottom:14px; }
.home-section-title { font-family:var(--fd); font-size:clamp(44px,5vw,72px); letter-spacing:1px; color:var(--white); margin-bottom:48px; line-height:.9; }
.cards-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); }
.card {
  background:var(--dark2); padding:44px 36px;
  position:relative; overflow:hidden; cursor:pointer;
  transition:background .3s;
  border:none; text-align:left; color:var(--white);
  font-family:inherit;
}
.card:hover { background:#1F1F1F; }
.card::after {
  content:""; position:absolute; bottom:0; left:0; right:0; height:3px;
  background:var(--red);
  transform:scaleX(0); transform-origin:left;
  transition:transform .4s cubic-bezier(.4,0,.2,1);
}
.card:hover::after { transform:scaleX(1); }
.card-n { font-family:var(--fd); font-size:80px; position:absolute; top:10px; right:18px; color:rgba(255,255,255,.04); line-height:1; pointer-events:none; }
.card-icon { width:44px; height:44px; border:1px solid rgba(192,57,43,.35); display:flex; align-items:center; justify-content:center; margin-bottom:22px; color:var(--red); }
.card-title { font-family:var(--fd); font-size:26px; letter-spacing:1px; margin-bottom:10px; }
.card-desc { font-size:13px; line-height:1.75; color:rgba(255,255,255,.4); margin-bottom:20px; }
.card-arrow { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--red); }

/* ── ABOUT STRIP ── */
.about-strip { background:var(--black); padding:80px 0; border-top:1px solid var(--border); }
.about-inner { max-width:1240px; margin:0 auto; padding:0 32px; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
.about-left .tag { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--red); margin-bottom:14px; }
.about-left h2 { font-family:var(--fd); font-size:clamp(44px,5vw,68px); letter-spacing:1px; line-height:.9; margin-bottom:24px; }
.about-left p { font-size:14px; line-height:1.9; color:rgba(255,255,255,.5); margin-bottom:32px; }
.about-stats { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border:1px solid var(--border); }
.about-stat { background:var(--dark); padding:24px 20px; }
.about-stat-n { font-family:var(--fd); font-size:40px; color:var(--red); line-height:1; margin-bottom:6px; }
.about-stat-l { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,.35); }
.about-right { position:relative; }
.about-photo { width:100%; aspect-ratio:3/4; object-fit:cover; object-position:top; }
.about-badge {
  position:absolute; bottom:24px; left:-24px;
  background:var(--red); color:#fff;
  padding:16px 20px;
}
.about-badge-title { font-family:var(--fd); font-size:22px; letter-spacing:1px; line-height:1; }
.about-badge-sub { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; opacity:.8; margin-top:4px; }

/* ── CTA STRIP ── */
.cta-strip {
  position:relative; padding:100px 0; overflow:hidden;
}
.cta-strip-bg { position:absolute; inset:0; background-size:cover; background-position:center 40%; }
.cta-strip-ov { position:absolute; inset:0; background:rgba(10,10,10,.88); }
.cta-strip-top { position:absolute; top:0; left:0; right:0; height:3px; background:var(--red); }
.cta-strip-inner {
  position:relative; z-index:2;
  max-width:1240px; margin:0 auto; padding:0 32px;
  display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap;
}
.cta-strip-h2 { font-family:var(--fd); font-size:clamp(44px,5vw,72px); letter-spacing:1px; color:#fff; line-height:.9; }
.cta-strip-sub { font-size:15px; color:rgba(255,255,255,.55); margin-top:14px; max-width:420px; line-height:1.75; }
.btn-white { background:#fff; color:var(--red); padding:18px 48px; border:none; cursor:pointer; font-family:var(--fc); font-size:13px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; transition:all .2s; white-space:nowrap; display:inline-block; }
.btn-white:hover { transform:translateY(-2px); }

/* ── FOOTER ── */
footer { background:#000; color:#fff; padding:60px 0 32px; border-top:1px solid var(--border); }
.footer-inner { max-width:1240px; margin:0 auto; padding:0 32px; }
.footer-grid { display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:60px; padding-bottom:48px; border-bottom:1px solid var(--border); margin-bottom:32px; }
.footer-logo { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
.footer-logo-name { font-family:var(--fd); font-size:20px; letter-spacing:3px; }
.footer-tagline { font-size:13px; color:rgba(255,255,255,.25); line-height:1.8; max-width:240px; }
.footer-affil { margin-top:18px; display:flex; flex-wrap:wrap; gap:7px; }
.footer-badge { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; padding:3px 9px; border:1px solid rgba(255,255,255,.1); color:rgba(255,255,255,.3); }
.footer-col-title { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#fff; margin-bottom:16px; }
.footer-links { list-style:none; }
.footer-links li { margin-bottom:8px; }
.footer-links a, .footer-links .plain { font-size:13px; color:rgba(255,255,255,.25); transition:color .2s; }
.footer-links a:hover { color:var(--red); }
.footer-links button { background:none; border:none; cursor:pointer; font-size:13px; color:rgba(255,255,255,.25); transition:color .2s; padding:0; font-family:var(--fb); text-align:left; }
.footer-links button:hover { color:var(--red); }
.footer-bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; }
.footer-copy { font-family:var(--fc); font-size:11px; font-weight:500; letter-spacing:1px; color:rgba(255,255,255,.15); }

/* ══════════════════════════════
   MODALES — plein écran
══════════════════════════════ */
.modal-overlay {
  position:fixed; inset:0; z-index:1000;
  background:rgba(0,0,0,.6);
  backdrop-filter:blur(4px);
  display:flex; align-items:stretch; justify-content:flex-end;
  animation:fadeIn .2s ease;
}
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
.modal-panel {
  width:min(680px,100vw);
  background:var(--dark);
  overflow-y:auto;
  position:relative;
  animation:slideIn .3s cubic-bezier(.4,0,.2,1);
  border-left:1px solid var(--border);
}
@keyframes slideIn { from{transform:translateX(40px);opacity:0} to{transform:translateX(0);opacity:1} }
.modal-close {
  position:sticky; top:0; z-index:10;
  display:flex; align-items:center; justify-content:space-between;
  padding:20px 28px; background:var(--dark);
  border-bottom:1px solid var(--border);
}
.modal-close-title { font-family:var(--fd); font-size:18px; letter-spacing:2px; color:var(--white); }
.modal-close-btn {
  background:none; border:1px solid var(--border); color:var(--white);
  width:36px; height:36px; cursor:pointer; font-size:18px;
  display:flex; align-items:center; justify-content:center;
  transition:all .2s;
}
.modal-close-btn:hover { border-color:var(--red); color:var(--red); }
.modal-body { padding:36px 28px; }
.modal-hero-img { width:100%; height:200px; object-fit:cover; object-position:center; }
.m-tag { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--red); margin-bottom:12px; }
.m-h2 { font-family:var(--fd); font-size:clamp(40px,5vw,60px); letter-spacing:1px; line-height:.9; color:var(--white); margin-bottom:20px; }
.m-divider { width:40px; height:2px; background:var(--red); margin-bottom:24px; }
.m-text { font-size:14px; line-height:1.9; color:rgba(255,255,255,.55); margin-bottom:20px; }
.m-grid2 { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border:1px solid var(--border); margin:28px 0; }
.m-cell { background:var(--dark2); padding:20px 18px; }
.m-cell-val { font-family:var(--fd); font-size:20px; letter-spacing:.5px; color:var(--white); margin-bottom:4px; }
.m-cell-lbl { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--muted); }
.m-cell.full { grid-column:1/-1; }
.m-list { list-style:none; }
.m-list li { padding:12px 0; border-bottom:1px solid var(--border); font-size:13px; color:rgba(255,255,255,.55); display:flex; align-items:center; gap:10px; }
.m-list li:last-child { border-bottom:none; }
.m-list li::before { content:""; width:4px; height:4px; background:var(--red); flex-shrink:0; border-radius:50%; }
.m-tags { display:flex; flex-wrap:wrap; gap:6px; margin:20px 0; }
.m-tag-pill { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; padding:4px 10px; border:1px solid rgba(192,57,43,.25); color:rgba(192,57,43,.9); }
.m-section { margin-top:32px; }
.m-section-title { font-family:var(--fd); font-size:22px; letter-spacing:1px; color:var(--white); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--border); }
.m-row { display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid var(--border); }
.m-row:last-child { border-bottom:none; }
.m-row-day { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--muted); }
.m-row-time { font-family:var(--fd); font-size:22px; color:var(--white); line-height:1; text-align:right; }
.m-row-cat { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--red); margin-top:3px; text-align:right; }
.m-tarif-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); margin:16px 0; }
.m-tarif { background:var(--dark2); padding:24px 18px; transition:background .2s; }
.m-tarif:hover { background:#202020; }
.m-tarif.feat { background:#1E1010; border:1px solid rgba(192,57,43,.2); }
.m-tarif-price { font-family:var(--fd); font-size:46px; letter-spacing:-1px; color:var(--white); line-height:1; }
.m-tarif-price sup { font-size:.35em; vertical-align:super; color:var(--muted); }
.m-tarif-price .per { font-size:.28em; color:var(--muted); }
.m-tarif-lbl { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--muted); margin:7px 0 12px; }
.m-tarif-items { list-style:none; }
.m-tarif-items li { font-size:12px; color:rgba(255,255,255,.4); padding:4px 0; display:flex; align-items:center; gap:8px; }
.m-tarif-items li::before { content:"\\2014"; color:var(--red); }
.immersion-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:20px 0; }
.immersion-item { position:relative; overflow:hidden; }
.immersion-item img { width:100%; aspect-ratio:3/4; object-fit:cover; transition:transform .5s; }
.immersion-item:hover img { transform:scale(1.04); }
.immersion-cap { position:absolute; bottom:0; left:0; right:0; padding:10px 12px; background:linear-gradient(transparent,rgba(0,0,0,.85)); color:#fff; }
.immersion-name { font-family:var(--fd); font-size:14px; }
.immersion-role { font-size:10px; opacity:.7; margin-top:2px; }
.m-cta { display:block; text-align:center; margin-top:32px; }
.maps-embed { margin-top:20px; border:1px solid var(--border); overflow:hidden; }


/* ── GALERIE ── */
.gallery-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:20px; }
.gallery-item { position:relative; overflow:hidden; cursor:pointer; aspect-ratio:3/4; }
.gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform .5s; }
.gallery-item:hover img { transform:scale(1.05); }
.gallery-cap { position:absolute; bottom:0; left:0; right:0; padding:8px 10px; background:linear-gradient(transparent,rgba(0,0,0,.85)); color:#fff; transform:translateY(100%); transition:transform .3s; }
.gallery-item:hover .gallery-cap { transform:translateY(0); }
.gallery-cap-name { font-family:var(--fd); font-size:13px; line-height:1; }
.gallery-cap-sub { font-size:10px; opacity:.7; margin-top:2px; }

/* CONTACT FORM */
.m-form { display:flex; flex-direction:column; gap:14px; margin-top:20px; }
.m-input {
  background:var(--dark2); border:1px solid var(--border); color:var(--white);
  padding:14px 16px; font-size:14px; font-family:var(--fb);
  transition:border-color .2s; width:100%;
}
.m-input:focus { outline:none; border-color:var(--red); }
.m-input::placeholder { color:var(--muted); }
.m-textarea { min-height:100px; resize:vertical; }
.m-form-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.m-submit { background:var(--red); color:#fff; border:none; cursor:pointer; padding:16px 32px; font-family:var(--fc); font-size:13px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; transition:all .2s; }
.m-submit:hover { background:var(--red2); transform:translateY(-1px); }
.social-links { display:flex; gap:10px; flex-wrap:wrap; margin-top:20px; }
.social-link { display:inline-flex; align-items:center; gap:8px; border:1px solid var(--border); padding:10px 16px; font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,.5); transition:all .2s; }
.social-link:hover { border-color:var(--red); color:var(--red); }


/* ── DIAPORAMA LIGHTBOX ── */
.lightbox {
  position:fixed; inset:0; z-index:2000;
  background:rgba(0,0,0,.95);
  display:flex; align-items:center; justify-content:center;
  animation:fadeIn .2s ease;
}
.lightbox-img {
  max-width:90vw; max-height:85vh;
  object-fit:contain; display:block;
  border:1px solid rgba(255,255,255,.1);
}
.lightbox-close {
  position:absolute; top:20px; right:20px;
  background:var(--red); border:none; color:#fff;
  width:44px; height:44px; font-size:22px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
}
.lightbox-prev, .lightbox-next {
  position:absolute; top:50%; transform:translateY(-50%);
  background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2);
  color:#fff; width:48px; height:48px; font-size:22px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition:background .2s;
}
.lightbox-prev:hover, .lightbox-next:hover { background:var(--red); border-color:var(--red); }
.lightbox-prev { left:16px; }
.lightbox-next { right:16px; }
.lightbox-counter {
  position:absolute; bottom:20px; left:50%; transform:translateX(-50%);
  font-family:var(--fc); font-size:12px; font-weight:700;
  letter-spacing:2px; color:rgba(255,255,255,.5);
}
.lightbox-dots {
  position:absolute; bottom:44px; left:50%; transform:translateX(-50%);
  display:flex; gap:6px;
}
.lightbox-dot {
  width:6px; height:6px; border-radius:50%;
  background:rgba(255,255,255,.3); border:none; cursor:pointer;
  transition:background .2s; padding:0;
}
.lightbox-dot.active { background:var(--red); }
.lightbox-cap {
  position:absolute; bottom:72px; left:50%; transform:translateX(-50%);
  font-family:var(--fc); font-size:13px; font-weight:700;
  letter-spacing:2px; text-transform:uppercase;
  color:rgba(255,255,255,.7); white-space:nowrap;
}

/* ── TABS PRÉPA PHYSIQUE ── */
.pp-tabs { display:flex; gap:1px; background:var(--border); border:1px solid var(--border); margin-bottom:28px; }
.pp-tab { flex:1; background:var(--dark2); border:none; cursor:pointer; padding:14px 10px; font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--muted); transition:all .2s; }
.pp-tab.active { background:rgba(192,57,43,.12); color:var(--red); border-bottom:2px solid var(--red); }
.pp-tab:hover:not(.active) { background:var(--dark); color:var(--white); }
.pp-block { display:none; }
.pp-block.active { display:block; }
.pp-week { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--border); border:1px solid var(--border); margin:16px 0; }
.pp-day { background:var(--dark2); padding:16px 14px; }
.pp-day-label { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--red); margin-bottom:8px; }
.pp-day-title { font-family:var(--fd); font-size:16px; color:var(--white); margin-bottom:6px; }
.pp-day-items { list-style:none; }
.pp-day-items li { font-size:12px; color:rgba(255,255,255,.45); padding:3px 0; display:flex; gap:8px; align-items:center; }
.pp-day-items li::before { content:""; width:3px; height:3px; background:var(--red); border-radius:50%; flex-shrink:0; }
.comp-phase { border:1px solid var(--border); margin:10px 0; }
.comp-phase-header { background:var(--dark2); padding:14px 18px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; }
.comp-phase-title { font-family:var(--fd); font-size:18px; letter-spacing:.5px; color:var(--white); }
.comp-phase-sub { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--red); }
.comp-phase-body { padding:18px; border-top:1px solid var(--border); background:#0f0f0f; }
@media(max-width:600px){ .pp-week{grid-template-columns:1fr;} .pp-tabs{flex-wrap:wrap;} }

/* ── BOUTON WHATSAPP FLOTTANT ── */
.wa-wrap { position:fixed; bottom:28px; right:28px; z-index:999; display:flex; align-items:center; }
.wa-btn {
  width:58px; height:58px; border-radius:50%;
  background:linear-gradient(135deg,#25D366,#128C7E);
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 4px 20px rgba(37,211,102,.5);
  transition:transform .25s, box-shadow .25s;
  text-decoration:none; flex-shrink:0;
}
.wa-btn:hover { transform:scale(1.1); box-shadow:0 6px 28px rgba(37,211,102,.65); }
.wa-btn svg { width:30px; height:30px; fill:#fff; }
.wa-tooltip {
  background:var(--dark2); border:1px solid var(--border);
  padding:8px 14px; font-family:var(--fc); font-size:11px;
  font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
  color:var(--white); white-space:nowrap; opacity:0;
  transition:opacity .2s; pointer-events:none; margin-right:12px;
}
.wa-wrap:hover .wa-tooltip { opacity:1; }
/* ── MENU PLUS DROPDOWN ── */
.nav-more-wrap { position:relative; display:inline-block; }
.nav-more-dropdown {
  position:absolute; top:calc(100% + 8px); right:0;
  background:rgba(10,10,10,.98); border:1px solid var(--border);
  backdrop-filter:blur(20px); min-width:180px; padding:6px 0;
  z-index:901; border-radius:4px; box-shadow:0 8px 32px rgba(0,0,0,.6);
  opacity:0; visibility:hidden; transform:translateY(-4px);
  transition:opacity .2s, transform .2s, visibility .2s;
}
.nav-more-wrap:hover .nav-more-dropdown,
.nav-more-wrap.open .nav-more-dropdown { opacity:1; visibility:visible; transform:translateY(0); }
.nav-more-item {
  display:block; width:100%; background:none; border:none; cursor:pointer;
  font-family:var(--fc); font-size:11px; font-weight:700;
  letter-spacing:2px; text-transform:uppercase;
  color:rgba(255,255,255,.6); padding:11px 18px; text-align:left; transition:all .15s;
}
.nav-more-item:hover, .nav-more-item.active { color:var(--white); background:rgba(255,255,255,.07); }
/* ── ÉTOILES ── */
.testi-stars { color:#F5A623; font-size:14px; letter-spacing:2px; margin-bottom:8px; }
.testi-avatar { width:36px; height:36px; border-radius:50%; background:var(--red); display:flex; align-items:center; justify-content:center; font-family:var(--fd); font-size:16px; color:#fff; flex-shrink:0; margin-right:12px; }
.testi-header { display:flex; align-items:center; margin-top:12px; }


.hero-tagline { font-family:var(--fd); font-size:clamp(36px,5vw,72px); color:var(--red); letter-spacing:2px; line-height:.9; margin-bottom:20px; }
.hero-urgence { display:flex; align-items:center; gap:10px; margin-bottom:32px; font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,.7); }
.hero-urgence-dot { width:8px; height:8px; border-radius:50%; background:#25D366; box-shadow:0 0 0 3px rgba(37,211,102,.25); animation:pulse 2s infinite; flex-shrink:0; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 3px rgba(37,211,102,.25);} 50%{box-shadow:0 0 0 6px rgba(37,211,102,.1);} }

/* ── SECTION INSCRIPTION RAPIDE ── */
.inscription-strip { background:var(--red); padding:48px 0; }
.inscription-inner { max-width:1240px; margin:0 auto; padding:0 32px; display:flex; align-items:center; gap:48px; }
.inscription-text h2 { font-family:var(--fd); font-size:clamp(32px,4vw,52px); color:#fff; letter-spacing:1px; line-height:.9; margin-bottom:8px; }
.inscription-text p { font-size:13px; color:rgba(255,255,255,.75); line-height:1.6; }
.inscription-form { display:flex; gap:10px; flex-wrap:wrap; flex:1; min-width:300px; }
.inscription-input { background:rgba(255,255,255,.15); border:1px solid rgba(255,255,255,.3); color:#fff; padding:14px 16px; font-size:14px; font-family:var(--fb); flex:1; min-width:140px; transition:border-color .2s; }
.inscription-input::placeholder { color:rgba(255,255,255,.6); }
.inscription-input:focus { outline:none; border-color:#fff; background:rgba(255,255,255,.2); }
.inscription-btn { background:#fff; color:var(--red); border:none; cursor:pointer; padding:14px 28px; font-family:var(--fc); font-size:12px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; transition:all .2s; white-space:nowrap; }
.inscription-btn:hover { background:var(--dark); color:#fff; }
.inscription-success { display:flex; align-items:center; gap:12px; padding:16px 20px; background:rgba(255,255,255,.15); border:1px solid rgba(255,255,255,.3); color:#fff; font-family:var(--fc); font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; }
@media(max-width:900px){ .inscription-inner{flex-direction:column;gap:28px;} .inscription-text{text-align:center;} }
@media(max-width:600px){ .inscription-form{flex-direction:column;} .inscription-input,.inscription-btn{width:100%;} }

button, a { min-height:44px; }
.nav-links a, .nav-btn { min-height:unset; }
img { max-width:100%; }

/* ── RESPONSIVE ── */
@media(max-width:900px) {
  .cards-grid { grid-template-columns:1fr; }
  .about-inner { grid-template-columns:1fr; gap:40px; }
  .about-right { display:none; }
  .footer-grid { grid-template-columns:1fr 1fr; }
  .m-grid2 { grid-template-columns:1fr; }
  .m-tarif-grid { grid-template-columns:1fr; }
  .immersion-grid { grid-template-columns:1fr 1fr; }
  .m-form-row { grid-template-columns:1fr; }
}
@media(max-width:768px) {
  .nav-links, .nav-cta { display:none; }
  .burger { display:flex; }
  .stats-bar { flex-wrap:wrap; }
  .stat { min-width:50%; border-bottom:1px solid rgba(255,255,255,.06); }
  .stat:nth-child(odd) { border-right:1px solid rgba(255,255,255,.06); }
  .stat:nth-child(even) { border-right:none; }
  .footer-grid { grid-template-columns:1fr; gap:36px; }
  .cta-strip-inner { flex-direction:column; align-items:flex-start; }
  .modal-panel { width:100vw; border-left:none; }
  .hero-content { padding:0 20px 120px; }
  .home-section-inner, .about-inner, .cta-strip-inner, .footer-inner { padding:0 20px; }
  .container { padding:0 20px; }
  .m-tarif-grid { grid-template-columns:1fr 1fr; }
}
`;

/* ── Icons ── */
const Ic = ({d,s=18}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);

/* ── SK Logo (SVG inline) ── */
function SKLogo({ size=44 }) {
  return (
    <img
      src={skLogo}
      width={size}
      height={size}
      alt="Logo SK TEAM JJB"
      style={{display:"block",objectFit:"contain",borderRadius:"50%"}}
    />
  );
}



/* ── Diaporama page principale ── */
const SLIDE_DURATION = 4000;
function HomeSlider({ photos }) {
  const [slide, setSlide]   = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef    = React.useRef(null);
  const rafRef      = React.useRef(null);
  const startTs     = React.useRef(null);
  const elapsedMs   = React.useRef(0);

  const goTo = idx => {
    const next = typeof idx === "function" ? idx(slide) : idx;
    setSlide(next);
    setProgress(0);
    elapsedMs.current = 0;
  };

  /* barre de progression via rAF */
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    if (paused) return;
    startTs.current = performance.now();
    const tick = () => {
      const spent = elapsedMs.current + (performance.now() - startTs.current);
      setProgress(Math.min((spent / SLIDE_DURATION) * 100, 100));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, slide]);

  /* avance automatique */
  useEffect(() => {
    clearTimeout(timerRef.current);
    if (paused) return;
    const remaining = SLIDE_DURATION - elapsedMs.current;
    timerRef.current = setTimeout(() => {
      setSlide(s => (s + 1) % photos.length);
      setProgress(0);
      elapsedMs.current = 0;
    }, Math.max(remaining, 200));
    return () => clearTimeout(timerRef.current);
  }, [paused, slide, photos.length]);

  /* mémorise le temps écoulé au moment de la pause */
  const handlePause = () => {
    elapsedMs.current += performance.now() - (startTs.current || performance.now());
    setPaused(true);
  };
  const handleResume = () => {
    startTs.current = performance.now();
    setPaused(false);
  };

  /* préchargement */
  useEffect(() => {
    [photos[(slide+1)%photos.length].img, photos[(slide-1+photos.length)%photos.length].img]
      .forEach(src => { const img = new Image(); img.src = src; });
  }, [slide, photos]);

  return (
    <div
      className="home-slider"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      role="region"
      aria-label="Diaporama immersions Brésil — BJJ College Jundiaí"
    >
      {/* Fond flouté dynamique — suit la photo courante */}
      <div className="home-slider-bg" style={{backgroundImage:`url(${photos[slide].img})`}}/>
      <div className="home-slider-track">
        {photos.map((p, i) => (
          <img
            key={i}
            className={"home-slider-img" + (i === slide ? " active" : "")}
            src={p.img}
            alt={p.cap + " — " + p.sub}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{zIndex:1}}
          />
        ))}
      </div>
      <div className="home-slider-overlay"/>
      <div className="home-slider-info">
        <div className="home-slider-cap">{photos[slide].cap}</div>
        <div className="home-slider-sub">{photos[slide].sub}</div>
      </div>
      <button className="home-slider-prev" onClick={() => goTo(s => (s-1+photos.length)%photos.length)} aria-label="Photo précédente">‹</button>
      <button className="home-slider-next" onClick={() => goTo(s => (s+1)%photos.length)} aria-label="Photo suivante">›</button>
      <div className="home-slider-counter">{slide+1} / {photos.length}</div>
      {paused && <div className="home-slider-pause">⏸ Pause</div>}
      <div className="home-slider-dots">
        {photos.map((_,i) => (
          <button key={i} className={"home-slider-dot"+(i===slide?" active":"")} onClick={() => goTo(i)} aria-label={"Photo "+(i+1)}/>
        ))}
      </div>
      <div className="home-slider-progress" style={{width:`${progress}%`}}/>
    </div>
  );
}

/* ── Galerie avec diaporama ── */
const GALLERY_DURATION = 4000;
function GalleryWithLightbox({ photos }) {
  const [active,  setActive]  = useState(null);
  const [slide,   setSlide]   = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef  = React.useRef(null);
  const rafRef    = React.useRef(null);
  const startTs   = React.useRef(null);
  const elapsedMs = React.useRef(0);

  const goTo = idx => {
    const next = typeof idx === "function" ? idx(slide) : idx;
    setSlide(next);
    setProgress(0);
    elapsedMs.current = 0;
  };

  /* rAF pour la barre de progression */
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    if (paused || active !== null) return;
    startTs.current = performance.now();
    const tick = () => {
      const spent = elapsedMs.current + (performance.now() - startTs.current);
      setProgress(Math.min((spent / GALLERY_DURATION) * 100, 100));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, active, slide]);

  /* avance automatique */
  useEffect(() => {
    clearTimeout(timerRef.current);
    if (paused || active !== null) return;
    const remaining = GALLERY_DURATION - elapsedMs.current;
    timerRef.current = setTimeout(() => {
      setSlide(s => (s + 1) % photos.length);
      setProgress(0);
      elapsedMs.current = 0;
    }, Math.max(remaining, 200));
    return () => clearTimeout(timerRef.current);
  }, [paused, active, slide, photos.length]);

  const handlePause  = () => { elapsedMs.current += performance.now() - (startTs.current||performance.now()); setPaused(true); };
  const handleResume = () => { startTs.current = performance.now(); setPaused(false); };

  /* navigation clavier en lightbox */
  useEffect(() => {
    if (active === null) return;
    const fn = e => {
      if (e.key === "Escape")      setActive(null);
      if (e.key === "ArrowRight")  setActive(i => (i + 1) % photos.length);
      if (e.key === "ArrowLeft")   setActive(i => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [active, photos.length]);

  /* préchargement */
  useEffect(() => {
    [photos[(slide+1)%photos.length].img, photos[(slide-1+photos.length)%photos.length].img]
      .forEach(src => { const img = new Image(); img.src = src; });
  }, [slide, photos]);

  return (
    <>
      {/* ── CAROUSEL PRINCIPAL (4:3) ── */}
      <div
        style={{
          position:"relative", overflow:"hidden",
          aspectRatio:"4/3",
          marginBottom:10, cursor:"pointer",
          background:"#000", border:"1px solid var(--border)"
        }}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onClick={() => setActive(slide)}
        role="region"
        aria-label="Diaporama galerie"
      >
        {/* Stack d'images crossfade */}
        {photos.map((p, i) => (
          <img
            key={i}
            src={p.img}
            alt={p.cap + " — " + p.sub}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{
              position:"absolute", inset:0,
              width:"100%", height:"100%",
              objectFit:"contain",
              display:"block",
              opacity: i === slide ? 1 : 0,
              transition:"opacity .6s ease",
              willChange:"opacity",
              WebkitBackfaceVisibility:"hidden",
            }}
          />
        ))}
        {/* gradient + légende */}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(0,0,0,.6) 0%,transparent 55%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"14px 18px",background:"linear-gradient(transparent,rgba(0,0,0,.8))",zIndex:2}}>
          <div style={{fontFamily:"var(--fd)",fontSize:18,color:"#fff",textShadow:"0 2px 6px rgba(0,0,0,.6)"}}>{photos[slide].cap}</div>
          <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.6)",marginTop:3}}>{photos[slide].sub}</div>
        </div>
        {/* nav gauche / droite */}
        {[["prev",10,"‹",e=>{e.stopPropagation();goTo(s=>(s-1+photos.length)%photos.length);}],
          ["next","auto","›",e=>{e.stopPropagation();goTo(s=>(s+1)%photos.length);}]
        ].map(([k,l,ch,fn]) => (
          <button key={k} onClick={fn}
            style={{position:"absolute",[k==="prev"?"left":"right"]:10,top:"50%",transform:"translateY(-50%)",
              background:"rgba(0,0,0,.55)",border:"1px solid rgba(255,255,255,.25)",
              color:"#fff",width:40,height:40,fontSize:20,cursor:"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",
              transition:"background .2s",zIndex:3}}
            aria-label={k==="prev"?"Photo précédente":"Photo suivante"}
            onMouseEnter={e=>e.currentTarget.style.background="var(--red)"}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(0,0,0,.55)"}
          >{ch}</button>
        ))}
        {/* compteur */}
        <div style={{position:"absolute",top:10,right:10,background:"rgba(0,0,0,.55)",padding:"3px 8px",fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"1.5px",color:"rgba(255,255,255,.8)",zIndex:3}}>{slide+1} / {photos.length}</div>
        {paused && <div style={{position:"absolute",top:10,left:10,background:"rgba(192,57,43,.85)",padding:"3px 10px",fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"#fff",zIndex:3}}>⏸ Pause</div>}
        {/* barre progression */}
        <div style={{position:"absolute",bottom:0,left:0,height:2,background:"var(--red)",width:`${progress}%`,transition:"width 80ms linear",zIndex:4}}/>
      </div>

      {/* Points de navigation */}
      <div style={{display:"flex",gap:5,justifyContent:"center",marginBottom:14,flexWrap:"wrap"}}>
        {photos.map((_,i) => (
          <button key={i} onClick={()=>goTo(i)}
            style={{width:i===slide?20:6,height:6,borderRadius:i===slide?3:50,
              background:i===slide?"var(--red)":"rgba(255,255,255,.2)",
              border:"none",cursor:"pointer",transition:"all .3s",padding:0}}
            aria-label={"Photo "+(i+1)}/>
        ))}
      </div>

      {/* ── GRILLE MINIATURES ── */}
      <div className="gallery-grid">
        {photos.map((item, i) => (
          <div key={i} className="gallery-item"
            onClick={() => { goTo(i); setActive(i); }}
            style={{cursor:"pointer",outline:i===slide?"2px solid var(--red)":"none",outlineOffset:2}}>
            <img
              src={item.img}
              alt={item.cap + " — Karim Sadat SK TEAM JJB Brésil"}
              loading="lazy"
              decoding="async"
              style={{objectFit:"contain"}}
            />
            <div className="gallery-cap">
              <div className="gallery-cap-name">{item.cap}</div>
              <div className="gallery-cap-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Fermer">×</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); setActive(i => (i-1+photos.length)%photos.length); }} aria-label="Précédent">‹</button>
          <img
            className="lightbox-img"
            src={photos[active].img}
            alt={photos[active].cap}
            onClick={e => e.stopPropagation()}
            decoding="async"
            style={{imageRendering:"auto"}}
          />
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); setActive(i => (i+1)%photos.length); }} aria-label="Suivant">›</button>
          <div className="lightbox-cap">{photos[active].cap} — {photos[active].sub}</div>
          <div className="lightbox-dots">
            {photos.map((_,i) => (
              <button key={i} className={"lightbox-dot"+(i===active?" active":"")} onClick={e=>{e.stopPropagation();setActive(i);}} aria-label={"Photo "+(i+1)}/>
            ))}
          </div>
          <div className="lightbox-counter">{active+1} / {photos.length}</div>
        </div>
      )}
    </>
  );
}

/* ══════════════════════════════════════
   MODAL CONTENTS — une fonction par modale
══════════════════════════════════════ */


function ModalPrive({ open, onClose, openContact }) {
  const [discipline, setDiscipline] = useState(null);
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">COURS PRIVÉS</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-tag">Suivi personnalisé</div>
          <h2 className="m-h2">COURS<br/>PRIVÉS</h2>
          <div className="m-divider"/>

          {/* ── CHOIX DISCIPLINE ── */}
          <div style={{marginBottom:28}}>
            <p style={{fontFamily:"var(--fc)",fontSize:11,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--muted)",marginBottom:14}}>Choisissez votre discipline</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:1,background:"var(--border)",border:"1px solid var(--border)"}}>
              {[
                {id:"bjj",label:"Jiu-Jitsu Brésilien",icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",desc:"Gi & No-Gi"},
                {id:"grappling",label:"Grappling",icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",desc:"No-Gi · MMA Base"},
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

          {/* ── CONTENU SELON DISCIPLINE ── */}
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

          <p className="m-text">Un cours privé avec Karim Sadat, c’est une heure entière consacrée uniquement à toi. Technique personnalisée, correction en temps réel, progression accélérée. Idéal pour corriger des points précis, préparer une compétition ou progresser plus vite.</p>

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
            <p className="m-text">Les cours privés se déroulent à Clamart (92140). Contactez-nous pour convenir d’un créneau.</p>
            <div className="m-cta" style={{marginTop:16}}>
              <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>Réserver mon cours privé</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalKids({ open, onClose, openContact }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">PROGRAMME KIDS & ADOS</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-tag">Jeunes pratiquants</div>
          <h2 className="m-h2">KIDS &amp;<br/>ADOS BJJ</h2>
          <div className="m-divider"/>
          <p className="m-text">Le Brazilian Jiu-Jitsu est un sport idéal pour les enfants et les adolescents. Il développe la confiance en soi, la discipline, la coordination et l’esprit d’équipe dans un environnement sécurisé et bienveillant.</p>

          <div className="kids-grid">
            <div className="kids-card">
              <div className="kids-card-age">6–9</div>
              <div className="kids-card-title">Mini BJJ</div>
              <div className="kids-card-sub">6 à 9 ans</div>
              <p className="kids-card-desc">Découverte du JJB par le jeu. Développement de la motricité, de l’équilibre et de la coordination. Séances ludiques, progressives et sécurisées.</p>
              <div className="kids-card-tags">
                {["Jeux","Motricité","Confiance","Sécurité"].map(t => <span key={t} className="kids-card-tag">{t}</span>)}
              </div>
            </div>
            <div className="kids-card">
              <div className="kids-card-age">10–14</div>
              <div className="kids-card-title">Junior BJJ</div>
              <div className="kids-card-sub">10 à 14 ans</div>
              <p className="kids-card-desc">Apprentissage des techniques fondamentales du JJB. Introduction au sparring encadré. Développement de la discipline, du respect et de la persevérance.</p>
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
                {icon:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75", title:"Esprit d’équipe", desc:"Apprendre à travailler avec un partenaire, respect mutuel"},
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
              <li>Groupes homogènes par tranches d’âge</li>
              <li>Licence FFJDA / CFJJB obligatoire (assurance incluse)</li>
              <li>Tarifs spéciaux famille disponibles</li>
              <li>1er cours d’essai gratuit</li>
            </ul>
          </div>

          <div className="m-cta">
            <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>
              Réserver un essai gratuit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalDisciplines({ open, onClose, openContact }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">DISCIPLINES</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <img className="modal-hero-img" src={IMG.disc} alt="Tatami du club SK TEAM JJB — Brazilian Jiu-Jitsu Clamart 92140" loading="lazy"/>
        <div className="modal-body">
          <div className="m-tag">Ce qu&apos;on pratique</div>
          <h2 className="m-h2">NOS<br/>DISCIPLINES</h2>
          <div className="m-divider"/>
          {[
            { n:"01", t:"Brazilian Jiu-Jitsu", tags:["Kimono","No-Gi","Compétition","Loisir"], d:"L’art du sol. Maîtriser les positions, passages de garde et soumissions. Programme structuré selon le référentiel SK TEAM BJJ, avec suivi individuel de progression pour chaque pratiquant." },
            { n:"02", t:"Grappling", tags:["No-Gi","FFL","MMA Base"], d:"Combat sans kimono. Techniques de lutte, étranglements et clés articulaires adaptées au No-Gi. Coach certifié Ceinture Noire Grappling FFL. Base idéale pour la compétition et le MMA." },
            { n:"03", t:"Self-Défense", tags:["AFGSU2","Tous niveaux","Pratique"], d:"Techniques pratiques et réalistes basées sur le JJB et le Grappling. Pédagogie progressive adaptée à tous les niveaux, avec une approche situationnelle et efficace." },
          ].map(disc => (
            <div key={disc.n} className="m-section">
              <div className="m-section-title">{disc.n} — {disc.t}</div>
              <p className="m-text">{disc.d}</p>
              <div className="m-tags">{disc.tags.map(t => <span key={t} className="m-tag-pill">{t}</span>)}</div>
            </div>
          ))}
          <div className="m-cta"><button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>Réserver mon essai gratuit</button></div>
        </div>
      </div>
    </div>
  );
}

function ModalCoach({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">LE COACH</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <img className="modal-hero-img" src={IMG.action} alt="Karim Sadat en action — coach BJJ Ceinture Noire IBJJF SK TEAM JJB" style={{objectPosition:"center"}} loading="lazy"/>
        <div className="modal-body">
          <div className="m-tag">Votre coach</div>
          <h2 className="m-h2">KARIM<br/>SADAT</h2>
          <div className="m-divider"/>
          <p className="m-text">Pratiquant de Brazilian Jiu-Jitsu depuis plus de 13 ans, Karim Sadat cumule plus de 2 000 heures d’enseignement. Compétiteur au niveau national et international — Championnats de France, IBJJF European Championships.</p>
          <p className="m-text">Titulaire du CQP Moniteur Arts Martiaux (spécialité JJB) et arbitre en formation auprès de la FFJDA. Immersion au Brésil — BJJ College by Melqui Galvão à Jundiaí, São Paulo. Stage Z-TEAM avec Joao Miyao à Boulogne-Billancourt.</p>
          <div className="m-grid2">
            {[{v:"CN 1er Dan",l:"IBJJF / CFJJB"},{v:"CN Grappling",l:"FFL"},{v:"CQP MAM",l:"Moniteur Arts Martiaux"},{v:"AFGSU2",l:"FFJDA"},{v:"2 000+ heures",l:"Enseignement"},{v:"13+ ans",l:"Pratique"}].map(c => (
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
                <div className="immersion-cap"><div className="immersion-name">Melqui Galvão</div><div className="immersion-role">Fondateur BJJ College</div></div>
              </div>
              <div className="immersion-item">
                <img src={IMG.mika} alt="Karim Sadat avec Mika Galvão" loading="lazy"/>
                <div className="immersion-cap"><div className="immersion-name">Mika Galvão</div><div className="immersion-role">Champion du Monde IBJJF</div></div>
              </div>
            </div>
            {/* Brésil */}
            <div style={{marginTop:20}}>
              <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--red)",marginBottom:12}}>🇧🇷 Brésil — São Paulo</div>
              <ul className="m-list">
                <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>BJJ College by Melqui Galvão</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>Jundiaí, São Paulo</span></li>
              </ul>
            </div>
            {/* USA New York */}
            <div style={{marginTop:20}}>
              <div style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"var(--red)",marginBottom:12}}>🇺🇸 États-Unis — New York</div>
              <ul className="m-list">
                <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>Marcelo Garcia Academy</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>New York, NY</span></li>
                <li><strong style={{color:"var(--white)",fontFamily:"var(--fc)",letterSpacing:"1px"}}>Vitor Ribeiro Shaoling</strong><span style={{marginLeft:8,color:"rgba(255,255,255,.4)"}}>New York, NY</span></li>
              </ul>
            </div>
            {/* USA Floride */}
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
      </div>
    </div>
  );
}

function ModalProgramme({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">PROGRAMME ADULTES</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-tag">Structure pédagogique</div>
          <h2 className="m-h2">SK TEAM<br/>FONDAMENTAUX</h2>
          <div className="m-divider"/>
          <p className="m-text">Saison complète d’octobre à juin — 34 semaines, 2 séances par semaine. Structuré en 3 mésocycles progressifs selon le programme SK TEAM BJJ, adapté aux adultes débutants en séances d’une heure.</p>
          <div className="m-grid2">
            {[{v:"Ados · Adultes · Masters",l:"Public cible"},{v:"1h00",l:"Durée séance"},{v:"2/semaine",l:"Fréquence"},{v:"34 séances",l:"Par saison"},{v:"Attestation",l:"Fin de saison"}].map(c => (
              <div key={c.v} className="m-cell"><div className="m-cell-val">{c.v}</div><div className="m-cell-lbl">{c.l}</div></div>
            ))}
          </div>
          {[
            {n:"Mésocycle 01",p:"Octobre → Janvier · 10 sem.",t:"Fondamentaux",d:"Bases posturales, positionnement, gestion de la distance et premiers mouvements au sol.",ts:["Posture","Guard Closed","Armbar","Guillotine","Hip Escape","Bridge"]},
            {n:"Mésocycle 02",p:"Février → Mars · 12 sem.",t:"Développement Technique",d:"Passages de garde, contrôle latéral et premières soumissions en situation. Sparring directionnel progressif.",ts:["Toreando Pass","Leg Drag","Side Control","Key Lock","Mount","Back Take","Double Leg"]},
            {n:"Mésocycle 03",p:"Avril → Juin · 12 sem.",t:"Consolidation & Sparring",d:"Révisions intensives, sparring thématique progressif et évaluation finale. Autonomie tactique.",ts:["Drills","Sparring positionnel","Sparring libre","Évaluation","Attestations"]},
          ].map(m => (
            <div key={m.n} className="m-section">
              <div className="m-section-title">{m.n} — {m.t}</div>
              <p style={{fontSize:11,fontFamily:"var(--fc)",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"var(--muted)",marginBottom:10}}>{m.p}</p>
              <p className="m-text">{m.d}</p>
              <div className="m-tags">{m.ts.map(t => <span key={t} className="m-tag-pill">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ModalHoraires({ open, onClose, openContact }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">HORAIRES & TARIFS</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-section">
            <div className="m-section-title">Horaires 2025–2026</div>
            {[{d:"Lundi",t:"19h30 – 20h30",c:"JJB Adultes Débutants"},{d:"Mercredi",t:"19h30 – 20h30",c:"JJB / Grappling"},{d:"Samedi",t:"À confirmer",c:"Open Mat"}].map(s => (
              <div key={s.d} className="m-row">
                <span className="m-row-day">{s.d}</span>
                <div><div className="m-row-time">{s.t}</div><div className="m-row-cat">{s.c}</div></div>
              </div>
            ))}
          </div>
          <div className="m-section">
            <div className="m-section-title">Lieu · Clamart (92140)</div>
            <p className="m-text">La salle d’entraînement est située à Clamart (92140), Hauts-de-Seine. L’adresse exacte est communiquée après inscription.</p>
            <div className="maps-embed">
              <iframe title="SK TEAM JJB Clamart" src="https://maps.google.com/maps?q=Clamart,92140,France&output=embed" width="100%" height="180" style={{border:0,display:"block"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
          <div className="m-section">
            <div className="m-section-title">Tarifs 2025–2026</div>
            <div className="m-tarif-grid">
              <div className="m-tarif">
                <div className="m-tarif-price"><sup>€</sup>150<span className="per">/an</span></div>
                <div className="m-tarif-lbl">Découverte</div>
                <ul className="m-tarif-items"><li>1 séance / semaine</li><li>Licence FFJDA / CFJJB</li><li>Programme SK TEAM</li></ul>
              </div>
              <div className="m-tarif feat">
                <div className="m-tarif-price"><sup>€</sup>220<span className="per">/an</span></div>
                <div className="m-tarif-lbl">Complète</div>
                <ul className="m-tarif-items"><li>Accès illimité</li><li>Licence FFJDA / CFJJB</li><li>Suivi progression</li></ul>
              </div>
              <div className="m-tarif">
                <div className="m-tarif-price"><sup>€</sup>300<span className="per">/an</span></div>
                <div className="m-tarif-lbl">Premium</div>
                <ul className="m-tarif-items"><li>Accès illimité</li><li>Cours privés</li><li>Suivi compétition</li></ul>
              </div>
            </div>
            <p style={{fontSize:12,color:"var(--muted)",marginTop:12,lineHeight:1.7}}>1er cours d’essai gratuit, sans engagement. Pass Sport et ANCV acceptés. Tarifs indicatifs — nous contacter pour tarifs définitifs.</p>
          </div>
          <div className="m-cta">
            <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>Réserver mon essai gratuit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalClub({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">LE CLUB</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-tag">Association loi 1901</div>
          <h2 className="m-h2">SK TEAM<br/>JJB</h2>
          <div className="m-divider"/>
          <p className="m-text">SK TEAM JJB est une association déclarée loi 1901, affiliée à la Fédération Française de Judo, Jujitsu, Kendo et Disciplines Associées (FFJDA), à la Confédération Française de Jiu-Jitsu Brésilien (CFJJB) et au Comité Départemental Judo 92.</p>
          <p className="m-text">Fondée à Clamart (92140), l’association propose un cadre structuré, progressif et bienveillant pour tous les niveaux — du débutant complet au compétiteur.</p>
          <div className="m-grid2">
            {[{v:"FFJDA",l:"Affiliée"},{v:"IBJJF",l:"Certifiée"},{v:"FFL",l:"Affiliée Grappling"},{v:"Loi 1901",l:"Association déclarée"}].map(c => (
              <div key={c.v} className="m-cell"><div className="m-cell-val">{c.v}</div><div className="m-cell-lbl">{c.l}</div></div>
            ))}
          </div>
          <div className="m-section">
            <div className="m-section-title">Bureau</div>
            <div className="m-row">
              <span style={{fontSize:14,fontWeight:600}}>Karim SADAT</span>
              <span style={{fontFamily:"var(--fc)",fontSize:10,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--muted)"}}>Directeur Technique</span>
            </div>
          </div>
          <div className="m-section">
            <div className="m-section-title">Objet social</div>
            <p className="m-text">Promouvoir et développer la pratique du Brazilian Jiu-Jitsu, du Grappling et de la Self-Défense sur la commune de Clamart et ses environs, dans le respect des valeurs des arts martiaux.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalContact({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">ESSAI GRATUIT</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-tag">Rejoindre le club</div>
          <h2 className="m-h2">PRÊT À<br/>COMMENCER?</h2>
          <div className="m-divider"/>
          <p className="m-text">Premier cours d’essai gratuit, sans engagement. Venez découvrir le JJB dans une ambiance technique et bienveillante à Clamart.</p>
          <div className="m-form">
            <div className="m-form-row">
              <input className="m-input" type="text" placeholder="Prénom *" required/>
              <input className="m-input" type="text" placeholder="Nom *" required/>
            </div>
            <input className="m-input" type="email" placeholder="Email *" required/>
            <input className="m-input" type="tel" placeholder="Téléphone"/>
            <select className="m-input">
              <option value="">Discipline qui vous intéresse</option>
              <option>Brazilian Jiu-Jitsu</option>
              <option>Grappling</option>
              <option>Self-Défense</option>
              <option>Pas encore sûr(e)</option>
            </select>
            <textarea className="m-input m-textarea" placeholder="Message (optionnel)"/>
            <a href="mailto:sk.team.jjb@gmail.com?subject=Réservation essai gratuit SK TEAM JJB" className="m-submit" style={{textAlign:"center",display:"block"}}>
              Envoyer ma demande d’essai
            </a>
          </div>
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
      </div>
    </div>
  );
}



/* ══════════════════════════════════════
   COMPOSANT INSCRIPTION RAPIDE
══════════════════════════════════════ */
function InscriptionStrip() {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!nom.trim() || !tel.trim()) return;
    setSending(true);
    try {
      // Ouvre WhatsApp avec les infos pré-remplies
      const msg = encodeURIComponent(`Bonjour SK TEAM JJB ! Je souhaite réserver mon essai gratuit.%0ANom : ${nom}%0ATél : ${tel}`);
      window.open(`https://wa.me/33650054954?text=${msg}`, '_blank');
      setSent(true);
    } catch(e) {}
    setSending(false);
  };

  return (
    <div className="inscription-strip">
      <div className="inscription-inner">
        <div className="inscription-text">
          <h2>1ER COURS<br/>GRATUIT</h2>
          <p>Sans engagement · Clamart (92140)<br/>Adultes, Ados, Kids — tous niveaux</p>
        </div>
        {sent ? (
          <div className="inscription-success">
            ✓ Message envoyé — on vous recontacte rapidement !
          </div>
        ) : (
          <div className="inscription-form">
            <input className="inscription-input" placeholder="Votre prénom" value={nom} onChange={e => setNom(e.target.value)}/>
            <input className="inscription-input" placeholder="Votre téléphone" value={tel} onChange={e => setTel(e.target.value)} type="tel"/>
            <button className="inscription-btn" onClick={handleSubmit} disabled={sending}>
              {sending ? "Envoi..." : "Je réserve →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MODALE RÈGLEMENT DU CLUB
══════════════════════════════════════ */
function ModalReglement({ open, onClose }) {
  if (!open) return null;
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">RÈGLEMENT DU CLUB</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
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
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MODALE COMPÉTITEUR
══════════════════════════════════════ */
function ModalCompetiteur({ open, onClose, openContact }) {
  const [phase, setPhase] = useState(null);
  if (!open) return null;

  const phases = [
    {
      id:"p1", label:"Phase 1", title:"Fondamentaux & Volume", period:"Oct → Déc · 12 sem.", color:"rgba(192,57,43,.12)",
      desc:"Construction des bases techniques et du volume de travail. Priorité au drilling, à la précision et à la gestion du rythme.",
      seances:[
        {j:"Lun", t:"Technique", items:["Warmup 10min","Drill position dominante 4×5min","Sparring positionnel 3×6min","Cooldown"]},
        {j:"Mer", t:"Sparring", items:["Warmup 10min","Flow rolling 2×8min","Sparring intensif 5×5min","Debriefing technique"]},
        {j:"Sam", t:"Open Mat", items:["Sparring libre 60–90min","Travail des points faibles","Vidéo analyse optionnel"]},
      ],
      tags:["Drilling","Positionnement","Garde","Passage de garde","Étranglements de base"],
    },
    {
      id:"p2", label:"Phase 2", title:"Intensification", period:"Jan → Fév · 8 sem.", color:"rgba(192,57,43,.16)",
      desc:"Montée en intensité progressive. Introduction du sparring compétition avec partenaires de niveau. Travail des chaînes de soumissions.",
      seances:[
        {j:"Lun", t:"Technique + Drilling", items:["Warmup 10min","Séquence technique ciblée 3×8min","Sparring thématique 4×6min","Stretching"]},
        {j:"Mer", t:"Sparring intensif", items:["Warmup 10min","Sparring compétition 6×5min","1min récup entre rounds","Analyse post-sparring"]},
        {j:"Sam", t:"Compétition simulée", items:["Format compétition IBJJF","3 matchs simulés 7min","Arbitrage officiel","Debriefing vidéo"]},
      ],
      tags:["Chaînes de soumissions","Back take","Leg lock entries","Pressure passing","Guillotine"],
    },
    {
      id:"p3", label:"Phase 3", title:"Affûtage Pré-Compétition", period:"J-8 → J-1 · 2 sem.", color:"rgba(192,57,43,.08)",
      desc:"Réduction progressive du volume, maintien de l'intensité. Préservation du système nerveux et confiance maximale à J-1.",
      seances:[
        {j:"J-8 → J-5", t:"Réduction volume", items:["60% du volume habituel","Sparring léger flow","Révision des techniques signature","Récupération active"]},
        {j:"J-4 → J-2", t:"Maintien intensité", items:["2–3 rounds sparring vif max","Travail mental & visualisation","Nutrition & sommeil priorité","Pas de blessure = objectif 1"]},
        {j:"J-1", t:"Activation", items:["Légère activation 20min","Stretching dynamique","Visualisation du tournoi","Coucher tôt, repas contrôlé"]},
      ],
      tags:["Récupération","Visualisation","Poids de forme","Sommeil","Hydratation"],
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">PROGRAMME COMPÉTITEUR</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-tag">Performance & Compétition</div>
          <h2 className="m-h2">PROGRAMME<br/>COMPÉTITEUR</h2>
          <div className="m-divider"/>
          <p className="m-text">Un programme de périodisation sur mesure pour préparer les compétitions IBJJF, CFJJB et Grappling. Structuré en 3 phases progressives — volume, intensification, affûtage — pour arriver au pic de forme le jour J.</p>

          <div className="m-grid2" style={{marginBottom:24}}>
            {[{v:"3 phases",l:"Périodisation"},{v:"3×/sem.",l:"Fréquence idéale"},{v:"22 sem.",l:"Durée cycle"},{v:"IBJJF / CFJJB",l:"Référentiel"}].map(c => (
              <div key={c.l} className="m-cell"><div className="m-cell-val">{c.v}</div><div className="m-cell-lbl">{c.l}</div></div>
            ))}
          </div>

          {phases.map(p => (
            <div key={p.id} className="comp-phase">
              <div className="comp-phase-header" onClick={() => setPhase(phase===p.id ? null : p.id)} style={{background:phase===p.id?p.color:"var(--dark2)"}}>
                <div>
                  <div className="comp-phase-title">{p.label} — {p.title}</div>
                  <div className="comp-phase-sub">{p.period}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{transform:phase===p.id?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0}}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
              {phase === p.id && (
                <div className="comp-phase-body">
                  <p className="m-text" style={{marginBottom:16}}>{p.desc}</p>
                  <div className="pp-week">
                    {p.seances.map(s => (
                      <div key={s.j} className="pp-day">
                        <div className="pp-day-label">{s.j}</div>
                        <div className="pp-day-title">{s.t}</div>
                        <ul className="pp-day-items">{s.items.map(item => <li key={item}>{item}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                  <div className="m-tags">{p.tags.map(t => <span key={t} className="m-tag-pill">{t}</span>)}</div>
                </div>
              )}
            </div>
          ))}

          <div className="m-section">
            <div className="m-section-title">Suivi personnalisé</div>
            <p className="m-text">Ce programme est adapté individuellement lors d'un bilan initial. Karim analyse tes points forts, tes axes de progression et ton calendrier de compétitions pour calibrer chaque phase.</p>
            <div className="m-cta" style={{marginTop:16}}>
              <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>Demander un bilan gratuit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MODALE PRÉPARATION PHYSIQUE
══════════════════════════════════════ */
function ModalPrepPhysique({ open, onClose, openContact }) {
  const [tab, setTab] = useState("force");
  if (!open) return null;

  const programmes = {
    force: {
      label:"Force & Explosivité",
      intro:"Développer la force fonctionnelle et la puissance explosive spécifiques au BJJ. Accent sur les mouvements multi-articulaires et les chaînes postérieures.",
      semaine:[
        {j:"J1 – Lundi", t:"Force max", items:["Squat 4×5 (80%1RM)","Deadlift roumain 3×8","Développé couché 4×5","Rowing barre 4×6","Core : Planche 3×45s"]},
        {j:"J2 – Mercredi", t:"Explosivité", items:["Box jump 4×5","Medicine ball slam 4×8","Kettlebell swing 4×10","Push press 4×5","Battle rope 4×20s"]},
        {j:"J3 – Vendredi", t:"Gainage & Spécifique", items:["Pont lutteur 3×20","Hip escape avec résistance 3×10","Sprawl explosif 4×8","Dead bug 3×12","Farmer carry 3×30m"]},
      ],
      tags:["Squat","Deadlift","Explosivité","Puissance","Gainage"],
    },
    endurance: {
      label:"Endurance Spécifique BJJ",
      intro:"Développer la capacité aérobie et anaérobie spécifique aux efforts intermittents du BJJ. Résistance à la fatigue en fin de match.",
      semaine:[
        {j:"J1 – Lundi", t:"Intervalles courts", items:["Échauffement 10min","10×30s effort max / 30s récup","Sac de frappe ou shadowboxing","Récup active 5min","Étirements 10min"]},
        {j:"J2 – Jeudi", t:"Capacité aérobie", items:["Course continue 25–35min Z2","Corde à sauter 4×3min","Gainage cardio 15min","Récupération active"]},
        {j:"J3 – Samedi", t:"Simulation match", items:["Rounds BJJ 5×7min","1min 30s récup entre rounds","Fréquence cardiaque cible >85%","Debriefing fatigue"]},
      ],
      tags:["HIIT","Zone 2","VO2max","Intervalles","Endurance de force"],
    },
    mobilite: {
      label:"Mobilité & Récupération",
      intro:"Prévenir les blessures, améliorer l'amplitude articulaire et accélérer la récupération entre les séances. Essentiel pour la longévité sur le tatami.",
      semaine:[
        {j:"Quotidien – Matin", t:"Réveil articulaire (10min)", items:["Cercles épaules & hanches","Cat-cow 2×10","Hip 90/90 2×45s/côté","Thoracic rotation 2×10","Neck mobility léger"]},
        {j:"Post-entraînement", t:"Récupération (15min)", items:["Pigeon pose 2min/côté","Frog stretch 2min","Épaules au mur 90s","Hamstring passif 90s/côté","Respiration diaphragmatique"]},
        {j:"J repos – Dédié", t:"Séance mobilité complète", items:["Yoga BJJ 45min","Deep squat work","Spine mobility flow","Rotateurs hanches","Icing / cryothérapie si besoin"]},
      ],
      tags:["Hanches","Épaules","Colonne","Flexibilité","Récupération active"],
    },
    circuit: {
      label:"Circuit Training Tatami",
      intro:"Entraînement fonctionnel directement sur le tatami, sans matériel. Combine technique BJJ et conditionnement physique dans le même bloc.",
      semaine:[
        {j:"Circuit A – 4 tours", t:"Explosivité + Technique", items:["Sprawl 10×","Shoot double leg 8×","Hip escape 10×/côté","Sit-out 8×","Granby roll 5×/côté","Repos 90s entre tours"]},
        {j:"Circuit B – 3 tours", t:"Endurance Tatami", items:["Turtle recovery 3×30s","Ponte 15×","Shrimp 10×/côté","Technical stand-up 10×","Uchi-komi takedown 10×","Repos 2min entre tours"]},
        {j:"Circuit C – EMOM 15min", t:"EMOM Spécifique BJJ", items:["Min 1 : 10 sprawls","Min 2 : 15 hip escapes","Min 3 : 10 sit-outs","Répéter 5 cycles","Score : reps totales"]},
      ],
      tags:["Sprawl","Hip escape","No-gi","Tatami","Fonctionnel"],
    },
  };

  const prog = programmes[tab];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <span className="modal-close-title">PRÉPARATION PHYSIQUE</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">&times;</button>
        </div>
        <div className="modal-body">
          <div className="m-tag">Conditionnement & Performance</div>
          <h2 className="m-h2">PRÉPARATION<br/>PHYSIQUE</h2>
          <div className="m-divider"/>
          <p className="m-text">4 programmes complémentaires pour développer toutes les qualités physiques du combattant. Choisissez le programme adapté à votre objectif et à votre niveau.</p>

          <div className="pp-tabs">
            {Object.entries(programmes).map(([k, v]) => (
              <button key={k} className={"pp-tab"+(tab===k?" active":"")} onClick={() => setTab(k)}>
                {v.label.split(" ")[0]}
              </button>
            ))}
          </div>

          <div style={{padding:"14px 18px",background:"rgba(192,57,43,.07)",border:"1px solid rgba(192,57,43,.15)",marginBottom:20}}>
            <div style={{fontFamily:"var(--fd)",fontSize:18,color:"var(--white)",marginBottom:8}}>{prog.label}</div>
            <p style={{fontSize:13,color:"rgba(255,255,255,.55)",lineHeight:1.75}}>{prog.intro}</p>
          </div>

          <div className="m-section-title">Planning hebdomadaire</div>
          <div className="pp-week">
            {prog.semaine.map(s => (
              <div key={s.j} className="pp-day">
                <div className="pp-day-label">{s.j}</div>
                <div className="pp-day-title">{s.t}</div>
                <ul className="pp-day-items">{s.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="m-tags">{prog.tags.map(t => <span key={t} className="m-tag-pill">{t}</span>)}</div>

          <div className="m-section">
            <div className="m-section-title">Intégration avec l'entraînement BJJ</div>
            <p className="m-text">Ces programmes sont conçus pour s'intégrer au calendrier d'entraînement BJJ sans créer de surcharge. Karim peut élaborer un plan individualisé combinant technique et préparation physique selon vos disponibilités.</p>
            <div className="m-cta" style={{marginTop:16}}>
              <button className="btn-red" onClick={() => { onClose(); setTimeout(openContact, 200); }}>Demander un programme perso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   APP PRINCIPAL
══════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (menuOpen || modal) ? "hidden" : "";
  }, [menuOpen, modal]);

  // Fermer modal avec Escape
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  // SEO
  useEffect(() => {
    document.documentElement.lang = "fr";
    document.title = "SK TEAM JJB — Brazilian Jiu-Jitsu & Grappling à Clamart (92140)";
    const m = (n,c,p) => { const a=p?"property":"name"; let el=document.querySelector("meta["+a+"=\""+n+"\"]"); if(!el){el=document.createElement("meta");el.setAttribute(a,n);document.head.appendChild(el);} el.setAttribute("content",c); };
    m("description","SK TEAM JJB — Club de Brazilian Jiu-Jitsu, Grappling et Self-Défense à Clamart (92140). Ceinture noire 1er Dan IBJJF, affilié FFJDA & CFJJB. Cours adultes dès 15 ans. 1er cours d'essai gratuit.");
    m("keywords","Brazilian Jiu-Jitsu Clamart, BJJ 92140, Grappling Clamart, SK TEAM JJB, arts martiaux Clamart, self-défense Clamart, JJB Hauts-de-Seine, club JJB banlieue sud Paris, ceinture noire BJJ");
    m("robots","index, follow");
    m("og:type","website",true); m("og:title","SK TEAM JJB — BJJ Clamart",true);
    m("og:description","Club BJJ à Clamart. Essai gratuit !",true);
    m("og:url","https://sk-team-bjj.vercel.app",true);
    m("twitter:card","summary_large_image");
    let c=document.querySelector('link[rel="canonical"]');
    if(!c){c=document.createElement("link");c.rel="canonical";document.head.appendChild(c);}
    c.href="https://sk-team-bjj.vercel.app";
    // Preconnect Google Fonts
    ["https://fonts.googleapis.com","https://fonts.gstatic.com"].forEach(url => {
      if(!document.querySelector('link[href="'+url+'"]')){
        const l=document.createElement("link");l.rel="preconnect";l.href=url;
        if(url.includes("gstatic"))l.crossOrigin="anonymous";
        document.head.appendChild(l);
      }
    });
    let s=document.getElementById("schema-org");
    if(!s){s=document.createElement("script");s.id="schema-org";s.type="application/ld+json";document.head.appendChild(s);}
    s.textContent=JSON.stringify({"@context":"https://schema.org","@type":["SportsClub","LocalBusiness"],"name":"SK TEAM JJB","url":"https://sk-team-bjj.vercel.app","email":"sk.team.jjb@gmail.com","address":{"@type":"PostalAddress","streetAddress":"26 rue de Normandie","addressLocality":"Clamart","postalCode":"92140","addressCountry":"FR"},"geo":{"@type":"GeoCoordinates","latitude":48.7997,"longitude":2.2619},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":"Monday","opens":"19:30","closes":"20:30"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Wednesday","opens":"19:30","closes":"20:30"}],"founder":{"@type":"Person","name":"Karim Sadat","jobTitle":"Directeur Technique — Ceinture Noire 1er Dan IBJJF"},"sameAs":["https://www.instagram.com/skteamjjb"]});
  }, []);

  const MODALS = ["disciplines","coach","programme","horaires","club","contact"];
  // Nav principale (6 items max) + menu "Plus" pour le reste
  const NAV_ITEMS = [
    {id:"disciplines",  l:"Disciplines"},
    {id:"programme",    l:"Programme"},
    {id:"coach",        l:"Coach"},
    {id:"horaires",     l:"Horaires"},
    {id:"club",         l:"Le Club"},
  ];
  // Items cachés dans le menu "Plus"
  const NAV_MORE = [
    {id:"kids",         l:"Kids & Ados"},
    {id:"prive",        l:"Cours Privés"},
    {id:"competiteur",  l:"Compétiteur"},
    {id:"prepphysique", l:"Prépa Physique"},
    {id:"reglement",    l:"Règlement"},
  ];

  const open = id => setModal(id);
  const close = () => setModal(null);

  const CARDS = [
    {id:"disciplines",n:"01",icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",t:"Disciplines",d:"Brazilian Jiu-Jitsu — Grappling — Self-Défense. Trois arts martiaux complémentaires pour progresser à votre rythme."},
    {id:"coach",n:"02",icon:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z",t:"Le Coach",d:"Karim Sadat, ceinture noire 1er Dan IBJJF, 13 ans de pratique, 2 000+ heures d’enseignement. Immersions au Brésil (BJJ College) et aux USA — NY & Floride."},
    {id:"programme",n:"03",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2 M9 5a2 2 0 002 2h2a2 2 0 002-2 M9 5a2 2 0 012-2h2a2 2 0 012 2",t:"Programme",d:"34 séances structurées sur 3 mésocycles selon le référentiel SK TEAM BJJ. Adultes débutants 15+."},
    {id:"horaires",n:"04",icon:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2",t:"Horaires & Tarifs",d:"Lundi et Mercredi 19h30–20h30. Tarifs à partir de 150€/an. 1er cours d’essai gratuit."},
    {id:"club",n:"05",icon:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",t:"Le Club",d:"Association loi 1901, affiliée FFJDA & CFJJB, fondée à Clamart. Un cadre structuré et bienveillant pour tous les niveaux."},
    {id:"kids",n:"06",icon:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",t:"Kids & Ados",d:"BJJ pour les 6–17 ans. 3 groupes par âge : Mini (6-9), Junior (10-14), Ados (15-17). Développement, discipline et confiance en soi."},
    {id:"reglement",   n:"08", icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2 M9 5a2 2 0 002 2h2a2 2 0 002-2 M9 5a2 2 0 012-2h2a2 2 0 012 2 M12 12h.01 M12 16h.01", t:"Règlement", d:"Hygiène, tenues, respect, ponctualité, sécurité. Les règles qui s'appliquent à tous les membres du club."},
    {id:"competiteur",  n:"09", icon:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", t:"Programme Compétiteur", d:"Périodisation sur 3 phases : volume, intensification, affûtage pré-compétition. Pour les pratiquants IBJJF et CFJJB."},
    {id:"prepphysique", n:"10", icon:"M22 12h-4l-3 9L9 3l-3 9H2",                                                                          t:"Préparation Physique",   d:"4 programmes : Force & Explosivité, Endurance spécifique, Mobilité & Récupération, Circuit tatami. Pour performer et durer."},
    {id:"contact",      n:"11", icon:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z", t:"Essai Gratuit", d:"Premier cours gratuit, sans engagement. Venez découvrir le JJB à Clamart dans une ambiance technique et bienveillante."},
  ];

  return (
    <>
      <style>{CSS}</style>

      {/* MODALES */}
      <ModalReglement    open={modal==="reglement"}   onClose={close}/>
      <ModalCompetiteur  open={modal==="competiteur"}  onClose={close} openContact={() => open("contact")}/>
      <ModalPrepPhysique open={modal==="prepphysique"} onClose={close} openContact={() => open("contact")}/>
      <ModalPrive        open={modal==="prive"}        onClose={close} openContact={() => open("contact")}/>
      <ModalKids        open={modal==="kids"}        onClose={close} openContact={() => open("contact")}/>
      <ModalDisciplines open={modal==="disciplines"} onClose={close} openContact={() => open("contact")}/>
      <ModalCoach       open={modal==="coach"}       onClose={close}/>
      <ModalProgramme   open={modal==="programme"}   onClose={close}/>
      <ModalHoraires    open={modal==="horaires"}    onClose={close} openContact={() => open("contact")}/>
      <ModalClub        open={modal==="club"}        onClose={close}/>
      <ModalContact     open={modal==="contact"}     onClose={close}/>

      {/* NAV */}
      <nav className={"nav"+(scrolled?" scrolled":"")}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>
            <SKLogo size={44}/>
            <div><div className="nav-logo-name">SK TEAM JJB</div><div className="nav-logo-sub">Clamart · 92140</div></div>
          </div>
          <ul className="nav-links">
            {NAV_ITEMS.map(({id,l}) => (
              <li key={id}>
                <button className={"nav-btn"+(modal===id?" active":"")} onClick={() => open(id)}>{l}</button>
              </li>
            ))}
            <li>
              <div className={"nav-more-wrap"+(moreOpen?" open":"")} onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                <button className={"nav-btn"+(NAV_MORE.some(x=>x.id===modal)?" active":"")} onClick={() => setMoreOpen(o=>!o)}>
                  Plus ▾
                </button>
                <div className="nav-more-dropdown">
                  {NAV_MORE.map(({id,l}) => (
                    <button key={id} className={"nav-more-item"+(modal===id?" active":"")} onClick={() => { setMoreOpen(false); open(id); }}>{l}</button>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <button className="nav-cta" onClick={() => open("contact")}>Essai Gratuit</button>
          <button className="burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span style={menuOpen?{transform:"translateY(7px) rotate(45deg)"}:{}}/>
            <span style={menuOpen?{opacity:0}:{}}/>
            <span style={menuOpen?{transform:"translateY(-7px) rotate(-45deg)"}:{}}/>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={"mob-menu"+(menuOpen?" open":"")}>
        {[...NAV_ITEMS, ...NAV_MORE].map(({id,l}) => (
          <button key={id} className="mob-btn" onClick={() => { setMenuOpen(false); setTimeout(() => open(id), 100); }}>{l}</button>
        ))}
        <button className="mob-cta-btn" onClick={() => { setMenuOpen(false); setTimeout(() => open("contact"), 100); }}>Essai Gratuit</button>
      </div>

      {/* HERO */}
      <section id="hero" style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",overflow:"hidden"}}>
        <div className="hero-bg" style={{backgroundImage:`url(${IMG.hero})`}}/>
        <div className="hero-grad"/>
        <div className="hero-content">
          <div className="hero-eyebrow">Clamart · Hauts-de-Seine · 92140</div>
          <h1 className="hero-h1">
            <em>BRAZILIAN</em>
            JIU-JITSU
          </h1>
          <p className="hero-desc">Club associatif affilié FFJDA & CFJJB, fondé à Clamart. Adultes débutants et compétiteurs — encadrés par un ceinture noire 1<sup>er</sup> Dan IBJJF.</p>
          <div className="hero-actions">
            <button className="btn-red" onClick={() => open("contact")}>Essai Gratuit</button>
            <button className="btn-ghost-white" onClick={() => open("programme")}>Voir le programme</button>
          </div>
        </div>
        <div className="stats-bar">
          {[["13+","Ans de pratique"],["2 000+","Heures enseignées"],["34","Séances/saison"],["1er Dan","Ceinture Noire IBJJF"]].map(([n,l]) => (
            <div className="stat" key={l}><div className="stat-n">{n}</div><div className="stat-l">{l}</div></div>
          ))}
        </div>
      </section>


      {/* TESTIMONIALS */}
      <div className="testi-bar">
        <div className="testi-inner">
          {[
            {t:"“Karim a fait une immersions au Brésil chez Melqui Galvão. Sa pédagogie est claire, progressive et exigeante.”", n:"Thomas R.", d:"Ceinture bleue · Élève depuis 6 mois"},
            {t:"“Ambiance familiale, technique solide. Karim s’adapte à chaque niveau. Le meilleur club BJJ de Clamart.”", n:"Mehdi L.", d:"Élève depuis 1 an"},
            {t:"“J’ai commencé à zéro. En 6 mois j’ai progressé plus vite qu’en 2 ans dans ma salle précédente.”", n:"Sébastien M.", d:"Débutant · Saison 2025"},
          ].map(item => (
            <div key={item.n} className="testi-item">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-text">{item.t}</div>
              <div className="testi-header">
                <div className="testi-avatar">{item.n[0]}</div>
                <div><div className="testi-name">{item.n}</div><div className="testi-detail">{item.d}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION INSCRIPTION RAPIDE */}
      <InscriptionStrip />

      {/* CARDS GRID */}
      <section className="home-section">
        <div className="home-section-inner">
          <div className="home-section-tag">Tout le club</div>
          <h2 className="home-section-title">EXPLOREZ<br/>SK TEAM JJB</h2>
          <div className="cards-grid">
            {CARDS.map(c => (
              <button key={c.id} className="card" onClick={() => open(c.id)} aria-label={"Ouvrir "+c.t}>
                <div className="card-n">{c.n}</div>
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon}/></svg>
                </div>
                <div className="card-title">{c.t}</div>
                <p className="card-desc">{c.d}</p>
                <div className="card-arrow">Voir →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DIAPORAMA IMMERSION */}
      <section style={{background:"var(--dark)",borderTop:"1px solid var(--border)",padding:"60px 0"}}>
        <div className="home-section-inner">
          <div className="home-section-tag">Immersion Brésil</div>
          <h2 className="home-section-title" style={{marginBottom:0}}>IMMERSION<br/>BRÉSIL</h2>
          <HomeSlider photos={GALLERY_PHOTOS}/>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="about-strip">
        <div className="about-inner">
          <div className="about-left">
            <div className="tag">Votre coach</div>
            <h2>KARIM<br/>SADAT</h2>
            <p>Ceinture noire 1er Dan IBJJF, CQP MAM, 13+ ans de pratique, 2 000+ heures d’enseignement. Compétiteur IBJJF European Championships. Immersion au Brésil (BJJ College — Melqui Galvão) et au BJJ College by Melqui Galvão, Jundiaí.</p>
            <button className="btn-red" onClick={() => open("coach")}>Découvrir le coach</button>
            <div className="about-stats" style={{marginTop:36}}>
              {[["13+","Ans de pratique"],["2 000+","Heures enseignées"],["100+","Adultes formés"],["60+","Jeunes encadrés"]].map(([n,l]) => (
                <div key={l} className="about-stat"><div className="about-stat-n">{n}</div><div className="about-stat-l">{l}</div></div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <img className="about-photo" src={coachPhoto} alt="Karim Sadat — Coach BJJ SK TEAM JJB Clamart" loading="lazy"/>
            <div className="about-badge">
              <div className="about-badge-title">Immersion Brésil</div>
              <div className="about-badge-sub">BJJ College — Jundiaí, São Paulo</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-strip-bg" style={{backgroundImage:`url(${IMG.cta})`}}/>
        <div className="cta-strip-ov"/>
        <div className="cta-strip-top"/>
        <div className="cta-strip-inner">
          <div>
            <h2 className="cta-strip-h2">PRÊT À<br/>COMMENCER ?</h2>
            <p className="cta-strip-sub">Premier cours d’essai gratuit, sans engagement. Venez découvrir le JJB à Clamart dans une ambiance technique et bienveillante.</p>
          </div>
          <button className="btn-white" onClick={() => open("contact")}>Réserver mon essai</button>
        </div>
      </section>

      {/* BOUTON WHATSAPP FLOTTANT */}
      <div className="wa-wrap">
        <a className="wa-btn" href="https://wa.me/33650054954?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20SK%20TEAM%20JJB%20%E2%80%94%20essai%20gratuit" target="_blank" rel="noopener noreferrer" aria-label="Contacter SK TEAM JJB sur WhatsApp">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        <div className="wa-tooltip">WhatsApp</div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-logo"><SKLogo size={36}/><span className="footer-logo-name">SK TEAM JJB</span></div>
              <p className="footer-tagline">Brazilian Jiu-Jitsu, Grappling & Self-Défense à Clamart (92140). Association loi 1901, affiliée FFJDA & CFJJB.</p>
              <div className="footer-affil">{["FFJDA","CFJJB","IBJJF","FFL","Loi 1901"].map(b => <span key={b} className="footer-badge">{b}</span>)}</div>
            </div>
            <div>
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-links">
                {NAV_ITEMS.map(({id,l}) => <li key={id}><button onClick={() => open(id)}>{l}</button></li>)}
                <li><button onClick={() => open("contact")}>Essai gratuit</button></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="mailto:sk.team.jjb@gmail.com">sk.team.jjb@gmail.com</a></li>
                <li className="plain">Clamart · 92140</li>
                <li className="plain">Hauts-de-Seine</li>
                <li style={{marginTop:14}}><a href="https://www.instagram.com/skteamjjb" target="_blank" rel="noopener noreferrer">Instagram @skteamjjb</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025–2026 SK TEAM JJB — Association loi 1901 · Clamart (92140)</p>
            <p className="footer-copy">Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </>
  );
}
