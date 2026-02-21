import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Anaqio",
  description:
    "Terms of Service for Anaqio, a virtual studio for fashion commerce.",
};

export default function TermsOfServicePage() {
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
        .terms-nav { position: sticky; top: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 20px 48px; background: rgba(10,10,8,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
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
        .terms-body ul, .terms-body ol { margin: 12px 0 20px 20px; }
        .terms-body li { margin-bottom: 8px; color: var(--bone); line-height: 1.7; }
        .terms-body a { color: var(--gold); text-decoration: none; }
        .terms-body a:hover { text-decoration: underline; }
        .terms-body strong { font-weight: 500; color: var(--ivory); }
        .terms-body em { font-style: italic; color: var(--gold-pale); }

        .highlight-box { background: rgba(201,169,110,0.06); border: 1px solid var(--line); padding: 24px 28px; margin: 24px 0; font-size: 14px; }
        .highlight-box strong { color: var(--gold); }

        .warning-box { background: rgba(180,60,40,0.08); border: 1px solid rgba(180,60,40,0.3); padding: 20px 24px; margin: 24px 0; font-size: 13px; line-height: 1.7; color: var(--bone); }

        .toc { background: var(--charcoal); padding: 32px 36px; margin-bottom: 56px; }
        .toc-title { font-family: var(--font-cormorant), serif; font-size: 14px; color: var(--gold); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px; }
        .toc ol { margin: 0; padding-left: 16px; }
        .toc li { font-size: 13px; color: var(--muted); margin-bottom: 6px; }
        .toc a { color: var(--muted); transition: color 0.2s; }
        .toc a:hover { color: var(--gold); text-decoration: none; }

        .terms-footer { border-top: 1px solid var(--line); padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1; }
        .footer-logo { font-family: var(--font-cormorant), serif; font-size: 16px; font-weight: 600; letter-spacing: 0.14em; color: var(--gold); text-transform: uppercase; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { color: var(--muted); text-decoration: none; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.2s; }
        .footer-links a:hover { color: var(--gold); }
        .footer-copy { font-size: 11px; color: var(--muted); }

        @media (max-width: 768px) {
          .terms-nav { padding: 16px 24px; }
          .page-wrap { padding: 48px 24px 80px; }
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
            <h1 className="page-title">Terms of Service</h1>
            <div className="page-meta">
              <strong>Effective Date:</strong> February 21, 2026 &nbsp;·&nbsp;
              <strong>Last Updated:</strong> February 21, 2026 &nbsp;·&nbsp;
              <strong>Version:</strong> 1.0
            </div>
          </div>

          <div className="law-banner">
            <strong>Moroccan Law Compliance.</strong> These Terms of Service are
            governed by and construed in accordance with Moroccan law, including{" "}
            <strong>Law No. 53-05</strong> on Electronic Exchange of Legal Data,{" "}
            <strong>Law No. 31-08</strong> on Consumer Protection Measures, and
            the <strong>Dahir des Obligations et Contrats (DOC)</strong>. Any
            dispute arising from these Terms shall be subject to the exclusive
            jurisdiction of the competent courts of Casablanca, Morocco.
          </div>

          <div className="toc">
            <div className="toc-title">Table of Contents</div>
            <ol>
              <li>
                <a href="#acceptance">Acceptance of Terms</a>
              </li>
              <li>
                <a href="#definitions">Definitions</a>
              </li>
              <li>
                <a href="#service">Description of Service</a>
              </li>
              <li>
                <a href="#waitlist">Waitlist &amp; Pre-Launch</a>
              </li>
              <li>
                <a href="#account">Account Registration &amp; Security</a>
              </li>
              <li>
                <a href="#subscription">Subscription &amp; Billing</a>
              </li>
              <li>
                <a href="#ip">Intellectual Property</a>
              </li>
              <li>
                <a href="#content">User Content &amp; AI Outputs</a>
              </li>
              <li>
                <a href="#prohibited">Prohibited Uses</a>
              </li>
              <li>
                <a href="#warranties">Disclaimers &amp; Warranties</a>
              </li>
              <li>
                <a href="#liability">Limitation of Liability</a>
              </li>
              <li>
                <a href="#termination">Termination</a>
              </li>
              <li>
                <a href="#changes">Changes to Terms</a>
              </li>
              <li>
                <a href="#governing">Governing Law &amp; Dispute Resolution</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ol>
          </div>

          {/* 1 */}
          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Anaqio&apos;s website, platform, mobile
            application, or any associated services (collectively, the{" "}
            <strong>&quot;Service&quot;</strong>), you confirm that you have
            read, understood, and agree to be bound by these Terms of Service (
            <strong>&quot;Terms&quot;</strong>) and our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <p>
            If you are accessing the Service on behalf of a company or other
            legal entity, you represent that you have the authority to bind such
            entity to these Terms. In that case, &quot;you&quot; and
            &quot;your&quot; refers to that entity.
          </p>
          <p>If you do not agree to these Terms, you must not use the Service.</p>
          <p>
            You must be at least <strong>18 years of age</strong> to use Anaqio.
            By using the Service, you represent that you meet this minimum age
            requirement.
          </p>

          {/* 2 */}
          <h2 id="definitions">2. Definitions</h2>
          <ul>
            <li>
              <strong>&quot;Anaqio,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;</strong> refers to Anaqio
              SARL, operator of the Anaqio platform.
            </li>
            <li>
              <strong>&quot;Service&quot;</strong> means the AI-driven virtual
              studio SaaS platform, website, mobile app, APIs, and all related
              services provided by Anaqio.
            </li>
            <li>
              <strong>&quot;User,&quot; &quot;you,&quot; &quot;your&quot;</strong> means any individual or entity
              accessing or using the Service.
            </li>
            <li>
              <strong>&quot;Account&quot;</strong> means a registered user
              profile on the Anaqio platform.
            </li>
            <li>
              <strong>&quot;User Content&quot;</strong> means any materials,
              images, data, text, or files you upload, submit, or transmit
              through the Service.
            </li>
            <li>
              <strong>&quot;AI Outputs&quot;</strong> means images, lookbooks,
              visuals, or other content generated by Anaqio&apos;s AI models
              using your inputs and/or User Content.
            </li>
            <li>
              <strong>&quot;Subscription&quot;</strong> means a paid or
              free-trial access plan to the Service as described on our pricing
              page.
            </li>
          </ul>

          {/* 3 */}
          <h2 id="service">3. Description of Service</h2>
          <p>
            Anaqio is an AI-powered virtual studio designed for fashion
            commerce. The Service enables users to:
          </p>
          <ul>
            <li>
              Generate editorial-quality product imagery and lookbooks using
              artificial intelligence
            </li>
            <li>Create virtual try-on experiences for fashion items</li>
            <li>
              Manage and publish fashion content to e-commerce and marketing
              channels
            </li>
            <li>
              Collaborate on creative direction and brand styling workflows
            </li>
          </ul>
          <p>
            We reserve the right to modify, enhance, suspend, or discontinue any
            aspect of the Service at any time, with reasonable notice where
            practicable. We will make reasonable efforts to notify registered
            users of material changes.
          </p>

          {/* 4 */}
          <h2 id="waitlist">4. Waitlist &amp; Pre-Launch</h2>
          <p>
            Prior to the general availability of the Service, Anaqio operates a
            waitlist program. By registering your email address on our waitlist:
          </p>
          <ul>
            <li>
              You consent to receive communications about Anaqio&apos;s launch,
              features, and early-access opportunities
            </li>
            <li>
              Your submission does not guarantee access to the Service or any
              particular features
            </li>
            <li>
              Waitlist position confers no contractual right, priority claim, or
              financial interest
            </li>
            <li>
              You may unsubscribe from waitlist communications at any time via
              the link in any email we send
            </li>
          </ul>
          <p>
            Waitlist data is processed in accordance with our{" "}
            <Link href="/privacy">Privacy Policy</Link> and Moroccan Law 09-08.
          </p>

          {/* 5 */}
          <h2 id="account">5. Account Registration &amp; Security</h2>
          <p>
            To access the full Service, you must create an Account by providing
            accurate, complete, and up-to-date information. You agree to:
          </p>
          <ul>
            <li>
              Maintain the confidentiality of your login credentials and not
              share them with third parties
            </li>
            <li>
              Promptly notify Anaqio of any unauthorized use of your Account at{" "}
              <a href="mailto:security@anaqio.com">security@anaqio.com</a>
            </li>
            <li>Accept responsibility for all activities that occur under your Account</li>
            <li>
              Ensure all information in your Account profile remains accurate
              and current
            </li>
          </ul>
          <p>
            Anaqio will not be liable for any loss or damage resulting from your
            failure to maintain the security of your Account credentials.
          </p>

          {/* 6 */}
          <h2 id="subscription">6. Subscription &amp; Billing</h2>
          <h3>6.1 Subscription Plans</h3>
          <p>
            Anaqio offers subscription-based access to the Service. Plan
            details, pricing, and features are described on our website. Prices
            are displayed in MAD and are exclusive of applicable taxes.
          </p>

          <h3>6.2 Billing Cycle</h3>
          <p>
            Subscriptions are billed on a recurring basis (monthly or annually,
            as selected) beginning on the date of purchase. You authorize Anaqio
            to charge your designated payment method for all applicable fees.
          </p>

          <h3>6.3 Free Trials</h3>
          <p>
            Where a free trial is offered, it will be clearly communicated with
            its duration and conditions. At the end of the trial period, your
            account will automatically convert to a paid subscription unless
            cancelled beforehand. We will send a reminder email before
            conversion.
          </p>

          <h3>6.4 Cancellation &amp; Refunds</h3>
          <p>
            You may cancel your subscription at any time through your Account
            settings. Cancellation takes effect at the end of the current
            billing period; you retain access until that date. We do not provide
            pro-rated refunds for partial billing periods, except:
          </p>
          <ul>
            <li>
              Where required by applicable Moroccan consumer protection law (Law
              31-08)
            </li>
            <li>In cases of material service failure attributable to Anaqio</li>
          </ul>

          <h3>6.5 Price Changes</h3>
          <p>
            Anaqio reserves the right to modify subscription prices. We will
            provide at least <strong>30 days&apos; written notice</strong> before
            any price change takes effect. Continued use after the effective
            date constitutes acceptance of the new pricing.
          </p>

          {/* 7 */}
          <h2 id="ip">7. Intellectual Property</h2>
          <h3>7.1 Anaqio&apos;s IP</h3>
          <p>
            All rights, title, and interest in the Service — including but not
            limited to the software, AI models, algorithms, user interface,
            design, trademarks, and all associated content created by Anaqio —
            are owned by or licensed to Anaqio and are protected under
            applicable intellectual property laws. Nothing in these Terms
            transfers ownership of Anaqio&apos;s IP to you.
          </p>

          <h3>7.2 Your Content</h3>
          <p>
            You retain all ownership rights in User Content you upload to the
            Service. By uploading User Content, you grant Anaqio a
            non-exclusive, worldwide, royalty-free license to use, process,
            store, and display your User Content solely for the purpose of
            providing the Service to you. This license terminates when you
            delete your User Content or close your Account.
          </p>

          <h3>7.3 AI Outputs</h3>
          <p>
            AI Outputs generated using your User Content are made available to
            you subject to the following:
          </p>
          <ul>
            <li>
              You may use AI Outputs for commercial purposes consistent with
              your subscription plan
            </li>
            <li>
              Anaqio does not claim ownership over AI Outputs generated from
              your unique inputs
            </li>
            <li>
              You represent that your use of AI Outputs does not infringe
              third-party intellectual property rights
            </li>
            <li>
              AI Outputs generated from publicly available or shared inputs are
              not exclusively yours
            </li>
          </ul>

          <h3>7.4 Feedback</h3>
          <p>
            If you provide feedback, suggestions, or ideas about the Service,
            you grant Anaqio an irrevocable, perpetual, royalty-free right to
            use such feedback in any manner without compensation or attribution
            to you.
          </p>

          {/* 8 */}
          <h2 id="content">8. User Content &amp; AI Outputs</h2>
          <p>
            You are solely responsible for all User Content you upload and must
            ensure it does not:
          </p>
          <ul>
            <li>
              Infringe any third party&apos;s intellectual property, privacy, or
              personality rights
            </li>
            <li>Contain illegal, defamatory, obscene, or harmful material</li>
            <li>
              Include unauthorized images of real individuals, particularly
              without consent
            </li>
            <li>Violate any applicable Moroccan or international law</li>
          </ul>
          <p>
            Anaqio reserves the right to remove User Content that violates these
            Terms, with or without prior notice. Anaqio&apos;s AI models may
            produce unexpected or imperfect results; you are responsible for
            reviewing all AI Outputs before commercial use.
          </p>

          {/* 9 */}
          <h2 id="prohibited">9. Prohibited Uses</h2>
          <p>You may not use the Service to:</p>
          <ul>
            <li>
              Generate content that violates any person&apos;s rights, including
              privacy, dignity, or intellectual property
            </li>
            <li>
              Create deepfakes, misleading imagery, or content intended to
              deceive consumers
            </li>
            <li>
              Reverse-engineer, decompile, disassemble, or attempt to extract
              source code from the platform
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Service
            </li>
            <li>
              Resell, sublicense, or commercialize access to the Service to
              third parties without authorization
            </li>
            <li>
              Use automated means (bots, scrapers) to access or extract data
              from the Service without permission
            </li>
            <li>Facilitate any illegal activity, including money laundering or fraud</li>
            <li>
              Upload malware, viruses, or any code designed to disrupt or damage
              Anaqio&apos;s systems
            </li>
          </ul>
          <p>
            Violations may result in immediate account suspension and may be
            reported to relevant Moroccan authorities.
          </p>

          {/* 10 */}
          <h2 id="warranties">10. Disclaimers &amp; Warranties</h2>
          <p>
            The Service is provided <strong>&quot;as is&quot; and &quot;as available&quot;</strong> without
            warranties of any kind, express or implied, to the fullest extent
            permitted by applicable law. Anaqio specifically does not warrant
            that:
          </p>
          <ul>
            <li>The Service will be uninterrupted, error-free, or fully secure</li>
            <li>
              AI Outputs will be accurate, complete, or fit for any particular
              commercial purpose
            </li>
            <li>The Service will meet all of your specific business requirements</li>
          </ul>
          <p>
            Nothing in these Terms excludes statutory rights you may have under
            Moroccan Law 31-08 on consumer protection that cannot be
            contractually waived.
          </p>

          {/* 11 */}
          <h2 id="liability">11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable Moroccan law, Anaqio
            and its directors, employees, agents, and partners shall not be
            liable for:
          </p>
          <ul>
            <li>Indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, goodwill, or business opportunities</li>
            <li>
              Damages resulting from unauthorized access to or alteration of
              your transmissions or data
            </li>
            <li>Any matter beyond Anaqio&apos;s reasonable control</li>
          </ul>
          <p>
            In any case, Anaqio&apos;s total aggregate liability to you for any
            claims arising from or related to these Terms shall not exceed the
            greater of: (a) the total fees paid by you to Anaqio in the{" "}
            <strong>12 months preceding the event</strong> giving rise to the
            claim, or (b) MAD 1,000.
          </p>

          {/* 12 */}
          <h2 id="termination">12. Termination</h2>
          <h3>12.1 Termination by You</h3>
          <p>
            You may terminate your Account at any time by contacting us at{" "}
            <a href="mailto:support@anaqio.com">support@anaqio.com</a> or
            through your Account settings. Cancellation of a paid subscription
            is governed by Section 6.4.
          </p>

          <h3>12.2 Termination by Anaqio</h3>
          <p>
            Anaqio may suspend or terminate your Account and access to the
            Service, with or without notice, if:
          </p>
          <ul>
            <li>
              You materially breach these Terms and fail to cure such breach
              within 10 days of notice
            </li>
            <li>You engage in fraudulent, abusive, or illegal activity</li>
            <li>
              Continued provision of service poses a risk to Anaqio, other
              users, or third parties
            </li>
            <li>Anaqio is required to do so by law or court order</li>
          </ul>

          <h3>12.3 Effect of Termination</h3>
          <p>
            Upon termination, your right to use the Service ceases immediately.
            Anaqio may delete your Account and User Content subject to
            retention periods required by law. Provisions of these Terms that by
            their nature should survive termination (including IP, limitation of
            liability, and governing law) shall survive.
          </p>

          {/* 13 */}
          <h2 id="changes">13. Changes to Terms</h2>
          <p>
            Anaqio reserves the right to update these Terms at any time. We will
            provide at least <strong>15 days&apos; advance notice</strong> of
            material changes via email or platform notification. Your continued
            use of the Service after the effective date constitutes acceptance
            of the revised Terms. If you do not agree with the changes, you must
            cease using the Service before the effective date.
          </p>

          {/* 14 */}
          <h2 id="governing">14. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the{" "}
            <strong>Kingdom of Morocco</strong>, including the Dahir des
            Obligations et Contrats (DOC) and all applicable Moroccan
            legislation.
          </p>
          <p>
            In the event of a dispute arising out of or related to these Terms
            or the Service, the parties agree to first attempt to resolve the
            matter through good-faith negotiation within 30 days. If negotiation
            fails, the dispute shall be submitted to the exclusive jurisdiction
            of the competent courts of <strong>Casablanca, Morocco</strong>.
          </p>
          <div className="highlight-box">
            <strong>Consumer Rights:</strong> Nothing in these Terms limits any
            right you may have as a consumer under Moroccan Law No. 31-08 on
            Consumer Protection Measures or any other mandatory consumer
            protection legislation.
          </div>

          {/* 15 */}
          <h2 id="contact">15. Contact</h2>
          <p>For questions about these Terms of Service, please contact us:</p>
          <div className="highlight-box">
            <strong>Anaqio — Legal</strong>
            <br />
            Email: <a href="mailto:legal@anaqio.com">legal@anaqio.com</a>
            <br />
            Address: Casablanca, Morocco
            <br />
            Response time: within 15 business days
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
