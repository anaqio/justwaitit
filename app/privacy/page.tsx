import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Anaqio",
  description: "Privacy Policy for Anaqio, a virtual studio for fashion commerce.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-24 px-4">
      <article className="mx-auto max-w-3xl prose prose-invert prose-sm sm:prose-base">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">
          Last updated: February 20, 2026
        </p>

        <hr className="border-border/30" />

        <h2 className="text-foreground">1. Introduction</h2>
        <p className="text-muted-foreground">
          Anaqio SARL (&quot;Anaqio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal
          data in accordance with Moroccan Law 09-08 (Loi n° 09-08 relative à la protection des
          personnes physiques à l&apos;égard du traitement des données à caractère personnel) and its
          implementing regulations.
        </p>
        <p className="text-muted-foreground">
          This Privacy Policy describes how we collect, use, store, and protect your personal data
          when you use our platform at anaqio.com.
        </p>

        <h2 className="text-foreground">2. Data Controller</h2>
        <p className="text-muted-foreground">
          The data controller responsible for processing your personal data is:
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Anaqio SARL</strong>
          <br />
          Casablanca, Morocco
          <br />
          Email: contact@anaqio.com
        </p>

        <h2 className="text-foreground">3. Data We Collect</h2>
        <p className="text-muted-foreground">We may collect the following categories of personal data:</p>
        <ul className="text-muted-foreground">
          <li>
            <strong className="text-foreground">Waitlist Information:</strong> Email address provided when you sign up for the waitlist.
          </li>
          <li>
            <strong className="text-foreground">Account Information:</strong> Name, email address, and other details provided during account creation.
          </li>
          <li>
            <strong className="text-foreground">Usage Data:</strong> Information about how you interact with the Platform, including pages visited, time spent, and actions taken.
          </li>
          <li>
            <strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and operating system.
          </li>
        </ul>

        <h2 className="text-foreground">4. Purpose of Data Processing</h2>
        <p className="text-muted-foreground">
          In accordance with Article 3 of Law 09-08, your personal data is processed for the
          following specific, explicit, and legitimate purposes:
        </p>
        <ul className="text-muted-foreground">
          <li>Managing your waitlist registration and notifying you about Platform availability;</li>
          <li>Creating and managing your user account;</li>
          <li>Providing and improving our services;</li>
          <li>Communicating with you about updates, features, and promotional offers;</li>
          <li>Ensuring the security and proper functioning of the Platform;</li>
          <li>Complying with legal obligations under Moroccan law.</li>
        </ul>

        <h2 className="text-foreground">5. Legal Basis for Processing</h2>
        <p className="text-muted-foreground">
          We process your personal data based on the following legal grounds as defined by Law 09-08:
        </p>
        <ul className="text-muted-foreground">
          <li><strong className="text-foreground">Consent:</strong> When you voluntarily provide your data (e.g., joining the waitlist);</li>
          <li><strong className="text-foreground">Contractual necessity:</strong> When processing is necessary for the performance of a contract;</li>
          <li><strong className="text-foreground">Legitimate interest:</strong> When processing is necessary for our legitimate business interests.</li>
        </ul>

        <h2 className="text-foreground">6. Data Retention</h2>
        <p className="text-muted-foreground">
          Your personal data is retained only for as long as is necessary to fulfill the purposes
          for which it was collected, in accordance with Article 3 of Law 09-08. Specifically:
        </p>
        <ul className="text-muted-foreground">
          <li>Waitlist data is retained until you request removal or the Platform launches;</li>
          <li>Account data is retained for the duration of your active account;</li>
          <li>Usage and technical data is retained for a maximum of 12 months.</li>
        </ul>

        <h2 className="text-foreground">7. Your Rights</h2>
        <p className="text-muted-foreground">
          Under Moroccan Law 09-08, you have the following rights regarding your personal data:
        </p>
        <ul className="text-muted-foreground">
          <li>
            <strong className="text-foreground">Right of Access (Article 7):</strong> You may request access to the personal data we hold about you.
          </li>
          <li>
            <strong className="text-foreground">Right of Rectification (Article 8):</strong> You may request correction of inaccurate or incomplete data.
          </li>
          <li>
            <strong className="text-foreground">Right of Deletion:</strong> You may request the deletion of your personal data when it is no longer necessary.
          </li>
          <li>
            <strong className="text-foreground">Right to Object (Article 9):</strong> You may object to the processing of your data for legitimate reasons.
          </li>
        </ul>
        <p className="text-muted-foreground">
          To exercise any of these rights, please contact us at{" "}
          <strong className="text-foreground">contact@anaqio.com</strong>.
        </p>

        <h2 className="text-foreground">8. Data Security</h2>
        <p className="text-muted-foreground">
          We implement appropriate technical and organizational measures to protect your personal
          data against unauthorized access, alteration, disclosure, or destruction, in compliance
          with Article 23 of Law 09-08. These measures include encryption, secure servers, and
          access controls.
        </p>

        <h2 className="text-foreground">9. Data Sharing</h2>
        <p className="text-muted-foreground">
          We do not sell your personal data. We may share your data with:
        </p>
        <ul className="text-muted-foreground">
          <li><strong className="text-foreground">Service providers:</strong> Third-party services that help us operate the Platform (e.g., hosting, analytics), under appropriate data protection agreements;</li>
          <li><strong className="text-foreground">Legal authorities:</strong> When required by Moroccan law or in response to valid legal requests.</li>
        </ul>

        <h2 className="text-foreground">10. International Data Transfers</h2>
        <p className="text-muted-foreground">
          In accordance with Articles 43 and 44 of Law 09-08, any transfer of personal data outside
          Morocco will only be made to countries that provide an adequate level of data protection,
          or with appropriate safeguards in place, including your explicit consent where required.
        </p>

        <h2 className="text-foreground">11. CNDP Declaration</h2>
        <p className="text-muted-foreground">
          In compliance with Moroccan law, Anaqio has declared its data processing activities to the
          Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP).
          You may contact the CNDP for any complaints regarding the processing of your personal data.
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">CNDP</strong>
          <br />
          Website:{" "}
          <a
            href="https://www.cndp.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            www.cndp.ma
          </a>
        </p>

        <h2 className="text-foreground">12. Cookies</h2>
        <p className="text-muted-foreground">
          The Platform may use cookies and similar technologies to improve your experience. We use:
        </p>
        <ul className="text-muted-foreground">
          <li><strong className="text-foreground">Essential cookies:</strong> Required for the Platform to function properly;</li>
          <li><strong className="text-foreground">Analytics cookies:</strong> To understand how visitors interact with the Platform.</li>
        </ul>
        <p className="text-muted-foreground">
          You can manage cookie preferences through your browser settings.
        </p>

        <h2 className="text-foreground">13. Changes to This Policy</h2>
        <p className="text-muted-foreground">
          We may update this Privacy Policy from time to time. We will notify you of any material
          changes by posting the updated policy on the Platform with a new effective date. We
          encourage you to review this Privacy Policy periodically.
        </p>

        <h2 className="text-foreground">14. Contact Us</h2>
        <p className="text-muted-foreground">
          For any questions, concerns, or requests regarding this Privacy Policy or your personal
          data, please contact us at:
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Anaqio SARL</strong>
          <br />
          Email: contact@anaqio.com
          <br />
          Casablanca, Morocco
        </p>
      </article>
    </main>
  );
}
