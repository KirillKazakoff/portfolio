import React from 'react';

export default function Loader() {
    return (
        <div className='error-pic'>
            <div className='absolute-loader'>
                <div className='lds-spinner'>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
}
