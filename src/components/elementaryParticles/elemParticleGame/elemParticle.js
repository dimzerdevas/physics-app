import React, { useState } from 'react';

function Particle({ name, index, onClick, isClickable, classStyle }) {
    const [hasBeenChosenStageTwo, setHasBeenChosenStageTwo] = useState(false)

    const chooseToMatchWithDecay = () => {
        if (isClickable && index === 0) {
            setHasBeenChosenStageTwo(true)
            onClick(name)
        }
    }

    const mainClass = classStyle ? "particle" + classStyle : "particle" + " particle_" + index;
    const activeClass = hasBeenChosenStageTwo ? 'has-been-chosen-stage-two' : '';

    let newName;
    const hasOverline = name === "u_" || name === "d_" || name === "s_"
    newName = hasOverline ? <span style={{ 'textDecoration': 'overline' }}>{name.slice(0, -1)}</span> : name;

    return (
        <div className={`${mainClass} ${activeClass}`} onClick={chooseToMatchWithDecay}>
            {newName}
        </div>
    )
}

export default Particle;