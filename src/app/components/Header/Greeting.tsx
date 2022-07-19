import React from 'react';

export default function Greeting() {
    return (
        <div className='greeting greeting__hidden'>
            <span className='greeting__item greeting__title'> CAT IN BREAD 🍞 </span>
            <span className='greeting__item greeting__myname greeting__item--info'>
                Kirill Kazakov
            </span>
            <span className='greeting__item greeting__myinfo greeting__item--info'>
                {' '}
                Magadan, 22 y.o
            </span>
            <div className='greeting__item switch-lang'>
                <span className='switch-lang__option switch-lang__option--active'>
                    RU
                </span>
                <span className='switch-lang__border'>|</span>
                <span className='switch-lang__option'>ENG</span>
            </div>
        </div>
    );
}
