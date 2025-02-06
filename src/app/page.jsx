'use client';
import ShareButtons from '../components/ShareButtons';

export default function Home() {
    
    
    return (
        <>
            <h2 className="font-level-up text-shadow mb-4 text-primary text-lg text-center xs:text-xl">
                Can't Decide What to Watch?
            </h2>
            <h2 className="font-level-up text-shadow mb-4 text-center text-text text-lg">
                Search for your favorite movies and shows and add them to a list.
            </h2>
            
            <h2 className="font-level-up text-shadow mb-4 text-center text-text text-md">
                Hit the Random Button our AI selects a movie or show from your selection.
            </h2>
            <h2 className="font-level-up text-shadow mb-4 text-center text-deleteButtonBackground text-lg">
                Watch on your favorite streaming provider.
            </h2>
            
            <div className="flex flex-col justify-evenly my-6 items-center w-full xs:w-96">
                <ShareButtons/>
            </div>
            
            <a
                href="https://apps.apple.com/us/app/movie-or-show/id6738360998"
                target="_blank"
                rel="noopener noreferrer"
            
            >
                <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-[150px] m-[10px]"
                />
            </a>
            
            <h2 className="font-level-up text-shadow my-8 text-primary text-lg text-center xs:text-xl w-56 xs:w-full">
                Add Your Favorite Movies and Shows
            </h2>
            <img
                src="/add-search-shows-movies.webp"
                className="w-[75%] xs:w-[80%] mb-2"
                alt="Add Movies and Shows"
            />
            
            <h2 className="font-level-up text-shadow my-8 text-primary text-lg text-center xs:text-xl w-56 xs:w-full">
                Just Hit Random Our AI Will Do the Rest!
            </h2>
            <img
                src="/just-hit-random-our-Ai-will-select-a-movie-or-show-from-your-list.webp"
                className="w-[75%] xs:w-[80%] mb-2"
                alt="Just hit Random Our AI Will Do the Rest!"
            />
            
            <h2 className="font-level-up text-shadow my-8 text-center text-deleteButtonBackground text-lg">
                You can Delete your Movies and Shows
            </h2>
            <img
                src="/delete-movie-show.webp"
                className="w-[75%] xs:w-[80%] mb-2"
                alt="You can Delete Your Movies And Shows"
            />
            
            <ShareButtons/>
            
            <a
                href="https://apps.apple.com/us/app/movie-or-show/id6738360998"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5"
            >
                <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-[150px] m-[10px] mb-5"
                />
            </a>
            
            <h3 className="font-level-up text-shadow my-4 text-deleteButtonBackground text-lg text-center xs:text-xl">
                Coming to the Google Play Store soon. So bookmark this page and check back!
            </h3>
        </>
    );
}