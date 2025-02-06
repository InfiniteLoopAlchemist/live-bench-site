// src/components/PrivacyPolicy.jsx

import React from 'react';

export default function PrivacyPolicy() {
    
    const titleClass = `text-lg text-primary font-level-up mb-3`;
    const textClass = `text-base text-text font-level-up mb-2.5`;
    
    return (
        <div className="p-4 overflow-auto">
            <div className="max-w-3xl mx-auto">
                {/* Last Updated Section */ }
                <h1 className={ titleClass }>Last Updated: JAN 29 2025</h1>
                
                {/* Introduction */ }
                <p className={ textClass }>
                    Welcome to Movie or Show (&#34;the App&#34;). Your privacy is important to us. This Privacy Policy
                    outlines how we handle your information.
                </p>
                
                {/* Section 1: Information We Do Not Collect */ }
                <h2 className={ titleClass }>1. Information We Do Not Collect</h2>
                <p className={ textClass }>
                    The App itself does not collect, store, or sell any personal information from its users. We are
                    committed to protecting your privacy and ensuring that your personal data remains confidential.
                </p>
                
                {/* Section 2: Third-Party Services and Data Use */ }
                <h2 className={ titleClass }>2. Third-Party Services and Data Use</h2>
                <p className={ textClass }>
                    We use RevenueCat, a third-party service, to manage in-app purchases and subscriptions. RevenueCat
                    helps us evaluate and process purchase-related activities but does not collect or store identifiable
                    personal information from users. Here is what RevenueCat does and does not collect:
                </p>
                <ul className="list-disc pl-5">
                    <li className={ textClass }>
                        <strong>Health or Fitness Data:</strong> RevenueCat does not collect health or fitness
                        information.
                    </li>
                    <li className={ textClass }>
                        <strong>Financial Information:</strong> RevenueCat does not collect payment information.
                        Payments are processed by the app store, such as Apple App Store or Google Play Store, and we do
                        not have access to your payment details.
                    </li>
                    <li className={ textClass }>
                        <strong>Location Data:</strong> RevenueCat does not collect precise or coarse location data.
                        However, locale and currency codes are used to manage subscriptions.
                    </li>
                    <li className={ textClass }>
                        <strong>Sensitive Information:</strong> RevenueCat does not collect sensitive personal data,
                        such as racial or ethnic details, political opinions, or biometric data.
                    </li>
                    <li className={ textClass }>
                        <strong>Contact Information:</strong> RevenueCat does not collect names, email addresses, phone
                        numbers, or address book details.
                    </li>
                    <li className={ textClass }>
                        <strong>Browsing or Search History:</strong> RevenueCat does not track or store
                        users&#39; browsing or search history.
                    </li>
                </ul>
                <p className={ textClass }>
                    Purchase history data is collected but is not tied to a user&#39;s personal identity. We use this
                    data solely for the following purposes:
                </p>
                <ul className="list-disc pl-5">
                    <li className={ textClass }>
                        <strong>Analytics:</strong> To understand user behavior and evaluate the effectiveness of app
                        features, plan new features, and measure audience characteristics.
                    </li>
                    <li className={ textClass }>
                        <strong>App Functionality:</strong> To authenticate and enable features, prevent fraud, ensure
                        app stability, and improve performance.
                    </li>
                </ul>
                
                {/* Section 3: Facebook SDK Integration and Data Use */ }
                <h2 className={ titleClass }>3. Facebook SDK Integration and Data Use</h2>
                <p className={ textClass }>
                    We integrate the Facebook SDK to enhance app functionality, provide personalized content, and
                    deliver relevant advertisements. The Facebook SDK collects the following types of data:
                </p>
                <ul className="list-disc pl-5">
                    <li className={ textClass }>
                        <strong>Device Information:</strong> Includes device type, operating system, and device
                        identifiers (e.g., IDFA for iOS devices).
                    </li>
                    <li className={ textClass }>
                        <strong>Usage Data:</strong> Such as app interactions, screen views, and event tracking to
                        analyze user behavior and improve app functionality.
                    </li>
                    <li className={ textClass }>
                        <strong>Non-Personal Identifiers:</strong> Aggregated and anonymized data that does not
                        personally identify individual users.
                    </li>
                </ul>
                
                <p className={ textClass }>
                    <strong>Purpose of Data Collection:</strong>
                </p>
                <ul className="list-disc pl-5">
                    <li className={ textClass }>
                        <strong>Analytics:</strong> To understand how users interact with the app, enabling us to
                        improve app features and user experience.
                    </li>
                    <li className={ textClass }>
                        <strong>Advertising:</strong> To deliver personalized advertisements and measure the
                        effectiveness of advertising campaigns.
                    </li>
                    <li className={ textClass }>
                        <strong>App Performance:</strong> To monitor app stability and performance, helping us to
                        identify and fix issues promptly.
                    </li>
                </ul>
                
                <p className={ textClass }>
                    <strong>Data Sharing:</strong>
                </p>
                <p className={ textClass }>
                    The data collected through the Facebook SDK is shared with Facebook for the purposes outlined above.
                    We do not associate this data with personally identifiable information unless explicitly provided by
                    the user.
                </p>
                
                <p className={ textClass }>
                    <strong>User Control:</strong>
                </p>
                <p className={ textClass }>
                    Users can manage their tracking preferences through their device settings. On iOS devices, users can
                    opt out of tracking by disabling &#34;Allow Apps to Request to Track&#34; under
                    Settings &gt; Privacy &gt; Tracking. Please note that opting out may affect the functionality of
                    certain features within the app.
                </p>
                
                {/* Section 4: Analytics, Crash Reporting, and Performance Monitoring */ }
                <h2 className={ titleClass }>4. Analytics, Crash Reporting, and Performance Monitoring</h2>
                <p className={ textClass }>
                    Our app uses Firebase Analytics to collect non-personal data to understand user interactions and
                    improve the app’s performance. We also use Firebase Crashlytics to monitor and fix app crashes, and
                    Firebase Performance Monitoring to enhance app responsiveness and speed. No personally identifiable
                    information is collected or tracked through these services.
                </p>
                
                {/* Section 5: Tracking Technologies */ }
                <h2 className={ titleClass }>5. Tracking Technologies</h2>
                <p className={ textClass }>
                    We use Google Analytics and Microsoft Clarity to track user interactions on our website only. These
                    services help us understand how users engage with our website and improve our services accordingly.
                    Please note that these tracking tools are not integrated into the mobile app and are not tied to the
                    user ID.
                </p>
                <p className={ textClass }>
                    By using our website, these tracking technologies may store tracking cookies on your device. If you
                    accidentally consent to tracking or change your mind later, you can manage your cookie preferences
                    by clearing your browser cache. This action will remove the stored tracking cookies from your
                    device.
                </p>
                <p className={ textClass }>
                    <strong>To clear your cache, follow the instructions for your specific browser:</strong>
                </p>
                <ul className="list-disc pl-5">
                    <li className={ textClass }>
                        <strong>Google Chrome:</strong>
                        <br/>
                        - Click the three dots in the upper right corner.
                        <br/>
                        - Go to <strong>Settings</strong> &gt; <strong>Privacy and security</strong> &gt; <strong>Clear
                        browsing data</strong>.
                        <br/>
                        - Select <strong>Cookies and other site data</strong> and <strong>Cached images and
                        files</strong>, then click <strong>Clear data</strong>.
                    </li>
                    <li className={ textClass }>
                        <strong>Mozilla Firefox:</strong>
                        <br/>
                        - Click the three lines in the upper right corner.
                        <br/>
                        - Go to <strong>Options</strong> &gt; <strong>Privacy &amp; Security</strong> &gt; <strong>Cookies
                        and Site Data</strong> &gt; <strong>Clear Data</strong>.
                        <br/>
                        - Select <strong>Cookies and Site Data</strong> and <strong>Cached Web Content</strong>, then
                        click <strong>Clear</strong>.
                    </li>
                    <li className={ textClass }>
                        <strong>Safari (iOS and macOS):</strong>
                        <br/>
                        - Go to <strong>Settings</strong> &gt; <strong>Safari</strong> &gt; <strong>Clear History and
                        Website Data</strong>.
                        <br/>
                        - Confirm by tapping <strong>Clear History and Data</strong>.
                    </li>
                </ul>
                
                {/* Section 6: Children's Privacy */ }
                <h2 className={ titleClass }>6. Children&#39;s Privacy</h2>
                <p className={ textClass }>
                    The App is not intended for children under the age of 12. We do not knowingly collect personal
                    information from children.
                </p>
                
                {/* Section 7: AdMob Disclosure */ }
                <h2 className={ titleClass }>7. AdMob Disclosure</h2>
                <p className={ textClass }>
                    We integrate Google AdMob to display advertisements within the App. AdMob may collect
                    non-personally identifiable information to serve relevant ads and improve ad performance.
                    This data includes device identifiers, ad interaction data, and general usage statistics.
                </p>
                <p className={ textClass }>
                    <strong>Data Collection by AdMob:</strong>
                </p>
                <ul className="list-disc pl-5">
                    <li className={ textClass }>
                        <strong>Device Information:</strong> Includes device type, operating system, and device
                        identifiers.
                    </li>
                    <li className={ textClass }>
                        <strong>Usage Data:</strong> Such as app interactions and ad interactions to analyze user
                        behavior.
                    </li>
                    <li className={ textClass }>
                        <strong>Non-Personal Identifiers:</strong> Aggregated and anonymized data that does not
                        personally identify individual users.
                    </li>
                </ul>
                <p className={ textClass }>
                    <strong>Purpose of Data Collection:</strong>
                </p>
                <ul className="list-disc pl-5">
                    <li className={ textClass }>
                        <strong>Advertising:</strong> To deliver personalized advertisements and measure the
                        effectiveness of ad campaigns.
                    </li>
                    <li className={ textClass }>
                        <strong>Analytics:</strong> To understand user interactions with ads and improve ad targeting.
                    </li>
                </ul>
                <p className={ textClass }>
                    <strong>Data Sharing:</strong>
                </p>
                <p className={ textClass }>
                    The data collected through AdMob is shared with Google for the purposes outlined above. We do
                    not associate this data with personally identifiable information unless explicitly provided by
                    the user.
                </p>
                <p className={ textClass }>
                    <strong>User Control:</strong>
                </p>
                <p className={ textClass }>
                    Users can manage their ad preferences and opt out of personalized ads by visiting the Google Ads
                    Settings page. Additionally, users can disable interest-based ads on their device settings.
                </p>
                <p className={ textClass }>
                    <strong>Data Tied to User ID:</strong>
                </p>
                <p className={ textClass }>
                    Any data collected by AdMob is not tied to your user ID within the App. We ensure that your personal
                    identity remains confidential and that advertising data is used solely for enhancing your app
                    experience
                    through relevant ads.
                </p>
                
                {/* Section 8: Changes to This Privacy Policy */ }
                <h2 className={ titleClass }>8. Changes to This Privacy Policy</h2>
                <p className={ textClass }>
                    We may update our Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated &#34;Last Updated&#34; date. Your continued use of the App signifies your acceptance of any
                    changes.
                </p>
                
                {/* Section 9: Contact Us */ }
                <h2 className={ titleClass }>9. Contact Us</h2>
                <p className={ textClass }>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br/>
                    <strong>Email:</strong>{ ' ' }
                    <a
                        href="mailto:contact@movieorshow.app"
                        className="text-neutral-400 hover:underline"
                    >
                        contact@movieorshow.app
                    </a>
                </p>
                
                {/* Final Statement */ }
                <p className={ textClass }>
                    By using the App, you acknowledge that you have read and agree to this Privacy Policy.
                </p>
            </div>
        </div>
    );
}