import React from 'react';
import Burger from './Burger';
import Greeting from './Greeting';
import Nav from './Nav';

export default function Header() {
    return (
        <header className='header'>
            <Nav />
            <div className='header__container main-framed'>
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
