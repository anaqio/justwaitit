import type { Metadata } from "next";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "Privacy Policy — Anaqio",
  description:
    "Privacy Policy for Anaqio, a virtual studio for fashion commerce.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --black: #0a0a08; --charcoal: #141412; --smoke: #1e1e1b;
          --bone: #f0ebe3; --ivory: #faf7f2; --gold: #c9a96e;
          --gold-pale: #e8d5b0; --muted: #5a5950; --line: rgba(201,169,110,0.2);
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

        .law-banner {
          background: var(--charcoal); border-left: 2px solid var(--gold);
          padding: 20px 24px; margin-bottom: 56px; font-size: 13px; color: var(--muted); line-height: 1.7;
        }
        .law-banner strong { color: var(--gold); font-weight: 400; }

        .terms-body h2 { font-family: var(--font-cormorant), serif; font-size: 26px; font-weight: 400; color: var(--ivory); margin: 56px 0 16px; padding-top: 56px; border-top: 1px solid var(--line); }
        .terms-body h2:first-of-type { margin-top: 0; padding-top: 0; border-top: none; }
        .terms-body h3 { font-family: var(--font-cormorant), serif; font-size: 18px; font-style: italic; color: var(--gold-pale); margin: 28px 0 10px; font-weight: 300; }
        .terms-body p { margin-bottom: 16px; color: var(--bone); }
        .terms-body ul, .terms-body ol { margin: 12px 0 20px 20px; }
        .terms-body li { margin-bottom: 8px; color: var(--bone); line-height: 1.7; }
        .terms-body a { color: var(--gold); text-decoration: none; }
        .terms-body a:hover { text-decoration: underline; }
        .terms-body strong { font-weight: 500; color: var(--ivory); }
        .terms-body em { font-style: italic; color: var(--gold-pale); }

        .highlight-box {
          background: rgba(201,169,110,0.06); border: 1px solid var(--line);
          padding: 24px 28px; margin: 24px 0; font-size: 14px;
        }
        .highlight-box strong { color: var(--gold); }

        .rights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin: 24px 0; }
        .right-card { background: var(--charcoal); padding: 24px; }
        .right-name { font-family: var(--font-cormorant), serif; font-size: 16px; color: var(--gold-pale); margin-bottom: 8px; }
        .right-desc { font-size: 12px; color: var(--muted); line-height: 1.7; }

        .terms-footer { border-top: 1px solid var(--line); padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1; }
        .footer-logo { font-family: var(--font-cormorant), serif; font-size: 16px; font-weight: 600; letter-spacing: 0.14em; color: var(--gold); text-transform: uppercase; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { color: var(--muted); text-decoration: none; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.2s; }
        .footer-links a:hover { color: var(--gold); }
        .footer-copy { font-size: 11px; color: var(--muted); }

        @media (max-width: 768px) {
          .terms-nav { padding: 16px 24px; }
          .page-wrap { padding: 48px 24px 80px; }
          .rights-grid { grid-template-columns: 1fr; }
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
            <h1 className="page-title">Privacy Policy</h1>
            <div className="page-meta">
              <strong>Effective Date:</strong> February 21, 2026 &nbsp;·&nbsp;
              <strong>Last Updated:</strong> February 21, 2026 &nbsp;·&nbsp;
              <strong>Version:</strong> 1.0
            </div>
          </div>

          <div className="law-banner">
            <strong>Moroccan Law Compliance Notice.</strong> This Privacy
            Policy is governed by <strong>Law No. 09-08</strong> of February 18,
            2009 on the Protection of Individuals with regard to the Processing
            of Personal Data (Bulletin Officiel No. 5711), and its implementing
            Decree No. 2-09-165. Personal data processing activities described
            herein have been or will be declared to the{" "}
            <strong>
              Commission Nationale de contrôle de la protection des Données à
              caractère Personnel (CNDP)
            </strong>
            , as required under Article 12 of Law 09-08.
          </div>

          {/* 1 */}
          <h2>1. Data Controller</h2>
          <p>The data controller responsible for your personal data is:</p>
          <div className="highlight-box">
            <strong>Anaqio SARL</strong>
            <br />
            Casablanca, Morocco
            <br />
            Email: <a href="mailto:privacy@anaqio.com">privacy@anaqio.com</a>
            <br />
            CNDP Declaration/Authorization No.: PENDING
          </div>
          <p>
            For all data protection inquiries, you may contact our Data
            Protection Officer (DPO) at{" "}
            <a href="mailto:dpo@anaqio.com">dpo@anaqio.com</a>.
          </p>

          {/* 2 */}
          <h2>2. Scope of This Policy</h2>
          <p>
            This Privacy Policy applies to all personal data collected by{" "}
            <strong>Anaqio</strong> (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) through:
          </p>
          <ul>
            <li>
              Our website at <strong>anaqio.com</strong> and all subdomains
            </li>
            <li>Our SaaS platform and virtual studio application</li>
            <li>Our mobile application (iOS and Android)</li>
            <li>Waitlist registration and pre-launch communications</li>
            <li>Any other service where this Policy is referenced</li>
          </ul>
          <p>
            By using Anaqio, you acknowledge you have read and understood this
            Policy. If you do not agree, please do not use our services.
          </p>

          {/* 3 */}
          <h2>3. Personal Data We Collect</h2>
          <h3>3.1 Data You Provide Directly</h3>
          <ul>
            <li>
              <strong>Waitlist registration:</strong> email address, name
              (optional)
            </li>
            <li>
              <strong>Account creation:</strong> full name, email address,
              password (hashed), company name, role, country
            </li>
            <li>
              <strong>Billing information:</strong> name, billing address;
              payment card data is processed by our PCI-compliant payment
              provider and not stored on our systems
            </li>
            <li>
              <strong>Communication:</strong> messages, support requests,
              feedback, and any content you submit
            </li>
          </ul>
          <h3>3.2 Data Collected Automatically</h3>
          <ul>
            <li>
              <strong>Technical data:</strong> IP address, browser type and
              version, operating system, device identifiers, time zone
            </li>
            <li>
              <strong>Usage data:</strong> pages visited, features used, session
              duration, click patterns, error logs
            </li>
            <li>
              <strong>Cookies and tracking:</strong> see our{" "}
              <Link href="/cookies">Cookie Policy</Link> for full details
            </li>
          </ul>
          <h3>3.3 Data from Third Parties</h3>
          <ul>
            <li>
              Social login providers (Google, Apple) if you authenticate via
              these services
            </li>
            <li>Analytics partners (aggregated, anonymized)</li>
            <li>Fashion catalogue integrations you authorize</li>
          </ul>
          <p>
            <em>
              We do not collect or process sensitive personal data (données
              sensibles) as defined under Article 1 of Law 09-08, including
              health, racial origin, political opinions, or biometric data used
              for identification purposes.
            </em>
          </p>

          {/* 4 */}
          <h2>4. Legal Bases for Processing</h2>
          <p>
            Under Article 4 of Law 09-08, all processing of personal data
            requires a legal basis. We process your data on the following
            grounds:
          </p>
          <ul>
            <li>
              <strong>Consent (Article 4-1):</strong> Waitlist registration,
              marketing communications, non-essential cookies. You may withdraw
              consent at any time.
            </li>
            <li>
              <strong>Contractual necessity (Article 4-2):</strong> Providing,
              maintaining, and improving our platform; processing your
              subscription and billing.
            </li>
            <li>
              <strong>Legal obligation (Article 4-3):</strong> Tax records,
              accounting obligations, fraud prevention, and compliance with
              Moroccan law.
            </li>
            <li>
              <strong>Legitimate interests (Article 4-5):</strong> Platform
              security, analytics for service improvement, and prevention of
              abuse.
            </li>
          </ul>

          {/* 5 */}
          <h2>5. Purposes of Processing</h2>
          <p>Your personal data is used for the following purposes:</p>
          <ul>
            <li>
              Managing your waitlist registration and sending pre-launch
              communications
            </li>
            <li>
              Creating and managing your Anaqio account and subscription
            </li>
            <li>
              Delivering the AI-driven virtual studio and associated features
            </li>
            <li>Processing payments and issuing invoices</li>
            <li>Providing customer support and responding to inquiries</li>
            <li>
              Sending product updates, feature announcements, and relevant
              marketing (with your consent)
            </li>
            <li>
              Ensuring platform security, detecting fraud, and preventing
              misuse
            </li>
            <li>Conducting analytics to improve our services</li>
            <li>Complying with legal and regulatory obligations</li>
          </ul>
          <p>
            We will not use your data for any purpose incompatible with those
            listed above without notifying you and, where required, obtaining
            your consent.
          </p>

          {/* 6 */}
          <h2>6. Your Rights Under Law 09-08</h2>
          <p>
            In accordance with Articles 7 through 10 of Law 09-08, you have the
            following rights over your personal data:
          </p>
          <div className="rights-grid">
            <div className="right-card">
              <div className="right-name">Right of Access (Art. 7)</div>
              <div className="right-desc">
                You may request a copy of all personal data we hold about you,
                the purposes of processing, and the categories of recipients.
              </div>
            </div>
            <div className="right-card">
              <div className="right-name">Right to Rectification (Art. 8)</div>
              <div className="right-desc">
                You may request correction of any inaccurate or incomplete
                personal data without undue delay.
              </div>
            </div>
            <div className="right-card">
              <div className="right-name">Right to Erasure (Art. 9)</div>
              <div className="right-desc">
                You may request deletion of your personal data where it is no
                longer necessary for the purposes it was collected, subject to
                legal retention requirements.
              </div>
            </div>
            <div className="right-card">
              <div className="right-name">Right to Object (Art. 10)</div>
              <div className="right-desc">
                You may object at any time to processing based on legitimate
                interests, including profiling and direct marketing
                communications.
              </div>
            </div>
          </div>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@anaqio.com">privacy@anaqio.com</a>. We will
            respond within 30 days. If you believe your rights have been
            violated, you may lodge a complaint with the <strong>CNDP</strong>{" "}
            at{" "}
            <a href="https://www.cndp.ma" target="_blank">
              www.cndp.ma
            </a>{" "}
            — Avenue Annakhil, Hay Ryad, Rabat, Morocco.
          </p>

          {/* 7 */}
          <h2>7. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes described in this Policy:
          </p>
          <ul>
            <li>
              <strong>Waitlist data:</strong> Until the service launches and you
              either register or 24 months, whichever comes first
            </li>
            <li>
              <strong>Account data:</strong> Duration of your subscription plus
              3 years after closure
            </li>
            <li>
              <strong>Billing and transactional records:</strong> 10 years as
              required by Moroccan commercial and tax law
            </li>
            <li>
              <strong>Support communications:</strong> 2 years from last
              interaction
            </li>
            <li>
              <strong>Analytics data:</strong> 13 months maximum in identifiable
              form
            </li>
            <li>
              <strong>Cookie consent records:</strong> 13 months
            </li>
          </ul>
          <p>
            After applicable retention periods, data is securely deleted or
            anonymized.
          </p>

          {/* 8 */}
          <h2>8. Data Transfers and International Processing</h2>
          <p>
            Anaqio may transfer personal data to countries outside Morocco for
            infrastructure and operational purposes. Where data is transferred
            outside Morocco, we ensure adequate safeguards are in place,
            including:
          </p>
          <ul>
            <li>Standard contractual clauses with third-party processors</li>
            <li>
              Transfers only to countries with an adequate level of data
              protection as recognized by the CNDP
            </li>
            <li>Data Processing Agreements (DPAs) with all sub-processors</li>
          </ul>
          <p>
            You may request a list of our current data processing partners and
            associated transfer mechanisms by contacting us at{" "}
            <a href="mailto:privacy@anaqio.com">privacy@anaqio.com</a>.
          </p>

          {/* 9 */}
          <h2>9. Third-Party Processors</h2>
          <p>
            We engage trusted third-party service providers who process data on
            our behalf. All processors are bound by confidentiality obligations
            and data processing agreements. Key categories include:
          </p>
          <ul>
            <li>
              <strong>Cloud infrastructure:</strong> Hosting and storage (e.g.,
              AWS, GCP)
            </li>
            <li>
              <strong>Payment processing:</strong> PCI-DSS compliant payment
              gateways
            </li>
            <li>
              <strong>Analytics:</strong> Usage analytics platforms
              (anonymized/aggregated)
            </li>
            <li>
              <strong>Email communications:</strong> Transactional and marketing
              email providers
            </li>
            <li>
              <strong>AI/ML services:</strong> AI model providers for virtual
              studio functionality
            </li>
            <li>
              <strong>Customer support:</strong> Helpdesk and ticketing
              platforms
            </li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal data to third parties
            for their own marketing purposes.
          </p>

          {/* 10 */}
          <h2>10. Security Measures</h2>
          <p>
            We implement appropriate technical and organizational security
            measures in accordance with Article 23 of Law 09-08, including:
          </p>
          <ul>
            <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li>
              Access controls, role-based permissions, and multi-factor
              authentication
            </li>
            <li>Regular security assessments and penetration testing</li>
            <li>Employee training on data protection obligations</li>
            <li>Incident response procedures and breach notification protocols</li>
          </ul>
          <p>
            In the event of a personal data breach that may affect your rights
            and freedoms, we will notify the CNDP and, where required, affected
            individuals in accordance with applicable law.
          </p>

          {/* 11 */}
          <h2>11. Cookies</h2>
          <p>
            Anaqio uses cookies and similar tracking technologies. For detailed
            information on which cookies we use, their purposes, and how to
            manage your preferences, please refer to our{" "}
            <Link href="/cookies">Cookie Policy</Link>.
          </p>

          {/* 12 */}
          <h2>12. Children&apos;s Privacy</h2>
          <p>
            Anaqio&apos;s services are not directed at individuals under the age of
            18. We do not knowingly collect personal data from minors. If you
            believe a minor has provided us with personal data, please contact
            us at <a href="mailto:privacy@anaqio.com">privacy@anaqio.com</a> and
            we will promptly delete such data.
          </p>

          {/* 13 */}
          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            our practices, technology, or legal requirements. We will notify you
            of material changes via email or a prominent notice on our platform
            at least 15 days before changes take effect. The &quot;Last Updated&quot;
            date at the top of this page will always reflect the most current
            version.
          </p>

          {/* 14 */}
          <h2>14. Contact</h2>
          <p>
            For any questions, requests, or concerns regarding your personal
            data or this Privacy Policy:
          </p>
          <div className="highlight-box">
            <strong>Anaqio — Data Protection</strong>
            <br />
            Email: <a href="mailto:privacy@anaqio.com">privacy@anaqio.com</a>
            <br />
            Address: Casablanca, Morocco
            <br />
            Response time: within 30 days of receipt
          </div>
          <p>
            You also have the right to lodge a complaint with the CNDP — the
            Moroccan supervisory authority for personal data protection — at{" "}
            <a href="https://www.cndp.ma" target="_blank">
              www.cndp.ma
            </a>
            .
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
