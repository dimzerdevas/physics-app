import React from 'react';

function ParticleButton({name, addnewparticle, load, index, id, displayedName}) {
    const clickHandler = () => {
        addnewparticle(name);
    };

    const keyHandler = (event) => {
        if (event.which === 13) {
            addnewparticle(name);
        }
    };

    return (
        <div aria-label={"particle " + name + " with load " + load}
             tabIndex="0"
             role="button"
             key={index}
             className="bariums-mesons__particle"
             onKeyDown={event => keyHandler(event)}
             onClick={clickHandler}>
            <p id={id}>{displayedName} <br/> {load} </p>
        </div>
    )
}

export default ParticleButton;