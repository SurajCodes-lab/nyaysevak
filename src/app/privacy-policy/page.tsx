import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NyaySevak - India's Premier Legal Services Platform",
  description:
    "Read NyaySevak's Privacy Policy. Learn how we collect, use, and protect your personal data on India's first complete legal ecosystem platform.",
  keywords:
    "NyaySevak privacy policy, legal services data protection, privacy policy India, IT Act 2000 compliance, user data protection legal platform",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Header */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-gray-400">
            Your privacy is important to us. This policy explains how NyaySevak
            collects, uses, and safeguards your information.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <section className="bg-black py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-16">
            {/* Introduction */}
            <div>
              <p className="text-gray-300 leading-relaxed">
                NyaySevak (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                operates the NyaySevak platform (the &quot;Platform&quot;),
                which provides legal services connecting citizens, businesses,
                and legal professionals across India. This Privacy Policy
                describes how we collect, use, disclose, and protect your
                personal information when you access or use our Platform,
                including our website, applications, and related services.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                By using the NyaySevak Platform, you consent to the practices
                described in this Privacy Policy. If you do not agree with this
                policy, please do not use our Platform.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                1. Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    1.1 Personal Information
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you register on NyaySevak, request a consultation, or
                    use our services, we may collect the following personal
                    information:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-400">
                    <li>Full name, email address, and phone number</li>
                    <li>Postal address and city of residence</li>
                    <li>
                      Government-issued identification (where required for
                      legal verification)
                    </li>
                    <li>
                      Professional credentials (for legal professionals
                      registering on the Platform)
                    </li>
                    <li>Payment and billing information</li>
                    <li>
                      Case-related information you provide during consultations
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    1.2 Automatically Collected Information
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you access the Platform, we automatically collect
                    certain technical information, including:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-400">
                    <li>IP address and device identifiers</li>
                    <li>Browser type, version, and operating system</li>
                    <li>Pages visited, time spent, and navigation patterns</li>
                    <li>Referring URLs and search terms</li>
                    <li>
                      Location data (approximate, based on IP address or device
                      settings)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    1.3 Information from Third Parties
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may receive information about you from third-party
                    services such as identity verification providers, payment
                    processors, and legal databases, subject to their respective
                    privacy policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                NyaySevak uses the collected information for the following
                purposes:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-400">
                <li>
                  To provide, maintain, and improve the Platform and our legal
                  services
                </li>
                <li>
                  To match you with appropriate legal professionals based on your
                  needs
                </li>
                <li>
                  To process transactions, payments, and manage your account
                </li>
                <li>
                  To communicate with you about your account, consultations, and
                  service updates
                </li>
                <li>
                  To send promotional communications (with your consent, which
                  you may withdraw at any time)
                </li>
                <li>
                  To verify the identity and credentials of legal professionals
                </li>
                <li>
                  To comply with legal obligations and respond to lawful requests
                  from authorities
                </li>
                <li>
                  To detect, prevent, and address fraud, security issues, and
                  technical problems
                </li>
                <li>
                  To conduct analytics and research to improve our services
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                3. Cookie Policy
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    3.1 What Are Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files placed on your device when you
                    visit our Platform. They help us provide you with a better
                    experience by remembering your preferences, understanding how
                    you use our Platform, and enabling certain functionalities.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    3.2 Types of Cookies We Use
                  </h3>
                  <ul className="list-disc space-y-2 pl-6 text-gray-400">
                    <li>
                      <span className="text-gray-300 font-medium">
                        Essential Cookies:
                      </span>{" "}
                      Required for core Platform functionality such as
                      authentication and security.
                    </li>
                    <li>
                      <span className="text-gray-300 font-medium">
                        Analytics Cookies:
                      </span>{" "}
                      Help us understand how visitors interact with our Platform,
                      enabling us to improve our services.
                    </li>
                    <li>
                      <span className="text-gray-300 font-medium">
                        Preference Cookies:
                      </span>{" "}
                      Remember your settings and choices to personalize your
                      experience.
                    </li>
                    <li>
                      <span className="text-gray-300 font-medium">
                        Marketing Cookies:
                      </span>{" "}
                      Used to deliver relevant advertisements and track campaign
                      effectiveness.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    3.3 Managing Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You can control and manage cookies through your browser
                    settings. Please note that disabling certain cookies may
                    affect the functionality of the Platform. Most browsers
                    allow you to refuse cookies, delete existing cookies, or
                    set preferences for certain websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                4. User Rights and Data Protection
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                As a user of NyaySevak, you have the following rights regarding
                your personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-400">
                <li>
                  <span className="text-gray-300 font-medium">
                    Right to Access:
                  </span>{" "}
                  You may request a copy of the personal information we hold
                  about you.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Right to Correction:
                  </span>{" "}
                  You may request that we correct inaccurate or incomplete
                  personal information.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Right to Deletion:
                  </span>{" "}
                  You may request that we delete your personal data, subject to
                  our legal obligations and legitimate interests.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Right to Withdraw Consent:
                  </span>{" "}
                  Where processing is based on your consent, you may withdraw
                  consent at any time without affecting the lawfulness of
                  processing based on consent before withdrawal.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Right to Data Portability:
                  </span>{" "}
                  You may request that we provide your data in a structured,
                  commonly used, and machine-readable format.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Right to Object:
                  </span>{" "}
                  You may object to the processing of your personal data for
                  direct marketing purposes.
                </li>
              </ul>
              <p className="mt-4 text-gray-300 leading-relaxed">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@nyaysevak.com"
                  className="text-gold underline underline-offset-2 transition-colors hover:text-gold-light"
                >
                  privacy@nyaysevak.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                5. Information Sharing Practices
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                NyaySevak does not sell your personal information to third
                parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-400">
                <li>
                  <span className="text-gray-300 font-medium">
                    Legal Professionals:
                  </span>{" "}
                  When you request a consultation or service, relevant
                  information is shared with the assigned legal professional to
                  facilitate service delivery.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Service Providers:
                  </span>{" "}
                  We engage trusted third-party service providers for payment
                  processing, cloud hosting, analytics, and communication
                  services, who process data on our behalf under strict
                  confidentiality agreements.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Legal Requirements:
                  </span>{" "}
                  We may disclose information when required by law, court order,
                  or government request, or to protect the rights, property, or
                  safety of NyaySevak, our users, or the public.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    Business Transfers:
                  </span>{" "}
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of the transaction,
                  subject to the same privacy protections.
                </li>
                <li>
                  <span className="text-gray-300 font-medium">
                    With Your Consent:
                  </span>{" "}
                  We may share your information with third parties when you have
                  given explicit consent to do so.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                6. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. These measures include encryption of
                data in transit and at rest, secure server infrastructure,
                regular security audits, and access controls. However, no method
                of transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                7. IT Act 2000 Compliance
              </h2>
              <p className="text-gray-300 leading-relaxed">
                NyaySevak is committed to compliance with the Information
                Technology Act, 2000 and the Information Technology (Reasonable
                Security Practices and Procedures and Sensitive Personal Data or
                Information) Rules, 2011. We maintain reasonable security
                practices and procedures as mandated under applicable Indian
                law. We collect and process &quot;sensitive personal data or
                information&quot; (as defined under the IT Rules) only with your
                informed consent and for lawful purposes directly related to our
                services. We have implemented a comprehensive information
                security policy and maintain a Grievance Officer as required
                under the IT Act.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                In compliance with the Digital Personal Data Protection Act,
                2023 (DPDPA), NyaySevak acts as a Data Fiduciary and processes
                personal data only for lawful purposes with the consent of the
                Data Principal. We ensure that data processing is limited to
                what is necessary for the stated purpose and maintain
                appropriate technical and organizational measures to protect
                your data.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                8. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to
                provide our services, comply with legal obligations, resolve
                disputes, and enforce our agreements. When your data is no
                longer required, we securely delete or anonymize it in
                accordance with our data retention policies and applicable law.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                NyaySevak does not knowingly collect personal information from
                individuals under the age of 18 without verified parental
                consent. If we become aware that we have collected personal
                information from a minor without appropriate consent, we will
                take steps to delete such information promptly.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. We will notify you of any material changes by
                posting the updated policy on this page with a revised
                &quot;Last updated&quot; date. We encourage you to review this
                policy periodically. Your continued use of the Platform after
                any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                11. Contact for Privacy Concerns
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions, concerns, or complaints about this
                Privacy Policy or our data practices, please contact our
                Grievance Officer:
              </p>
              <div className="mt-6 rounded-lg border border-gold/20 bg-gold/5 p-6">
                <p className="font-semibold text-white">
                  NyaySevak Grievance Officer
                </p>
                <p className="mt-2 text-gray-400">
                  Email:{" "}
                  <a
                    href="mailto:privacy@nyaysevak.com"
                    className="text-gold underline underline-offset-2 transition-colors hover:text-gold-light"
                  >
                    privacy@nyaysevak.com
                  </a>
                </p>
                <p className="text-gray-400">
                  Address: New Delhi, India
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  We will acknowledge your complaint within 48 hours and
                  endeavor to resolve it within 30 days of receipt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* CTA */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-bold text-white sm:text-4xl">
            Have Questions About Your Privacy?
          </h2>
          <p className="mb-10 text-gray-400">
            Our team is here to address any concerns you have about how your
            data is handled on the NyaySevak platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
