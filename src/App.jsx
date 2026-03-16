import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   COULEURS FRANCE JUDO (officielles)
   Bleu marine  : #003189
   Bleu ciel    : #009FE3
   Blanc        : #FFFFFF
   Rouge        : #E5001A
   Noir         : #111111
───────────────────────────────────────────── */

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&family=Montserrat+Alternates:wght@700;800;900&display=swap');

  :root {
    --navy:  #C0392B;
    --sky:   #E74C3C;
    --red:   #C0392B;
    --red2:  #E74C3C;
    --white: #1A1A1A;
    --black: #F7F5F2;
    --dark:  #EFEFED;
    --dark2: #FFFFFF;
    --dark3: #F0EEeb;
    --border:#DCDAD7;
    --border2:#C8C5C0;
    --grey:  #888480;
    --grey2: #AAAAAA;
    --fd: 'Montserrat Alternates', sans-serif;
    --fc: 'Montserrat', sans-serif;
    --fb: 'Montserrat', sans-serif;
  }

  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { background:var(--black); color:var(--white); font-family:var(--fb); overflow-x:hidden; line-height:1.6; }
  a { color:inherit; text-decoration:none; }

  /* ── grain ── */
  body::before {
    content:''; position:fixed; inset:0; z-index:999; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity:.015;
  }

  /* ── scrollbar ── */
  ::-webkit-scrollbar { width:5px; }
  ::-webkit-scrollbar-track { background:#EFEFED; }
  ::-webkit-scrollbar-thumb { background:#C0392B; border-radius:3px; }
  ::-webkit-scrollbar-thumb:hover { background:#E74C3C; }

  /* ── NAV ── */
  .nav {
    position:fixed; top:0; left:0; right:0; z-index:500;
    transition:background .4s, border-color .4s;
  }
  .nav.scrolled {
    background:rgba(247,245,242,.97);
    border-bottom:1px solid var(--border);
    backdrop-filter:blur(24px);
  }
  .nav-inner {
    max-width:1180px; margin:0 auto;
    display:flex; align-items:center; justify-content:space-between;
    height:76px; padding:0 28px;
  }
  .nav-logo { display:flex; align-items:center; gap:14px; cursor:pointer; }
  .nav-logo-title { font-family:var(--fd); font-size:18px; font-weight:800; letter-spacing:2px; color:var(--white); line-height:1; }
  .nav-logo-sub { font-size:9px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:var(--red); margin-top:2px; }
  .nav-links { display:flex; align-items:center; gap:36px; list-style:none; }
  .nav-links a { font-size:11px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:var(--grey); transition:color .2s; }
  .nav-links a:hover { color:var(--red); }
  .nav-cta {
    background:var(--red); color:#fff;
    padding:11px 24px; border-radius:6px; border:none; cursor:pointer;
    font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase;
    transition:background .2s, transform .15s, box-shadow .2s;
  }
  .nav-cta:hover { background:#A93226; transform:translateY(-1px); box-shadow:0 6px 24px rgba(192,57,43,.3); }
  .burger {
    display:none; flex-direction:column; gap:5px; padding:10px;
    background:none; border:none; cursor:pointer;
  }
  .burger span { display:block; width:22px; height:2px; background:var(--white); transition:.3s; border-radius:1px; }

  /* ── MOBILE MENU ── */
  .mob-menu {
    display:none; position:fixed; inset:0; z-index:490;
    background:var(--black); padding-top:76px;
    flex-direction:column; align-items:center; justify-content:center; gap:28px;
  }
  .mob-menu.open { display:flex; }
  .mob-menu a { font-family:var(--fd); font-size:36px; font-weight:800; letter-spacing:2px; color:var(--white); transition:color .2s; }
  .mob-menu a:hover { color:var(--red); }
  .mob-cta {
    background:var(--red); padding:14px 44px; border-radius:8px;
    font-family:var(--fd); font-size:28px; color:#fff !important;
  }

  /* ── HERO ── */
  .hero {
    position:relative; min-height:100vh;
    display:flex; align-items:center; overflow:hidden;
  }
  .hero-bg {
    position:absolute; inset:0;
    background:
      radial-gradient(ellipse 65% 55% at 72% 42%, rgba(192,57,43,.07) 0%, transparent 65%),
      radial-gradient(ellipse 55% 65% at 15% 82%, rgba(192,57,43,.04) 0%, transparent 60%),
      var(--black);
  }
  .hero-bg::after {
    content:''; position:absolute; inset:0;
    background-image:
      linear-gradient(rgba(192,57,43,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(192,57,43,.04) 1px, transparent 1px);
    background-size:70px 70px;
  }
  .hero-content {
    position:relative; z-index:2;
    max-width:1180px; margin:0 auto; padding:140px 28px 110px;
    display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;
  }
  .hero-eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:28px; }
  .hero-eyebrow-line { width:36px; height:2px; background:var(--red); }
  .hero-eyebrow-text { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--red); }
  .hero-title { font-family:var(--fd); font-size:clamp(60px,8vw,115px); line-height:.9; letter-spacing:1px; margin-bottom:10px; font-weight:900; }
  .hero-title .r { color:var(--red); display:block; }
  .hero-title .b { color:#C0392B; display:block; }
  .hero-subtitle { font-family:var(--fc); font-size:clamp(12px,1.6vw,18px); font-weight:700; letter-spacing:6px; text-transform:uppercase; color:var(--grey); margin-bottom:36px; }
  .hero-desc { font-size:14.5px; line-height:1.9; color:rgba(26,26,26,.55); max-width:440px; margin-bottom:44px; }
  .hero-actions { display:flex; align-items:center; gap:24px; flex-wrap:wrap; }

  .btn-primary {
    background:var(--red); color:#fff;
    padding:16px 38px; border-radius:8px; border:none; cursor:pointer;
    font-family:var(--fc); font-size:13px; font-weight:700; letter-spacing:2px; text-transform:uppercase;
    transition:background .2s, transform .15s, box-shadow .2s; display:inline-block;
  }
  .btn-primary:hover { background:#A93226; transform:translateY(-2px); box-shadow:0 10px 32px rgba(192,57,43,.3); }
  .btn-ghost {
    color:var(--white); padding:16px 0; background:none; border:none; border-bottom:1px solid rgba(26,26,26,.25);
    font-family:var(--fc); font-size:13px; font-weight:700; letter-spacing:2px; text-transform:uppercase; cursor:pointer;
    transition:border-color .2s, color .2s;
  }
  .btn-ghost:hover { border-color:var(--red); color:var(--red); }

  /* Hero logo */
  .hero-right { display:flex; justify-content:center; align-items:center; }
  .logo-ring { position:relative; }
  .logo-ring::before {
    content:''; position:absolute; inset:-50px;
    background:radial-gradient(circle, rgba(192,57,43,.08) 0%, transparent 68%);
    border-radius:50%; animation:glow-pulse 3.5s ease-in-out infinite;
  }
  .logo-ring::after {
    content:''; position:absolute; inset:-8px; border-radius:50%;
    border:1px solid rgba(192,57,43,.2);
    animation:ring-spin 22s linear infinite;
  }
  .hero-logo { position:relative; z-index:1; filter:drop-shadow(0 4px 24px rgba(192,57,43,.12)); }
  @keyframes glow-pulse { 0%,100%{transform:scale(1);opacity:.8;} 50%{transform:scale(1.08);opacity:1;} }
  @keyframes ring-spin  { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }

  /* Stats bar */
  .hero-stats { position:absolute; bottom:0; left:0; right:0; display:flex; border-top:1px solid var(--border); background:rgba(247,245,242,.95); backdrop-filter:blur(20px); }
  .stat { flex:1; padding:22px 24px; border-right:1px solid var(--border); text-align:center; transition:background .3s; background:rgba(247,245,242,.95); backdrop-filter:blur(20px); }
  .stat:hover { background:rgba(192,57,43,.06); }
  .stat:last-child { border-right:none; }
  .stat-val { font-family:var(--fd); font-size:clamp(24px,3vw,36px); font-weight:900; letter-spacing:1px; color:var(--red); line-height:1; }
  .stat-lbl { font-family:var(--fc); font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--grey); margin-top:6px; }

  /* ── SECTIONS ── */
  section { padding:110px 0; }
  .container { max-width:1180px; margin:0 auto; padding:0 28px; }
  .section-hd { margin-bottom:64px; }
  .tag {
    display:inline-flex; align-items:center; gap:8px;
    font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:3px; text-transform:uppercase;
    color:var(--red); border:1px solid rgba(192,57,43,.25); padding:5px 14px; border-radius:20px; margin-bottom:20px;
  }
  .tag::before { content:''; width:4px; height:4px; border-radius:50%; background:var(--red); }
  .section-title { font-family:var(--fd); font-size:clamp(44px,5.5vw,76px); font-weight:900; letter-spacing:1px; line-height:.9; }
  .section-title .r  { color:var(--red); }
  .section-title .b  { color:var(--red); }
  .section-title .nv { color:#333; }
  .section-sub { font-size:14.5px; color:rgba(26,26,26,.55); max-width:480px; margin-top:20px; line-height:1.85; }

  /* ── DISCIPLINES ── */
  #disciplines { background:var(--dark); border-top:1px solid var(--border); }
  .discs { display:grid; grid-template-columns:repeat(3,1fr); background:var(--border); border:1px solid var(--border); border-radius:12px; overflow:hidden; gap:1px; }
  .disc {
    background:var(--dark2); padding:52px 40px; position:relative; overflow:hidden;
    transition:background .35s;
  }
  .disc:hover { background:#FDF9F8; }
  .disc::before {
    content:''; position:absolute; top:0; left:0; right:0; height:3px;
    background:linear-gradient(90deg, var(--red), #E74C3C);
    transform:scaleX(0); transform-origin:left; transition:transform .45s cubic-bezier(.4,0,.2,1);
  }
  .disc:hover::before { transform:scaleX(1); }
  .disc-ghost { position:absolute; top:12px; right:16px; font-family:var(--fd); font-size:96px; letter-spacing:-3px; color:rgba(192,57,43,.05); line-height:1; pointer-events:none; font-weight:900; }
  .disc-icon {
    width:52px; height:52px; border-radius:12px;
    background:rgba(192,57,43,.08); border:1px solid rgba(192,57,43,.15);
    display:flex; align-items:center; justify-content:center; margin-bottom:28px;
    transition:background .3s, border-color .3s;
  }
  .disc:hover .disc-icon { background:rgba(192,57,43,.15); border-color:rgba(192,57,43,.35); }
  .disc-title { font-family:var(--fd); font-size:26px; font-weight:800; letter-spacing:0px; margin-bottom:14px; }
  .disc-desc { font-size:13.5px; line-height:1.8; color:rgba(26,26,26,.55); }
  .disc-tags { display:flex; flex-wrap:wrap; gap:7px; margin-top:24px; }
  .disc-tag { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; padding:4px 10px; border-radius:20px; background:rgba(192,57,43,.08); color:var(--red); border:1px solid rgba(192,57,43,.2); }

  /* ── COACH ── */
  #coach { background:var(--black); position:relative; overflow:hidden; }
  #coach::before { content:''; position:absolute; top:-300px; right:-300px; width:700px; height:700px; border-radius:50%; background:radial-gradient(circle,rgba(192,57,43,.06) 0%,transparent 70%); pointer-events:none; }
  .coach-layout { display:grid; grid-template-columns:320px 1fr; gap:80px; align-items:start; }
  .coach-portrait { background:var(--dark2); border:1px solid var(--border); border-radius:12px; overflow:hidden; aspect-ratio:3/4; display:flex; align-items:center; justify-content:center; position:relative; }
  .coach-ph { width:100%; height:100%; background:linear-gradient(145deg,var(--dark2),var(--dark3)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; position:relative; }
  .coach-ph::before { content:'SK'; font-family:var(--fd); font-size:200px; font-weight:900; letter-spacing:4px; color:rgba(192,57,43,.06); position:absolute; line-height:1; }
  .coach-ph svg, .coach-ph span { position:relative; z-index:1; }
  .coach-ph span { font-family:var(--fc); font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--grey2); font-weight:700; }
  .belt-strip { position:absolute; bottom:0; left:0; right:0; padding:18px 20px; background:linear-gradient(transparent,rgba(247,245,242,.95)); }
  .belt-bar { height:16px; border-radius:2px; overflow:hidden; display:flex; gap:3px; }
  .coach-name { font-family:var(--fd); font-size:clamp(44px,5.5vw,72px); font-weight:900; letter-spacing:1px; line-height:.88; margin-bottom:22px; }
  .coach-name .fn { color:var(--grey); font-size:.5em; display:block; letter-spacing:4px; margin-bottom:4px; }
  .coach-role-row { display:flex; align-items:center; gap:14px; margin-bottom:40px; }
  .role-bar { width:30px; height:3px; background:var(--red); border-radius:2px; flex-shrink:0; }
  .role-txt { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--red); }
  .coach-bio { font-size:14.5px; line-height:1.95; color:rgba(26,26,26,.55); margin-bottom:48px; }
  .creds { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  .cred { padding:20px; border:1px solid var(--border); border-radius:10px; background:var(--dark2); transition:border-color .25s, background .25s, box-shadow .25s; }
  .cred:hover { border-color:rgba(192,57,43,.3); background:var(--dark3); box-shadow:0 4px 20px rgba(192,57,43,.08); }
  .cred-icon { color:var(--red); margin-bottom:10px; }
  .cred-val { font-family:var(--fd); font-size:20px; font-weight:800; letter-spacing:0px; color:var(--white); margin-bottom:3px; line-height:1; }
  .cred-lbl { font-family:var(--fc); font-size:11px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:var(--grey); }
  .cred.full { grid-column:1/-1; }

  /* ── PROGRAMME ── */
  #programme { background:var(--dark); border-top:1px solid var(--border); }
  .prog-intro { display:grid; grid-template-columns:1.3fr 1fr; gap:80px; align-items:start; margin-bottom:72px; }
  .prog-aside { padding:32px; border:1px solid var(--border); border-radius:12px; background:var(--dark3); position:relative; overflow:hidden; }
  .prog-aside::before { content:'AOJ'; position:absolute; right:-16px; bottom:-28px; font-family:var(--fd); font-size:110px; font-weight:900; letter-spacing:2px; color:rgba(192,57,43,.06); line-height:1; pointer-events:none; }
  .prog-aside-title { font-family:var(--fd); font-size:20px; font-weight:800; letter-spacing:1px; color:var(--red); margin-bottom:20px; }
  .prog-list { list-style:none; }
  .prog-list li { padding:11px 0; border-bottom:1px solid var(--border); font-size:13px; color:rgba(26,26,26,.65); display:flex; align-items:center; gap:12px; }
  .prog-list li:last-child { border-bottom:none; }
  .prog-list li::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--red); flex-shrink:0; }
  .mesobars { display:grid; grid-template-columns:repeat(3,1fr); border:1px solid var(--border); border-radius:12px; overflow:hidden; background:var(--border); gap:1px; }
  .meso { background:var(--dark2); padding:40px 32px; position:relative; overflow:hidden; }
  .meso-num { font-family:var(--fd); font-size:70px; font-weight:900; letter-spacing:-2px; line-height:1; color:rgba(192,57,43,.12); margin-bottom:10px; }
  .meso-period { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--grey); margin-bottom:8px; }
  .meso-title { font-family:var(--fd); font-size:22px; font-weight:800; letter-spacing:0px; color:var(--white); margin-bottom:14px; }
  .meso-desc { font-size:13px; line-height:1.75; color:rgba(26,26,26,.5); }
  .meso-techs { margin-top:20px; display:flex; flex-wrap:wrap; gap:6px; }
  .meso-tech { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; padding:4px 9px; border-radius:20px; background:rgba(192,57,43,.08); color:var(--red); border:1px solid rgba(192,57,43,.2); }

  /* ── INFOS ── */
  #infos { background:var(--black); }
  .infos-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; }
  .info-title { font-family:var(--fd); font-size:24px; font-weight:800; letter-spacing:1px; margin-bottom:28px; padding-bottom:16px; border-bottom:2px solid var(--border); }
  .info-title .b { color:var(--red); }
  .sch-row { display:flex; justify-content:space-between; align-items:center; padding:16px 0; border-bottom:1px solid var(--border); }
  .sch-row:last-child { border-bottom:none; }
  .sch-day { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--grey); }
  .sch-time { font-family:var(--fd); font-size:22px; font-weight:800; letter-spacing:0px; text-align:right; line-height:1; }
  .sch-cat { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--red); margin-top:4px; text-align:right; }
  .lieu-row { display:flex; align-items:flex-start; gap:16px; padding:18px 0; border-bottom:1px solid var(--border); }
  .lieu-row:last-child { border-bottom:none; }
  .lieu-icon { width:38px; height:38px; border-radius:10px; flex-shrink:0; background:rgba(192,57,43,.08); border:1px solid rgba(192,57,43,.15); display:flex; align-items:center; justify-content:center; color:var(--red); }
  .lieu-lbl { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--grey); margin-bottom:4px; }
  .lieu-val { font-size:15px; font-weight:500; }
  .tarif-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-top:4px; }
  .tarif { padding:26px 22px; border:1px solid var(--border); border-radius:12px; background:var(--dark2); transition:border-color .25s, transform .25s, box-shadow .25s; }
  .tarif:hover { border-color:var(--border2); transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,.06); }
  .tarif.featured { border-color:rgba(192,57,43,.3); background:rgba(192,57,43,.04); }
  .tarif.featured:hover { border-color:var(--red); }
  .tarif-price { font-family:var(--fd); font-size:46px; font-weight:900; letter-spacing:-1px; line-height:1; }
  .tarif-price sup { font-size:.38em; vertical-align:super; color:var(--grey); }
  .tarif-price .per { font-size:.28em; color:var(--grey); letter-spacing:1px; }
  .tarif-lbl { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--grey); margin-top:8px; margin-bottom:16px; }
  .tarif-items { list-style:none; }
  .tarif-items li { font-size:12.5px; color:rgba(26,26,26,.6); padding:5px 0; display:flex; align-items:center; gap:9px; }
  .tarif-items li::before { content:'✓'; color:var(--red); font-weight:900; font-size:11px; }
  .essai-box { margin-top:20px; padding:20px 22px; border:2px dashed rgba(192,57,43,.3); border-radius:12px; background:rgba(192,57,43,.04); }
  .essai-title { font-family:var(--fd); font-size:18px; font-weight:800; color:var(--red); margin-bottom:8px; }
  .essai-desc { font-size:13px; color:rgba(26,26,26,.65); line-height:1.7; }

  /* ── ASSOCIATION ── */
  #association { background:var(--dark); border-top:1px solid var(--border); }
  .assoc-layout { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
  .assoc-badges { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:36px; }
  .assoc-badge { padding:24px 20px; border:1px solid var(--border); border-radius:12px; background:var(--dark2); text-align:center; transition:border-color .25s, transform .25s, box-shadow .25s; }
  .assoc-badge:hover { border-color:rgba(192,57,43,.3); transform:translateY(-3px); box-shadow:0 8px 24px rgba(192,57,43,.08); }
  .assoc-badge-icon { font-size:26px; margin-bottom:10px; }
  .assoc-badge-title { font-family:var(--fd); font-size:16px; font-weight:800; letter-spacing:0px; margin-bottom:4px; }
  .assoc-badge-sub { font-family:var(--fc); font-size:11px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:var(--grey); }
  .bureau-box { padding:36px; border:1px solid var(--border); border-radius:12px; background:var(--dark2); }
  .bureau-hd { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--grey); margin-bottom:6px; }
  .bureau-club { font-family:var(--fd); font-size:36px; font-weight:900; letter-spacing:1px; line-height:1; margin-bottom:28px; }
  .bureau-obj-lbl { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--red); margin-bottom:12px; }
  .bureau-obj { font-size:13px; line-height:1.85; color:rgba(26,26,26,.55); margin-bottom:28px; }
  .bureau-section { font-family:var(--fd); font-size:20px; font-weight:800; letter-spacing:0px; color:var(--red); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--border); }
  .bureau-row { display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid var(--border); }
  .bureau-row:last-child { border-bottom:none; }
  .bureau-name { font-size:14.5px; font-weight:600; }
  .bureau-role { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--grey); }

  /* ── CTA ── */
  #cta { background:var(--red); padding:88px 0; position:relative; overflow:hidden; }
  #cta::before { content:'SK'; position:absolute; right:-80px; top:50%; transform:translateY(-50%); font-family:var(--fd); font-size:400px; font-weight:900; letter-spacing:-10px; color:rgba(0,0,0,.08); line-height:1; pointer-events:none; }
  #cta::after  { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, rgba(255,255,255,.4), rgba(255,255,255,.1), rgba(255,255,255,.4)); }
  .cta-inner { display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
  .cta-title { font-family:var(--fd); font-size:clamp(44px,5.5vw,76px); font-weight:900; letter-spacing:1px; color:#fff; line-height:.9; }
  .cta-sub { font-size:15px; color:rgba(255,255,255,.8); margin-top:16px; max-width:480px; line-height:1.75; }
  .btn-white { background:#fff; color:var(--red); padding:19px 46px; border-radius:10px; border:none; cursor:pointer; font-family:var(--fc); font-size:13px; font-weight:800; letter-spacing:2px; text-transform:uppercase; transition:transform .2s, box-shadow .2s; white-space:nowrap; display:inline-block; }
  .btn-white:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(0,0,0,.2); }

  /* ── FOOTER ── */
  #footer { background:var(--white); border-top:1px solid var(--border); padding:64px 0 36px; color:#fff; }
  .footer-grid { display:grid; grid-template-columns:1.6fr 1fr 1fr; gap:60px; padding-bottom:48px; border-bottom:1px solid rgba(255,255,255,.1); margin-bottom:32px; }
  .footer-logo { display:flex; align-items:center; gap:14px; margin-bottom:20px; }
  .footer-logo-text { font-family:var(--fd); font-size:20px; font-weight:800; letter-spacing:2px; }
  .footer-tagline { font-size:13px; line-height:1.8; color:rgba(255,255,255,.45); max-width:280px; }
  .footer-affil { margin-top:20px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
  .affil-badge { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; padding:4px 10px; border:1px solid rgba(255,255,255,.2); border-radius:20px; color:rgba(255,255,255,.5); }
  .footer-col-title { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#fff; margin-bottom:20px; }
  .footer-links { list-style:none; }
  .footer-links li { margin-bottom:10px; }
  .footer-links a { font-size:13px; color:rgba(255,255,255,.45); transition:color .2s; }
  .footer-links a:hover { color:#fff; }
  .footer-links li.plain { font-size:13px; color:rgba(255,255,255,.45); }
  .footer-bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; }
  .footer-copy, .footer-legal { font-family:var(--fc); font-size:11px; font-weight:500; letter-spacing:1.5px; color:rgba(255,255,255,.25); }

  /* ── REVEAL ── */
  .reveal { opacity:0; transform:translateY(28px); transition:opacity .75s cubic-bezier(.4,0,.2,1), transform .75s cubic-bezier(.4,0,.2,1); }
  .reveal.d1 { transition-delay:.1s; }
  .reveal.d2 { transition-delay:.2s; }
  .reveal.d3 { transition-delay:.3s; }
  .reveal.visible { opacity:1; transform:translateY(0); }

  /* ── RESPONSIVE ── */
  @media(max-width:1060px){
    .hero-content { grid-template-columns:1fr; }
    .hero-right { display:none; }
    .coach-layout { grid-template-columns:1fr; gap:40px; }
    .coach-portrait { display:none; }
    .prog-intro { grid-template-columns:1fr; gap:40px; }
    .mesobars { grid-template-columns:1fr; }
    .assoc-layout { grid-template-columns:1fr; gap:48px; }
    .footer-grid { grid-template-columns:1fr 1fr; }
  }
  @media(max-width:768px){
    section { padding:80px 0; }
    .discs { grid-template-columns:1fr; background:transparent; border:none; gap:12px; }
    .disc { border:1px solid var(--border); border-radius:12px; }
    .disc::before { display:none; }
    .infos-grid { grid-template-columns:1fr; gap:48px; }
    .tarif-grid { grid-template-columns:1fr; }
    .assoc-badges { grid-template-columns:1fr 1fr; }
    .nav-links, .nav-cta { display:none; }
    .burger { display:flex; }
    .hero-stats { flex-wrap:wrap; }
    .stat { border-bottom:1px solid var(--border); border-right:none; min-width:50%; }
    .stat:nth-child(odd) { border-right:1px solid var(--border); }
    .footer-grid { grid-template-columns:1fr; gap:40px; }
    .cta-inner { flex-direction:column; align-items:flex-start; }
  }
  @media(max-width:480px){
    .container { padding:0 20px; }
    .nav-inner { padding:0 20px; }
    .creds { grid-template-columns:1fr; }
    .cred.full { grid-column:1; }
    .assoc-badges { grid-template-columns:1fr; }
    .stat { min-width:100%; border-right:none; }
  }
`;

const SK_LOGO_B64 = "data:image/png;base64,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0Ucsn82tWwWjsSsBDrtqE5w8Y6W17fxOkP8Auq4SIK7452QNLLcWvuk99vTvwmz1YijP0RNa4frKUsU0l00xbhdY8JstPKz2Zn0wmmHwkk4nfvW7IgAADYDYBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=";

/* ─── Logo image ─── */
function SKLogo({ size = 320 }) {
  return (
    <img src={SK_LOGO_B64} width={size} height={size} alt="SK TEAM JJB Logo" style={{display:"block",objectFit:"contain"}} />
  );
}

/* ─── useReveal hook ─── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Icons ─── */
const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMob = () => { setMenuOpen(false); document.body.style.overflow = ""; };
  const openMob  = () => { setMenuOpen(true);  document.body.style.overflow = "hidden"; };

  const scrollTo = (id) => { closeMob(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <style>{CSS}</style>

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollTo("hero")}>
            <SKLogo size={44} id="nav" />
            <div>
              <div className="nav-logo-title">SK TEAM JJB</div>
              <div className="nav-logo-sub">Clamart · 92140</div>
            </div>
          </div>
          <ul className="nav-links">
            {["disciplines","coach","programme","infos","association"].map(id => (
              <li key={id}><a href={`#${id}`}>{id === "infos" ? "Horaires" : id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
            ))}
          </ul>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>Nous rejoindre</button>
          <button className="burger" aria-label="Menu" onClick={menuOpen ? closeMob : openMob}>
            <span style={menuOpen ? {transform:"translateY(7px) rotate(45deg)"} : {}} />
            <span style={menuOpen ? {opacity:0, transform:"scaleX(0)"} : {}} />
            <span style={menuOpen ? {transform:"translateY(-7px) rotate(-45deg)"} : {}} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu ${menuOpen ? "open" : ""}`}>
        {["disciplines","coach","programme","infos","association"].map(id => (
          <a key={id} href={`#${id}`} onClick={closeMob}>
            {id === "infos" ? "Horaires" : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="#contact" className="mob-cta" onClick={closeMob}>Rejoindre</a>
      </div>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div>
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Clamart · Hauts-de-Seine · 92140</span>
            </div>
            <h1 className="hero-title">
              <span className="r">BRAZILIAN</span>
              <span className="b">JIU-JITSU</span>
            </h1>
            <p className="hero-subtitle">SK TEAM · Saison 2025–2026</p>
            <p className="hero-desc">
              Club associatif affilié FFJDA, fondé à Clamart. Adultes débutants et compétiteurs —
              formez-vous auprès d'un ceinture noire 1<sup>er</sup> Dan IBJJF dans une ambiance bienveillante et exigeante.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>Essai gratuit</button>
              <button className="btn-ghost"   onClick={() => scrollTo("programme")}>Voir le programme →</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="logo-ring">
              <div className="hero-logo">
                <SKLogo size={340} id="hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          {[
            { val: "13+",    lbl: "Ans de pratique" },
            { val: "2 000+", lbl: "Heures enseignées" },
            { val: "34",     lbl: "Séances / saison" },
            { val: "1er Dan",lbl: "Ceinture Noire IBJJF" },
          ].map(s => (
            <div className="stat" key={s.lbl}>
              <div className="stat-val">{s.val}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section id="disciplines">
        <div className="container">
          <div className="section-hd reveal">
            <div className="tag">Ce qu'on pratique</div>
            <h2 className="section-title">NOS<br /><span className="b">DISCIPLINES</span></h2>
            <p className="section-sub">Trois arts martiaux complémentaires pour développer technique, condition physique et confiance en soi.</p>
          </div>
          <div className="discs">
            {[
              { n:"01", title:"Brazilian Jiu-Jitsu", desc:"L'art du sol. Maîtriser les positions, les passages de garde et les soumissions. Programme structuré selon le référentiel AOJ Foundational, avec suivi individuel de progression pour chaque pratiquant.", tags:["Kimono","No-Gi","Compétition","Loisir"], icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
              { n:"02", title:"Grappling", desc:"Combat sans kimono. Techniques de lutte, étranglements et clés articulaires adaptées au No-Gi. Affilié FFL — coach certifié Ceinture Noire Grappling. Base idéale pour la compétition et le MMA.", tags:["No-Gi","FFL","MMA Base"], icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" },
              { n:"03", title:"Self-Défense", desc:"Techniques pratiques et réalistes basées sur le JJB et le Grappling. Conforme aux standards AFGSU2 — pédagogie progressive adaptée à tous les niveaux avec approche réaliste et situationnelle.", tags:["AFGSU2","Tous niveaux","Pratique"], icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
            ].map((d, i) => (
              <div className={`disc reveal d${i}`} key={d.n}>
                <div className="disc-ghost">{d.n}</div>
                <div className="disc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#009FE3" strokeWidth="2"><path d={d.icon}/></svg>
                </div>
                <h3 className="disc-title">{d.title}</h3>
                <p className="disc-desc">{d.desc}</p>
                <div className="disc-tags">{d.tags.map(t => <span key={t} className="disc-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COACH ── */}
      <section id="coach">
        <div className="container">
          <div className="coach-layout">
            <div className="reveal">
              <div className="coach-portrait">
                <div className="coach-ph">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1E2840" strokeWidth="1"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>Photo à venir</span>
                </div>
                <div className="belt-strip">
                  <div className="belt-bar">
                    <div style={{background:"#111",flex:6,borderRadius:2}} />
                    <div style={{background:"#E5001A",flex:1,borderRadius:2}} />
                    <div style={{background:"rgba(255,255,255,.1)",flex:1,borderRadius:2}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal d1">
              <div className="tag">Votre coach</div>
              <h2 className="coach-name"><span className="fn">KARIM</span>SADAT</h2>
              <div className="coach-role-row">
                <div className="role-bar" />
                <span className="role-txt">Directeur Technique · SK TEAM JJB</span>
              </div>
              <p className="coach-bio">
                Pratiquant de Brazilian Jiu-Jitsu depuis plus de 13 ans, Karim Sadat cumule plus de
                2 000 heures d'enseignement au sein de structures reconnues (Z Team Boulogne-Billancourt,
                La Connexion Nanterre). Compétiteur au niveau national et international — Championnats de
                France, IBJJF European Championships — il met son expertise au service des pratiquants de
                Clamart dans le cadre du club SK TEAM JJB.
                <br /><br />
                Titulaire du CQP Moniteur Arts Martiaux (spécialité JJB) et arbitre en formation auprès de
                la FFJDA, Karim apporte une pédagogie rigoureuse, bienveillante et structurée, alignée sur
                les standards internationaux AOJ.
              </p>
              <div className="creds">
                {[
                  { val:"CN 1er Dan", lbl:"IBJJF / CFJJB" },
                  { val:"CN Grappling", lbl:"FFL" },
                  { val:"CQP MAM", lbl:"Moniteur Arts Martiaux · JJB" },
                  { val:"AFGSU2 · CAF", lbl:"FFJDA" },
                ].map(c => (
                  <div className="cred" key={c.val}>
                    <div className="cred-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                    </div>
                    <div className="cred-val">{c.val}</div>
                    <div className="cred-lbl">{c.lbl}</div>
                  </div>
                ))}
                <div className="cred full">
                  <div className="cred-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                  </div>
                  <div className="cred-val">2 000+ heures · 13+ ans</div>
                  <div className="cred-lbl">Enseignement et pratique compétitive internationale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section id="programme">
        <div className="container">
          <div className="prog-intro">
            <div>
              <div className="tag">Structure pédagogique</div>
              <h2 className="section-title reveal">LE<br /><span className="b">PROGRAMME</span></h2>
              <p className="section-sub reveal d1">
                Saison complète d'octobre à juin (34 semaines, 2 séances/semaine). Structuré en 3 mésocycles
                progressifs selon le référentiel AOJ Foundational, adapté à des adultes débutants à
                intermédiaires en séances d'1h.
              </p>
            </div>
            <div className="prog-aside reveal d2">
              <div className="prog-aside-title">Programme AOJ Foundational</div>
              <ul className="prog-list">
                {["Public : Adultes débutants (15+)","Effectif : ~12 pratiquants max","Durée séance : 1h00","Fréquence : 2 séances / semaine","Saison : Octobre → Juin","Suivi individuel de progression","Attestation de fin de saison"].map(l => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>
          <div className="mesobars reveal">
            {[
              { n:"01", period:"Octobre → Janvier · 10 semaines", title:"Fondamentaux", desc:"Bases posturales, positionnement, gestion de la distance et premiers mouvements au sol. Intégration progressive dans un environnement sécurisé.", techs:["Posture","Guard Closed","Armbar","Guillotine","Hip Escape","Bridge"] },
              { n:"02", period:"Février → Mars · 12 semaines", title:"Développement Technique", desc:"Passages de garde, contrôle latéral et premières soumissions en situation. Travail des enchaînements et sparring directionnel progressif.", techs:["Toreando Pass","Leg Drag","Side Control","Key Lock","Mount","Back Take","Double Leg"] },
              { n:"03", period:"Avril → Juin · 12 semaines", title:"Consolidation & Sparring", desc:"Révisions intensives, sparring thématique progressif et évaluation finale. Développer l'autonomie tactique et l'aisance en situation réelle.", techs:["Drills intensifs","Sparring positionnel","Sparring libre","Évaluation","Attestations"] },
            ].map(m => (
              <div className="meso" key={m.n}>
                <div className="meso-num">{m.n}</div>
                <div className="meso-period">{m.period}</div>
                <h3 className="meso-title">{m.title}</h3>
                <p className="meso-desc">{m.desc}</p>
                <div className="meso-techs">{m.techs.map(t => <span key={t} className="meso-tech">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFOS ── */}
      <section id="infos">
        <div className="container">
          <div className="section-hd reveal" style={{marginBottom:56}}>
            <div className="tag">Informations pratiques</div>
            <h2 className="section-title">HORAIRES &amp;<br /><span className="b">TARIFS</span></h2>
          </div>
          <div className="infos-grid">
            <div>
              <div className="reveal">
                <div className="info-title">Horaires <span className="b">·</span> 2025–2026</div>
                {[
                  { day:"Lundi",    time:"19h30 – 20h30", cat:"JJB Adultes Débutants" },
                  { day:"Mercredi", time:"19h30 – 20h30", cat:"JJB / Grappling" },
                  { day:"Samedi",   time:"À confirmer",    cat:"Open Mat" },
                ].map(s => (
                  <div className="sch-row" key={s.day}>
                    <span className="sch-day">{s.day}</span>
                    <div><div className="sch-time">{s.time}</div><div className="sch-cat">{s.cat}</div></div>
                  </div>
                ))}
              </div>
              <div className="reveal" style={{marginTop:52}}>
                <div className="info-title">Lieu <span className="b">·</span> Clamart</div>
                <div className="lieu-row">
                  <div className="lieu-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="lieu-lbl">Adresse</div>
                    <div className="lieu-val">Clamart · 92140, Hauts-de-Seine<br /><span style={{color:"var(--grey)",fontSize:12,fontFamily:"var(--fc)",letterSpacing:"1.5px",fontWeight:700,textTransform:"uppercase"}}>Salle communiquée à l'inscription</span></div>
                  </div>
                </div>
                <div className="lieu-row">
                  <div className="lieu-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="lieu-lbl">Email</div>
                    <div className="lieu-val"><a href="mailto:contact@skteamjjb.fr">contact@skteamjjb.fr</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div id="contact">
              <div className="reveal d1">
                <div className="info-title">Tarifs <span className="b">·</span> 2026–2027</div>

                {/* Essai */}
                <div className="essai-box" style={{marginBottom:20}}>
                  <div className="essai-title">🎯 Essai gratuit ou Pack découverte</div>
                  <div className="essai-desc">
                    <strong>1 séance offerte</strong> — sans engagement, sans inscription.<br />
                    Ou <strong>Pack Découverte 6 séances · 60€</strong> — montant déduit de la cotisation si vous vous inscrivez.
                  </div>
                </div>

                <div className="tarif-grid">
                  <div className="tarif">
                    <div className="tarif-price"><sup>€</sup>200<span className="per">/an</span></div>
                    <div className="tarif-lbl">Enfants · 6–17 ans</div>
                    <ul className="tarif-items">
                      <li>Licence FFJDA incluse</li>
                      <li>Programme AOJ adapté</li>
                      <li>Suivi progression</li>
                    </ul>
                  </div>
                  <div className="tarif featured">
                    <div className="tarif-price"><sup>€</sup>300<span className="per">/an</span></div>
                    <div className="tarif-lbl">Adultes · 18 ans +</div>
                    <ul className="tarif-items">
                      <li>Accès illimité</li>
                      <li>Licence FFJDA incluse</li>
                      <li>Programme AOJ complet</li>
                      <li>Option compétition</li>
                    </ul>
                  </div>
                  <div className="tarif">
                    <div className="tarif-price"><sup>€</sup>450<span className="per">/an</span></div>
                    <div className="tarif-lbl">Famille</div>
                    <ul className="tarif-items">
                      <li>1 adulte + 1 enfant</li>
                      <li>Licences FFJDA incluses</li>
                      <li>Accès illimité</li>
                      <li>Pass'Sport · CAF · ANCV</li>
                    </ul>
                  </div>
                </div>

                <p style={{fontSize:12,color:"var(--grey)",marginTop:18,lineHeight:1.75}}>
                  * Tarifs votés en AG du 05 mars 2026. Réductions disponibles : Pass'Sport (−50€), Pass 92, QPV −30 à −50%, aides CAF & ANCV.
                </p>
                <div style={{marginTop:32}}>
                  <a href="mailto:contact@skteamjjb.fr?subject=Réservation essai gratuit SK TEAM JJB" className="btn-primary">
                    Réserver mon essai gratuit →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSOCIATION ── */}
      <section id="association">
        <div className="container">
          <div className="assoc-layout">
            <div className="reveal">
              <div className="tag">Loi 1901</div>
              <h2 className="section-title">LE<br /><span className="b">CLUB</span></h2>
              <p className="section-sub" style={{maxWidth:"100%"}}>
                SK TEAM JJB est une association déclarée loi 1901, affiliée à la Fédération Française de
                Judo-Jujitsu, Disciplines Associées et Assimilées (FFJDA) et au Comité Départemental Judo 92.
                Basée à Clamart, elle offre un cadre structuré, sécurisé et progressif pour tous les niveaux.
              </p>
              <div className="assoc-badges">
                {[
                  { icon:"🥋", title:"FFJDA",     sub:"Affilié" },
                  { icon:"🏆", title:"IBJJF",     sub:"Certifié" },
                  { icon:"🛡️", title:"Loi 1901",  sub:"Association déclarée" },
                  { icon:"📍", title:"Clamart 92", sub:"Hauts-de-Seine" },
                ].map(b => (
                  <div className="assoc-badge" key={b.title}>
                    <div className="assoc-badge-icon">{b.icon}</div>
                    <div className="assoc-badge-title">{b.title}</div>
                    <div className="assoc-badge-sub">{b.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal d1">
              <div className="bureau-box">
                <div className="bureau-hd">Association</div>
                <div className="bureau-club">SK TEAM JJB</div>
                <div className="bureau-obj-lbl">Objet social</div>
                <p className="bureau-obj">
                  Promouvoir et développer la pratique du Brazilian Jiu-Jitsu, du Grappling et de la
                  Self-Défense sur la commune de Clamart et ses environs, dans un cadre associatif,
                  éducatif et sportif.
                </p>
                <div className="bureau-section">Bureau</div>
                {[
                  { name:"Belkacem SADAT", role:"Président & Trésorier" },
                  { name:"Amar SADAT",     role:"Secrétaire" },
                  { name:"Karim SADAT",    role:"Directeur Technique" },
                ].map(b => (
                  <div className="bureau-row" key={b.name}>
                    <span className="bureau-name">{b.name}</span>
                    <span className="bureau-role">{b.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 className="cta-title">PRÊT À<br />COMMENCER ?</h2>
              <p className="cta-sub">Premier cours d'essai gratuit, sans engagement. Venez découvrir le JJB dans une ambiance technique et bienveillante à Clamart.</p>
            </div>
            <a href="mailto:contact@skteamjjb.fr?subject=Réservation essai gratuit SK TEAM JJB" className="btn-white">
              Réserver mon essai
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <SKLogo size={36} id="footer" />
                <span className="footer-logo-text">SK TEAM JJB</span>
              </div>
              <p className="footer-tagline">Brazilian Jiu-Jitsu, Grappling & Self-Défense à Clamart (92140). Association loi 1901, affiliée FFJDA.</p>
              <div className="footer-affil">
                {["FFJDA","IBJJF","FFL","Loi 1901"].map(b => <span key={b} className="affil-badge">{b}</span>)}
              </div>
            </div>
            <div>
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-links">
                {[["disciplines","Disciplines"],["coach","Le Coach"],["programme","Programme"],["infos","Horaires & Tarifs"],["association","Le Club"]].map(([id,label]) => (
                  <li key={id}><a href={`#${id}`}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="mailto:contact@skteamjjb.fr">contact@skteamjjb.fr</a></li>
                <li className="plain">Clamart · 92140</li>
                <li className="plain">Hauts-de-Seine</li>
                <li style={{marginTop:18}}><a href="mailto:contact@skteamjjb.fr?subject=Essai gratuit SK TEAM JJB">→ Essai gratuit</a></li>
                <li><a href="mailto:contact@skteamjjb.fr">→ Renseignements</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025–2026 SK TEAM JJB — Association loi 1901 · Clamart (92140)</p>
            <p className="footer-legal">Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </>
  );
}
