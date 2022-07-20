/* eslint-disable react/no-array-index-key */
import React from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioItemMain from './PortfolioItemMain';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';
import { portfolioData } from './portfolioData';

export default function Portfolio() {
    const { portfolio } = useAppSelector(selectDic);

    const items = portfolioData.map((item, index) => {
        const {
            src, alt, href, isMain,
        } = item;
        const Item = isMain ? PortfolioItemMain : PortfolioItem;

        return (
            <Item
                href={href}
                alt={alt}
                info={portfolio.list[index]}
                key={index}
                src={src}
            />
        );
    });

    return (
        <section className='portfolio main-framed' id='portfolio'>
            <span className='title title--padding-portfolio'>{portfolio.title}</span>
            <ul className='portfolio__list'>{items}</ul>
        </section>
    );
}
