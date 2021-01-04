import React from 'react';

function Particle({name, index}) {
    return (
        <div className={"particle" + " particle_" + index}>
            {name}
        </div>
    )
}

export default Particle;