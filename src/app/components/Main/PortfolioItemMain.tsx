import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CommonT } from '../../types/types';

type Props = { src: string; href: string; alt: string; info: CommonT };

export default function PortfolioItemMain(props: Props) {
    const {
        src, href, alt, info,
    } = props;

    const { desc, title, main } = info;
    return (
        <li className='portfolio__item'>
            <LazyLoadImage
                className='portfolio__item-img portfolio__item--main'
                src={src}
                alt={alt}
                threshold={700}
            />
            <div className='project__info'>
                <span className='project__title project__title-main'>{main}</span>
                <a className='project__link link' href={href}>
                    <span className='project__title'>{title}</span>
                    <span className='project__desc'>{desc}</span>
                </a>
            </div>
        </li>
    );
}
