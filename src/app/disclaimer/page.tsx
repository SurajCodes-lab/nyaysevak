import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | NyaySevak - India's Premier Legal Services Platform",
  description:
    "Read the legal disclaimer for NyaySevak. Important information about limitations of our platform, no attorney-client relationship, and no guarantee of legal outcomes.",
  keywords:
    "NyaySevak disclaimer, legal disclaimer India, no attorney-client relationship, legal platform disclaimer, legal services limitations",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Header */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold text-white sm:text-5xl lg:text-6xl">
            Disclaimer
          </h1>
          <p className="mt-6 text-gray-400">
            Please read this disclaimer carefully. It contains important
            information about the limitations of the NyaySevak platform and
            its services.
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
            {/* Important Notice */}
            <div className="rounded-lg border border-gold/30 bg-gold/5 p-8">
              <h2 className="mb-4 text-xl font-heading font-bold text-gold sm:text-2xl">
                Important Notice
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The information provided on the NyaySevak platform is for
                general informational purposes only. NyaySevak is a technology
                platform that connects users with legal professionals and does
                not itself practice law or provide legal advice. All information
                on this platform is provided in good faith; however, we make no
                representation or warranty of any kind, express or implied,
                regarding the accuracy, adequacy, validity, reliability, or
                completeness of any information on the Platform.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                1. General Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The content on the NyaySevak Platform, including text, graphics,
                images, information obtained from NyaySevak&apos;s licensors,
                and other material (&quot;Content&quot;), is for informational
                purposes only. The Content is not intended to be a substitute
                for professional legal advice, diagnosis, or representation.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                NyaySevak makes every effort to ensure that the information
                available on the Platform is accurate and up to date. However,
                laws, regulations, and legal interpretations are subject to
                change, and the applicability of legal information can vary
                widely based on specific facts and circumstances. Accordingly,
                the information on this Platform may not reflect the most
                current legal developments, verdicts, or settlements.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                NyaySevak expressly disclaims all liability with respect to
                actions taken or not taken based on any or all of the Content on
                this Platform. Your use of the information on this Platform or
                any linked materials is at your own risk.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                2. No Attorney-Client Relationship
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of the NyaySevak Platform, including browsing its
                content, submitting inquiries, or communicating with legal
                professionals through the Platform, does not create an
                attorney-client relationship between you and NyaySevak.
                NyaySevak is a platform provider and intermediary, not a law
                firm or legal service provider.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                An attorney-client relationship with a legal professional
                available on the Platform is only established when you and the
                legal professional explicitly agree to such a relationship,
                typically through a written engagement letter or retainer
                agreement. Until such a relationship is formally established:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-400">
                <li>
                  Any information you provide through the Platform is not
                  protected by attorney-client privilege
                </li>
                <li>
                  No legal professional on the Platform has any obligation to
                  represent you or act on your behalf
                </li>
                <li>
                  Communications through the Platform are not confidential
                  legal communications
                </li>
                <li>
                  NyaySevak does not vet, endorse, or take responsibility for
                  any legal advice provided by professionals on the Platform
                </li>
              </ul>
              <p className="mt-4 text-gray-300 leading-relaxed">
                You should not act or refrain from acting based on any
                communication from a legal professional through the Platform
                without first engaging them formally and obtaining proper legal
                counsel.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                3. Not a Substitute for Legal Advice
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The information, content, articles, FAQs, guides, and resources
                available on the NyaySevak Platform are provided for general
                educational and informational purposes only. They are not
                intended to constitute legal advice and should not be relied
                upon as such.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Every legal situation is unique. The information on this
                Platform may not apply to your specific circumstances. Laws
                differ across jurisdictions and are subject to change. What is
                applicable in one state, district, or court may not apply in
                another.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                We strongly recommend that you consult with a qualified legal
                professional for advice regarding your specific legal issues.
                NyaySevak can help you connect with verified legal
                professionals, but the decision to engage a lawyer and rely on
                their advice is solely yours.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                4. No Guarantee of Outcomes
              </h2>
              <p className="text-gray-300 leading-relaxed">
                NyaySevak makes no guarantees, representations, or warranties
                regarding the outcome of any legal matter, case, dispute, or
                proceeding, whether facilitated through the Platform or
                otherwise. The outcome of legal matters depends on numerous
                factors including, but not limited to, the specific facts and
                circumstances, the applicable law, the jurisdiction, and the
                decisions of courts, tribunals, and other adjudicating bodies.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Past results or case studies referenced on the Platform, if any,
                do not guarantee or predict a similar outcome in any future case.
                Each case is decided on its own merits, and prior results do not
                guarantee a similar result.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                NyaySevak does not guarantee the quality, competence, or
                suitability of any legal professional available through the
                Platform. While we strive to verify the credentials of legal
                professionals on our Platform, we do not make any
                representations or warranties regarding their expertise,
                experience, or ability to handle your specific legal matter.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                5. Third-Party Content
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The NyaySevak Platform may contain content provided by third
                parties, including legal professionals, content contributors,
                and external sources. Such third-party content is the sole
                responsibility of the person or entity that provided it.
                NyaySevak does not review, approve, endorse, or make any
                representations or warranties regarding third-party content.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The Platform may also contain links to third-party websites,
                resources, or services. These links are provided for your
                convenience only and do not constitute an endorsement by
                NyaySevak. We have no control over the content, privacy
                policies, or practices of any third-party websites and assume no
                responsibility for them. We strongly advise you to read the
                terms of service and privacy policies of any third-party
                websites you visit.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Legal information sourced from government databases, court
                records, or legal databases is provided as-is and may be subject
                to delays, errors, or omissions. NyaySevak does not guarantee
                the timeliness or accuracy of such information.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by applicable Indian law,
                NyaySevak, its directors, officers, employees, agents,
                affiliates, successors, and assigns shall not be liable for any
                direct, indirect, incidental, special, consequential, or
                exemplary damages, including but not limited to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-400">
                <li>
                  Damages for loss of profits, goodwill, use, data, or other
                  intangible losses
                </li>
                <li>
                  Damages arising from your use of or inability to use the
                  Platform
                </li>
                <li>
                  Damages arising from the conduct of any legal professional or
                  third party on the Platform
                </li>
                <li>
                  Damages arising from any content, information, or advice
                  obtained from the Platform
                </li>
                <li>
                  Damages arising from unauthorized access to or alteration of
                  your data or transmissions
                </li>
                <li>
                  Damages arising from the outcome of any legal matter or
                  proceeding
                </li>
                <li>
                  Damages arising from errors, mistakes, or inaccuracies in the
                  content
                </li>
                <li>
                  Personal injury or property damage resulting from your use of
                  the Platform
                </li>
              </ul>
              <p className="mt-4 text-gray-300 leading-relaxed">
                This limitation of liability applies whether the alleged
                liability is based on contract, tort, negligence, strict
                liability, or any other basis, even if NyaySevak has been
                advised of the possibility of such damages. In jurisdictions
                that do not allow the exclusion or limitation of certain
                damages, NyaySevak&apos;s liability shall be limited to the
                maximum extent permitted by law.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                7. Professional Responsibility
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Legal professionals listed on the NyaySevak Platform are
                independent practitioners and are solely responsible for
                their professional conduct, the quality of their services, and
                compliance with the Bar Council of India rules, the Advocates
                Act, 1961, and all applicable professional and ethical
                standards. NyaySevak does not control, direct, or supervise the
                professional activities of any legal professional on the
                Platform.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Any disputes between you and a legal professional regarding
                services provided are matters between you and that professional.
                NyaySevak may facilitate communication but is not a party to any
                professional engagement or agreement between you and a legal
                professional.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                8. Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This Disclaimer shall be governed by and construed in accordance
                with the laws of India. Any disputes arising from or related to
                this Disclaimer or your use of the NyaySevak Platform shall be
                subject to the exclusive jurisdiction of the courts in New
                Delhi, India.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                9. Changes to This Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                NyaySevak reserves the right to update or modify this
                Disclaimer at any time without prior notice. Changes will be
                effective immediately upon posting on the Platform. The
                &quot;Last updated&quot; date at the top of this page indicates
                when this Disclaimer was last revised. We encourage you to
                review this Disclaimer periodically to stay informed of any
                changes. Your continued use of the Platform after any changes
                constitutes acceptance of the revised Disclaimer.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="mb-6 text-2xl font-heading font-bold text-white sm:text-3xl">
                10. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions or concerns about this Disclaimer,
                please contact us:
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
            Need Legal Assistance?
          </h2>
          <p className="mb-10 text-gray-400">
            Connect with verified legal professionals across India through
            the NyaySevak platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
          >
            Get Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
