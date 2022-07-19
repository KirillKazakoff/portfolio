/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';

export default function Skills() {
    const { skills } = useAppSelector(selectDic);
    const skillsHtml = skills.list.map((item, index) => {
        return (
            <li key={index} className='skills__list-item'>
                <span className='skills__list-item-hyphen'>-</span>
                <span className='skills__list-item-text'>{item}</span>
            </li>
        );
    });

    return (
        <section className='skills main-framed'>
            <span className='title title--padding'>{skills.title}</span>
            <ul className='skills__list text--info'>{skillsHtml}</ul>
        </section>
    );
}
