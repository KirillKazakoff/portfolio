const eng = {
    nav: ['main', 'about', 'skills', 'portfollio', 'contacts'],
    greeting: {
        title: 'Cat in bread',
        myname: 'Kirill Kazakov',
        myinfo: 'Magadan 22 y.o',
    },
    about: {
        title: 'about',
        text: "I'm a junior frontend developer... Love coding so much... and I'm a rapper as well, bruhhh! \n\n I've graduated the course on Netology on program “Frontend-developer from scratch” \n\n Generally speaking, I'm great person... \n Employ me, please!\"",
    },
    skills: {
        title: 'skills',
        list: [
            'JavaScript, knowledge of basic OOP principles',
            'TypeScript',
            'React, React-Router',
            'Redux',
            'HTTP/HTTPS, WebSocket, hands-on experience relating to interaction with server API and Node.js. Experienced with ServiceWorker, WebWorker technologies',
            'HTML, CSS, SCSS, BEM-metodology, having experience with CSS-IN-JS',
            'GIT',
            'Webpack',
        ],
    },
    portfolio: {
        title: 'portfolio',
        list: [
            {
                main: 'Main Project',
                title: 'Railway ticket booking system',
                desc: 'React-Redux (only PC screen)',
            },
            { title: 'WhatsAppBot', desc: 'JS-native (only PC screen)' },
            { title: 'Site-blog', desc: 'HTML-CSS (adaptive)' },
        ],
    },
    contacts: {
        title: 'contacts',
        desc: 'Want to know more or just chat? \n You are welcome!',
    },
    footer: {
        desc: 'Check out my music! Like me on VK and SoundCloud!',
    },
};

type ContentT = typeof eng;

const ru: ContentT = {
    nav: ['главная', 'о себе', 'навыки', 'портфолио', 'контакты'],
    greeting: {
        title: 'Кот в хлебе',
        myname: 'Кирилл Казаков',
        myinfo: 'Магадан, 22 года',
    },
    about: {
        title: 'о себе',
        text: 'Я начинающий фронтенд-разработчик... \n Люблю писать код... и еще рэп! \n\n Закончил курс на Нетологии по программе “Frontend-разработчик с нуля”... \n\n А вообще, человек я неплохой... \n Возьмите меня на работу!',
    },
    skills: {
        title: 'навыки',
        list: [
            'JavaScript, понимание базовых принципов ООП',
            'TypeScript',
            'React, React-Router',
            'Redux',
            'Протокол HTTP/HTTPS, опыт взаиодействия с серверным API, Node.js. Ознакомлен с воркерами (ServiceWorker, WebWorker)',
            'HTML, CSS, SCSS, БЭМ, опыт работы с CSS-IN-JS',
            'GIT',
            'Webpack',
        ],
    },
    portfolio: {
        title: 'портфолио',
        list: [
            {
                main: 'Главный Проект',
                title: 'Система бронирования ЖД билетов',
                desc: 'React-Redux (только для ПК мониторов)',
            },
            { title: 'WhatsAppBot', desc: 'Приложение на нативном JS' },
            {
                title: 'Сайт-блог',
                desc: 'HTML-CSS адаптивная верстка',
            },
        ],
    },
    contacts: {
        title: 'контакты',
        desc: 'Если хотите со мной связаться,\n то пишите сюда...',
    },
    footer: {
        desc: 'Поддержите начинающего авангард-исполнителя своим вниманием... \n\n Слушайте рифмы, ставьте лайки !',
    },
};

export const myDictionary: { [key: string]: ContentT } = {
    eng,
    ru,
};
