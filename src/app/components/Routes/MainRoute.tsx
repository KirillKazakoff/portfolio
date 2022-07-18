import React from 'react';
import Header from '../Header/Header';

export default function MainRoute() {
    return (
        <div className='body__container'>
            <Header />
            <main className='main'>
                <section className='about main-framed'>
                    <span className='title title--padding title--about'>About me</span>
                    <div className='about__text text--info'>
                        <p className='about__text-p'>
                            {
                                "I'm a junior frontend developer... Love coding so much... and I'm a rapper as well, bruhhh!"
                            }
                        </p>
                        <p className='about__text-p'>
                            {`I've graduated the course on Netology on program
                    “Frontend-developer from scratch”`}
                        </p>
                        <p className='about__text-p'>
                            {
                                "Generally speaking, I'm great person... \n Employ me, please!"
                            }
                        </p>
                    </div>
                </section>
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
                            <span className='skills__list-item-text'>
                                React, React-router
                            </span>
                        </li>
                        <li className='skills__list-item'>
                            <span className='skills__list-item-hyphen'>-</span>
                            <span className='skills__list-item-text'>Redux</span>
                        </li>
                        <li className='skills__list-item'>
                            <span className='skills__list-item-hyphen'>-</span>
                            <span className='skills__list-item-text'>
                                Understanding of protocol HTTP/HTTPS, hands-on experience
                                relating to interaction with server API
                            </span>
                        </li>
                        <li className='skills__list-item'>
                            <span className='skills__list-item-hyphen'>-</span>
                            <span className='skills__list-item-text'>
                                HTML, CSS, SCSS, BEM-metodology, having experience with
                                CSS-IN-JS
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
                <section className='portfolio main-framed'>
                    <span className='title title--padding-portfolio'>Portfolio</span>
                    <ul className='portfolio__list'>
                        <li className='portfolio__item'>
                            <img
                                className='portfolio__item-img portfolio__item--main'
                                src='./img/projects/main.png'
                                alt='main-project'
                            />
                            <div className='project__info'>
                                <span className='project__title project__title-main'>
                                    Main Project
                                </span>
                                <a
                                    className='project__link link'
                                    href='https://github.com/KirillKazakoff/finalDiploma'
                                >
                                    <span className='project__title'>
                                        Railway ticket booking system
                                    </span>
                                    <span className='project__desc'>
                                        React-Redux (only PC screen)
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li className='portfolio__item'>
                            <img
                                className='portfolio__item-img'
                                src='./img/projects/js.png'
                                alt='JS-project'
                            />
                            <div className='project__info'>
                                <a
                                    className='project__link link'
                                    href='https://github.com/KirillKazakoff/diploma_JS_Main_Frontend'
                                >
                                    <span className='project__title'>WhatsAppBot</span>
                                    <span className='project__desc'>
                                        JS-native (only PC screen)
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li className='portfolio__item'>
                            <img
                                className='portfolio__item-img'
                                src='./img/projects/blog.png'
                                alt='CSS-project'
                            />
                            <div className='project__info'>
                                <a
                                    className='project__link link'
                                    href='https://github.com/KirillKazakoff/css-diploma'
                                >
                                    <span className='project__title'>Site-blog</span>
                                    <span className='project__desc'>
                                        HTML-CSS (adaptive)
                                    </span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className='contacts main-framed'>
                    <span className='title title--padding'>Contacts</span>
                    <span className='contacts__desc'>
                        {'Want to know more or just chat? \n You are welcome!'}
                    </span>
                    <ul className='socials'>
                        <li className='socials__item'>
                            <a
                                className='socials__item-link'
                                href='mailto: kirillkazakovwork@gmail.com'
                            >
                                <img
                                    className='socials__item-img'
                                    src='./svg/email.svg'
                                    alt='email'
                                />
                            </a>
                        </li>
                        <li className='socials__item'>
                            <a
                                className='socials__item-link'
                                href='https://t.me/Teahohotka'
                            >
                                <img
                                    className='socials__item-img'
                                    src='./svg/telegram.svg'
                                    alt='telegram'
                                />
                            </a>
                        </li>
                        <li className='socials__item'>
                            <a
                                className='socials__item-link'
                                href='https://www.instagram.com/greenporkrealtalk'
                            >
                                <img
                                    className='socials__item-img'
                                    src='./svg/ig.svg'
                                    alt='ig'
                                />
                            </a>
                        </li>
                        <li className='socials__item'>
                            <a
                                className='socials__item-link'
                                href='https://m.vk.com/kotvhlebe'
                            >
                                <img
                                    className='socials__item-img'
                                    src='./svg/vk.svg'
                                    alt='vk'
                                />
                            </a>
                        </li>
                    </ul>
                </section>
                <footer className='footer main-framed'>
                    <a href='https://linktr.ee/kekazavr' className='link footer__link'>
                        Check out my music! Like me on VK and SoundCloud!
                    </a>
                    <img
                        className='footer__seagull seagull'
                        src='./img/others/seagull.png'
                        alt='seagull'
                    />
                </footer>
            </main>
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
        </div>
    );
}
