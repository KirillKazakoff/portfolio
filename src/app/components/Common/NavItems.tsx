/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';
import { hidePopup } from '../../redux/popupSlice';

export default function NavItems() {
    const dictionary = useAppSelector(selectDic);
    const hrefs = ['/#main', '/#about-hyper', '/#skills', '/#portfolio', '/#contacts'];

    const dispatch = useAppDispatch();
    const onClick = (href: string) => (e: React.SyntheticEvent) => {
        document.body.classList.remove('body--non-overflow');
        dispatch(hidePopup());

        const idEl = document.querySelector(href.substring(1));
        const place = idEl.getBoundingClientRect();
        window.scrollTo({
            behavior: 'smooth',
            top: place.y,
        });
    };

    const items = dictionary.nav.map((item, index) => {
        return (
            <li
                key={index}
                className='nav__item first-letter'
                onClick={onClick(hrefs[index])}
            >
                {item}
            </li>
        );
    });

    return <>{items}</>;
}
