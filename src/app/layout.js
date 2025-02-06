// src/app/layout.jsx

import './globals.css';
import Link from 'next/link';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
    title: 'Live Bench App',
    description:
        'Get latest livebench.ai updates and latest AGI countdown with the Live Bench App!'
};

export default function RootLayout( { children } ) {
    return (
        <html lang="en">
        <head>
            {/* Preload Fonts */ }
            <link
                rel="preload"
                href="/fonts/alfaslabone-regular-webfont.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/alfaslabone-regular-webfont.woff"
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/bungee-regular-webfont.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/bungee-regular-webfont.woff"
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
            />
            {/* Favicon and Meta */ }
            <link rel="icon" href="/favicon.ico"/>
            <meta property="og:title" content="Live Bench App"/>
            <meta
                property="og:description"
                content="Get latest livebench.ai updates and latest AGI countdown with the Live Bench App!"
            />
            <meta property="og:image" content="/live-bench-app-logo.webp"/>
            <meta property="og:url" content="https://livebench.app"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
        </head>
        <body className="bg-background antialiased">
        <div className="flex flex-col justify-center items-center bg-background">
            <div className="max-w-xl w-full flex flex-col items-center pt-4 bg-backgroundOnDark rounded-md shadow-lg">
                <img src="/live-bench-app-logo.webp" alt="Live Bench App Logo" className="h-32   mb-5 rounded-2xl"/>
                <div className="flex flex-col justify-evenly items-center">
                    <h1 className="font-bungee text-shadow text-primary text-xl xs:text-2xl mb-4">
                        Live Bench App
                    </h1>
                    <ClientLayout>{ children }</ClientLayout>
                    <footer className="text-base font-bungee text-primary py-4 flex justify-around pb-36 w-full">
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