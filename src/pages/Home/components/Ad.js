import React from 'react';

export default function Ad(props) {
    return (
        <div className="ad">
            <img src={props.image} alt={props.name} />
        </div>
    )
}

