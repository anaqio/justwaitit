"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function CookiePolicyPage() {
  const [preferences, setPreferences] = useState({
    analytics: false,
    functional: false,
    marketing: false,
  });
  const [showConfirm, setShowConfirm] = useState(false);

  const savePreferences = () => {
    // In production: save to cookie or send to backend
    console.log("Cookie preferences saved:", {
      ...preferences,
      timestamp: new Date().toISOString(),
    });
    setShowConfirm(true);
    setTimeout(() => setShowConfirm(false), 3000);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --black: #0a0a08; --charcoal: #141412; --bone: #f0ebe3; --ivory: #faf7f2;
          --gold: #c9a96e; --gold-pale: #e8d5b0; --muted: #5a5950; --line: rgba(201,169,110,0.2);
        }
        .terms-body { 
          background: var(--black); 
          color: var(--bone); 
          font-family: var(--font-dm-sans), sans-serif; 
          font-weight: 300; 
          font-size: 15px; 
          line-height: 1.8; 
          min-height: 100vh;
          position: relative;
        }
        .terms-body::before {
          content: ''; position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.6;
        }
        .terms-nav { 
          position: sticky; top: 0; z-index: 100; 
          display: flex; justify-content: space-between; align-items: center; 
          padding: 20px 48px; 
          background: rgba(10,10,8,0.95); backdrop-filter: blur(12px); 
          border-bottom: 1px solid var(--line); 
        }
        .nav-logo { font-family: var(--font-cormorant), serif; font-size: 20px; font-weight: 600; letter-spacing: 0.14em; color: var(--gold); text-decoration: none; text-transform: uppercase; }
        .nav-back { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .nav-back:hover { color: var(--gold); }

        .page-wrap { max-width: 800px; margin: 0 auto; padding: 80px 48px 120px; position: relative; z-index: 1; }
        .page-header { margin-bottom: 72px; padding-bottom: 48px; border-bottom: 1px solid var(--line); }
        .page-tag { font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .page-tag::before { content: ''; display: block; width: 24px; height: 1px; background: var(--gold); }
        .page-title { font-family: var(--font-cormorant), serif; font-size: clamp(40px, 5vw, 64px); font-weight: 300; color: var(--ivory); line-height: 1.05; margin-bottom: 20px; }
        .page-meta { font-size: 12px; color: var(--muted); letter-spacing: 0.06em; }
        .page-meta strong { color: var(--bone); font-weight: 400; }

        .law-banner { background: var(--charcoal); border-left: 2px solid var(--gold); padding: 20px 24px; margin-bottom: 56px; font-size: 13px; color: var(--muted); line-height: 1.7; }
        .law-banner strong { color: var(--gold); font-weight: 400; }

        .terms-body h2 { font-family: var(--font-cormorant), serif; font-size: 26px; font-weight: 400; color: var(--ivory); margin: 56px 0 16px; padding-top: 56px; border-top: 1px solid var(--line); }
        .terms-body h2:first-of-type { margin-top: 0; padding-top: 0; border-top: none; }
        .terms-body h3 { font-family: var(--font-cormorant), serif; font-size: 18px; font-style: italic; color: var(--gold-pale); margin: 28px 0 10px; font-weight: 300; }
        .terms-body p { margin-bottom: 16px; color: var(--bone); }
        .terms-body ul { margin: 12px 0 20px 20px; }
        .terms-body li { margin-bottom: 8px; color: var(--bone); line-height: 1.7; }
        .terms-body a { color: var(--gold); text-decoration: none; }
        .terms-body a:hover { text-decoration: underline; }
        .terms-body strong { font-weight: 500; color: var(--ivory); }

        .cookie-table { width: 100%; border-collapse: collapse; margin: 24px 0 36px; font-size: 13px; }
        .cookie-table th { background: var(--charcoal); color: var(--gold); font-weight: 400; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; padding: 14px 16px; text-align: left; border: 1px solid var(--line); }
        .cookie-table td { padding: 12px 16px; border: 1px solid rgba(201,169,110,0.1); color: var(--bone); vertical-align: top; line-height: 1.6; }
        .cookie-table tr:nth-child(even) td { background: rgba(20,20,18,0.5); }
        .cookie-table td:first-child { font-family: var(--font-cormorant), serif; font-style: italic; color: var(--gold-pale); }

        .type-badge { display: inline-block; padding: 2px 8px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; background: rgba(201,169,110,0.1); color: var(--gold); }
        .type-badge.essential { background: rgba(100,180,100,0.1); color: #8bc88b; }
        .type-badge.analytics { background: rgba(100,140,200,0.1); color: #8ab0e0; }
        .type-badge.marketing { background: rgba(200,120,80,0.1); color: #e0a880; }

        .preference-panel { background: var(--charcoal); border: 1px solid var(--line); padding: 32px 36px; margin: 32px 0; }
        .preference-panel h3 { margin-top: 0; padding-top: 0; }
        .pref-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid rgba(201,169,110,0.08); gap: 32px; }
        .pref-row:last-child { border-bottom: none; }
        .pref-info { flex: 1; }
        .pref-name { font-weight: 500; color: var(--ivory); margin-bottom: 4px; font-size: 14px; }
        .pref-desc { font-size: 12px; color: var(--muted); line-height: 1.6; }
        .pref-toggle { position: relative; width: 44px; height: 24px; flex-shrink: 0; }
        .pref-toggle input { opacity: 0; width: 0; height: 0; }
        .pref-slider { position: absolute; inset: 0; background: rgba(90,89,80,0.4); cursor: pointer; transition: background 0.3s; }
        .pref-slider::before { content: ''; position: absolute; width: 18px; height: 18px; bottom: 3px; left: 3px; background: var(--muted); transition: 0.3s; }
        input:checked + .pref-slider { background: rgba(201,169,110,0.4); }
        input:checked + .pref-slider::before { background: var(--gold); transform: translateX(20px); }
        input:disabled + .pref-slider { opacity: 0.5; cursor: not-allowed; }
        .save-prefs { margin-top: 24px; background: var(--gold); color: var(--black); border: none; padding: 12px 28px; font-family: var(--font-dm-sans), sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: background 0.2s; }
        .save-prefs:hover { background: var(--gold-pale); }
        .save-confirm { display: block; margin-top: 12px; font-size: 12px; color: var(--gold); letter-spacing: 0.04em; }

        .terms-footer { border-top: 1px solid var(--line); padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1; }
        .footer-logo { font-family: var(--font-cormorant), serif; font-size: 16px; font-weight: 600; letter-spacing: 0.14em; color: var(--gold); text-transform: uppercase; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { color: var(--muted); text-decoration: none; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.2s; }
        .footer-links a:hover { color: var(--gold); }
        .footer-copy { font-size: 11px; color: var(--muted); }

        @media (max-width: 768px) {
          .terms-nav { padding: 16px 24px; }
          .page-wrap { padding: 48px 24px 80px; }
          .cookie-table { display: block; overflow-x: auto; }
          .pref-row { flex-direction: column; align-items: flex-start; gap: 12px; }
          .terms-footer { flex-direction: column; gap: 20px; text-align: center; padding: 24px; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
        }
      `,
        }}
      />
      <div className="terms-body">
        <nav className="terms-nav">
          <Link href="/" className="nav-logo">
            Anaqio
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="nav-back">
              ← Back to Home
            </Link>
            <ThemeSwitcher />
          </div>
        </nav>

        <div className="page-wrap">
          <div className="page-header">
            <div className="page-tag">Legal Document</div>
            <h1 className="page-title">Cookie Policy</h1>
            <div className="page-meta">
              <strong>Effective Date:</strong> February 21, 2026 &nbsp;·&nbsp;
              <strong>Last Updated:</strong> February 21, 2026 &nbsp;·&nbsp;
              <strong>Version:</strong> 1.0
            </div>
          </div>

          <div className="law-banner">
            <strong>Moroccan Law Compliance.</strong> This Cookie Policy
            complies with <strong>Law No. 09-08</strong> of February 18, 2009 on
            the Protection of Personal Data, and CNDP guidelines on cookies and
            electronic tracking. Non-essential cookies are deployed only with
            your explicit, informed, and freely given consent. You may modify
            your preferences at any time.
          </div>

          {/* 1 */}
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device (computer,
            tablet, or smartphone) when you visit a website. They allow the site
            to remember your actions and preferences over a period of time, so
            you don&apos;t have to re-enter them each time you visit. Cookies can
            also help us understand how our site is used.
          </p>
          <p>
            Similar technologies such as{" "}
            <strong>local storage, session storage, pixels, and web beacons</strong>{" "}
            may also be used for equivalent purposes. For simplicity, we refer
            to all such technologies as &quot;cookies&quot; in this policy.
          </p>

          {/* 2 */}
          <h2>2. Categories of Cookies We Use</h2>

          <h3>2.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the website and platform to function
            correctly. They cannot be disabled. They include cookies that enable
            authentication, security, and session management. No consent is
            required for these cookies under Law 09-08, as they are necessary
            for the service you have requested.
          </p>

          <h3>2.2 Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our site
            — which pages are most visited, where errors occur, and how users
            navigate. Data collected is aggregated and anonymized where
            possible. These cookies require your consent.
          </p>

          <h3>2.3 Functional / Preference Cookies</h3>
          <p>
            These cookies remember your choices (such as language, region, or
            display preferences) to provide a more personalized experience.
            These cookies require your consent.
          </p>

          <h3>2.4 Marketing Cookies</h3>
          <p>
            Marketing cookies track your browsing habits to allow us (and
            advertising partners) to show you relevant advertisements. These
            cookies require your explicit consent and are currently used only if
            you opt in. We do not sell your data to advertising networks.
          </p>

          {/* 3 */}
          <h2>3. Cookies We Use in Detail</h2>

          <table className="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Provider</th>
                <th>Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>anaqio_session</td>
                <td>Anaqio</td>
                <td>
                  <span className="type-badge essential">Essential</span>
                </td>
                <td>Maintains authenticated user session</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>anaqio_csrf</td>
                <td>Anaqio</td>
                <td>
                  <span className="type-badge essential">Essential</span>
                </td>
                <td>Cross-Site Request Forgery protection token</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>anaqio_consent</td>
                <td>Anaqio</td>
                <td>
                  <span className="type-badge essential">Essential</span>
                </td>
                <td>Records your cookie consent preferences</td>
                <td>13 months</td>
              </tr>
              <tr>
                <td>_ga, _ga_*</td>
                <td>Google Analytics</td>
                <td>
                  <span className="type-badge analytics">Analytics</span>
                </td>
                <td>
                  Distinguishes unique users, measures site traffic and behavior
                </td>
                <td>13 months</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics</td>
                <td>
                  <span className="type-badge analytics">Analytics</span>
                </td>
                <td>Stores and updates a unique value for each page visited</td>
                <td>24 hours</td>
              </tr>
              <tr>
                <td>anaqio_prefs</td>
                <td>Anaqio</td>
                <td>
                  <span className="type-badge analytics">Functional</span>
                </td>
                <td>Stores display preferences (theme, language, layout)</td>
                <td>12 months</td>
              </tr>
              <tr>
                <td>_fbp</td>
                <td>Meta (Facebook)</td>
                <td>
                  <span className="type-badge marketing">Marketing</span>
                </td>
                <td>
                  Used by Meta Pixel to deliver targeted advertising (opt-in
                  only)
                </td>
                <td>3 months</td>
              </tr>
            </tbody>
          </table>
          <p>
            <em>
              This table will be updated as new cookies are added to our
              services.
            </em>
          </p>

          {/* 4 */}
          <h2>4. Manage Your Cookie Preferences</h2>
          <p>
            You can manage your cookie preferences at any time using the
            controls below. Note that disabling certain cookies may affect
            website functionality.
          </p>

          <div className="preference-panel">
            <h3>Cookie Preference Centre</h3>

            <div className="pref-row">
              <div className="pref-info">
                <div className="pref-name">Strictly Necessary Cookies</div>
                <div className="pref-desc">
                  Required for the website to function. Cannot be disabled.
                </div>
              </div>
              <label className="pref-toggle">
                <input type="checkbox" checked disabled readOnly />
                <span className="pref-slider"></span>
              </label>
            </div>

            <div className="pref-row">
              <div className="pref-info">
                <div className="pref-name">Analytics Cookies</div>
                <div className="pref-desc">
                  Help us understand how you use Anaqio so we can improve the
                  experience.
                </div>
              </div>
              <label className="pref-toggle">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      analytics: e.target.checked,
                    })
                  }
                />
                <span className="pref-slider"></span>
              </label>
            </div>

            <div className="pref-row">
              <div className="pref-info">
                <div className="pref-name">Functional Cookies</div>
                <div className="pref-desc">
                  Remember your preferences for a personalized experience.
                </div>
              </div>
              <label className="pref-toggle">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      functional: e.target.checked,
                    })
                  }
                />
                <span className="pref-slider"></span>
              </label>
            </div>

            <div className="pref-row">
              <div className="pref-info">
                <div className="pref-name">Marketing Cookies</div>
                <div className="pref-desc">
                  Used to show relevant advertisements on other platforms.
                </div>
              </div>
              <label className="pref-toggle">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      marketing: e.target.checked,
                    })
                  }
                />
                <span className="pref-slider"></span>
              </label>
            </div>

            <button className="save-prefs" onClick={savePreferences}>
              Save Preferences
            </button>
            {showConfirm && (
              <div className="save-confirm">
                ✦ Your preferences have been saved.
              </div>
            )}
          </div>

          {/* 5 */}
          <h2>5. Browser-Level Controls</h2>
          <p>
            In addition to our preference centre, you can control cookies
            directly through your browser settings. Most browsers allow you to:
          </p>
          <ul>
            <li>View cookies currently stored on your device</li>
            <li>Delete all cookies or cookies from specific sites</li>
            <li>Block all cookies by default, or only third-party cookies</li>
            <li>Set preferences site by site</li>
          </ul>
          <p>For instructions, visit your browser&apos;s help documentation:</p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
                rel="noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noreferrer"
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            Please note that disabling cookies may impact the functionality and
            performance of Anaqio&apos;s platform.
          </p>

          {/* 6 */}
          <h2>6. Third-Party Cookies</h2>
          <p>
            Some cookies on Anaqio are set by third-party services integrated
            into our platform (such as Google Analytics and Meta Pixel). These
            third parties have their own privacy and cookie policies. We
            encourage you to review them:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/policy.php"
                target="_blank"
                rel="noreferrer"
              >
                Meta (Facebook) Data Policy
              </a>
            </li>
          </ul>
          <p>
            Anaqio is not responsible for the privacy practices of third-party
            services. These cookies are only activated upon your consent.
          </p>

          {/* 7 */}
          <h2>7. Consent &amp; Withdrawal</h2>
          <p>
            When you first visit Anaqio, a cookie consent banner will appear.
            Your consent is:
          </p>
          <ul>
            <li>
              <strong>Freely given</strong> — refusing non-essential cookies
              does not prevent access to the site
            </li>
            <li>
              <strong>Specific</strong> — separate categories of cookies require
              separate consent
            </li>
            <li>
              <strong>Informed</strong> — this policy explains what each cookie
              does
            </li>
            <li>
              <strong>Revocable</strong> — you may withdraw consent at any time
              via the preference centre above
            </li>
          </ul>
          <p>
            Your consent records are stored for 13 months, in line with CNDP
            guidance. Consent will be re-requested after this period or if our
            cookie practices change materially.
          </p>

          {/* 8 */}
          <h2>8. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy as we add new features, integrate
            new third-party tools, or in response to changes in applicable law.
            The &quot;Last Updated&quot; date at the top of this page will always
            reflect the most current version. Material changes will be
            communicated via the cookie consent banner on your next visit.
          </p>

          {/* 9 */}
          <h2>9. Contact</h2>
          <p>For any questions about our use of cookies:</p>
          <div className="highlight-box">
            <strong>Anaqio — Privacy &amp; Cookies</strong>
            <br />
            Email: <a href="mailto:privacy@anaqio.com">privacy@anaqio.com</a>
            <br />
            CNDP:{" "}
            <a href="https://www.cndp.ma" target="_blank" rel="noreferrer">
              www.cndp.ma
            </a>{" "}
            — Avenue Annakhil, Hay Ryad, Rabat, Morocco
          </div>
        </div>

        <footer className="terms-footer">
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
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/cookies">Cookies</Link>
            </li>
          </ul>
          <div className="footer-copy">© 2026 Anaqio.</div>
        </footer>
      </div>
    </>
  );
}
