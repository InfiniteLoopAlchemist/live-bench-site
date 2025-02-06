// src/app/TOS.tsx
// Always use Full Code unless I tell you otherwise! Never remove Todos or Comments

import React from 'react';

export default function TOS() {
    const title = 'text-lg text-primary font-level-up mb-3';
    const text = 'text-base text-text font-level-up mb-2.5';

    return (
        <div className="">
            <div className="max-w-3xl mx-auto p-4">
                {/* Last Updated Section */}
                <h1 className={title}>Last Updated: JAN 29 2025</h1>

                {/* Introduction */}
                <p className={text}>
                    Welcome to Movie or Show ("the App"). By accessing or using the App, you agree
                    to be bound by these Terms of Service ("Terms"). Please read them carefully.
                </p>

                {/* Section 1 */}
                <h2 className={title}>1. Acceptance of Terms</h2>
                <p className={text}>
                    By downloading, installing, or using the App, you acknowledge that you have
                    read, understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>

                {/* Section 2 */}
                <h2 className={title}>2. Use of TMDb API</h2>
                <p className={text}>
                    <strong>Acknowledgment:</strong> The App utilizes the TMDb API for data
                    retrieval. We are not endorsed, certified, or affiliated with TMDb
                    (themoviedb.org).
                </p>
                <p className={text}>
                    <strong>User Conduct:</strong> You agree not to engage in any activity that
                    disrupts or overloads TMDb's servers, including but not limited to
                    denial-of-service attacks or excessive API requests.
                </p>

                {/* Section 3 */}
                <h2 className={title}>3. Intellectual Property Rights</h2>
                <p className={text}>
                    <strong>App Content:</strong> All code, design elements, and images created by
                    Movie or Show App are the exclusive property of Movie or Show App.
                </p>
                <p className={text}>
                    <strong>Third-Party Content:</strong> All movie/show titles, images, and
                    metadata are provided by TMDb and are the property of their respective owners.
                    We claim no rights over this content.
                </p>
                <p className={text}>
                    <strong>Restrictions:</strong> You agree not to decompile, reverse engineer,
                    disassemble, or attempt to derive the source code of the App.
                </p>

                {/* Section 5 (Previously Section 4) */}
                <h2 className={title}>5. Subscriptions and Trials</h2>

                {/* Subsection: Trial Periods */}
                <p className={text}>
                    <strong>Trial Periods:</strong>
                </p>
                <p className={text}>
                    • The App offers two trial periods:
                    <br/>
                    1. A 1-week free trial for the monthly subscription ($0.99 per month).
                    <br/>
                    2. A 2-week free trial for the annual subscription ($8.99 per year).
                    <br/>• After the trial ends, your subscription will automatically renew at the
                    regular price unless canceled at least 24 hours before the trial period ends.
                </p>

                {/* Sub-section: Subscriptions */}
                <p className={text}>
                    <strong>Subscriptions:</strong>
                </p>
                <p className={text}>
                    • By subscribing, you agree to be charged the subscription fee at the end of the
                    trial period unless you cancel.
                    <br/>
                    • Subscriptions are billed:
                    <br/>
                    &nbsp;&nbsp;• Monthly: $0.99 per month.
                    <br/>
                    &nbsp;&nbsp;• Annually: $8.99 per year.
                    <br/>• Payment will be charged to your Apple ID account upon confirmation of
                    purchase or renewal.
                </p>

                {/* Subsection: Auto-Renewal */}
                <p className={text}>
                    <strong>Auto-Renewal:</strong>
                </p>
                <p className={text}>
                    • All subscriptions automatically renew unless auto-renew is turned off at least
                    24 hours before the current period ends.
                    <br/>• Your account will be charged for renewal within 24 hours before the
                    current subscription period ends.
                </p>

                {/* Subsection: Cancellation */}
                <p className={text}>
                    <strong>Cancellation:</strong>
                </p>
                <p className={text}>
                    • You may cancel your subscription or trial at any time through your Apple
                    device:
                    <br/>
                    &nbsp;&nbsp;1. Open Settings on your device.
                    <br/>
                    &nbsp;&nbsp;2. Tap your Apple ID at the top of the screen.
                    <br/>
                    &nbsp;&nbsp;3. Select Subscriptions and choose the Movie or Show subscription.
                    <br/>
                    &nbsp;&nbsp;4. Tap Cancel Subscription to disable future renewals.
                    <br/>• Cancellation will take effect at the end of the current billing period.
                </p>

                {/* Subsection: Refund Policy */}
                <p className={text}>
                    <strong>Refund Policy:</strong>
                </p>
                <p className={text}>
                    • All refund requests must be handled through Apple. Please refer to Apple's
                    refund policies for assistance.
                    <br/>• To request a refund, follow these steps:
                    <br/>
                    &nbsp;&nbsp;1. Open the App Store app on your device.
                    <br/>
                    &nbsp;&nbsp;2. Tap your profile picture at the top of the screen.
                    <br/>
                    &nbsp;&nbsp;3. Tap "Purchased."
                    <br/>
                    &nbsp;&nbsp;4. Find the Movie or Show subscription or Lifetime Access and tap
                    "Report a Problem."
                    <br/>
                    &nbsp;&nbsp;5. Follow the on-screen instructions to complete your refund
                    request.
                    <br/>• Refunds will be processed in accordance with Apple's refund policies.
                </p>

                {/* Section 6 (Previously Section 5) */}
                <h2 className={title}>6. Disclaimer of Warranties</h2>
                <p className={text}>
                    The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of
                    any kind, either express or implied. We do not guarantee that the App will be
                    error-free, secure, or uninterrupted.
                </p>

                {/* Section 7 (Previously Section 6) */}
                <h2 className={title}>7. Limitation of Liability</h2>
                <p className={text}>
                    In no event shall Movie or Show App, its directors, employees, or agents be
                    liable for any indirect, incidental, special, consequential, or punitive damages
                    arising out of your use or inability to use the App.
                </p>

                {/* Section 8 (Previously Section 7) */}
                <h2 className={title}>8. User Responsibilities</h2>
                <p className={text}>
                    <strong>Legal Compliance:</strong> You agree to use the App in compliance with
                    all applicable laws and regulations.
                </p>

                {/* Section 9 (Previously Section 8) */}
                <h2 className={title}>9. Modification of Terms</h2>
                <p className={text}>
                    We reserve the right to modify or replace these Terms at any time. Changes will
                    be effective immediately upon posting. Your continued use of the App after any
                    such changes constitutes your acceptance of the new Terms.
                </p>

                {/* Section 10 (Previously Section 9) */}
                <h2 className={title}>10. Termination</h2>
                <p className={text}>
                    We may terminate or suspend your access to the App immediately, without prior
                    notice, for any reason whatsoever, including but not limited to a breach of
                    these Terms.
                </p>

                {/* Section 11 (Previously Section 10) */}
                <h2 className={title}>11. Governing Law</h2>
                <p className={text}>
                    These Terms shall be governed and construed in accordance with the laws of the
                    United States of America, without regard to its conflict of law provisions.
                </p>

                {/* Section 12 (Previously Section 11) */}
                <h2 className={title}>12. Severability</h2>
                <p className={text}>
                    If any provision of these Terms is found to be unenforceable or invalid, the
                    remaining provisions will remain in effect.
                </p>

                {/* Section 13 (Previously Section 12) */}
                <h2 className={title}>13. Entire Agreement</h2>
                <p className={text}>
                    These Terms constitute the entire agreement between you and Movie or Show
                    regarding the App and supersede any prior agreements.
                </p>

                {/* Section 14 (Previously Section 13) */}
                <h2 className={title}>14. Contact Us</h2>
                <p className={text}>
                    If you have any questions about these Terms, please contact us at:
                    <br/>
                    Email:
                    <a
                        href="mailto:contact@movieorshow.app"
                        className="pl-2 font-level-up text-base text-neutral-400"
                    >
                        contact@movieorshow.app
                    </a>
                </p>

                {/* Final Statement */}
                <p className={text}>
                    By using the App, you acknowledge that you have read and agree to these Terms of
                    Service.
                </p>
            </div>
        </div>
    );
}
