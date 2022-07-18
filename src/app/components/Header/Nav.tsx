import React from 'react';

export default function Nav() {
    return (
        <nav className='nav header__nav main-framed'>
            <li className='nav__item'>
                <a className='nav__link' href='/#'>
                    Main
                </a>
            </li>
            <li className='nav__item'>
                <a className='nav__link' href='/#'>
                    About
                </a>
            </li>
            <li className='nav__item'>
                <a className='nav__link' href='/#'>
                    Skills
                </a>
            </li>
            <li className='nav__item'>
                <a className='nav__link' href='/#'>
                    Portfollio
                </a>
            </li>
            <li className='nav__item'>
                <a className='nav__link' href='/#'>
                    Contacts
                </a>
            </li>
        </nav>
    );
}
