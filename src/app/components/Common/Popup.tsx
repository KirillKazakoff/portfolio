import React from 'react';
import NavItems from './NavItems';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';
import { hidePopup, selectPopupStatus } from '../../redux/popupSlice';

export default function Popup() {
    const dispatch = useAppDispatch();
    const onClick = () => dispatch(hidePopup());
    const popupIsHidden = useAppSelector(selectPopupStatus);

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
