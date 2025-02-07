// Always use Full Code unless I tell you otherwise! Never remove Todos or Comments

import React from 'react';

export default function TOS() {
    const title = 'text-lg text-primary font-bungee mb-3';
    const text = 'text-base text-text font-slab mb-2.5';

    return (
        <div className="">
            <div className="max-w-3xl mx-auto p-4">
                <h1 className={title}>Last Updated: FEB 4 2025</h1>

                <p className={text}>
                    Welcome to Live Bench App ("the App"). By accessing or using the App, you agree
                    to be bound by these Terms of Service ("Terms"). Please read them carefully.
                </p>

                <h2 className={title}>6. Disclaimer of Warranties</h2>
                <p className={text}>
                    The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of
                    any kind, either express or implied. We do not guarantee that the App will be
                    error-free, secure, or uninterrupted.
                </p>

                <h2 className={title}>7. Limitation of Liability</h2>
                <p className={text}>
                    In no event shall Live Bench App, its directors, employees, or agents be
                    liable for any indirect, incidental, special, consequential, or punitive damages
                    arising out of your use or inability to use the App.
                </p>

                <h2 className={title}>8. User Responsibilities</h2>
                <p className={text}>
                    Legal Compliance: You agree to use the App in compliance with all applicable
                    laws and regulations.
                </p>

                <h2 className={title}>9. Modification of Terms</h2>
                <p className={text}>
                    We reserve the right to modify or replace these Terms at any time. Changes will
                    be effective immediately upon posting. Your continued use of the App after any
                    such changes constitutes your acceptance of the new Terms.
                </p>

                <h2 className={title}>10. Termination</h2>
                <p className={text}>
                    We may terminate or suspend your access to the App immediately, without prior
                    notice, for any reason whatsoever, including but not limited to a breach of
                    these Terms.
                </p>

                <h2 className={title}>11. Governing Law</h2>
                <p className={text}>
                    These Terms shall be governed and construed in accordance with the laws of
                    United States of America, without regard to its conflict of law provisions.
                </p>

                <h2 className={title}>12. Severability</h2>
                <p className={text}>
                    If any provision of these Terms is found to be unenforceable or invalid, the
                    remaining provisions will remain in effect.
                </p>

                <h2 className={title}>13. Entire Agreement</h2>
                <p className={text}>
                    These Terms constitute the entire agreement between you and Live Bench App
                    regarding the App and supersede any prior agreements.
                </p>

                <h2 className={title}>14. Contact Us</h2>
                <p className={text}>
                    If you have any questions about these Terms, please contact us at:
                    <br/>
                    Email: contact@livebench.app
                </p>

                <p className={text}>
                    By using the App, you acknowledge that you have read and agree to these Terms of Service.
                </p>
            </div>
        </div>
    );
}