import React from 'react';

export default function About() {
    return (
        <section className='about main-framed'>
            <span className='title title--padding title--about'>About me</span>
            <div className='about__text text--info'>
                <p className='about__text-p'>
                    {
                        "I'm a junior frontend developer... Love coding so much... and I'm a rapper as well, bruhhh!"
                    }
                </p>
                <p className='about__text-p'>
                    {`I've graduated the course on Netology on program
                    “Frontend-developer from scratch”`}
                </p>
                <p className='about__text-p'>
                    {"Generally speaking, I'm great person... \n Employ me, please!"}
                </p>
            </div>
        </section>
    );
}
