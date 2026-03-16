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
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,900;1,700&family=Barlow:wght@300;400;500;600&display=swap');

  :root {
    --navy:  #003189;
    --sky:   #009FE3;
    --red:   #E5001A;
    --red2:  #FF1A32;
    --white: #F4F2EF;
    --black: #080C10;
    --dark:  #0D1320;
    --dark2: #131A2A;
    --dark3: #192034;
    --border:#1E2840;
    --border2:#263258;
    --grey:  #6A7A9B;
    --grey2: #3A4A6A;
    --fd: 'Bebas Neue', sans-serif;
    --fc: 'Barlow Condensed', sans-serif;
    --fb: 'Barlow', sans-serif;
  }

  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { background:var(--black); color:var(--white); font-family:var(--fb); overflow-x:hidden; line-height:1.6; }
  a { color:inherit; text-decoration:none; }

  /* ── grain ── */
  body::before {
    content:''; position:fixed; inset:0; z-index:999; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity:.02;
  }

  /* ── scrollbar ── */
  ::-webkit-scrollbar { width:5px; }
  ::-webkit-scrollbar-track { background:var(--black); }
  ::-webkit-scrollbar-thumb { background:var(--navy); border-radius:3px; }
  ::-webkit-scrollbar-thumb:hover { background:var(--sky); }

  /* ── NAV ── */
  .nav {
    position:fixed; top:0; left:0; right:0; z-index:500;
    transition:background .4s, border-color .4s;
  }
  .nav.scrolled {
    background:rgba(8,12,16,.96);
    border-bottom:1px solid var(--border);
    backdrop-filter:blur(24px);
  }
  .nav-inner {
    max-width:1180px; margin:0 auto;
    display:flex; align-items:center; justify-content:space-between;
    height:76px; padding:0 28px;
  }
  .nav-logo { display:flex; align-items:center; gap:14px; cursor:pointer; }
  .nav-logo-title { font-family:var(--fd); font-size:20px; letter-spacing:3px; color:var(--white); line-height:1; }
  .nav-logo-sub { font-size:9px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:var(--sky); margin-top:2px; }
  .nav-links { display:flex; align-items:center; gap:36px; list-style:none; }
  .nav-links a { font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--grey); transition:color .2s; }
  .nav-links a:hover { color:var(--sky); }
  .nav-cta {
    background:var(--navy); color:#fff;
    padding:11px 24px; border-radius:2px; border:none; cursor:pointer;
    font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase;
    transition:background .2s, transform .15s, box-shadow .2s;
  }
  .nav-cta:hover { background:var(--sky); transform:translateY(-1px); box-shadow:0 6px 24px rgba(0,159,227,.35); }
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
  .mob-menu a { font-family:var(--fd); font-size:44px; letter-spacing:3px; color:var(--white); transition:color .2s; }
  .mob-menu a:hover { color:var(--sky); }
  .mob-cta {
    background:var(--navy); padding:14px 44px; border-radius:2px;
    font-family:var(--fd); font-size:36px; color:#fff !important;
  }

  /* ── HERO ── */
  .hero {
    position:relative; min-height:100vh;
    display:flex; align-items:center; overflow:hidden;
  }
  .hero-bg {
    position:absolute; inset:0;
    background:
      radial-gradient(ellipse 65% 55% at 72% 42%, rgba(0,49,137,.22) 0%, transparent 65%),
      radial-gradient(ellipse 55% 65% at 15% 82%, rgba(0,159,227,.08) 0%, transparent 60%),
      var(--black);
  }
  .hero-bg::after {
    content:''; position:absolute; inset:0;
    background-image:
      linear-gradient(rgba(0,49,137,.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,49,137,.06) 1px, transparent 1px);
    background-size:70px 70px;
  }
  .hero-content {
    position:relative; z-index:2;
    max-width:1180px; margin:0 auto; padding:140px 28px 110px;
    display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;
  }
  .hero-eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:28px; }
  .hero-eyebrow-line { width:36px; height:2px; background:var(--sky); }
  .hero-eyebrow-text { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:var(--sky); }
  .hero-title { font-family:var(--fd); font-size:clamp(70px,9vw,130px); line-height:.88; letter-spacing:2px; margin-bottom:10px; }
  .hero-title .r { color:var(--red); display:block; }
  .hero-title .b { color:var(--sky); display:block; }
  .hero-subtitle { font-family:var(--fc); font-size:clamp(13px,1.8vw,20px); font-weight:600; letter-spacing:8px; text-transform:uppercase; color:var(--grey); margin-bottom:36px; }
  .hero-desc { font-size:14.5px; line-height:1.9; color:rgba(244,242,239,.5); max-width:440px; margin-bottom:44px; }
  .hero-actions { display:flex; align-items:center; gap:24px; flex-wrap:wrap; }

  .btn-primary {
    background:var(--navy); color:#fff;
    padding:16px 38px; border-radius:2px; border:none; cursor:pointer;
    font-family:var(--fc); font-size:13px; font-weight:700; letter-spacing:3px; text-transform:uppercase;
    transition:background .2s, transform .15s, box-shadow .2s; display:inline-block;
  }
  .btn-primary:hover { background:var(--sky); transform:translateY(-2px); box-shadow:0 10px 32px rgba(0,159,227,.4); }
  .btn-ghost {
    color:var(--white); padding:16px 0; background:none; border:none; border-bottom:1px solid rgba(244,242,239,.2);
    font-family:var(--fc); font-size:13px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; cursor:pointer;
    transition:border-color .2s, color .2s;
  }
  .btn-ghost:hover { border-color:var(--sky); color:var(--sky); }

  /* Hero logo */
  .hero-right { display:flex; justify-content:center; align-items:center; }
  .logo-ring { position:relative; }
  .logo-ring::before {
    content:''; position:absolute; inset:-50px;
    background:radial-gradient(circle, rgba(0,49,137,.22) 0%, transparent 68%);
    border-radius:50%; animation:glow-pulse 3.5s ease-in-out infinite;
  }
  .logo-ring::after {
    content:''; position:absolute; inset:-8px; border-radius:50%;
    border:1px solid rgba(0,159,227,.2);
    animation:ring-spin 22s linear infinite;
  }
  .hero-logo { position:relative; z-index:1; filter:drop-shadow(0 0 40px rgba(0,49,137,.35)); }
  @keyframes glow-pulse { 0%,100%{transform:scale(1);opacity:.8;} 50%{transform:scale(1.08);opacity:1;} }
  @keyframes ring-spin  { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }

  /* Stats bar */
  .hero-stats { position:absolute; bottom:0; left:0; right:0; display:flex; border-top:1px solid var(--border); background:rgba(8,12,16,.92); backdrop-filter:blur(20px); }
  .stat { flex:1; padding:22px 24px; border-right:1px solid var(--border); text-align:center; transition:background .3s; }
  .stat:hover { background:rgba(0,49,137,.1); }
  .stat:last-child { border-right:none; }
  .stat-val { font-family:var(--fd); font-size:clamp(26px,3.5vw,40px); letter-spacing:1px; color:var(--sky); line-height:1; }
  .stat-lbl { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--grey); margin-top:6px; }

  /* ── SECTIONS ── */
  section { padding:110px 0; }
  .container { max-width:1180px; margin:0 auto; padding:0 28px; }
  .section-hd { margin-bottom:64px; }
  .tag {
    display:inline-flex; align-items:center; gap:8px;
    font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:3.5px; text-transform:uppercase;
    color:var(--sky); border:1px solid rgba(0,159,227,.3); padding:5px 14px; border-radius:2px; margin-bottom:20px;
  }
  .tag::before { content:''; width:4px; height:4px; border-radius:50%; background:var(--sky); }
  .section-title { font-family:var(--fd); font-size:clamp(52px,6.5vw,86px); letter-spacing:2px; line-height:.9; }
  .section-title .r  { color:var(--red); }
  .section-title .b  { color:var(--sky); }
  .section-title .nv { color:var(--navy); }
  .section-sub { font-size:14.5px; color:rgba(244,242,239,.5); max-width:480px; margin-top:20px; line-height:1.85; }

  /* ── DISCIPLINES ── */
  #disciplines { background:var(--dark); border-top:1px solid var(--border); }
  .discs { display:grid; grid-template-columns:repeat(3,1fr); background:var(--border); border:1px solid var(--border); border-radius:3px; overflow:hidden; gap:1px; }
  .disc {
    background:var(--dark2); padding:52px 40px; position:relative; overflow:hidden;
    transition:background .35s;
  }
  .disc:hover { background:var(--dark3); }
  .disc::before {
    content:''; position:absolute; top:0; left:0; right:0; height:3px;
    background:linear-gradient(90deg, var(--navy), var(--sky));
    transform:scaleX(0); transform-origin:left; transition:transform .45s cubic-bezier(.4,0,.2,1);
  }
  .disc:hover::before { transform:scaleX(1); }
  .disc-ghost { position:absolute; top:12px; right:16px; font-family:var(--fd); font-size:96px; letter-spacing:-3px; color:rgba(0,49,137,.08); line-height:1; pointer-events:none; }
  .disc-icon {
    width:52px; height:52px; border-radius:50%;
    background:rgba(0,159,227,.08); border:1px solid rgba(0,159,227,.2);
    display:flex; align-items:center; justify-content:center; margin-bottom:28px;
    transition:background .3s, border-color .3s;
  }
  .disc:hover .disc-icon { background:rgba(0,159,227,.18); border-color:rgba(0,159,227,.45); }
  .disc-title { font-family:var(--fd); font-size:30px; letter-spacing:1px; margin-bottom:14px; }
  .disc-desc { font-size:13.5px; line-height:1.8; color:rgba(244,242,239,.5); }
  .disc-tags { display:flex; flex-wrap:wrap; gap:7px; margin-top:24px; }
  .disc-tag { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; padding:4px 10px; border-radius:2px; background:rgba(0,49,137,.15); color:var(--sky); border:1px solid rgba(0,159,227,.2); }

  /* ── COACH ── */
  #coach { background:var(--black); position:relative; overflow:hidden; }
  #coach::before { content:''; position:absolute; top:-300px; right:-300px; width:700px; height:700px; border-radius:50%; background:radial-gradient(circle,rgba(0,49,137,.1) 0%,transparent 70%); pointer-events:none; }
  .coach-layout { display:grid; grid-template-columns:320px 1fr; gap:80px; align-items:start; }
  .coach-portrait { background:var(--dark2); border:1px solid var(--border); border-radius:3px; overflow:hidden; aspect-ratio:3/4; display:flex; align-items:center; justify-content:center; position:relative; }
  .coach-ph { width:100%; height:100%; background:linear-gradient(145deg,var(--dark2),var(--dark3)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; position:relative; }
  .coach-ph::before { content:'SK'; font-family:var(--fd); font-size:200px; letter-spacing:4px; color:rgba(0,49,137,.12); position:absolute; line-height:1; }
  .coach-ph svg, .coach-ph span { position:relative; z-index:1; }
  .coach-ph span { font-family:var(--fc); font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--grey2); font-weight:700; }
  .belt-strip { position:absolute; bottom:0; left:0; right:0; padding:18px 20px; background:linear-gradient(transparent,rgba(0,0,0,.95)); }
  .belt-bar { height:16px; border-radius:2px; overflow:hidden; display:flex; gap:3px; }
  .coach-name { font-family:var(--fd); font-size:clamp(52px,6vw,82px); letter-spacing:2px; line-height:.88; margin-bottom:22px; }
  .coach-name .fn { color:var(--grey); font-size:.5em; display:block; letter-spacing:6px; margin-bottom:4px; }
  .coach-role-row { display:flex; align-items:center; gap:14px; margin-bottom:40px; }
  .role-bar { width:30px; height:3px; background:var(--sky); border-radius:2px; flex-shrink:0; }
  .role-txt { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--sky); }
  .coach-bio { font-size:14.5px; line-height:1.95; color:rgba(244,242,239,.55); margin-bottom:48px; }
  .creds { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  .cred { padding:20px; border:1px solid var(--border); border-radius:3px; background:var(--dark2); transition:border-color .25s, background .25s; }
  .cred:hover { border-color:rgba(0,159,227,.4); background:var(--dark3); }
  .cred-icon { color:var(--sky); margin-bottom:10px; }
  .cred-val { font-family:var(--fd); font-size:20px; letter-spacing:1px; color:var(--white); margin-bottom:3px; line-height:1; }
  .cred-lbl { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--grey); }
  .cred.full { grid-column:1/-1; }

  /* ── PROGRAMME ── */
  #programme { background:var(--dark); border-top:1px solid var(--border); }
  .prog-intro { display:grid; grid-template-columns:1.3fr 1fr; gap:80px; align-items:start; margin-bottom:72px; }
  .prog-aside { padding:32px; border:1px solid var(--border); border-radius:3px; background:var(--dark3); position:relative; overflow:hidden; }
  .prog-aside::before { content:'AOJ'; position:absolute; right:-16px; bottom:-28px; font-family:var(--fd); font-size:110px; letter-spacing:2px; color:rgba(0,49,137,.1); line-height:1; pointer-events:none; }
  .prog-aside-title { font-family:var(--fd); font-size:20px; letter-spacing:2px; color:var(--sky); margin-bottom:20px; }
  .prog-list { list-style:none; }
  .prog-list li { padding:11px 0; border-bottom:1px solid var(--border); font-size:13px; color:rgba(244,242,239,.65); display:flex; align-items:center; gap:12px; }
  .prog-list li:last-child { border-bottom:none; }
  .prog-list li::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--sky); flex-shrink:0; }
  .mesobars { display:grid; grid-template-columns:repeat(3,1fr); border:1px solid var(--border); border-radius:3px; overflow:hidden; background:var(--border); gap:1px; }
  .meso { background:var(--dark2); padding:40px 32px; position:relative; overflow:hidden; }
  .meso-num { font-family:var(--fd); font-size:70px; letter-spacing:-2px; line-height:1; color:rgba(0,49,137,.25); margin-bottom:10px; }
  .meso-period { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--grey); margin-bottom:8px; }
  .meso-title { font-family:var(--fd); font-size:24px; letter-spacing:1px; color:var(--white); margin-bottom:14px; }
  .meso-desc { font-size:13px; line-height:1.75; color:rgba(244,242,239,.45); }
  .meso-techs { margin-top:20px; display:flex; flex-wrap:wrap; gap:6px; }
  .meso-tech { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; padding:4px 9px; border-radius:2px; background:rgba(0,49,137,.12); color:rgba(0,159,227,.7); border:1px solid var(--border2); }

  /* ── INFOS ── */
  #infos { background:var(--black); }
  .infos-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; }
  .info-title { font-family:var(--fd); font-size:26px; letter-spacing:2px; margin-bottom:28px; padding-bottom:16px; border-bottom:1px solid var(--border); }
  .info-title .b { color:var(--sky); }
  .sch-row { display:flex; justify-content:space-between; align-items:center; padding:16px 0; border-bottom:1px solid var(--border); }
  .sch-row:last-child { border-bottom:none; }
  .sch-day { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:var(--grey); }
  .sch-time { font-family:var(--fd); font-size:22px; letter-spacing:1px; text-align:right; line-height:1; }
  .sch-cat { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--sky); margin-top:4px; text-align:right; }
  .lieu-row { display:flex; align-items:flex-start; gap:16px; padding:18px 0; border-bottom:1px solid var(--border); }
  .lieu-row:last-child { border-bottom:none; }
  .lieu-icon { width:38px; height:38px; border-radius:50%; flex-shrink:0; background:rgba(0,49,137,.12); border:1px solid rgba(0,159,227,.2); display:flex; align-items:center; justify-content:center; color:var(--sky); }
  .lieu-lbl { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--grey); margin-bottom:4px; }
  .lieu-val { font-size:15px; font-weight:500; }
  .tarif-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:4px; }
  .tarif { padding:26px 22px; border:1px solid var(--border); border-radius:3px; background:var(--dark2); transition:border-color .25s, transform .25s; }
  .tarif:hover { border-color:var(--border2); transform:translateY(-3px); }
  .tarif.featured { border-color:var(--navy); background:rgba(0,49,137,.08); }
  .tarif.featured:hover { border-color:var(--sky); }
  .tarif-price { font-family:var(--fd); font-size:50px; letter-spacing:-1px; line-height:1; }
  .tarif-price sup { font-size:.38em; vertical-align:super; color:var(--grey); }
  .tarif-price .per { font-size:.28em; color:var(--grey); letter-spacing:1px; }
  .tarif-lbl { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--grey); margin-top:8px; margin-bottom:16px; }
  .tarif-items { list-style:none; }
  .tarif-items li { font-size:12.5px; color:rgba(244,242,239,.55); padding:5px 0; display:flex; align-items:center; gap:9px; }
  .tarif-items li::before { content:'✓'; color:var(--sky); font-weight:900; font-size:11px; }

  /* ── ASSOCIATION ── */
  #association { background:var(--dark); border-top:1px solid var(--border); }
  .assoc-layout { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
  .assoc-badges { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:36px; }
  .assoc-badge { padding:24px 20px; border:1px solid var(--border); border-radius:3px; background:var(--dark2); text-align:center; transition:border-color .25s, transform .25s; }
  .assoc-badge:hover { border-color:rgba(0,159,227,.35); transform:translateY(-3px); }
  .assoc-badge-icon { font-size:26px; margin-bottom:10px; }
  .assoc-badge-title { font-family:var(--fd); font-size:16px; letter-spacing:1px; margin-bottom:4px; }
  .assoc-badge-sub { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--grey); }
  .bureau-box { padding:36px; border:1px solid var(--border); border-radius:3px; background:var(--dark2); }
  .bureau-hd { font-family:var(--fd); font-size:15px; letter-spacing:3px; text-transform:uppercase; color:var(--grey); margin-bottom:6px; }
  .bureau-club { font-family:var(--fd); font-size:38px; letter-spacing:2px; line-height:1; margin-bottom:28px; }
  .bureau-obj-lbl { font-family:var(--fc); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--sky); margin-bottom:12px; }
  .bureau-obj { font-size:13px; line-height:1.85; color:rgba(244,242,239,.5); margin-bottom:28px; }
  .bureau-section { font-family:var(--fd); font-size:22px; letter-spacing:1.5px; color:var(--sky); margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--border); }
  .bureau-row { display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid var(--border); }
  .bureau-row:last-child { border-bottom:none; }
  .bureau-name { font-size:14.5px; font-weight:500; }
  .bureau-role { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:var(--grey); }

  /* ── CTA ── */
  #cta { background:var(--navy); padding:88px 0; position:relative; overflow:hidden; }
  #cta::before { content:'SK'; position:absolute; right:-80px; top:50%; transform:translateY(-50%); font-family:var(--fd); font-size:400px; letter-spacing:-10px; color:rgba(0,0,0,.12); line-height:1; pointer-events:none; }
  #cta::after  { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg, var(--sky), var(--navy), var(--red)); }
  .cta-inner { display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap; }
  .cta-title { font-family:var(--fd); font-size:clamp(44px,5.5vw,76px); letter-spacing:2px; color:#fff; line-height:.9; }
  .cta-sub { font-size:15px; color:rgba(255,255,255,.7); margin-top:16px; max-width:480px; line-height:1.75; }
  .btn-white { background:#fff; color:var(--navy); padding:19px 46px; border-radius:2px; border:none; cursor:pointer; font-family:var(--fc); font-size:13px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; transition:transform .2s, box-shadow .2s; white-space:nowrap; display:inline-block; }
  .btn-white:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(0,0,0,.3); }

  /* ── FOOTER ── */
  #footer { background:var(--black); border-top:1px solid var(--border); padding:64px 0 36px; }
  .footer-grid { display:grid; grid-template-columns:1.6fr 1fr 1fr; gap:60px; padding-bottom:48px; border-bottom:1px solid var(--border); margin-bottom:32px; }
  .footer-logo { display:flex; align-items:center; gap:14px; margin-bottom:20px; }
  .footer-logo-text { font-family:var(--fd); font-size:20px; letter-spacing:3px; }
  .footer-tagline { font-size:13px; line-height:1.8; color:rgba(244,242,239,.35); max-width:280px; }
  .footer-affil { margin-top:20px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
  .affil-badge { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; padding:4px 10px; border:1px solid var(--border); border-radius:2px; color:var(--grey); }
  .footer-col-title { font-family:var(--fc); font-size:10px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--white); margin-bottom:20px; }
  .footer-links { list-style:none; }
  .footer-links li { margin-bottom:10px; }
  .footer-links a { font-size:13px; color:rgba(244,242,239,.35); transition:color .2s; }
  .footer-links a:hover { color:var(--sky); }
  .footer-links li.plain { font-size:13px; color:rgba(244,242,239,.35); }
  .footer-bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; }
  .footer-copy, .footer-legal { font-family:var(--fc); font-size:11px; font-weight:500; letter-spacing:1.5px; color:rgba(244,242,239,.2); }

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
    .disc { border:1px solid var(--border); border-radius:3px; }
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

/* ─── SVG LOGO — fidèle au PDF ─── */
/* Le vrai S du logo : forme en arc inversé, comme une ceinture
   Le vrai K : trait vertical + 2 diagonales épaisses depuis le milieu */
function SKLogo({ size = 320, id = "main" }) {
  const t = id;
  return (
    <svg width={size} height={size} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Chemin arc du haut pour "SK TEAM" */}
        <path id={`arc-t-${t}`} d="M 62,250 A 188,188 0 0,1 438,250" />
        {/* Chemin arc du bas pour "BRAZILIAN JIU-JITSU - GRAPPLING" */}
        <path id={`arc-b-${t}`} d="M 54,270 A 196,196 0 0,0 446,270" />
      </defs>

      {/* Fond blanc */}
      <circle cx="250" cy="250" r="244" fill="white" />
      {/* Anneau noir épais */}
      <circle cx="250" cy="250" r="244" fill="none" stroke="#0D1320" stroke-width="86" />

      {/* Texte haut : SK TEAM — rouge France Judo */}
      <text
        fontFamily="'Bebas Neue','Arial Black',sans-serif"
        fontSize="44"
        fontWeight="900"
        fill="#E5001A"
        letterSpacing="7"
      >
        <textPath href={`#arc-t-${t}`} startOffset="50%" textAnchor="middle">SK TEAM</textPath>
      </text>

      {/* Texte bas : BRAZILIAN JIU-JITSU - GRAPPLING — blanc */}
      <text
        fontFamily="'Bebas Neue','Arial Black',sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="white"
        letterSpacing="2"
      >
        <textPath href={`#arc-b-${t}`} startOffset="50%" textAnchor="middle">BRAZILIAN JIU-JITSU - GRAPPLING</textPath>
      </text>

      {/* ══════ S — fidèle au PDF ══════ */}
      {/*
        Le S dans le PDF est une forme en arc :
        - Débute en haut à droite (vers 215, 175)
        - Arc vers la gauche puis descend (haut du S)
        - Rejoint le milieu du S vers (175, 245)
        - Repart vers la droite puis redescend (bas du S)
        - Termine en bas à gauche (155, 305)
        Trait épais, arrondis, couleur #222
      */}
      <path
        d="M 215,178
           Q 215,158 195,158
           Q 155,158 155,193
           Q 155,228 198,228
           Q 218,228 218,243
           Q 218,278 198,278
           Q 165,278 157,265"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ══════ Détail ceinture noire 1er Dan ══════ */}
      {/* Barre rouge principale */}
      <rect x="188" y="218" width="34" height="13" rx="3" fill="#E5001A" />
      {/* Barre grise 1 */}
      <rect x="225" y="218" width="10" height="13" rx="2" fill="#707070" />
      {/* Barre grise 2 (plus fine, semi-transparente) */}
      <rect x="238" y="218" width="6" height="13" rx="2" fill="#A0A0A0" opacity="0.65" />

      {/* ══════ K — fidèle au PDF ══════ */}
      {/*
        Le K dans le PDF :
        - Trait vertical épais, droit, de haut en bas : x=268, de y=178 à y=308
        - Diagonale HAUTE : part du milieu (268, 243) vers le haut-droit (358, 178)
          — trait épais, bout arrondi
        - Diagonale BASSE : part du milieu (268, 243) vers le bas-droit (365, 316)
          — un peu plus longue
      */}
      {/* Trait vertical */}
      <line
        x1="268" y1="178"
        x2="268" y2="308"
        stroke="#1A1A1A"
        strokeWidth="36"
        strokeLinecap="round"
      />
      {/* Diagonale haute */}
      <line
        x1="268" y1="243"
        x2="358" y2="178"
        stroke="#1A1A1A"
        strokeWidth="32"
        strokeLinecap="round"
      />
      {/* Diagonale basse — légèrement plus longue */}
      <line
        x1="268" y1="243"
        x2="366" y2="316"
        stroke="#1A1A1A"
        strokeWidth="32"
        strokeLinecap="round"
      />
    </svg>
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
                <div className="info-title">Tarifs <span className="b">·</span> 2025–2026</div>
                <div className="tarif-grid">
                  <div className="tarif">
                    <div className="tarif-price"><sup>€</sup>150<span className="per">/an</span></div>
                    <div className="tarif-lbl">Adhésion Découverte</div>
                    <ul className="tarif-items">
                      <li>1 séance / semaine</li>
                      <li>Licence FFJDA incluse</li>
                      <li>Programme AOJ</li>
                    </ul>
                  </div>
                  <div className="tarif featured">
                    <div className="tarif-price"><sup>€</sup>220<span className="per">/an</span></div>
                    <div className="tarif-lbl">Adhésion Complète</div>
                    <ul className="tarif-items">
                      <li>Accès illimité</li>
                      <li>Licence FFJDA incluse</li>
                      <li>Programme AOJ complet</li>
                      <li>Suivi progression</li>
                    </ul>
                  </div>
                </div>
                <p style={{fontSize:12,color:"var(--grey)",marginTop:18,lineHeight:1.75}}>
                  * 1er cours d'essai gratuit, sans engagement. Tarifs indicatifs — nous contacter pour les tarifs définitifs, réductions famille et aides (Pass Sport, ANCV…).
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
