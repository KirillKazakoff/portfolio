import React from 'react';
import { selectLanguage, setLanguage } from '../../redux/languageSlice';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';

export default function SwitchLang() {
    const dispatch = useAppDispatch();
    const activeLang = useAppSelector(selectLanguage);
    const activeCls = 'switch-lang__option--active';
    const className = 'switch-lang__option';

    const onClick = (e: React.SyntheticEvent) => {
        const selectedOpt = e.currentTarget.textContent.toLowerCase();
        dispatch(setLanguage(selectedOpt));
    };

    return (
        <div className='greeting__item switch-lang'>
            <button
                onClick={onClick}
                type='button'
                className={`${className} ${activeLang === 'ru' ? activeCls : ''}`}
            >
                RU
            </button>
            <span className='switch-lang__border'>|</span>
            <button
                onClick={onClick}
                type='button'
                className={`${className} ${activeLang === 'eng' ? activeCls : ''}`}
            >
                ENG
            </button>
        </div>
    );
}
