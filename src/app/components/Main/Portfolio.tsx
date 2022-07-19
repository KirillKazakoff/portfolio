import React, { useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioItemMain from './PortfolioItemMain';

const portfolio = [
    {
        src: './img/projects/main.png',
        alt: 'main-project',
        href: 'https://github.com/KirillKazakoff/finalDiploma',
        info: {
            eng: {
                title: 'Railway ticket booking system',
                desc: 'React-Redux (only PC screen)',
            },
            rus: {
                title: 'Главный Проект',
                desc: 'Система бронирования ЖД билетов (React-Redux)',
            },
        },
        isMain: true,
        id: '1',
    },
    {
        src: './img/projects/js.png',
        alt: 'JS-project',
        href: 'https://github.com/KirillKazakoff/diploma_JS_Main_Frontend',
        info: {
            eng: {
                title: 'WhatsAppBot',
                desc: 'JS-native (only PC screen)',
            },
            rus: {
                title: 'WhatsAppBot',
                desc: 'Приложение на нативном JS',
            },
        },
        isMain: false,
        id: '2',
    },
    {
        src: './img/projects/blog.png',
        alt: 'CSS-project',
        href: 'https://github.com/KirillKazakoff/css-diploma',
        info: {
            eng: {
                title: 'Site-blog',
                desc: 'HTML-CSS (adaptive)',
            },
            rus: {
                title: 'Сайт-блог',
                desc: 'HTML-CSS адаптивная верстка',
            },
        },
        isMain: false,
        id: '3',
    },
];

export default function Portfolio() {
    useEffect(() => {
        console.log('hello');
    });

    const items = portfolio.map((item) => {
        const {
            src, alt, href, info, isMain, id,
        } = item;
        const Item = isMain ? PortfolioItemMain : PortfolioItem;

        return (
            <Item
                href={href} alt={alt}
                info={info} key={id}
                src={src}
            />
        );
    });

    return (
        <section className='portfolio main-framed'>
            <span className='title title--padding-portfolio'>Portfolio</span>
            <ul className='portfolio__list'>{items}</ul>
        </section>
    );
}
