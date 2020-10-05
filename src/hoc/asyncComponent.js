import React, {useState, useEffect} from 'react';


const asyncComponent = importComponent => {
    return props => {
        const [state, changeState] = useState({
            component: null
        });
        
        useEffect(() => {
            importComponent().then(cmp => {
                changeState({component: cmp.default});
            });
        }, []);
        
        const C =  state.component;
        return C ? <C {...props}/> : null;
    } ; 
};

export default asyncComponent;