import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectAnimationStatus } from '../../redux/loaderSlice';

export default function Greeting() {
    const greetingRef = useRef<HTMLDivElement>(null);
    const animationStatus = useAppSelector(selectAnimationStatus);

    useEffect(() => {
        const { current } = greetingRef;
        if (!current) return;
        const afterHandler = () => current.classList.add('greeting__anim');

        console.log(animationStatus);
        if (animationStatus === 'loaded') {
            setTimeout(afterHandler, 500);
        }
    }, [animationStatus]);

    return (
        <div className='greeting' ref={greetingRef}>
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
