import React from 'react';
import { showPopup } from '../../redux/popupSlice';
import { useAppDispatch } from '../../redux/reduxHooks';

export default function Burger() {
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(showPopup());
    };

    return (
        <button
            type='button' className='btn-burger'
            onClick={onClick}
        >
            <img
                className='btn-burger__img' src='./svg/burger.svg'
                alt='burger'
            />
        </button>
    );
}
