import React from 'react';

type Props = { href: string; title: string; desc: string };

export default function PortfolioItemInfo({ href, title, desc }: Props) {
    return (
        <a className='project__link link' href={href}>
            <span className='project__title'>{title}</span>
            <span className='project__desc'>{desc}</span>
        </a>
    );
}
