import React from 'react';

export default function Skills() {
    return (
        <section className='skills main-framed'>
            <span className='title title--padding'>Skills</span>
            <ul className='skills__list text--info'>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>
                        JavaScript, knowledge of basic OOP principles
                    </span>
                </li>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>TypeScript</span>
                </li>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>React, React-router</span>
                </li>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>Redux</span>
                </li>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>
                        Understanding of protocol HTTP/HTTPS, hands-on experience relating
                        to interaction with server API
                    </span>
                </li>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>
                        HTML, CSS, SCSS, BEM-metodology, having experience with CSS-IN-JS
                    </span>
                </li>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>GIT</span>
                </li>
                <li className='skills__list-item'>
                    <span className='skills__list-item-hyphen'>-</span>
                    <span className='skills__list-item-text'>Webpack</span>
                </li>
            </ul>
        </section>
    );
}
