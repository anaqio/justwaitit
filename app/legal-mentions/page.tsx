import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Mentions — Anaqio",
  description: "Legal Mentions for Anaqio, a virtual studio for fashion commerce.",
};

export default function LegalMentionsPage() {
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
        .page-subtitle { font-family: var(--font-cormorant), serif; font-size: 20px; font-style: italic; color: var(--muted); margin-bottom: 20px; }
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
        .terms-body em { font-style: italic; color: var(--gold-pale); }

        .info-card {
          background: var(--charcoal);
          border: 1px solid var(--line);
          padding: 32px 36px;
          margin: 24px 0;
        }
        .info-card-title {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .info-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 8px 24px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(201,169,110,0.06);
          font-size: 14px;
        }
        .info-row:last-child { border-bottom: none; }
        .info-label { color: var(--muted); font-size: 12px; letter-spacing: 0.06em; align-self: start; padding-top: 2px; }
        .info-value { color: var(--bone); }

        .highlight-box { background: rgba(201,169,110,0.06); border: 1px solid var(--line); padding: 24px 28px; margin: 24px 0; font-size: 14px; }
        .highlight-box strong { color: var(--gold); }

        .terms-footer { border-top: 1px solid var(--line); padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1; }
        .footer-logo { font-family: var(--font-cormorant), serif; font-size: 16px; font-weight: 600; letter-spacing: 0.14em; color: var(--gold); text-transform: uppercase; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { color: var(--muted); text-decoration: none; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.2s; }
        .footer-links a:hover { color: var(--gold); }
        .footer-copy { font-size: 11px; color: var(--muted); }

        @media (max-width: 768px) {
          .terms-nav { padding: 16px 24px; }
          .page-wrap { padding: 48px 24px 80px; }
          .info-row { grid-template-columns: 1fr; }
          .info-label { padding-top: 0; color: var(--gold); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; }
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
          <Link href="/" className="nav-back">
            ← Back to Home
          </Link>
        </nav>

        <div className="page-wrap">
          <div className="page-header">
            <div className="page-tag">Legal Document</div>
            <h1 className="page-title">Legal Mentions</h1>
            <div className="page-subtitle">Mentions Légales</div>
            <div className="page-meta">
              <strong>Last Updated:</strong> February 21, 2026
            </div>
          </div>

          <div className="law-banner">
            <strong>Mandatory Disclosure.</strong> In accordance with{" "}
            <strong>Law No. 53-05</strong> on the Electronic Exchange of Legal
            Data (promulgated by Dahir No. 1-07-129 of 30 November 2007) and
            applicable Moroccan commercial legislation, the following
            information is required to be published and accessible to any person
            using this website.
          </div>

          {/* 1 */}
          <h2>1. Publisher / Éditeur du site</h2>
          <p>
            This website, accessible at{" "}
            <a href="https://anaqio.com">anaqio.com</a>, is published by:
          </p>

          <div className="info-card">
            <div className="info-card-title">Company Information</div>
            <div className="info-row">
              <div className="info-label">Company Name</div>
              <div className="info-value">Anaqio SARL</div>
            </div>
            <div className="info-row">
              <div className="info-label">Legal Form</div>
              <div className="info-value">SARL</div>
            </div>
            <div className="info-row">
              <div className="info-label">Share Capital</div>
              <div className="info-value">10,000 MAD</div>
            </div>
            <div className="info-row">
              <div className="info-label">Registered Address</div>
              <div className="info-value">Casablanca, Morocco</div>
            </div>
            <div className="info-row">
              <div className="info-label">Registre de Commerce</div>
              <div className="info-value">
                RC N° PENDING — Casablanca Commerce Court
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">Identifiant Commun de l&apos;Entreprise</div>
              <div className="info-value">ICE: PENDING</div>
            </div>
            <div className="info-row">
              <div className="info-label">Tax Identification No.</div>
              <div className="info-value">IF: PENDING</div>
            </div>
            <div className="info-row">
              <div className="info-label">Publication Director</div>
              <div className="info-value">Mohamed Moughamir</div>
            </div>
            <div className="info-row">
              <div className="info-label">Contact Email</div>
              <div className="info-value">
                <a href="mailto:hello@anaqio.com">hello@anaqio.com</a>
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">Website</div>
              <div className="info-value">
                <a href="https://anaqio.com">https://anaqio.com</a>
              </div>
            </div>
          </div>

          {/* 2 */}
          <h2>2. Hosting Provider / Hébergeur</h2>
          <p>This website and its services are hosted by:</p>

          <div className="info-card">
            <div className="info-card-title">Primary Hosting</div>
            <div className="info-row">
              <div className="info-label">Provider Name</div>
              <div className="info-value">Vercel Inc.</div>
            </div>
            <div className="info-row">
              <div className="info-label">Registered Address</div>
              <div className="info-value">
                440 N Barranca Ave #4133, Covina, CA 91723, United States
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">Website</div>
              <div className="info-value">
                <a href="https://vercel.com" target="_blank" rel="noreferrer">
                  https://vercel.com
                </a>
              </div>
            </div>
          </div>
          <p>
            In the event of a technical incident, abuse, or illegal content
            report, please contact us at{" "}
            <a href="mailto:abuse@anaqio.com">abuse@anaqio.com</a>.
          </p>

          {/* 3 */}
          <h2>3. Data Protection / Protection des Données</h2>
          <p>
            Anaqio processes personal data in compliance with{" "}
            <strong>Moroccan Law No. 09-08</strong> of February 18, 2009 on the
            Protection of Individuals with regard to the Processing of Personal
            Data.
          </p>

          <div className="info-card">
            <div className="info-card-title">CNDP Registration</div>
            <div className="info-row">
              <div className="info-label">Data Controller</div>
              <div className="info-value">Anaqio SARL</div>
            </div>
            <div className="info-row">
              <div className="info-label">CNDP Declaration No.</div>
              <div className="info-value">PENDING</div>
            </div>
            <div className="info-row">
              <div className="info-label">DPO Contact</div>
              <div className="info-value">
                <a href="mailto:privacy@anaqio.com">privacy@anaqio.com</a>
              </div>
            </div>
            <div className="info-row">
              <div className="info-label">Supervisory Authority</div>
              <div className="info-value">
                CNDP —{" "}
                <a href="https://www.cndp.ma" target="_blank" rel="noreferrer">
                  www.cndp.ma
                </a>
                <br />
                Avenue Annakhil, Hay Ryad, Rabat, Morocco
              </div>
            </div>
          </div>
          <p>
            For full details on how we collect, use, and protect your personal
            data, please read our <Link href="/privacy">Privacy Policy</Link>.
            For information on cookies, please see our{" "}
            <Link href="/cookies">Cookie Policy</Link>.
          </p>

          {/* 4 */}
          <h2>4. Intellectual Property / Propriété Intellectuelle</h2>
          <p>
            The entire content of this website — including but not limited to
            its text, graphics, logos, icons, imagery, software, user interface
            design, AI models, and platform features — is the exclusive property
            of <strong>Anaqio SARL</strong> or its licensors, and is protected
            under Moroccan intellectual property law (
            <strong>Law No. 17-97</strong> on Industrial Property as amended,
            and the Copyright Law).
          </p>
          <p>
            Any reproduction, representation, modification, distribution, or
            commercial exploitation of this content, in whole or in part, by any
            means and in any form whatsoever, without the prior written
            authorization of Anaqio, is strictly prohibited and may constitute
            an infringement of intellectual property rights, sanctionable under
            Moroccan law.
          </p>
          <p>
            The <strong>Anaqio</strong> name, logo, and all associated
            trademarks are the property of Anaqio SARL. Any unauthorized use is
            prohibited.
          </p>

          {/* 5 */}
          <h2>5. Content Accuracy &amp; Disclaimer</h2>
          <p>
            The information published on this website is provided for general
            informational purposes only. While we strive for accuracy and keep
            the content up to date, Anaqio makes no warranty, express or
            implied, as to:
          </p>
          <ul>
            <li>
              The completeness, accuracy, or timeliness of the information
              presented
            </li>
            <li>
              The results that may be obtained from the use of the information
            </li>
            <li>The continuous availability of the website or its services</li>
          </ul>
          <p>
            Anaqio reserves the right to modify, correct, or remove any content
            on this website at any time without prior notice.
          </p>

          {/* 6 */}
          <h2>6. Hyperlinks / Liens Hypertextes</h2>
          <h3>Outgoing Links</h3>
          <p>
            This website may contain links to third-party websites. These links
            are provided solely for convenience and informational purposes.
            Anaqio has no control over the content of third-party sites and
            assumes no responsibility for their content, privacy practices, or
            availability. The presence of a link does not imply endorsement by
            Anaqio.
          </p>

          <h3>Incoming Links</h3>
          <p>
            Any website wishing to create a hyperlink to anaqio.com must obtain
            prior written authorization from Anaqio. Framing, deep linking, or
            any reproduction of this website&apos;s content on another website
            is strictly prohibited without written consent. Requests may be
            submitted to <a href="mailto:legal@anaqio.com">legal@anaqio.com</a>.
          </p>

          {/* 7 */}
          <h2>7. Applicable Law &amp; Jurisdiction</h2>
          <p>
            This website and these Legal Mentions are governed by the laws of
            the <strong>Kingdom of Morocco</strong>. Any dispute arising from
            the use of this website that cannot be resolved amicably shall be
            subject to the exclusive jurisdiction of the competent courts of{" "}
            <strong>Casablanca, Morocco</strong>.
          </p>
          <p>Applicable laws include, without limitation:</p>
          <ul>
            <li>
              <strong>Dahir des Obligations et Contrats (DOC)</strong> — General
              obligations and contracts
            </li>
            <li>
              <strong>Law No. 53-05</strong> — Electronic exchange of legal data
              (e-commerce)
            </li>
            <li>
              <strong>Law No. 09-08</strong> — Personal data protection
            </li>
            <li>
              <strong>Law No. 31-08</strong> — Consumer protection
            </li>
            <li>
              <strong>Law No. 17-97</strong> — Industrial property (as amended)
            </li>
            <li>
              <strong>Dahir of September 29, 1976</strong> — Copyright law
            </li>
          </ul>

          {/* 8 */}
          <h2>8. Contact / Médiation</h2>
          <p>
            For any legal inquiry, notice of illegal content, or to exercise
            your rights, please contact us:
          </p>
          <div className="highlight-box">
            <strong>Anaqio — Legal Department</strong>
            <br />
            Email: <a href="mailto:legal@anaqio.com">legal@anaqio.com</a>
            <br />
            Address: Casablanca, Morocco
            <br />
            <br />
            <strong>Response commitment:</strong> We will acknowledge receipt
            within 5 business days and respond within 15 business days for
            standard inquiries.
          </div>
          <p>
            In the event of a consumer dispute, and if no amicable resolution is
            reached, you may contact the relevant consumer protection body in
            Morocco or refer the matter to the competent court of your domicile.
          </p>

          {/* 9 */}
          <h2>9. Date of Last Update</h2>
          <p>
            These Legal Mentions were last updated on{" "}
            <strong>February 21, 2026</strong>. Anaqio reserves the right to
            update this page at any time to reflect changes in applicable law,
            company information, or hosting arrangements. Users are encouraged
            to check this page periodically.
          </p>
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
