import React, { useEffect } from 'react';
import NavItems from './NavItems';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { hidePopup, selectPopupStatus } from '../../redux/popupSlice';

export default function Popup() {
    const dispatch = useAppDispatch();
    const onClick = () => {
        document.body.classList.remove('body--non-overflow');
        dispatch(hidePopup());
    };
    const popupIsHidden = useAppSelector(selectPopupStatus);

    useEffect(() => {
        if (!popupIsHidden) {
            document.body.classList.add('body--non-overflow');
        }
    });
    if (popupIsHidden) return null;

    return (
        <div className='popup main-framed'>
            <ul className='nav'>
                <NavItems />
            </ul>
            <button type='button' onClick={onClick}>
                <img
                    className='cross-mark' src='./svg/cross.svg'
                    alt='x'
                />
            </button>
        </div>
    );
}
