import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | NyaySevak - India's Premier Legal Services Platform",
  description:
    "Read the Terms of Service for NyaySevak. Understand the terms governing your use of India's first complete legal ecosystem platform.",
  keywords:
    "NyaySevak terms of service, legal platform terms, legal services agreement India, user agreement legal platform, NyaySevak usage terms",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Header */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold text-white sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-gray-400">
            Please read these terms carefully before using the NyaySevak
            platform. By accessing or using our services, you agree to be bound
            by these terms.
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
            {/* Section 1 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing, browsing, or using the NyaySevak platform
                (the &quot;Platform&quot;), including our website, mobile
                applications, and any related services, you acknowledge that you
                have read, understood, and agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree to these Terms,
                you must not use the Platform.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                These Terms constitute a legally binding agreement between you
                (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and
                NyaySevak (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
                We reserve the right to modify these Terms at any time. Changes
                will be effective upon posting on the Platform. Your continued
                use of the Platform following any modifications constitutes your
                acceptance of the revised Terms.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                2. Description of Services
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                NyaySevak is India&apos;s first complete legal ecosystem, a
                technology-driven platform that connects individuals,
                businesses, and legal professionals across the entire Indian
                judicial system. Our services include, but are not limited to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-gray-400">
                <li>
                  Connecting users with verified legal professionals across
                  the Supreme Court, 25 High Courts, 700+ District Courts,
                  Tribunals, and Arbitration centres
                </li>
                <li>
                  Online and offline lawyer consultations across 26+ practice
                  areas
                </li>
                <li>
                  Legal document preparation, review, and management services
                </li>
                <li>
                  Corporate legal advisory and compliance management for
                  businesses
                </li>
                <li>
                  Contract management, intellectual property services, and due
                  diligence
                </li>
                <li>
                  Case tracking, court date management, and litigation support
                </li>
                <li>
                  Legal research and information resources
                </li>
              </ul>
              <p className="mt-4 text-gray-300 leading-relaxed">
                NyaySevak acts as an intermediary platform facilitating
                connections between users and legal professionals. We do not
                ourselves provide legal advice or representation. The legal
                professionals available through our Platform are independent
                practitioners and are solely responsible for the legal services
                they provide.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                3. User Responsibilities
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                As a user of the NyaySevak Platform, you agree to the following:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    3.1 Eligibility
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You must be at least 18 years of age and legally competent to
                    enter into a binding agreement to use the Platform. By using
                    the Platform, you represent and warrant that you meet these
                    eligibility requirements.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    3.2 Account Registration
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You are responsible for maintaining the confidentiality of
                    your account credentials and for all activities that occur
                    under your account. You agree to provide accurate, current,
                    and complete information during registration and to update
                    such information to keep it accurate.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    3.3 Prohibited Conduct
                  </h3>
                  <p className="mb-3 text-gray-300 leading-relaxed">
                    You agree not to:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-gray-400">
                    <li>
                      Use the Platform for any unlawful purpose or in violation
                      of any applicable law or regulation
                    </li>
                    <li>
                      Impersonate any person or entity, or misrepresent your
                      affiliation with any person or entity
                    </li>
                    <li>
                      Upload, post, or transmit any content that is defamatory,
                      obscene, fraudulent, or otherwise objectionable
                    </li>
                    <li>
                      Interfere with or disrupt the integrity or performance of
                      the Platform or its infrastructure
                    </li>
                    <li>
                      Attempt to gain unauthorized access to the Platform, other
                      user accounts, or related systems or networks
                    </li>
                    <li>
                      Scrape, crawl, or use any automated means to access the
                      Platform without our written consent
                    </li>
                    <li>
                      Use the Platform to send unsolicited communications or
                      spam
                    </li>
                    <li>
                      Misuse confidential or privileged information obtained
                      through the Platform
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    3.4 Accuracy of Information
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You are responsible for ensuring that all information you
                    provide on the Platform, including case details and personal
                    information, is accurate and complete. NyaySevak is not
                    responsible for any consequences arising from inaccurate or
                    incomplete information provided by you.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                4. Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed">
                All content on the NyaySevak Platform, including but not limited
                to text, graphics, logos, icons, images, audio clips, software,
                and the compilation thereof (collectively, &quot;Content&quot;),
                is the exclusive property of NyaySevak or its content suppliers
                and is protected by Indian and international copyright,
                trademark, and other intellectual property laws.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The NyaySevak name, logo, tagline &quot;Defending Your
                Rights,&quot; and all related names, logos, product and service
                names, designs, and slogans are trademarks of NyaySevak. You
                may not use such marks without our prior written permission. All
                other names, logos, product and service names, designs, and
                slogans on the Platform are the trademarks of their respective
                owners.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                You are granted a limited, non-exclusive, non-transferable, and
                revocable license to access and use the Platform for personal,
                non-commercial purposes. This license does not include the right
                to reproduce, distribute, modify, create derivative works of,
                publicly display, publicly perform, republish, download, store,
                or transmit any of the Content, except as incidental to normal
                Platform use.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                5. Payment Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Certain services on the Platform may require payment. All fees
                are quoted in Indian Rupees (INR) and are exclusive of
                applicable taxes unless stated otherwise. Payment must be made
                through the approved payment methods available on the Platform.
                NyaySevak reserves the right to modify its pricing at any time,
                with changes effective for new transactions. Refund policies are
                as specified on the Platform at the time of purchase and may vary
                by service type.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To the fullest extent permitted by applicable law, NyaySevak,
                its officers, directors, employees, agents, affiliates, and
                partners shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not
                limited to loss of profits, data, goodwill, or other intangible
                losses, arising out of or in connection with:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-400">
                <li>Your use of or inability to use the Platform</li>
                <li>
                  Any conduct or content of any third party on the Platform,
                  including legal professionals
                </li>
                <li>
                  Any content obtained from the Platform, including errors or
                  omissions
                </li>
                <li>
                  Unauthorized access to or alteration of your transmissions or
                  data
                </li>
                <li>
                  The outcome of any legal matter or consultation facilitated
                  through the Platform
                </li>
              </ul>
              <p className="mt-4 text-gray-300 leading-relaxed">
                NyaySevak&apos;s total liability to you for any claims arising
                out of or related to these Terms or your use of the Platform
                shall not exceed the amount paid by you to NyaySevak in the
                twelve (12) months preceding the event giving rise to the claim.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                7. Disclaimers
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Platform and all content, services, and features are
                provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
                basis without warranties of any kind, either express or implied,
                including but not limited to implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                NyaySevak does not warrant that the Platform will be
                uninterrupted, timely, secure, or error-free, that the
                information provided will be accurate, reliable, or complete, or
                that defects will be corrected. NyaySevak does not endorse,
                guarantee, or assume responsibility for the quality or
                competence of any legal professional available through the
                Platform.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                8. Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of India, without regard to its conflict of laws
                principles. Any legal action or proceeding arising out of or
                related to these Terms shall be subject to the exclusive
                jurisdiction of the courts located in New Delhi, India.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                These Terms are subject to the provisions of the Indian Contract
                Act, 1872, the Information Technology Act, 2000, the Consumer
                Protection Act, 2019, and all other applicable Indian laws and
                regulations as may be in force from time to time.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                9. Dispute Resolution
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    9.1 Negotiation
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    In the event of any dispute, controversy, or claim arising
                    out of or relating to these Terms or the Platform, the
                    parties shall first attempt to resolve the matter amicably
                    through good-faith negotiation within thirty (30) days of
                    written notice of the dispute.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    9.2 Mediation
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    If the dispute cannot be resolved through negotiation, the
                    parties agree to attempt mediation before resorting to
                    arbitration or litigation. Mediation shall be conducted in
                    New Delhi, India, in the English language.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    9.3 Arbitration
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    If the dispute is not resolved through mediation within
                    sixty (60) days, either party may refer the dispute to
                    binding arbitration in accordance with the Arbitration and
                    Conciliation Act, 1996, as amended. The arbitration shall be
                    conducted by a sole arbitrator mutually agreed upon by both
                    parties, in New Delhi, India. The language of arbitration
                    shall be English. The arbitral award shall be final and
                    binding on both parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                10. Platform Usage Terms
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    10.1 Availability
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    NyaySevak strives to ensure the Platform is available 24/7
                    but does not guarantee uninterrupted access. We may
                    temporarily suspend or restrict access for maintenance,
                    updates, or other reasons without prior notice.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    10.2 Third-Party Links
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Platform may contain links to third-party websites or
                    services. NyaySevak is not responsible for the content,
                    privacy practices, or availability of these external sites.
                    Inclusion of any link does not imply endorsement by
                    NyaySevak.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    10.3 Termination
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    NyaySevak reserves the right to suspend or terminate your
                    account and access to the Platform at our sole discretion,
                    without notice, for conduct that we determine violates these
                    Terms or is harmful to other users, us, or third parties, or
                    for any other reason. Upon termination, your right to use
                    the Platform will immediately cease.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    10.4 Indemnification
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless NyaySevak
                    and its officers, directors, employees, agents, and
                    affiliates from and against any and all claims, liabilities,
                    damages, losses, costs, and expenses (including reasonable
                    legal fees) arising out of or in connection with your use of
                    the Platform, your violation of these Terms, or your
                    violation of any rights of any third party.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gold">
                    10.5 Severability
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    If any provision of these Terms is found to be
                    unenforceable or invalid, that provision shall be limited or
                    eliminated to the minimum extent necessary so that these
                    Terms shall otherwise remain in full force and effect.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                11. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="mt-6 rounded-lg border border-gold/20 bg-gold/5 p-6">
                <p className="font-semibold text-white">NyaySevak Legal Team</p>
                <p className="mt-2 text-gray-400">
                  Email:{" "}
                  <a
                    href="mailto:legal@nyaysevak.com"
                    className="text-gold underline underline-offset-2 transition-colors hover:text-gold-light"
                  >
                    legal@nyaysevak.com
                  </a>
                </p>
                <p className="text-gray-400">Address: New Delhi, India</p>
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
            Have Questions About Our Terms?
          </h2>
          <p className="mb-10 text-gray-400">
            Our team is ready to clarify any aspect of our terms and help you
            get started with NyaySevak.
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
