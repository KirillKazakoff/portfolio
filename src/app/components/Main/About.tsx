/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';

export default function About() {
    const { about } = useAppSelector(selectDic);
    const pArray = about.text.split(/[\r\n]{2}/);

    const text = pArray.map((p, index) => {
        return (
            <p key={index} className='about__text-p'>
                {p}
            </p>
        );
    });

    return (
        <section className='about main-framed'>
            <span className='title title--padding title--about'>{about.title}</span>
            <div className='about__text text--info'>{text}</div>
        </section>
    );
}
