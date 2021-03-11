import React, { useState } from 'react';

function HadronTriangle({triangleParticles}) {

    return (
        <div className="triangle">
            <div className="triangle-center"></div>
            <div className="triangle-left-bar"></div>
            <div className="triangle-connection-bar"></div>
            <div className='particle triangle-left-particle'>
                {triangleParticles[0]}
            </div>
            <div className="triangle-top-bar"></div>
            <div className='particle triangle-top-right-particle'>
                {triangleParticles[1]}
            </div>
            <div className="triangle-bottom-bar"></div>
            <div className='particle triangle-bottom-right-particle'>
                {triangleParticles[2]}
            </div>
        </div>
    )
}

export default HadronTriangle;