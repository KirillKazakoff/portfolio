/* eslint-disable consistent-return */
import React, { useEffect, useRef, useState } from 'react';
import Burger from './Burger';
import Greeting from './Greeting';
import Nav from './Nav';
import { useWindowSize } from './useWindowSize';

export default function OldHeader() {
    const size = useWindowSize();
    const mobileSrc = '../../../img/backgrounds/xleb-header-mobile2.png';
    const lgSrc = '../../../img/backgrounds/xleb-header-desktop.png';
    const [src, setSrc] = useState(mobileSrc);
    const [loaded, setLoaded] = useState<string[]>([]);

    if (size[0] >= 768) {
        if (lgSrc !== src) {
            setSrc(lgSrc);
        }
    } else if (mobileSrc !== src) {
        setSrc(mobileSrc);
    }

    const container = useRef<HTMLDivElement>(null);
    const className = 'header__container main-framed';

    return (
        <header className='header'>
            <Nav />
            <div className={className} ref={container}>
                <div className='header__top'>
                    <Greeting />
                    <Burger />
                </div>

                <div className='header__pic'>
                    <img
                        className='cat-pic'
                        src='./img/others/kot-mobile.png'
                        alt='cat'
                    />
                </div>
            </div>
        </header>
    );
}
