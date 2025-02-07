// src/components/PrivacyPolicy.jsx

import React from 'react';

export default function PrivacyPolicy() {
    const titleClass = `text-lg text-primary font-bungee mb-3`;
    const textClass = `text-base text-text font-slab mb-2.5`;
    
    return (
        <div className="p-4 overflow-auto">
            <div className="max-w-3xl mx-auto">
                {/* Last Updated Section */ }
                <h1 className={ titleClass }>Last Updated: FEB 4 2025</h1>
                <p className={ textClass }>
                    Welcome to Live Bench App (&quot;the App&quot;). Your privacy is important to us.
                    This Privacy Policy outlines how we handle your information.
                </p>
                
                {/* Section 1: Information We Do Not Collect */ }
                <h2 className={ titleClass }>1. Information We Do Not Collect</h2>
                <p className={ textClass }>
                    The App itself does not collect, store, or sell any personal information from its users.
                    We are committed to protecting your privacy and ensuring that your personal data remains confidential.
                </p>
                
                {/* Section 2: Third-Party Services and Data Use */ }
                <h2 className={ titleClass }>2. Third-Party Services and Data Use</h2>
                {/* No additional text provided for Section 2 */ }
                
                {/* Section 3: Analytics, Crash Reporting, and Performance Monitoring */ }
                <h2 className={ titleClass }>Analytics, Crash Reporting, and Performance Monitoring</h2>
                <p className={ textClass }>
                    Our app uses Firebase Analytics to collect non-personal data to understand user interactions
                    and improve the app’s performance. We also use Firebase Crashlytics to monitor and fix app crashes,
                    and Firebase Performance Monitoring to enhance app responsiveness and speed.
                    No personal identifiable information is collected or tracked through these services.
                </p>
                
                {/* Section 4: Tracking Technologies */ }
                <h2 className={ titleClass }>3. Tracking Technologies</h2>
                <p className={ textClass }>
                    We use Google Analytics and Microsoft Clarity to track user interactions on our website only.
                    These services help us understand how users engage with our website and improve our services accordingly.
                    Please note that these tracking tools are not integrated into the mobile app and are not tied to the user ID.
                </p>
                <p className={ textClass }>
                    By using our website, these tracking technologies may store tracking cookies on your device.
                    If you accidentally consent to tracking or change your mind later, you can manage your cookie preferences
                    by clearing your browser cache. This action will remove the stored tracking cookies from your device.
                </p>
                
                {/* Section 5: Children's Privacy */ }
                <h2 className={ titleClass }>4. Children's Privacy</h2>
                <p className={ textClass }>
                    The App is not intended for children under the age of 12.
                    We do not knowingly collect personal information from children.
                </p>
                
                
                {/* Section 7: Changes to This Privacy Policy */ }
                <h2 className={ titleClass }>6. Changes to This Privacy Policy</h2>
                <p className={ textClass }>
                    We may update our Privacy Policy from time to time.
                    Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
                    Your continued use of the App signifies your acceptance of any changes.
                </p>
                
                {/* Section 8: Contact Us */ }
                <h2 className={ titleClass }>7. Contact Us</h2>
                <p className={ textClass }>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br/>
                    <strong>Email:</strong> contact@livebench.app
                </p>
                <p className={ textClass }>
                    By using the App, you acknowledge that you have read and agree to this Privacy Policy.
                </p>
            </div>
        </div>
    );
}