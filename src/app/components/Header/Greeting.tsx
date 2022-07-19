import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectAnimationStatus } from '../../redux/loaderSlice';
import SwitchLang from './SwitchLang';
import { selectDic } from '../../redux/languageSlice';

export default function Greeting() {
    const { greeting } = useAppSelector(selectDic);
    const greetingRef = useRef<HTMLDivElement>(null);
    const animationStatus = useAppSelector(selectAnimationStatus);

    useEffect(() => {
        const { current } = greetingRef;
        if (!current) return;
        const afterHandler = () => current.classList.add('greeting__anim');

        if (animationStatus === 'loaded') {
            setTimeout(afterHandler, 100);
        }
    }, [animationStatus]);

    return (
        <div className='greeting' ref={greetingRef}>
            <span className='greeting__item greeting__title'>
                {`${greeting.title} 🍞`}
            </span>
            <span className='greeting__item greeting__myname greeting__item--info'>
                {greeting.myname}
            </span>
            <span className='greeting__item greeting__myinfo greeting__item--info'>
                {greeting.myinfo}
            </span>
            <SwitchLang />
        </div>
    );
}
