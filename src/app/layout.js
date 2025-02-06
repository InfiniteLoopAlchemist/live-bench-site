// src/app/layout.jsx

import './globals.css';
import Link from 'next/link';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
    title: 'Movie or Show App',
    description:
        'Can\'t decide what to watch? Choose your favorite movies or shows, then randomly select one to watch.'
};

export default function RootLayout( { children } ) {
    return (
        <html lang="en">
        <head>
            {/* Preload Fonts */ }
            <link
                rel="preload"
                href="/fonts/Levelup.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Levelup.woff"
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Levelup.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
            />
            {/* Favicon and Meta */ }
            <link rel="icon" href="/favicon.ico"/>
            <meta property="og:title" content="Movie or Show App"/>
            <meta
                property="og:description"
                content="Can't decide what to watch? Let AI choose for you."
            />
            <meta property="og:image" content="/MovieOrShowLogoShare.webp"/>
            <meta property="og:url" content="https://movieorshow.app"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
        </head>
        <body className="bg-background antialiased">
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-M6V4PJFF"
                height="0"
                width="0"
                style={ { display: 'none', visibility: 'hidden' } }
            ></iframe>
        </noscript>
        <div className="flex flex-col justify-center items-center bg-background">
            <div className="max-w-xl w-full flex flex-col items-center bg-backgroundOnDark rounded-md shadow-lg">
                <img src="/MovieOrShowLogo.webp" alt="App Logo" className="h-32 mb-5"/>
                <div className="flex flex-col justify-evenly items-center">
                    <h1 className="font-level-up text-shadow text-primary text-xl xs:text-2xl mb-4">
                        Movie or Show App
                    </h1>
                    <ClientLayout>{ children }</ClientLayout>
                    <footer className="text-xs font-level-up text-white py-4 flex justify-around pb-36 w-full">
                        <Link href="/">Home</Link>
                        <Link href="/TOS">TOS</Link>
                        <Link href="/PrivacyPolicy">Privacy Policy</Link>
                    </footer>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}