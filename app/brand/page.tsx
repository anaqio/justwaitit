"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BrandIdentityPage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(false);

  // Check if already authorized in this session
  useEffect(() => {
    const authorized = sessionStorage.getItem("brand_authorized");
    if (authorized === "true") {
      setIsAuthorized(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "anaqio2026") {
      setIsAuthorized(true);
      setError(false);
      sessionStorage.setItem("brand_authorized", "true");
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#0a0a08] flex items-center justify-center px-4 font-sans antialiased text-[#f0ebe3]">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&family=Plus+Jakarta+Sans:wght@300;500&display=swap');
          
          .gate-card {
            background: #141412;
            border: 1px solid rgba(201,169,110,0.2);
            padding: 48px;
            border-radius: 24px;
            width: 100%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }
          .gate-logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 28px;
            font-weight: 600;
            letter-spacing: 0.14em;
            color: #c9a96e;
            text-transform: uppercase;
            margin-bottom: 32px;
          }
          .gate-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 20px;
            font-style: italic;
            color: #faf7f2;
            margin-bottom: 12px;
          }
          .gate-desc {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 13px;
            color: #5a5950;
            margin-bottom: 32px;
            line-height: 1.6;
          }
          .gate-input {
            width: 100%;
            background: rgba(240,235,227,0.05);
            border: 1px solid rgba(201,169,110,0.2);
            border-radius: 12px;
            padding: 14px 18px;
            color: #faf7f2;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 14px;
            outline: none;
            transition: all 0.2s;
            text-align: center;
            letter-spacing: 0.2em;
          }
          .gate-input:focus {
            border-color: #c9a96e;
            background: rgba(240,235,227,0.08);
          }
          .gate-btn {
            width: 100%;
            margin-top: 16px;
            background: #c9a96e;
            color: #0a0a08;
            border: none;
            padding: 14px;
            border-radius: 12px;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.2s;
          }
          .gate-btn:hover {
            background: #e8d5b0;
            transform: translateY(-1px);
          }
          .error-msg {
            color: #EF4444;
            font-size: 12px;
            margin-top: 12px;
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
        `,
          }}
        />
        <div className="gate-card">
          <div className="gate-logo">Anaqio</div>
          <h1 className="gate-title">Brand Identity Guidelines</h1>
          <p className="gate-desc">
            This document is confidential and contains proprietary brand assets.
            Please enter the access key to continue.
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              className="gate-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {error && <div className="error-msg">Invalid access key</div>}
            <button type="submit" className="gate-btn">
              Unlock Guidelines
            </button>
          </form>
          <Link
            href="/"
            className="inline-block mt-8 text-[11px] text-[#5a5950] uppercase tracking-[0.1em] hover:text-[#c9a96e] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          /* ─── PRIMARY PALETTE (OMPIC Registered) ─── */
          --aq-blue:          #2563EB;
          --aq-purple:        #7C3AED;
          --aq-white:         #F8FAFC;

          /* ─── GRADIENT SPECTRUM (from SVG) ─── */
          --aq-grad-start:    #3F57AF;
          --aq-grad-mid1:     #484DA9;
          --aq-grad-mid2:     #6049A8;
          --aq-grad-end:      #6F47A7;

          /* ─── EXTENDED PALETTE ─── */
          --aq-blue-light:    #DBEAFE;
          --aq-blue-dark:     #1D4ED8;
          --aq-purple-light:  #EDE9FE;
          --aq-purple-dark:   #5B21B6;
          --aq-ink:           #0F172A;
          --aq-slate:         #334155;
          --aq-muted:         #94A3B8;
          --aq-border:        #E2E8F0;
          --aq-surface:       #F1F5F9;

          /* ─── GRADIENTS ─── */
          --aq-gradient:        linear-gradient(90deg, #3F57AF 0%, #484DA9 32%, #6049A8 67%, #6F47A7 100%);
          --aq-gradient-diag:   linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
          --aq-gradient-radial: radial-gradient(ellipse at 30% 50%, #2563EB 0%, #7C3AED 100%);
          --aq-gradient-light:  linear-gradient(135deg, #DBEAFE 0%, #EDE9FE 100%);

          /* ─── TYPOGRAPHY ─── */
          --font-display: var(--font-syne), sans-serif;
          --font-body:    var(--font-plus-jakarta), sans-serif;
          --font-mono:    var(--font-mono), monospace;

          /* ─── SPACING ─── */
          --sp-xs: 4px; --sp-sm: 8px; --sp-md: 16px;
          --sp-lg: 24px; --sp-xl: 32px; --sp-2xl: 48px;
          --sp-3xl: 64px; --sp-4xl: 96px;

          /* ─── RADIUS ─── */
          --r-sm: 4px; --r-md: 8px; --r-lg: 12px; --r-xl: 16px; --r-full: 999px;

          /* ─── SHADOW ─── */
          --shadow-sm:  0 1px 3px rgba(37,99,235,0.08), 0 1px 2px rgba(37,99,235,0.06);
          --shadow-md:  0 4px 16px rgba(37,99,235,0.12), 0 2px 6px rgba(124,58,237,0.08);
          --shadow-lg:  0 16px 40px rgba(37,99,235,0.16), 0 4px 12px rgba(124,58,237,0.12);
          --shadow-glow: 0 0 40px rgba(124,58,237,0.25);
        }

        .brand-body {
          background: var(--aq-white);
          color: var(--aq-ink);
          font-family: var(--font-body);
          font-weight: 400;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .brand-page { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .brand-section { padding: 80px 0; border-bottom: 1px solid var(--aq-border); }
        .brand-section:last-child { border-bottom: none; }
        .brand-section-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--aq-blue);
          margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
        }
        .brand-section-label::after { content: ''; flex: 1; max-width: 40px; height: 1px; background: var(--aq-blue); }
        .brand-section-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700; line-height: 1.1;
          color: var(--aq-ink); margin-bottom: 12px;
        }
        .brand-section-desc { font-size: 16px; color: var(--aq-slate); max-width: 560px; line-height: 1.7; margin-bottom: 48px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        .brand-cover {
          background: var(--aq-ink);
          color: var(--aq-white);
          padding: 0;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          position: relative;
        }
        .brand-cover::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 70% 40%, rgba(124,58,237,0.35) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(37,99,235,0.2) 0%, transparent 50%);
          pointer-events: none;
        }
        .brand-cover::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0;
        }
        .brand-cover-left {
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .brand-cover-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          overflow: hidden;
        }
        .brand-cover-right::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(37,99,235,0.06);
          border-left: 1px solid rgba(255,255,255,0.06);
        }

        .brand-cover-eyebrow {
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(255,255,255,0.45);
          margin-bottom: 8px;
        }
        .brand-cover-brand {
          font-family: var(--font-display);
          font-size: 72px; font-weight: 800; line-height: 1;
          background: var(--aq-gradient);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }
        .brand-cover-tagline {
          font-size: 18px; font-weight: 300;
          color: rgba(255,255,255,0.6);
          margin-top: 16px; line-height: 1.5;
        }
        .brand-cover-meta {
          font-size: 12px; color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em; line-height: 1.9;
        }
        .brand-cover-meta strong { color: rgba(255,255,255,0.5); font-weight: 500; }

        .logo-hero-wrap {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
        }
        .logo-hero-wrap svg { width: 100%; max-width: 480px; }

        .brand-doc-nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(248,250,252,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--aq-border);
          padding: 0 40px;
        }
        .brand-doc-nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center;
          gap: 4px; height: 56px;
          overflow-x: auto;
        }
        .brand-doc-nav a {
          font-size: 13px; font-weight: 500;
          color: var(--aq-muted); text-decoration: none;
          white-space: nowrap; padding: 6px 14px;
          border-radius: var(--r-full);
          transition: all 0.2s;
        }
        .brand-doc-nav a:hover { color: var(--aq-blue); background: var(--aq-blue-light); }
        .brand-doc-nav .brand { font-family: var(--font-display); font-weight: 800; font-size: 16px; background: var(--aq-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-right: 16px; padding: 0; }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .logo-cell {
          border-radius: var(--r-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 40px;
          min-height: 220px;
          gap: 20px;
          position: relative;
        }
        .logo-cell.light { background: var(--aq-white); border: 1px solid var(--aq-border); }
        .logo-cell.surface { background: var(--aq-surface); }
        .logo-cell.dark { background: var(--aq-ink); }
        .logo-cell.gradient-bg { background: var(--aq-gradient-diag); }
        .logo-cell svg { width: 100%; max-width: 200px; }
        .logo-cell-label {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--aq-muted); font-weight: 500;
        }
        .logo-cell.dark .logo-cell-label,
        .logo-cell.gradient-bg .logo-cell-label { color: rgba(255,255,255,0.5); }

        .logo-clearspace {
          background: var(--aq-surface);
          border: 1px solid var(--aq-border);
          border-radius: var(--r-lg);
          padding: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;
        }
        .clearspace-diagram {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .clearspace-diagram .logo-box {
          border: 1.5px dashed var(--aq-blue);
          padding: 20px;
          position: relative;
        }
        .clearspace-diagram .x-mark {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--aq-blue);
          font-weight: 500;
        }
        .x-top { top: -20px; left: 50%; transform: translateX(-50%); }
        .x-bottom { bottom: -20px; left: 50%; transform: translateX(-50%); }
        .x-left { left: -24px; top: 50%; transform: translateY(-50%); }
        .x-right { right: -24px; top: 50%; transform: translateY(-50%); }

        .dont-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 32px;
        }
        .dont-card {
          background: var(--aq-surface);
          border: 1px solid var(--aq-border);
          border-radius: var(--r-md);
          padding: 24px;
          text-align: center;
        }
        .dont-visual {
          height: 80px; display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
        }
        .dont-label {
          font-size: 12px; color: #EF4444; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .dont-desc { font-size: 12px; color: var(--aq-muted); margin-top: 6px; line-height: 1.5; }

        .color-palette-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }
        .color-swatch {
          border-radius: var(--r-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .color-swatch-block {
          height: 160px;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }
        .color-swatch-block.tall { height: 220px; }
        .ompic-badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: var(--r-full);
          padding: 4px 10px;
          font-size: 10px; letter-spacing: 0.08em; color: white;
          font-weight: 500;
        }
        .ompic-badge svg { width: 12px; height: 12px; }
        .color-swatch-info {
          background: white;
          padding: 16px 20px;
          border-top: 1px solid var(--aq-border);
        }
        .color-name { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--aq-ink); margin-bottom: 6px; }
        .color-values { display: flex; flex-direction: column; gap: 3px; }
        .color-value { font-family: var(--font-mono); font-size: 11px; color: var(--aq-muted); }
        .color-value strong { color: var(--aq-slate); }

        .gradient-strip {
          height: 96px;
          border-radius: var(--r-lg);
          background: var(--aq-gradient);
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .gradient-stops {
          display: flex;
          justify-content: space-between;
          padding: 0 4px;
        }
        .gradient-stop { text-align: center; }
        .gradient-stop-color { width: 32px; height: 32px; border-radius: 50%; margin: 0 auto 6px; border: 2px solid white; box-shadow: var(--shadow-sm); }
        .gradient-stop-hex { font-family: var(--font-mono); font-size: 11px; color: var(--aq-slate); }
        .gradient-stop-pos { font-size: 10px; color: var(--aq-muted); margin-top: 2px; }

        .gradient-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 24px; }
        .gradient-card { border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-sm); }
        .gradient-card-vis { height: 80px; }
        .gradient-card-info { background: white; padding: 12px 16px; border-top: 1px solid var(--aq-border); }
        .gradient-card-name { font-size: 12px; font-weight: 600; color: var(--aq-ink); margin-bottom: 3px; }
        .gradient-card-code { font-family: var(--font-mono); font-size: 10px; color: var(--aq-muted); line-height: 1.6; }

        .extended-palette { display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; margin-top: 32px; }
        .ext-swatch { border-radius: var(--r-md); overflow: hidden; }
        .ext-color { height: 64px; }
        .ext-info { padding: 8px; background: white; border: 1px solid var(--aq-border); border-top: none; border-radius: 0 0 var(--r-md) var(--r-md); }
        .ext-name { font-size: 10px; font-weight: 600; color: var(--aq-ink); }
        .ext-hex { font-family: var(--font-mono); font-size: 10px; color: var(--aq-muted); }

        .type-specimen {
          background: var(--aq-surface);
          border: 1px solid var(--aq-border);
          border-radius: var(--r-xl);
          padding: 48px;
          margin-bottom: 24px;
        }
        .type-family-name {
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--aq-blue); font-weight: 600; margin-bottom: 24px;
          padding-bottom: 16px; border-bottom: 1px solid var(--aq-border);
        }
        .type-display-sample {
          font-family: var(--font-display);
          font-size: 56px; font-weight: 800; line-height: 1.05;
          letter-spacing: -0.02em; color: var(--aq-ink);
          margin-bottom: 16px;
          background: var(--aq-gradient);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .type-body-sample {
          font-family: var(--font-body);
          font-size: 17px; color: var(--aq-slate); line-height: 1.75;
          max-width: 560px;
        }
        .type-weights { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 24px; }
        .type-weight { text-align: center; }
        .type-weight-sample { font-size: 32px; color: var(--aq-ink); line-height: 1; margin-bottom: 8px; }
        .type-weight-label { font-size: 11px; color: var(--aq-muted); letter-spacing: 0.1em; text-transform: uppercase; }

        .type-scale { display: flex; flex-direction: column; gap: 0; }
        .type-scale-row {
          display: grid; grid-template-columns: 80px 1fr 120px;
          align-items: center; gap: 24px;
          padding: 16px 0; border-bottom: 1px solid var(--aq-border);
        }
        .type-scale-token { font-family: var(--font-mono); font-size: 11px; color: var(--aq-muted); }
        .type-scale-sample { font-family: var(--font-display); color: var(--aq-ink); }
        .type-scale-meta { font-size: 11px; color: var(--aq-muted); text-align: right; }

        .mono-sample {
          background: var(--aq-ink);
          border-radius: var(--r-lg);
          padding: 28px 32px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--aq-white);
          line-height: 1.8;
        }
        .mono-sample .kw { color: #7C3AED; }
        .mono-sample .str { color: #10B981; }
        .mono-sample .prop { color: #2563EB; }
        .mono-sample .val { color: #F59E0B; }
        .mono-sample .cmt { color: #475569; font-style: italic; }

        .spacing-row {
          display: flex; align-items: center; gap: 20px;
          padding: 12px 0; border-bottom: 1px solid var(--aq-border);
        }
        .spacing-token { font-family: var(--font-mono); font-size: 12px; color: var(--aq-blue); width: 120px; }
        .spacing-bar-wrap { flex: 1; display: flex; align-items: center; gap: 12px; }
        .spacing-bar { height: 16px; background: var(--aq-gradient-diag); border-radius: 2px; }
        .spacing-value { font-size: 12px; color: var(--aq-muted); font-family: var(--font-mono); width: 48px; }
        .spacing-usage { font-size: 12px; color: var(--aq-slate); }

        .comp-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; }
        .brand-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px; border-radius: var(--r-full);
          font-family: var(--font-body); font-size: 14px; font-weight: 600;
          letter-spacing: 0.01em; cursor: pointer; border: none;
          text-decoration: none; transition: all 0.2s;
        }
        .btn-primary {
          background: var(--aq-gradient-diag);
          color: white; box-shadow: var(--shadow-md);
        }
        .btn-secondary {
          background: white; color: var(--aq-blue);
          border: 1.5px solid var(--aq-blue);
        }
        .btn-ghost { background: var(--aq-surface); color: var(--aq-slate); }
        .btn-ghost:hover { background: var(--aq-border); }
        .btn-sm { padding: 7px 16px; font-size: 13px; }
        .btn-lg { padding: 14px 32px; font-size: 16px; }

        .brand-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 10px; border-radius: var(--r-full);
          font-size: 12px; font-weight: 600;
        }
        .badge-blue { background: var(--aq-blue-light); color: var(--aq-blue-dark); }
        .badge-purple { background: var(--aq-purple-light); color: var(--aq-purple-dark); }
        .badge-gradient { background: var(--aq-gradient); color: white; }

        .input-demo { display: flex; flex-direction: column; gap: 12px; max-width: 400px; }
        .input-field {
          padding: 11px 16px; border: 1.5px solid var(--aq-border);
          border-radius: var(--r-md); font-family: var(--font-body); font-size: 14px;
          color: var(--aq-ink); background: white; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-field:focus {
          border-color: var(--aq-blue);
          box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
        }
        .input-field::placeholder { color: var(--aq-muted); }
        .input-label { font-size: 13px; font-weight: 600; color: var(--aq-slate); margin-bottom: -6px; }

        .brand-card-demo {
          background: white; border-radius: var(--r-xl);
          border: 1px solid var(--aq-border); overflow: hidden;
          box-shadow: var(--shadow-sm); max-width: 320px;
        }
        .card-top { height: 120px; background: var(--aq-gradient-diag); position: relative; }
        .card-top-label {
          position: absolute; bottom: 16px; left: 20px;
          font-family: var(--font-display); font-size: 20px; font-weight: 700;
          color: white;
        }
        .card-body { padding: 20px; }
        .card-body p { font-size: 14px; color: var(--aq-slate); margin-bottom: 16px; line-height: 1.6; }

        .token-table { width: 100%; border-collapse: collapse; }
        .token-table th { background: var(--aq-surface); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: var(--aq-slate); padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--aq-border); }
        .token-table td { padding: 12px 16px; border-bottom: 1px solid rgba(226,232,240,0.5); font-size: 13px; vertical-align: middle; }
        .token-table tr:hover td { background: rgba(241,245,249,0.5); }
        .token-chip { display: inline-flex; align-items: center; gap: 8px; }
        .token-dot { width: 16px; height: 16px; border-radius: 3px; flex-shrink: 0; border: 1px solid rgba(0,0,0,0.08); }

        .trademark-notice {
          background: linear-gradient(135deg, rgba(37,99,235,0.04), rgba(124,58,237,0.06));
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: var(--r-xl);
          padding: 32px 40px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 24px;
          align-items: start;
        }
        .tm-icon {
          width: 48px; height: 48px;
          background: var(--aq-gradient-diag);
          border-radius: var(--r-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-family: var(--font-display); font-size: 20px; font-weight: 800;
          color: white;
        }
        .tm-title { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--aq-ink); margin-bottom: 10px; }
        .tm-details { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
        .tm-row { display: flex; gap: 8px; font-size: 13px; }
        .tm-key { color: var(--aq-muted); min-width: 100px; font-weight: 500; }
        .tm-val { color: var(--aq-slate); font-family: var(--font-mono); font-size: 12px; }

        .brand-footer {
          background: var(--aq-ink);
          padding: 48px 40px;
          text-align: center;
        }
        .brand-footer-logo {
          font-family: var(--font-display); font-size: 36px; font-weight: 800;
          background: var(--aq-gradient);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 12px;
        }
        .brand-footer-copy { font-size: 13px; color: rgba(255,255,255,0.3); }

        @media (max-width: 900px) {
          .brand-page { padding: 0 20px; }
          .brand-cover { grid-template-columns: 1fr; }
          .brand-cover-right { display: none; }
          .brand-cover-brand { font-size: 52px; }
          .color-palette-main { grid-template-columns: 1fr 1fr; }
          .logo-grid { grid-template-columns: 1fr 1fr; }
          .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
          .extended-palette { grid-template-columns: repeat(4, 1fr); }
          .tm-details { grid-template-columns: 1fr; }
          .gradient-cards { grid-template-columns: 1fr; }
        }
      `,
        }}
      />
      <div className="brand-body">
        {/* COVER */}
        <div className="brand-cover">
          <div className="brand-cover-left">
            <div>
              <div className="brand-cover-eyebrow">Visual Brand Identity — v1.0</div>
              <div className="brand-cover-brand">ANAQIO</div>
              <div className="brand-cover-tagline">AI-Driven Virtual Studio<br />for Fashion Commerce</div>
            </div>
            <div className="brand-cover-meta">
              <strong>Owner</strong> Mohamed Moughamir<br />
              <strong>Trademark Filing</strong> OMPIC PR-237456<br />
              <strong>Class</strong> 42 — Logiciel-service [SaaS]<br />
              <strong>Filed</strong> 17 February 2026 · Casablanca, Morocco<br />
              <strong>Document</strong> Brand Identity Guidelines · 2026
            </div>
          </div>
          <div className="brand-cover-right">
            <div className="logo-hero-wrap">
              <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3F57AF" />
                    <stop offset="32%" stopColor="#484DA9" />
                    <stop offset="67%" stopColor="#6049A8" />
                    <stop offset="100%" stopColor="#6F47A7" />
                  </linearGradient>
                  <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <g transform="translate(320,30)">
                  <path d="M60 0 C60 0 60 18 40 18" stroke="url(#cg2)" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M0 60 L120 60" stroke="url(#cg2)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M40 18 C20 18 0 35 0 60" stroke="url(#cg2)" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M40 18 C60 18 120 35 120 60" stroke="url(#cg2)" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M20 60 L20 120 L100 120 L100 60" stroke="url(#cg2)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="rgba(37,99,235,0.06)" />
                  <line x1="35" y1="75" x2="85" y2="75" stroke="url(#cg2)" strokeWidth="2" strokeOpacity="0.4" />
                  <line x1="35" y1="88" x2="85" y2="88" stroke="url(#cg2)" strokeWidth="2" strokeOpacity="0.4" />
                  <line x1="35" y1="101" x2="65" y2="101" stroke="url(#cg2)" strokeWidth="2" strokeOpacity="0.4" />
                </g>
                <text x="400" y="220" fontFamily="var(--font-syne), sans-serif" fontSize="72" fontWeight="800" fill="url(#cg)" textAnchor="middle" letterSpacing="-1">ANAQIO</text>
                <text x="400" y="252" fontFamily="var(--font-plus-jakarta), sans-serif" fontSize="14" fontWeight="400" fill="rgba(255,255,255,0.4)" textAnchor="middle" letterSpacing="3">AI VIRTUAL STUDIO</text>
              </svg>
            </div>
          </div>
        </div>

        {/* DOC NAV */}
        <nav className="brand-doc-nav">
          <div className="brand-doc-nav-inner">
            <Link href="/" className="brand">Anaqio</Link>
            <a href="#logo">Logo</a>
            <a href="#colors">Colors</a>
            <a href="#typography">Typography</a>
            <a href="#gradients">Gradients</a>
            <a href="#spacing">Spacing</a>
            <a href="#components">Components</a>
            <a href="#tokens">Tokens</a>
            <a href="#trademark">Trademark</a>
          </div>
        </nav>

        <div className="brand-page">
          {/* 01 LOGO SYSTEM */}
          <section className="brand-section" id="logo">
            <div className="brand-section-label">01 · Logo System</div>
            <h2 className="brand-section-title">The Anaqio Mark</h2>
            <p className="brand-section-desc">The Anaqio logo is a mixed mark composed of a fashion icon and a geometric wordmark, unified by a blue-to-violet gradient. The icon references a clothing hanger — a direct nod to fashion commerce.</p>

            <div className="logo-grid" style={{ marginBottom: "24px" }}>
              <div className="logo-cell light">
                <svg viewBox="0 0 300 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: "220px" }}>
                  <defs>
                    <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3F57AF" />
                      <stop offset="32%" stopColor="#484DA9" />
                      <stop offset="67%" stopColor="#6049A8" />
                      <stop offset="100%" stopColor="#6F47A7" />
                    </linearGradient>
                  </defs>
                  <text x="150" y="75" fontFamily="var(--font-syne),sans-serif" fontSize="48" fontWeight="800" fill="url(#lg1)" textAnchor="middle" letterSpacing="-1">ANAQIO</text>
                  <text x="150" y="100" fontFamily="var(--font-plus-jakarta),sans-serif" fontSize="10" fontWeight="400" fill="#94A3B8" textAnchor="middle" letterSpacing="3">AI VIRTUAL STUDIO</text>
                </svg>
                <span className="logo-cell-label">On White</span>
              </div>
              <div className="logo-cell surface">
                <svg viewBox="0 0 300 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: "220px" }}>
                  <defs>
                    <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3F57AF" />
                      <stop offset="100%" stopColor="#6F47A7" />
                    </linearGradient>
                  </defs>
                  <text x="150" y="75" fontFamily="var(--font-syne),sans-serif" fontSize="48" fontWeight="800" fill="url(#lg2)" textAnchor="middle" letterSpacing="-1">ANAQIO</text>
                  <text x="150" y="100" fontFamily="var(--font-plus-jakarta),sans-serif" fontSize="10" fontWeight="400" fill="#94A3B8" textAnchor="middle" letterSpacing="3">AI VIRTUAL STUDIO</text>
                </svg>
                <span className="logo-cell-label">On Surface</span>
              </div>
              <div className="logo-cell dark">
                <svg viewBox="0 0 300 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: "220px" }}>
                  <defs>
                    <linearGradient id="lg3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3F57AF" />
                      <stop offset="100%" stopColor="#6F47A7" />
                    </linearGradient>
                  </defs>
                  <text x="150" y="75" fontFamily="var(--font-syne),sans-serif" fontSize="48" fontWeight="800" fill="url(#lg3)" textAnchor="middle" letterSpacing="-1">ANAQIO</text>
                  <text x="150" y="100" fontFamily="var(--font-plus-jakarta),sans-serif" fontSize="10" fontWeight="400" fill="rgba(255,255,255,0.35)" textAnchor="middle" letterSpacing="3">AI VIRTUAL STUDIO</text>
                </svg>
                <span className="logo-cell-label">On Dark</span>
              </div>
            </div>
          </section>

          {/* 02 COLOR SYSTEM */}
          <section className="brand-section" id="colors">
            <div className="brand-section-label">02 · Color System</div>
            <h2 className="brand-section-title">Brand Palette</h2>
            <p className="brand-section-desc">Three primary colors registered with OMPIC as part of the trademark filing, extended into a full spectrum including gradients, surface tones, and semantic states.</p>

            <div className="color-palette-main">
              <div className="color-swatch">
                <div className="color-swatch-block tall" style={{ background: "#2563EB" }}>
                  <span className="ompic-badge">OMPIC Registered</span>
                </div>
                <div className="color-swatch-info">
                  <div className="color-name">Anaqio Blue</div>
                  <div className="color-values">
                    <div className="color-value"><strong>HEX</strong> #2563EB</div>
                    <div className="color-value"><strong>RGB</strong> 37, 99, 235</div>
                  </div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch-block tall" style={{ background: "#7C3AED" }}>
                  <span className="ompic-badge">OMPIC Registered</span>
                </div>
                <div className="color-swatch-info">
                  <div className="color-name">Anaqio Violet</div>
                  <div className="color-values">
                    <div className="color-value"><strong>HEX</strong> #7C3AED</div>
                    <div className="color-value"><strong>RGB</strong> 124, 58, 237</div>
                  </div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-swatch-block tall" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                  <span className="ompic-badge" style={{ color: "var(--aq-slate)", background: "rgba(0,0,0,0.06)", borderColor: "rgba(0,0,0,0.1)" }}>OMPIC Registered</span>
                </div>
                <div className="color-swatch-info">
                  <div className="color-name">Anaqio White</div>
                  <div className="color-values">
                    <div className="color-value"><strong>HEX</strong> #F8FAFC</div>
                    <div className="color-value"><strong>RGB</strong> 248, 250, 252</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03 GRADIENTS */}
          <section className="brand-section" id="gradients">
            <div className="brand-section-label">03 · Gradient System</div>
            <h2 className="brand-section-title">The Brand Gradient</h2>
            <p className="brand-section-desc">The signature gradient flows from Anaqio Blue through a rich mid-spectrum to Anaqio Violet.</p>
            <div className="gradient-strip"></div>
            <div className="gradient-stops">
              <div className="gradient-stop">
                <div className="gradient-stop-color" style={{ background: "#3F57AF" }}></div>
                <div className="gradient-stop-hex">#3F57AF</div>
                <div className="gradient-stop-pos">0%</div>
              </div>
              <div className="gradient-stop">
                <div className="gradient-stop-color" style={{ background: "#6F47A7" }}></div>
                <div className="gradient-stop-hex">#6F47A7</div>
                <div className="gradient-stop-pos">100%</div>
              </div>
            </div>
          </section>

          {/* 04 TYPOGRAPHY */}
          <section className="brand-section" id="typography">
            <div className="brand-section-label">04 · Typography</div>
            <h2 className="brand-section-title">Type System</h2>
            <div className="type-specimen">
              <div className="type-family-name">Display — Syne</div>
              <div className="type-display-sample">Fashion meets<br />Intelligence.</div>
              <div className="type-weights">
                <div className="type-weight"><div className="type-weight-sample">Aa</div><div className="type-weight-label">ExtraBold 800</div></div>
              </div>
            </div>
            <div className="type-specimen">
              <div className="type-family-name">Body — Plus Jakarta Sans</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "40px", fontWeight: 600, color: "var(--aq-ink)", lineHeight: 1.1, marginBottom: "16px" }}>The studio where<br />fashion is made.</div>
              <div className="type-weights">
                <div className="type-weight"><div className="type-weight-sample" style={{ fontFamily: "var(--font-body)" }}>Aa</div><div className="type-weight-label">Regular 400</div></div>
              </div>
            </div>
          </section>

          {/* 05 SPACING */}
          <section className="brand-section" id="spacing">
            <div className="brand-section-label">05 · Spacing & Grid</div>
            <h2 className="brand-section-title">Spatial System</h2>
            <div className="spacing-row"><div className="spacing-token">--sp-md</div><div className="spacing-bar-wrap"><div className="spacing-bar" style={{ width: "16px" }}></div><div className="spacing-value">16px</div></div></div>
            <div className="spacing-row"><div className="spacing-token">--sp-lg</div><div className="spacing-bar-wrap"><div className="spacing-bar" style={{ width: "24px" }}></div><div className="spacing-value">24px</div></div></div>
            <div className="spacing-row"><div className="spacing-token">--sp-xl</div><div className="spacing-bar-wrap"><div className="spacing-bar" style={{ width: "32px" }}></div><div className="spacing-value">32px</div></div></div>
          </section>

          {/* 06 COMPONENTS */}
          <section className="brand-section" id="components">
            <div className="brand-section-label">06 · Components</div>
            <h2 className="brand-section-title">UI Building Blocks</h2>
            <div className="comp-row">
              <button className="brand-btn btn-primary">Join Waitlist</button>
              <button className="brand-btn btn-secondary">Learn More</button>
              <button className="brand-btn btn-ghost">Ghost Button</button>
            </div>
            <div className="grid-3">
              <div className="brand-card-demo">
                <div className="card-top"><div className="card-top-label">Interface</div></div>
                <div className="card-body"><p>Example of how cards and type hierarchy are applied within the SaaS platform.</p></div>
              </div>
            </div>
          </section>

          {/* 07 TOKENS */}
          <section className="brand-section" id="tokens">
            <div className="brand-section-label">07 · Design Tokens</div>
            <h2 className="brand-section-title">CSS Token Reference</h2>
            <table className="token-table">
              <thead>
                <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
              </thead>
              <tbody>
                <tr><td><code>--aq-blue</code></td><td>#2563EB</td><td>Primary Actions</td></tr>
                <tr><td><code>--aq-purple</code></td><td>#7C3AED</td><td>Accents</td></tr>
                <tr><td><code>--aq-ink</code></td><td>#0F172A</td><td>Primary Text</td></tr>
              </tbody>
            </table>
          </section>

          {/* 08 TRADEMARK */}
          <section className="brand-section" id="trademark">
            <div className="brand-section-label">08 · Trademark &amp; Legal</div>
            <h2 className="brand-section-title">Trademark Status</h2>
            <div className="trademark-notice">
              <div className="tm-icon">™</div>
              <div>
                <div className="tm-title">OMPIC Trademark Filing — ANAQIO</div>
                <div className="tm-details">
                  <div className="tm-row"><span className="tm-key">Filing Ref.</span><span className="tm-val">PR-237456</span></div>
                  <div className="tm-row"><span className="tm-key">Mark Type</span><span className="tm-val">Mixte</span></div>
                  <div className="tm-row"><span className="tm-key">Nice Class</span><span className="tm-val">42 — SaaS</span></div>
                  <div className="tm-row"><span className="tm-key">Owner</span><span className="tm-val">Mohamed Moughamir</span></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="brand-footer">
          <div className="brand-footer-logo">ANAQIO™</div>
          <div className="brand-footer-copy">
            © 2026 Anaqio. Visual Brand Identity Guidelines v1.0<br />
            Trademark filed with OMPIC — PR-237456 · Casablanca, Morocco
          </div>
        </footer>
      </div>
    </>
  );
}
