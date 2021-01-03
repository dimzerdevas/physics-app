import React, { useState } from 'react';
import ParticleButton from '../../elementaryParticles/elemParticleGame/elemParticleGameButton'
import Particle from '../../elementaryParticles/elemParticleGame/elemParticle'

function HadronDecayGamePlay({ hadronDecay }) {
    const { hadron, firstProduct, secondProduct, thirdProduct } = hadronDecay

    const HadronDecayElement = ({ hadron, firstProduct, secondProduct, thirdProduct }) => {
        const arrowHTML = <span>&#8594;</span>
        return (
            <label> {hadron} {arrowHTML} {firstProduct} {secondProduct} {thirdProduct}</label>
        )
    }
    const [selectedParticles, setSelectedParticles] = useState([])

    const selectParticles = (particleName) => {
        if (selectedParticles.length < 3) {
            setSelectedParticles([...selectedParticles, particleName])
        } else {
            console.log("Maxed out")
        }
    }
    return (
        <div>
            <p>GamePlay για την διασπαση ανδρονιων</p>
            <HadronDecayElement
                hadron={hadron}
                firstProduct={firstProduct}
                secondProduct={secondProduct}
                thirdProduct={thirdProduct}
            />
            <div className="hadron-game-container">
                <Particle name={hadron}/>
                <div className="particle-display">You have selected:
                {selectedParticles.map((particleName, index) => {
                    return (
                        <Particle
                            name={particleName}
                            key={index}
                        />
                    )
                })}
                </div>
                <div>
                    <ParticleButton
                        id="u"
                        name="u"
                        load="+2/3"
                        onClick={selectParticles}
                    />
                    <ParticleButton
                        id="d"
                        name="d"
                        load="-1/3"
                        onClick={selectParticles}
                    />
                    <ParticleButton
                        id="s"
                        name="s"
                        load="-1/3"
                        onClick={selectParticles}
                    />
                    <ParticleButton
                        id="u_"
                        name="u_"
                        load="-2/3"
                        onClick={selectParticles}
                    />
                    <ParticleButton
                        id="d_"
                        name="d_"
                        load="+1/3"
                        onClick={selectParticles}
                    />
                    <ParticleButton
                        id="s_"
                        name="s_"
                        load="+1/3"
                        onClick={selectParticles}
                    /></div>
            </div>


        </div>)
}

export default HadronDecayGamePlay;