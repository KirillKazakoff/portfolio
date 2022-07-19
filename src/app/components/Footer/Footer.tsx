import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';

export default function Footer() {
    const { footer } = useAppSelector(selectDic);

    return (
        <footer className='footer main-framed'>
            <a href='https://linktr.ee/kekazavr' className='link footer__link'>
                {footer.desc}
            </a>
            <LazyLoadImage
                className='footer__seagull seagull'
                src='./img/others/seagull.png'
                alt='seagull'
            />
        </footer>
    );
}
