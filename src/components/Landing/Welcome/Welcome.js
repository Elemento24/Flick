import React from 'react';

const Welcome = props => {
    return (
        <div className='welcome'>
            <div className='welcome__container'>
                <h1 className='welcome__watermark'>
                    Everybody Deserves A <span className='welcome__span'></span>
                </h1>
                <h1 className='welcome__watermark'>
                    Fresh Movie, <span className='welcome__span'></span>
                </h1>
                <h1 className='welcome__watermark'>
                    Every once in a while... <span className='welcome__span'></span>
                </h1>
            </div>
        </div>
    );
};

export default Welcome;
