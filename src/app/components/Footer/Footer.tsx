import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Footer() {
    return (
        <footer className='footer main-framed'>
            <a href='https://linktr.ee/kekazavr' className='link footer__link'>
                Check out my music! Like me on VK and SoundCloud!
            </a>
            <LazyLoadImage
                className='footer__seagull seagull'
                src='./img/others/seagull.png'
                alt='seagull'
            />
        </footer>
    );
}
