import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorRoute from './components/Routes/ErrorRoute';
import MainRoute from './components/Routes/MainRoute';

export default function App() {
    const [isLoading, setLoading] = useState(true);
    window.onload = () => {
        console.log('hello');
        setLoading(false);
    };

    if (isLoading) return <div>Fuck you</div>;
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainRoute />} />
                <Route path='*' element={<ErrorRoute />} />
            </Routes>
        </Router>
    );
}
