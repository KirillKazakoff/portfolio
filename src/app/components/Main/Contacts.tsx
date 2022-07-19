import React from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';

export default function Contacts() {
    const { contacts } = useAppSelector(selectDic);

    return (
        <section className='contacts main-framed'>
            <span className='title title--padding'>{contacts.title}</span>
            <span className='contacts__desc'>{contacts.desc}</span>
            <ul className='socials'>
                <li className='socials__item'>
                    <a
                        className='socials__item-link'
                        href='mailto: kirillkazakovwork@gmail.com'
                    >
                        <img
                            className='socials__item-img'
                            src='./svg/email.svg'
                            alt='email'
                        />
                    </a>
                </li>
                <li className='socials__item'>
                    <a className='socials__item-link' href='https://t.me/Teahohotka'>
                        <img
                            className='socials__item-img'
                            src='./svg/telegram.svg'
                            alt='telegram'
                        />
                    </a>
                </li>
                <li className='socials__item'>
                    <a
                        className='socials__item-link'
                        href='https://www.instagram.com/greenporkrealtalk'
                    >
                        <img
                            className='socials__item-img' src='./svg/ig.svg'
                            alt='ig'
                        />
                    </a>
                </li>
                <li className='socials__item'>
                    <a className='socials__item-link' href='https://m.vk.com/kotvhlebe'>
                        <img
                            className='socials__item-img' src='./svg/vk.svg'
                            alt='vk'
                        />
                    </a>
                </li>
            </ul>
        </section>
    );
}
