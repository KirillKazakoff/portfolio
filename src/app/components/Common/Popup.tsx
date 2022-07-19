import React from 'react';

export default function Popup() {
    return (
        <div className='popup main-framed popup--hidden'>
            <ul className='nav'>
                <li className='nav__item'>
                    <a className='nav__link' href='/#'>
                        Home
                    </a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='/#'>
                        About me
                    </a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='/#'>
                        Skills
                    </a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='/#'>
                        Portfolio
                    </a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href='/#'>
                        Contacts
                    </a>
                </li>
            </ul>
            <img
                className='cross-mark' src='./svg/cross.svg'
                alt='x'
            />
        </div>
    );
}
