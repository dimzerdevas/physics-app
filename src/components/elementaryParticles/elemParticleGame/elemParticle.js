import React from 'react';


function Particle({ name, index, onClick, isClickable, classStyle }) {
    const chooseToMatchWithDecay = () => {
        if (isClickable) {
            onClick(name)
        }
    }
    
    let newName;
    const hasOverline = name === "u_" || name === "d_" || name === "s_"
    newName = hasOverline ? <span style={{ 'textDecoration': 'overline' }}>{name.slice(0, -1)}</span> : name;

    return (
        <div className={classStyle ? "particle" + classStyle : "particle" + " particle_" + index } onClick={chooseToMatchWithDecay}>
            {newName}
        </div>
    )
}

export default Particle;