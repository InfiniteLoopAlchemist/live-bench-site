'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import CookieConsent, { Cookies } from 'react-cookie-consent';

export default function ClientLayout( { children } ) {
    const [ analyticsEnabled, setAnalyticsEnabled ] = useState(false);
    
    useEffect(() => {
        const consent = Cookies.get('userConsent');
        if ( consent === 'accepted' ) {
            setAnalyticsEnabled(true);
        }
        if ( consent === 'declined' ) {
            setAnalyticsEnabled(false);
            removeAnalyticsScripts();
            removeAnalyticsCookies();
        }
    }, []);
    
    const handleDecline = () => {
        console.log('User declined cookie consent');
        setAnalyticsEnabled(false);
        Cookies.set('userConsent', 'declined', { expires: 150 });
        removeAnalyticsScripts();
        removeAnalyticsCookies();
    };
    
    const handleAccept = () => {
        console.log('User accepted cookie consent');
        setAnalyticsEnabled(true);
        Cookies.set('userConsent', 'accepted', { expires: 150 });
    };
    
    const removeAnalyticsScripts = () => {
        const gaScript = document.querySelector(
            'script[src="https://www.googletagmanager.com/gtag/js?id=G-RS3QS7028F"]'
        );
        if ( gaScript ) gaScript.remove();
        
        const gaInlineScript = document.getElementById('google-analytics-inline');
        if ( gaInlineScript ) gaInlineScript.remove();
        
        const clarityScript = document.getElementById('clarity-tracking');
        if ( clarityScript ) clarityScript.remove();
        
        const fbPixelScript = document.getElementById('facebook-pixel-script');
        if ( fbPixelScript ) fbPixelScript.remove();
        
        const fbPixelNoscript = document.getElementById('facebook-pixel-noscript');
        if ( fbPixelNoscript ) fbPixelNoscript.remove();
        
        window.dataLayer = undefined;
        delete window.clarity;
        delete window.fbq;
    };
    
    const removeAnalyticsCookies = () => {
        Cookies.remove('_ga');
        Cookies.remove('_gid');
        Cookies.remove('_gat');
        Cookies.remove('_clck');
        Cookies.remove('_clsk');
        Cookies.remove('_fbp');
        Cookies.remove('fr');
    };
    
    return (
        <>
            { analyticsEnabled && (
                <>
                    <script>
                        { `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M6V4PJFF');` }
                    </script>
                </>
            ) }
            
            { analyticsEnabled && (
                <>
                    <Script
                        async
                        id="clarity-tracking"
                        strategy="lazyOnload"
                        dangerouslySetInnerHTML={ {
                            __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "p2b11t4dsr");
              `
                        } }
                    />
                    
                    <Script
                        id="google-analytics-script"
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-RS3QS7028F"
                        strategy="lazyOnload"
                    />
                    <Script async id="google-analytics-inline" strategy="lazyOnload">
                        { `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RS3QS7028F');
            ` }
                    </Script>
                    
                    <Script
                        id="facebook-pixel-script"
                        strategy="lazyOnload"
                        dangerouslySetInnerHTML={ {
                            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '864523682518320');
                fbq('track', 'PageView');
              `
                        } }
                    />
                    <noscript
                        id="facebook-pixel-noscript"
                        dangerouslySetInnerHTML={ {
                            __html: `
                <img height="1" width="1" style="display:none"
                     src="https://www.facebook.com/tr?id=864523682518320&ev=PageView&noscript=1"
                />
              `
                        } }
                    />
                </>
            ) }
            
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                enableDeclineButton
                cookieName="userConsent"
                contentClasses="font-level-up text-white text-xs"
                style={ { background: '#1A1A1A' } }
                buttonClasses="font-level-up text-white"
                buttonStyle={ {
                    color: '#EAE0C8',
                    fontSize: '13px',
                    background: '#355E3B',
                    border: '2px solid #0F0F0F',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    cursor: 'pointer'
                } }
                declineButtonStyle={ {
                    color: '#EAE0C8',
                    background: '#990000',
                    fontSize: '13px',
                    fontFamily: 'Level Up, sans-serif',
                    border: '2px solid #0F0F0F',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    cursor: 'pointer'
                } }
                expires={ 150 }
                onDecline={ handleDecline }
                onAccept={ handleAccept }
            >
                This website uses cookies to enhance the user experience.
                <a href="/PrivacyPolicy" className="pl-3 text-[#AE7B5B] font-level-up">
                    Our Privacy Policy
                </a>
            </CookieConsent>
            
            { children }
        </>
    );
}