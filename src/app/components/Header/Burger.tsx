import React from 'react';

export default function Burger() {
    return (
        <button type='button' className='btn-burger'>
            <img
                className='btn-burger__img' src='./svg/burger.svg'
                alt='burger'
            />
        </button>
    );
}
