"use client";

import { useState, useTransition, useEffect } from "react";
import Link from "next/link";
import { joinWaitlist } from "@/lib/actions/waitlist";

export default function EarlyAccessPage() {
  const [isPending, startTransition] = useTransition();
  const [heroStatus, setHeroStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [ctaStatus, setCtaStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    source: "hero" | "cta"
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const setStatus = source === "hero" ? setHeroStatus : setCtaStatus;

    startTransition(async () => {
      try {
        const result = await joinWaitlist(formData);
        if (result.success) {
          setStatus("success");
          (e.target as HTMLFormElement).reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    });
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --black: #0a0a08;
          --charcoal: #141412;
          --smoke: #1e1e1b;
          --bone: #f0ebe3;
          --ivory: #faf7f2;
          --gold: #c9a96e;
          --gold-pale: #e8d5b0;
          --muted: #5a5950;
          --line: rgba(201,169,110,0.2);
        }

        .early-access-body {
          background: var(--black);
          color: var(--bone);
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.7;
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
        }

        .early-access-body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .ea-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 48px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.4s, background 0.4s;
        }
        .ea-nav.scrolled {
          background: rgba(10,10,8,0.92);
          backdrop-filter: blur(12px);
          border-color: var(--line);
        }
        .nav-logo {
          font-family: var(--font-cormorant), serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--gold);
          text-decoration: none;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--gold); }

        .ea-hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 120px 48px 80px;
          overflow: hidden;
        }

        .ea-hero::after {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60vw;
          height: 80vh;
          background: radial-gradient(ellipse at center, rgba(201,169,110,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 640px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUpEA 0.8s 0.2s ease forwards;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
        }

        .hero-title {
          font-family: var(--font-cormorant), serif;
          font-size: clamp(52px, 6vw, 88px);
          font-weight: 300;
          line-height: 1.02;
          letter-spacing: -0.01em;
          color: var(--ivory);
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUpEA 0.9s 0.4s ease forwards;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold-pale);
        }

        .hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: var(--muted);
          max-width: 440px;
          line-height: 1.8;
          margin-bottom: 52px;
          opacity: 0;
          animation: fadeUpEA 0.9s 0.6s ease forwards;
        }

        .ea-waitlist-form {
          display: flex;
          gap: 0;
          max-width: 460px;
          opacity: 0;
          animation: fadeUpEA 0.9s 0.8s ease forwards;
        }
        .ea-waitlist-form input[type="email"] {
          flex: 1;
          background: rgba(240,235,227,0.05);
          border: 1px solid rgba(201,169,110,0.3);
          border-right: none;
          color: var(--bone);
          padding: 16px 20px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .ea-waitlist-form input[type="email"]::placeholder { color: var(--muted); }
        .ea-waitlist-form input[type="email"]:focus {
          background: rgba(240,235,227,0.08);
          border-color: rgba(201,169,110,0.6);
        }
        .ea-waitlist-form button {
          background: var(--gold);
          color: var(--black);
          border: none;
          padding: 16px 28px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .ea-waitlist-form button:hover { background: var(--gold-pale); }
        .ea-waitlist-form button:active { transform: scale(0.98); }
        .ea-waitlist-form button:disabled { opacity: 0.7; cursor: not-allowed; }

        .form-note {
          margin-top: 14px;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.04em;
          opacity: 0;
          animation: fadeUpEA 0.9s 1s ease forwards;
        }
        .form-note a { color: var(--gold); text-decoration: none; }

        .ea-success-msg {
          padding: 16px 20px;
          border: 1px solid rgba(201,169,110,0.4);
          color: var(--gold);
          font-size: 13px;
          letter-spacing: 0.04em;
          max-width: 460px;
          animation: fadeInEA 0.5s ease forwards;
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: fadeInEA 1.2s 0.6s ease forwards;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2px;
          width: 440px;
          height: 540px;
        }

        .v-cell {
          background: var(--smoke);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .v-cell:nth-child(1) { grid-row: span 2; background: var(--charcoal); }
        .v-cell:nth-child(2) { background: #181815; }
        .v-cell:nth-child(3) { background: #111110; }
        .v-cell .v-label {
          position: absolute;
          bottom: 16px;
          left: 16px;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .v-cell .v-tag {
          font-family: var(--font-cormorant), serif;
          font-size: 13px;
          font-style: italic;
          color: rgba(201,169,110,0.6);
        }

        .ai-badge {
          position: absolute;
          top: -24px;
          right: -24px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: rgba(10,10,8,0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          animation: spinEA 20s linear infinite;
        }
        .ai-badge-inner {
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          text-align: center;
          line-height: 1.4;
        }

        @keyframes spinEA { to { transform: rotate(360deg); } }

        .stats-row {
          display: flex;
          gap: 64px;
          padding: 64px 48px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          position: relative;
          z-index: 1;
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stat-num {
          font-family: var(--font-cormorant), serif;
          font-size: 44px;
          font-weight: 300;
          color: var(--ivory);
          line-height: 1;
        }
        .stat-num span { color: var(--gold); }
        .stat-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .ea-features {
          padding: 120px 48px;
          position: relative;
          z-index: 1;
        }
        .section-header {
          display: flex;
          align-items: baseline;
          gap: 24px;
          margin-bottom: 80px;
        }
        .section-num {
          font-family: var(--font-cormorant), serif;
          font-size: 13px;
          color: var(--gold);
          font-style: italic;
        }
        .section-title {
          font-family: var(--font-cormorant), serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 300;
          color: var(--ivory);
          line-height: 1.1;
        }
        .section-title em { font-style: italic; color: var(--gold-pale); }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .feature-card {
          background: var(--charcoal);
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feature-card:hover { background: #181816; }
        .feature-card:hover::before { opacity: 1; }

        .feature-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 28px;
          opacity: 0.7;
        }
        .feature-name {
          font-family: var(--font-cormorant), serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--bone);
          margin-bottom: 12px;
        }
        .feature-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.8;
        }

        .ea-workflow {
          padding: 0 48px 120px;
          position: relative;
          z-index: 1;
        }
        .workflow-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--line);
        }
        .step {
          padding: 48px 32px;
          border-right: 1px solid var(--line);
          position: relative;
        }
        .step:last-child { border-right: none; }
        .step-num {
          font-family: var(--font-cormorant), serif;
          font-size: 64px;
          font-weight: 300;
          color: rgba(201,169,110,0.12);
          line-height: 1;
          margin-bottom: 20px;
        }
        .step-title {
          font-family: var(--font-cormorant), serif;
          font-size: 18px;
          color: var(--bone);
          margin-bottom: 10px;
        }
        .step-desc { font-size: 12px; color: var(--muted); line-height: 1.8; }

        .cta-strip {
          margin: 0 48px 120px;
          background: var(--charcoal);
          border: 1px solid var(--line);
          padding: 80px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 48px;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .cta-strip::after {
          content: '';
          position: absolute;
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-title {
          font-family: var(--font-cormorant), serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 300;
          color: var(--ivory);
          line-height: 1.15;
        }
        .cta-title em { font-style: italic; color: var(--gold-pale); }

        .ea-cta-form { display: flex; flex-direction: column; gap: 12px; min-width: 320px; }
        .ea-cta-form input[type="email"] {
          background: rgba(240,235,227,0.05);
          border: 1px solid rgba(201,169,110,0.3);
          color: var(--bone);
          padding: 14px 18px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .ea-cta-form input[type="email"]::placeholder { color: var(--muted); }
        .ea-cta-form input[type="email"]:focus { border-color: rgba(201,169,110,0.6); }
        .ea-cta-form button {
          background: var(--gold);
          color: var(--black);
          border: none;
          padding: 14px 28px;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ea-cta-form button:hover { background: var(--gold-pale); }
        .ea-cta-form button:disabled { opacity: 0.7; cursor: not-allowed; }

        .ea-footer {
          border-top: 1px solid var(--line);
          padding: 40px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .footer-logo {
          font-family: var(--font-cormorant), serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .footer-links {
          display: flex;
          gap: 28px;
          list-style: none;
        }
        .footer-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--gold); }
        .footer-copy {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.06em;
        }

        @keyframes fadeUpEA {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInEA {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @media (max-width: 900px) {
          .ea-nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .ea-hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
          .hero-visual { display: none; }
          .stats-row { flex-wrap: wrap; gap: 32px; padding: 48px 24px; }
          .ea-features { padding: 80px 24px; }
          .features-grid { grid-template-columns: 1fr; }
          .ea-workflow { padding: 0 24px 80px; }
          .workflow-steps { grid-template-columns: 1fr 1fr; }
          .step:nth-child(2) { border-right: none; }
          .step:nth-child(3) { border-top: 1px solid var(--line); }
          .cta-strip { margin: 0 24px 80px; padding: 48px 32px; grid-template-columns: 1fr; }
          .ea-cta-form { min-width: unset; }
          .ea-footer { flex-direction: column; gap: 24px; text-align: center; padding: 32px 24px; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
        }
      `,
        }}
      />
      <div className="early-access-body">
        {/* NAV */}
        <nav className={`ea-nav ${isScrolled ? "scrolled" : ""}`}>
          <Link href="/" className="nav-logo">
            Anaqio
          </Link>
          <ul className="nav-links">
            <li>
              <a href="#features">Studio</a>
            </li>
            <li>
              <a href="#workflow">How It Works</a>
            </li>
            <li>
              <a href="#waitlist">Early Access</a>
            </li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="ea-hero">
          <div className="hero-content">
            <div className="hero-eyebrow">Early Access — 2026</div>
            <h1 className="hero-title">
              Fashion&apos;s
              <br />
              <em>Virtual Studio</em>
              <br />
              powered by AI.
            </h1>
            <p className="hero-sub">
              Anaqio gives fashion brands an AI-driven workspace to create,
              stage, and sell — without the overhead of traditional production.
            </p>

            {heroStatus === "success" ? (
              <div className="ea-success-msg">
                ✦ You&apos;re on the list. We&apos;ll be in touch.
              </div>
            ) : (
              <form
                className="ea-waitlist-form"
                onSubmit={(e) => handleSubmit(e, "hero")}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  disabled={isPending}
                />
                <button type="submit" disabled={isPending}>
                  {isPending ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            )}
            <p className="form-note">
              By joining you agree to our <Link href="/privacy">Privacy Policy</Link> &amp;{" "}
              <Link href="/terms">Terms of Service</Link>.
            </p>
          </div>

          <div className="hero-visual">
            <div className="visual-grid">
              <div className="v-cell">
                <span className="v-tag">Lookbook Gen.</span>
                <span className="v-label">Studio Layer</span>
              </div>
              <div className="v-cell">
                <span className="v-tag">Virtual Try-On</span>
                <span className="v-label">Commerce</span>
              </div>
              <div className="v-cell">
                <span className="v-tag">AI Styling</span>
                <span className="v-label">Creative</span>
              </div>
            </div>
            <div className="ai-badge">
              <div className="ai-badge-inner">
                AI
                <br />
                Driven
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="stats-row">
          <div className="stat">
            <div className="stat-num">
              10<span>×</span>
            </div>
            <div className="stat-label">Faster Content Creation</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              90<span>%</span>
            </div>
            <div className="stat-label">Reduction in Studio Costs</div>
          </div>
          <div className="stat">
            <div className="stat-num">∞</div>
            <div className="stat-label">Creative Possibilities</div>
          </div>
          <div className="stat">
            <div className="stat-num">1</div>
            <div className="stat-label">Unified Commerce Platform</div>
          </div>
        </div>

        {/* FEATURES */}
        <section className="ea-features" id="features">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">
              Your <em>complete</em>
              <br />
              fashion studio.
            </h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 40 40" fill="none">
                <rect
                  x="6"
                  y="6"
                  width="28"
                  height="28"
                  rx="1"
                  stroke="#c9a96e"
                  strokeWidth="1"
                />
                <path d="M13 27 L20 14 L27 27" stroke="#c9a96e" strokeWidth="1" />
                <circle cx="20" cy="12" r="3" fill="rgba(201,169,110,0.3)" />
              </svg>
              <div className="feature-name">AI Lookbook Generation</div>
              <div className="feature-desc">
                Generate editorial-quality lookbooks in minutes. Describe a
                concept — Anaqio renders it across your full collection with
                consistent styling, lighting, and mood.
              </div>
            </div>
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="13" stroke="#c9a96e" strokeWidth="1" />
                <path
                  d="M14 20 C14 16 17 13 20 13 C23 13 26 16 26 20 C26 24 23 27 20 27 C17 27 14 24 14 20Z"
                  fill="rgba(201,169,110,0.15)"
                />
                <path
                  d="M8 20 H32 M20 8 V32"
                  stroke="#c9a96e"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
              </svg>
              <div className="feature-name">Virtual Try-On</div>
              <div className="feature-desc">
                Let shoppers experience garments on realistic AI models or their
                own image — reducing returns and increasing purchase confidence
                across every channel.
              </div>
            </div>
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 40 40" fill="none">
                <path d="M8 32 L20 8 L32 32" stroke="#c9a96e" strokeWidth="1" />
                <path
                  d="M12 24 H28"
                  stroke="#c9a96e"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <circle cx="20" cy="8" r="2" fill="#c9a96e" />
              </svg>
              <div className="feature-name">Commerce Integration</div>
              <div className="feature-desc">
                Push AI-generated assets directly to your store, catalogue, and
                social channels. From concept to listed SKU in a unified,
                intelligent workflow.
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="ea-workflow" id="workflow">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2 className="section-title">
              From <em>idea</em>
              <br />
              to market.
            </h2>
          </div>
          <div className="workflow-steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Upload Your Collection</div>
              <div className="step-desc">
                Import garment files, swatches, or product references. Anaqio
                understands your brand DNA instantly.
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">Define Your Vision</div>
              <div className="step-desc">
                Set mood, environment, model aesthetic, and campaign direction
                in natural language or visual references.
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Generate &amp; Refine</div>
              <div className="step-desc">
                Anaqio&apos;s AI produces publication-ready assets. Iterate in seconds
                — not days.
              </div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div className="step-title">Publish &amp; Sell</div>
              <div className="step-desc">
                Export or push directly to your e-commerce stack, social
                platforms, and marketing suite.
              </div>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <div className="cta-strip" id="waitlist">
          <div>
            <div className="cta-title">
              Be first to access
              <br />
              the <em>virtual studio</em>
              <br />
              of fashion&apos;s future.
            </div>
          </div>
          <div className="ea-cta-form-container">
            {ctaStatus === "success" ? (
              <div className="ea-success-msg">
                ✦ You&apos;re on the list. We&apos;ll be in touch soon.
              </div>
            ) : (
              <form
                className="ea-cta-form"
                onSubmit={(e) => handleSubmit(e, "cta")}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  disabled={isPending}
                />
                <button type="submit" disabled={isPending}>
                  {isPending ? "Requesting..." : "Request Early Access"}
                </button>
              </form>
            )}
            <p
              style={{
                marginTop: "12px",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "0.04em",
              }}
            >
              No spam. Unsubscribe anytime.{" "}
              <Link href="/privacy" style={{ color: "var(--gold)", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="ea-footer">
          <div className="footer-logo">Anaqio</div>
          <ul className="footer-links">
            <li>
              <Link href="/brand">Brand</Link>
            </li>
            <li>
              <Link href="/legal-mentions">Legal Mentions</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookies">Cookie Policy</Link>
            </li>
          </ul>
          <div className="footer-copy">© 2026 Anaqio. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
