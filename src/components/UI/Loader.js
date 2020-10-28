import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

const LoadingSpinner = props => {
    return(
        <Loader
            type="Ball-Triangle"
            color="#F9690E"
            height={75}
            width={75}
            timeout={30000}
        />
    );
};

export default LoadingSpinner;