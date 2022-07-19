import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ProjectInfoT } from '../../types/types';
import { selectLanguage } from '../../redux/languageSlice';
import { useAppSelector } from '../../redux/reduxHooks';

type Props = { src: string; href: string; alt: string; info: ProjectInfoT };

export default function PortfolioItem(props: Props) {
    const lang = useAppSelector(selectLanguage);

    const {
        src, href, alt, info,
    } = props;

    const { desc, title } = info[lang];
    return (
        <li className='portfolio__item'>
            <LazyLoadImage
                className='portfolio__item-img'
                src={src}
                alt={alt}
                threshold={700}
            />
            <div className='project__info'>
                <a className='project__link link' href={href}>
                    <span className='project__title'>{title}</span>
                    <span className='project__desc'>{desc}</span>
                </a>
            </div>
        </li>
    );
}
