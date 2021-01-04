import React from 'react';

function ParticleButton(props) {
    const clickHandler = () => {
        props.addnewparticle(props.name);
    };

    const keyHandler = (event) => {
        if (event.which === 13) {
            props.addnewparticle(props.name);
        }
    };

    return (
        <div aria-label={"particle " + props.name + " with load " + props.load}
             tabIndex="0"
             role="button"
             key={props.index}
             className="bariums-mesons__particle"
             onKeyDown={event => keyHandler(event)}
             onClick={clickHandler}>
            <p id={props.id}>{props.name} <br/> {props.load} </p>
        </div>
    )
}

export default ParticleButton;