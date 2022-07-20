/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';
import { hidePopup } from '../../redux/popupSlice';

export default function NavItems() {
    const dictionary = useAppSelector(selectDic);
    const hrefs = ['/#main', '/#about-hyper', '/#skills', '/#portfolio', '/#contacts'];

    const dispatch = useAppDispatch();
    const onClick = () => dispatch(hidePopup());

    const items = dictionary.nav.map((item, index) => {
        return (
            <li
                key={index} className='nav__item first-letter'
                onClick={onClick}
            >
                <HashLink to={hrefs[index]} className='nav-link'>
                    {item}
                </HashLink>
            </li>
        );
    });

    return <>{items}</>;
}
