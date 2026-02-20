import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Anaqio",
  description: "Terms of Service for Anaqio, a virtual studio for fashion commerce.",
};

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Last updated: February 20, 2026
        </p>

        <hr className="border-border/30" />

        <h2 className="text-foreground">1. Introduction</h2>
        <p className="text-muted-foreground">
          Welcome to Anaqio (&quot;the Platform&quot;), a virtual studio for fashion commerce operated by
          Anaqio SARL, a company incorporated under the laws of the Kingdom of Morocco. These Terms
          of Service (&quot;Terms&quot;) govern your access to and use of the Platform, including our website
          at anaqio.com and all related services.
        </p>
        <p className="text-muted-foreground">
          By accessing or using the Platform, you agree to be bound by these Terms. If you do not
          agree to these Terms, please do not use the Platform.
        </p>

        <h2 className="text-foreground">2. Definitions</h2>
        <ul className="text-muted-foreground">
          <li><strong className="text-foreground">&quot;User&quot;</strong> refers to any individual or entity that accesses or uses the Platform.</li>
          <li><strong className="text-foreground">&quot;Service&quot;</strong> refers to the virtual studio tools, digital services, and features provided by Anaqio.</li>
          <li><strong className="text-foreground">&quot;Content&quot;</strong> refers to all materials, data, text, images, and other information made available through the Platform.</li>
        </ul>

        <h2 className="text-foreground">3. Eligibility</h2>
        <p className="text-muted-foreground">
          You must be at least 18 years of age or have reached the age of legal majority in your
          jurisdiction to use the Platform. By using the Platform, you represent and warrant that you
          meet this eligibility requirement.
        </p>

        <h2 className="text-foreground">4. User Accounts</h2>
        <p className="text-muted-foreground">
          When you create an account on the Platform, you agree to provide accurate, current, and
          complete information. You are responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-foreground">5. Use of the Service</h2>
        <p className="text-muted-foreground">You agree to use the Platform only for lawful purposes and in accordance with these Terms. You shall not:</p>
        <ul className="text-muted-foreground">
          <li>Use the Platform in any way that violates applicable Moroccan law or international regulations;</li>
          <li>Infringe upon the intellectual property rights of Anaqio or any third party;</li>
          <li>Transmit any harmful, threatening, abusive, or unlawful content;</li>
          <li>Attempt to gain unauthorized access to the Platform or its systems;</li>
          <li>Use automated means to access the Platform without prior written consent.</li>
        </ul>

        <h2 className="text-foreground">6. Intellectual Property</h2>
        <p className="text-muted-foreground">
          All content, trademarks, logos, designs, and intellectual property displayed on the Platform
          are the exclusive property of Anaqio or its licensors. They are protected under Moroccan
          intellectual property law, including Law 17-97 on Industrial Property and Law 2-00 on
          Copyright and Neighboring Rights, as well as applicable international treaties.
        </p>
        <p className="text-muted-foreground">
          No part of the Platform may be reproduced, distributed, or used without the prior written
          consent of Anaqio.
        </p>

        <h2 className="text-foreground">7. Waitlist &amp; Early Access</h2>
        <p className="text-muted-foreground">
          By joining the Anaqio waitlist, you consent to receive communications from us regarding
          the Platform&apos;s launch and updates. Joining the waitlist does not guarantee access to the
          Platform or any specific features. We reserve the right to modify the waitlist process at
          any time.
        </p>

        <h2 className="text-foreground">8. Limitation of Liability</h2>
        <p className="text-muted-foreground">
          To the maximum extent permitted by Moroccan law, Anaqio shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising from your use of
          the Platform. The Platform is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
          any kind, whether express or implied.
        </p>

        <h2 className="text-foreground">9. Consumer Protection</h2>
        <p className="text-muted-foreground">
          In accordance with Moroccan Consumer Protection Law 31-08 (Loi n° 31-08 édictant des
          mesures de protection du consommateur), we are committed to providing transparent and
          fair terms to our users. Users have the right to clear information about our services,
          pricing, and conditions of use.
        </p>

        <h2 className="text-foreground">10. Termination</h2>
        <p className="text-muted-foreground">
          We may suspend or terminate your access to the Platform at any time, with or without
          cause, and with or without notice. Upon termination, your right to use the Platform will
          immediately cease.
        </p>

        <h2 className="text-foreground">11. Modifications</h2>
        <p className="text-muted-foreground">
          Anaqio reserves the right to modify these Terms at any time. We will notify users of
          significant changes by posting the updated Terms on the Platform with a new effective date.
          Your continued use of the Platform after changes constitutes acceptance of the modified Terms.
        </p>

        <h2 className="text-foreground">12. Governing Law &amp; Jurisdiction</h2>
        <p className="text-muted-foreground">
          These Terms are governed by and construed in accordance with the laws of the Kingdom of
          Morocco. Any disputes arising from or relating to these Terms shall be subject to the
          exclusive jurisdiction of the competent courts of Casablanca, Morocco.
        </p>

        <h2 className="text-foreground">13. Contact</h2>
        <p className="text-muted-foreground">
          For any questions or concerns regarding these Terms, please contact us at:
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
