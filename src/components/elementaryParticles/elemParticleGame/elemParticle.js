import React, { useState } from 'react';
import HadronTriangle from '../../interactionsElemParticles/HadronDecayGame/HadronTriangle'

function Particle({ name, index, onClick, isClickable, classStyle, correctParticle, hasCompletedStageTwo, triangleParticles }) {
    const [hasBeenChosenStageTwo, setHasBeenChosenStageTwo] = useState(false)
    
    const chooseToMatchWithDecay = () => {
        if (isClickable && correctParticle === name) {
            setHasBeenChosenStageTwo(!hasBeenChosenStageTwo)
            onClick(name)
        }
    }

    const mainClass = classStyle ? "particle" + classStyle : "particle" + " particle_" + index;
    const activeClass = hasBeenChosenStageTwo ? 'has-been-chosen-stage-two' : '';

    let newName;
    const hasOverline = name === "u_" || name === "d_" || name === "s_"
    newName = hasOverline ? <span style={{ 'textDecoration': 'overline' }}>{name.slice(0, -1)}</span> : name;

    return (
        <div>
            <div className={`${mainClass} ${activeClass}`} onClick={chooseToMatchWithDecay}>
                {newName}
            </div>
            {hasBeenChosenStageTwo && hasCompletedStageTwo &&
                <HadronTriangle triangleParticles={triangleParticles}/>}
        </div>
    )
}

export default Particle;