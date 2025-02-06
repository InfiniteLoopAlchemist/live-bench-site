'use client';

import React from 'react';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, TumblrIcon, TumblrShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';

const ShareButtons = () => {
    const siteUrl = 'https://movieorshow.app'; // Replace with your actual site URL
    const title = 'Check out Movie or Show App!';
    const hashtag = '#movieorshow';
    const emailSubject = 'Check out Movie or Show App!';
    const emailBody = 'Here\'s an interesting website I found:';
    
    return (
        <div className="flex items-center mt-4 flex-wrap sm:flex-nowrap justify-center gap-8">
            {/* Facebook Share Button */ }
            <FacebookShareButton
                url={ siteUrl }
                quote={ title }
                hashtag={ hashtag }
                className="flex items-center"
            >
                <FacebookIcon size={ 32 } round/>
            </FacebookShareButton>
            
            {/* Twitter (X) Share Button */ }
            <TwitterShareButton
                url={ siteUrl }
                title={ title }
                hashtags={ [ hashtag.replace('#', '') ] } // Twitter expects hashtags without the #
                className="flex items-center"
            >
                <TwitterIcon size={ 32 } round/>
            </TwitterShareButton>
            
            {/* Tumblr Share Button */ }
            <TumblrShareButton url={ siteUrl } title={ title } className="flex items-center">
                <TumblrIcon size={ 32 } round/>
            </TumblrShareButton>
            
            {/* Reddit Share Button */ }
            <RedditShareButton url={ siteUrl } title={ title } className="flex items-center">
                <RedditIcon size={ 32 } round/>
            </RedditShareButton>
            
            {/* WhatsApp Share Button */ }
            <WhatsappShareButton
                url={ siteUrl }
                title={ title }
                separator=":: "
                className="flex items-center"
            >
                <WhatsappIcon size={ 32 } round/>
            </WhatsappShareButton>
            
            {/* Email Share Button */ }
            <EmailShareButton
                url={ siteUrl }
                subject={ emailSubject }
                body={ emailBody }
                className="flex items-center"
            >
                <EmailIcon size={ 32 } round/>
            </EmailShareButton>
        </div>
    );
};

export default ShareButtons;
