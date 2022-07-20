import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as smoothscroll from 'smoothscroll-polyfill';
import App from './app/App';
import { store } from './app/redux/store';

import './scss/main.scss';

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
