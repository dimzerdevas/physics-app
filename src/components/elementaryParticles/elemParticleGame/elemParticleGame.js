import React, { useState } from 'react';
import ParticleButton from './elemParticleGameButton'
import Particle from './elemParticle'

const correctParticleCombinations = {
    FOR_TWO_PARTICLES: [
        ["u", "u_"],
        ["d", "d_"],
        ["s", "s_"],
        ["u", "d_"],
        ["u", "s_"],
        ["d", "u_"],
        ["d", "s_"],
        ["s", "u_"],
        ["s", "d_"],
    ],
    FOR_THREE_PARTICLES: [
        ["u", "u", "u"],
        ["u", "u", "d"],
        ["u", "u", "s"],
        ["u", "d", "d"],
        ["u", "s", "s"],
        ["d", "d", "d"],
        ["d", "d", "s"],
        ["s", "s", "s"],
        ["s", "s", "d"]
    ]
};

const ElemParticlesGame = () => {

    const [selectedParticles, setSelectedParticles] = useState([]);
    const [warningTooMany, setWarningTooMany] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState(false);

    const addNewParticle = (particleName) => {
        const newSelectedParticles = selectedParticles.slice();

        if (selectedParticles.length <= 2) {
            newSelectedParticles.push(particleName);
            setSelectedParticles(newSelectedParticles);
        } else {
            if (!endGame) {
                setWarningTooMany(true);
            }
        }
    };

    const checkDoubleParticleCombination = () => {
        const selectedParticlesJoined = selectedParticles.slice().sort().join('');
        let selectedMatchIsCorrect = -1;
        let particlesMatched = false;

        correctParticleCombinations.FOR_TWO_PARTICLES.forEach(correctParticleCombination => {
            if (!particlesMatched) {
                const correctParticleCombinationJoined = correctParticleCombination.slice().sort().join('');
                selectedMatchIsCorrect = correctParticleCombinationJoined.localeCompare(selectedParticlesJoined);

                if (selectedMatchIsCorrect === 0) {
                    setWinner(true);
                    setEndGame(true);
                    particlesMatched = true;
                }
            }
        });

        if (selectedMatchIsCorrect !== 0) {
            setWinner(false);
            setEndGame(true);
        }
    };

    const checkTripleParticleCombinations = () => {
        const selectedParticlesJoined = selectedParticles.slice().sort().join('');
        let selectedMatchIsCorrect = -1;
        let particlesMatched = false;

        correctParticleCombinations.FOR_THREE_PARTICLES.forEach(correctParticleCombination => {
            if (!particlesMatched) {
                const correctParticleCombinationJoined = correctParticleCombination.slice().sort().join('');
                selectedMatchIsCorrect = correctParticleCombinationJoined.localeCompare(selectedParticlesJoined);

                if (selectedMatchIsCorrect === 0) {
                    setWinner(true);
                    setEndGame(true);
                    particlesMatched = true;
                }
            }
        });

        if (selectedMatchIsCorrect !== 0) {
            setWinner(false);
            setEndGame(true);
        }
        setWarningTooMany(false);
    };

    const checkParticleCombination = () => {
        if (selectedParticles.length === 2) {
            checkDoubleParticleCombination();
        } else if (selectedParticles.length === 3) {
            checkTripleParticleCombinations();
        }
    };

    const resetGame = () => {
        setSelectedParticles([]);
        setWarningTooMany(false);
        setEndGame(false);
        setWinner(false);
    };

    return (
        <div className="homepage-container">
            <div className="particle-display">
                <div className="bowl"></div>
                {selectedParticles.map((particleName, index) => {
                    return (
                        <Particle
                            name={particleName}
                            index={index}
                            key={index}
                        />
                    )
                })}
                {warningTooMany ? <div className="particles-error">Μπορείς να επιλέξεις μέχρι τρία σωματίδια. Δοκίμασε ξανά πατώντας επαναφορά.</div> : null}
                {endGame ? winner ? <div className="particles-success">Μπράβο, παίξε ξανά πατώντας επαναφορά.</div> : <div className="particles-error">Δυστυχώς η συσχέτιση των σωματιδίων δεν είναι σωστή, παίξε ξανά πατώντας επαναφορά.</div> : null}
                <div className="particle-header">
                    Επίλεξε τα σωματίδια και προσπάθησε να σχηματίσεις την σωστή σχέση, επαληθεύοντας όσα έμαθες στην θεωρία.
                </div>
            </div>

            <div className="bariums-mesons">
                <ParticleButton
                    id="u"
                    name="u"
                    load="2/3"
                    index="1"
                    displayedName={["u"]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="d"
                    name="d"
                    load="-1/3"
                    index="2"
                    displayedName={["d"]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="s"
                    name="s"
                    load="-1/3"
                    index="3"
                    displayedName={["s"]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="u_"
                    name="u_"
                    load="-2/3"
                    index="4"
                    displayedName={[<span style={{ 'textDecoration': 'overline' }}>u</span>]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="d_"
                    name="d_"
                    load="1/3"
                    index="5"
                    displayedName={[<span style={{ 'textDecoration': 'overline' }}>d</span>]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="s_"
                    name="s_"
                    load="1/3"
                    index="6"
                    displayedName={[<span style={{ 'textDecoration': 'overline' }}>s</span>]}
                    addnewparticle={addNewParticle}
                />
            </div>
            <div className="game-controllers">
                <button className="game-controllers__continue" id="game-controllers__continue" onClick={checkParticleCombination}>Συνέχεια</button>
                <button className="game-controllers__reset" id="game-controllers__reset" onClick={resetGame}>Επαναφορά</button>
            </div>
        </div>
    )
};

export default ElemParticlesGame;