import React from 'react';

const CrewCard = (props) => {
    
    const crew = {...props.crew};
    
    return (
        <div className = 'crew'>
            <div className = 'crew__details' >
                <h4>{crew.name}</h4>
                <p className='crew__job'>- {crew.job} </p>
            </div>    
        </div>
    );
};

export default CrewCard;