/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';

export default function Nav() {
    const dictionary = useAppSelector(selectDic);
    const hrefs = ['/#', '/#', '/#', '/#', '/#'];
    const items = dictionary.nav.map((item, index) => {
        return (
            <li key={index} className='nav__item first-letter'>
                <a className='nav__link' href={hrefs[index]}>
                    {item}
                </a>
            </li>
        );
    });

    return <nav className='nav header__nav main-framed'>{items}</nav>;
}
