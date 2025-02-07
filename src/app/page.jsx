'use client';
import ShareButtons from '../components/ShareButtons';

export default function Home() {
    
    
    return (
        <>
            <h2 className="font-bungee text-shadow mb-4 text-primary text-lg text-center xs:text-xl">
                Upto Date AI Benchmarks and AGI Countdown
            </h2>
            <h2 className="font-slab  px-3 mb-4 text-center text-text text-base">
                
                Get the latest Ai model benchmarks from livebench.ai and the latest AGI countdown with the Live Bench App!
            </h2>
            
            <div className="flex flex-col justify-evenly my-6 items-center w-full xs:w-96">
                <ShareButtons/>
            </div>
            
            <a
                href="https://apps.apple.com/us/app/live-bench-ai-benchmarks/id6741484992"
                target="_blank"
                rel="noopener"
            
            >
                <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-[150px] m-[10px]"
                />
            </a>
            
            <div className="font-level-up text-shadow mb-4 text-primary text-lg text-center xs:text-xl w-56 xs:w-full">
            
            </div>
            <img
                src="/live-bench-ai-model-results.webp"
                className="w-[75%] xs:w-[80%] rounded-2xl mb-2"
                alt="Livebench.ai Ai Benchmarks"
            />
            
            <div className="font-level-up text-shadow mb-4 text-primary text-lg text-center xs:text-xl w-56 xs:w-full">
            
            </div>
            <img
                src="/live-bench-ai-model-results2.webp"
                className="w-[75%] xs:w-[80%] rounded-2xl mb-2"
                alt="Press the table header sort"
            />
            
            <div className="font-level-up text-shadow my-4 text-center text-deleteButtonBackground text-lg">
            
            </div>
            <img
                src="/Alan's-conservative-countdown-to-AGI.webp"
                className="w-[75%] rounded-2xl xs:w-[80%] mb-2"
                alt="Alan's conservative countdown AGI"
            />
            <div className="font-level-up text-shadow my-4 text-center text-deleteButtonBackground text-lg">
            </div>
            <img
                src="/live-bench-ai-model-results-full-ipad-support.webp"
                className="w-[75%] rounded-2xl xs:w-[80%] mb-2"
                alt="Full iPad support"
            />
            <ShareButtons/>
            
            <a
                href="https://apps.apple.com/us/app/live-bench-ai-benchmarks/id6741484992"
                target="_blank"
                rel="noopener"
                className="mt-5"
            >
                <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-[150px] m-[10px] mb-5"
                />
            </a>
            
            <h3 className="font-slab text-shadow my-4 text-white text-lg text-center xs:text-xl">
                Coming to the Google Play Store soon. So bookmark this page and check back!
            </h3>
        </>
    );
}