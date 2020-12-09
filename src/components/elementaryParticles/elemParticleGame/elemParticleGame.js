import React, { useState } from 'react';
import ParticleButton from './elemParticleGameButton'
import Particle from './elemParticle'
import GameInstructions from './gameInstructions'

function ElemParticlesGame() {

    // const particlesClickHandler = (event) => {
    //     let particle = event.target.id;
    //     counter++;
    //     if (counter <= 3) {
    //         chosenParticles.push(particle);
    //         console.log(chosenParticles);
    //         counter === 3? console.log("You reached the max amount of particles") : null;
    //     } else {
    //         console.log("You can't create a barium/meson with more than 3 particles");
    //     }
    // }

    // const CORRECT_COMBO = {
    //     FOR_TWO_PARTICLES: [
    //         ["u", "u_"],
    //         ["d", "d_"],
    //         ["s", "s_"],
    //         ["u", "d_"],
    //         ["u", "s_"],
    //         ["d", "u_"],
    //         ["d", "s_"],
    //         ["s", "u_"],
    //         ["s", "d_"]
    //     ],
    //     FOR_THREE_PARTICLES: [
    //         ["u", "u", "u"],
    //         ["u", "u", "d"],
    //         ["u", "u", "s"],
    //         ["u", "d", "d"],
    //         ["u", "s", "s"],
    //         ["d", "d", "d"],
    //         ["d", "d", "s"],
    //         ["s", "s", "s"],
    //         ["s", "s", "d"]
    //     ]
    // }

    // let particleMatchCounter = 0;

    // const evaluateParticleCombination = () => {
    //     if (chosenParticles.length === 2) {
    //         console.log(chosenParticles);
    //         CORRECT_COMBO.FOR_TWO_PARTICLES.map(correctParticles => {
    //             let isSelectionCorrect = (JSON.stringify(correctParticles) === JSON.stringify(
    //                 chosenParticles))
    //             if (isSelectionCorrect) {
    //                 console.log("You created a meson");
    //             }
    //         })
    //     } else {
    //         console.log(chosenParticles);
    //         CORRECT_COMBO.FOR_THREE_PARTICLES.map(correctParticles => {
    //             let isSelectionCorrect = (JSON.stringify(correctParticles) === JSON.stringify(
    //                 chosenParticles))
    //             if (isSelectionCorrect) {
    //                 console.log("You created a barium");
    //             }
    //         })
    //     }
    // }

    const checkParticleCombination = () => {
        console.log("check")
    }

    const resetGame = () => {
        console.log("Reset Game")
    }
    const toggleInstructions = () => {
        console.log("instructions")
        isShowingInstructions ? setIsShowingInstructions(false) : setIsShowingInstructions(true);
    }
    const [selectedParticles, setSelectedParticles] = useState([])
    const [isShowingInstructions, setIsShowingInstructions] = useState(false)

    const selectParticles = (particleName) => {
        if (selectedParticles.length < 3) {
            setSelectedParticles([...selectedParticles, particleName])
        } else {
            console.log("Maxed out")
        }
    }
    return (
        <div className="homepage-container">
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

            <div className="bariums-mesons">
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
                />
            </div>
            <div className="game-controllers">
                <button id="game-controllers__continue" onClick={checkParticleCombination}>Συνέχεια</button>
                <button id="game-controllers__reset" onClick={resetGame}>Επαναφορά</button>
                <button id="instructions" onClick={toggleInstructions}>Οδηγίες</button>
            </div>
            <GameInstructions
                isShowingInstructions={isShowingInstructions}
                toggleInstructions={toggleInstructions} 
            />
        </div>)
}

export default ElemParticlesGame;