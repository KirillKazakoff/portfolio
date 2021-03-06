/* eslint-disable consistent-return */
import React, { useEffect, useRef } from 'react';
import Burger from './Burger';
import Greeting from './Greeting';
import Nav from './HeaderNav';
import { useAppDispatch } from '../../redux/reduxHooks';
import { setAnimationStatus } from '../../redux/loaderSlice';

export default function Header() {
    const dispatch = useAppDispatch();
    const cat = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const animEndHandler = () => {
            dispatch(setAnimationStatus('loaded'));
        };
        const imgLoadHandler = () => {
            cat.current.classList.add('cat-pic__anim');
        };

        cat.current.addEventListener('load', imgLoadHandler);
        cat.current.addEventListener('animationend', animEndHandler);

        cat.current.src = './img/others/kot-mobile.png';
        const currentCat = cat.current;
        return () => {
            currentCat.removeEventListener('load', imgLoadHandler);
            currentCat.removeEventListener('animationend', animEndHandler);
        };
    }, [dispatch]);

    return (
        <header className='header' id='main'>
            <Nav />
            <div className='header__container main-framed'>
                <div className='header__top'>
                    <Greeting />
                    <Burger />
                </div>

                <div className='header__pic'>
                    <img
                        ref={cat} className='cat-pic'
                        alt='cat'
                    />
                </div>
            </div>
        </header>
    );
}
