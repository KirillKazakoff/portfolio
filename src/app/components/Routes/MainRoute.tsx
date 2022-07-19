import React from 'react';
import Popup from '../Common/Popup';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../Main/About';
import Contacts from '../Main/Contacts';
import Portfolio from '../Main/Portfolio';
import Skills from '../Main/Skills';

export default function MainRoute() {
    return (
        <div className='body__container'>
            <Header />
            <main className='main'>
                <About />
                <Skills />
                <Portfolio />
                <Contacts />
                <Footer />
            </main>
            <Popup />
        </div>
    );
}
