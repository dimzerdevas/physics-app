import React from 'react';

function ParticleButton(props) {
    const clickHandler = () => {
        props.onClick(props.name)
    }
    return (
        <div className="particle-btn" onClick={clickHandler}>
            <button id={props.id}>Όνομα: {props.name}</button>
            <p>Φορτίο: {props.load}</p>
        </div>
    )
}

export default ParticleButton;