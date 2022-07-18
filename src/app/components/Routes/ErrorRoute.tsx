import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorRoute() {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);

    return <div className='error'>Error</div>;
}
