import React, { useState } from 'react';
import ParticleButton from './elemParticleGameButton'
import Particle from './elemParticle'

const correctParticleCombinations = {
    // FOR_TWO_PARTICLES: [
    //     ["u", "u_"],
    //     ["d", "d_"],
    //     ["s", "s_"],
    //     ["u", "d_"],
    //     ["u", "s_"],
    //     ["d", "u_"],
    //     ["d", "s_"],
    //     ["s", "u_"],
    //     ["s", "d_"],
    // ],
    FOR_TWO_PARTICLES: [
        [["u", "u_"], <text>η ή π<sup>0</sup> μεσόνιο</text>],
        [["d", "d_"], <text>η ή π<sup>0</sup> μεσόνιο</text>],
        [["s", "s_"], <text>η μεσόνιο</text>],
        [["u", "d_"], <text>π<sup>+</sup> μεσόνιο</text>],
        [["u", "s_"], <text>K<sup>+</sup> μεσόνιο</text>],
        [["d", "u_"], <text>π<sup>-</sup> μεσόνιο</text>],
        [["d", "s_"], <text>Κ<sup>0</sup> μεσόνιο</text>],
        [["s", "u_"], <text>Κ<sup>-</sup> μεσόνιο</text>],
        [["s", "d_"], <text><span style={{ 'textDecoration': 'overline' }}>Κ</span><sup>0</sup> μεσόνιο</text>],
    ],
    // FOR_THREE_PARTICLES: [
    //     ["u", "u", "u"],
    //     ["u", "u", "d"],
    //     ["u", "u", "s"],
    //     ["u", "d", "d"],
    //     ["u", "s", "s"],
    //     ["d", "d", "d"],
    //     ["d", "d", "s"],
    //     ["s", "s", "s"],
    //     ["s", "s", "d"]
    // ]
    FOR_THREE_PARTICLES: [
        [["u", "u", "u"], <text>Δ<sup>++</sup></text>],
        [["u", "u", "d"], <text>p πρωτόνιο</text>],
        [["u", "u", "s"], <text>Σ<sup>+</sup></text>],
        [["u", "d", "d"], <text>n νετρόνιο</text>],
        [["u", "s", "s"], <text>Ξ<sup>0</sup></text>],
        [["d", "d", "d"], <text>Δ<sup>-</sup></text>],
        [["d", "d", "s"], <text>Σ<sup>-</sup></text>],
        [["s", "s", "s"], <text>Ω<sup>-</sup></text>],
        [["d", "s", "s"], <text>Ξ<sup>-</sup></text>],
        [["u", "d", "s"], <text>Λ ή Σ<sup>0</sup></text>],
        [["u_", "u_", "u_"], <text>Δ<sup>--</sup></text>],
        [["u_", "u_", "d_"], <text><span style={{ 'textDecoration': 'overline' }}>p</span> αντιπρωτόνιο</text>],
        [["u_", "u_", "s_"], <text>Σ<sup>-</sup></text>],
        [["d_", "d_", "d_"], <text>Δ<sup>+</sup></text>],
        [["u_", "d_", "d_"], <text><span style={{ 'textDecoration': 'overline' }}>n</span> αντινετρόνιο</text>],
        [["d_", "d_", "s_"], <text>Σ<sup>+</sup></text>],
        [["s_", "s_", "s_"], <text>Ω<sup>+</sup></text>],
        [["u_", "s_", "s_"], <text><span style={{ 'textDecoration': 'overline' }}>Ξ</span><sup>0</sup></text>],
        [["d_", "s_", "s_"], <text>Ξ<sup>+</sup></text>],
        [["d_", "s_", "s_"], <text>Ξ<sup>+</sup></text>],
        [["u_", "d_", "s_"], <text><span style={{ 'textDecoration': 'overline' }}>Λ</span> ή <span style={{ 'textDecoration': 'overline' }}>Σ</span><sup>0</sup></text>]
    ]
};

const ElemParticlesGame = () => {

    const [selectedParticles, setSelectedParticles] = useState([]);
    const [warningTooMany, setWarningTooMany] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState(false);
    const [correctParticleCombinationFound, setCorrectParticleCombinationFound] = useState("");

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
                const correctParticleCombinationJoined = correctParticleCombination[0].slice().sort().join('');
                selectedMatchIsCorrect = correctParticleCombinationJoined.localeCompare(selectedParticlesJoined);

                if (selectedMatchIsCorrect === 0) {
                    setWinner(true);
                    setEndGame(true);
                    particlesMatched = true;
                    setCorrectParticleCombinationFound(correctParticleCombination[1]);
                }
            }
        });

        if (selectedMatchIsCorrect !== 0) {
            setWinner(false);
            setEndGame(true);
            setCorrectParticleCombinationFound("");
        }
    };

    const checkTripleParticleCombinations = () => {
        const selectedParticlesJoined = selectedParticles.slice().sort().join('');
        let selectedMatchIsCorrect = -1;
        let particlesMatched = false;

        correctParticleCombinations.FOR_THREE_PARTICLES.forEach(correctParticleCombination => {
            if (!particlesMatched) {
                const correctParticleCombinationJoined = correctParticleCombination[0].slice().sort().join('');
                selectedMatchIsCorrect = correctParticleCombinationJoined.localeCompare(selectedParticlesJoined);

                if (selectedMatchIsCorrect === 0) {
                    setWinner(true);
                    setEndGame(true);
                    particlesMatched = true;
                    setCorrectParticleCombinationFound(correctParticleCombination[1]);
                }
            }
        });

        if (selectedMatchIsCorrect !== 0) {
            setWinner(false);
            setEndGame(true);
            setCorrectParticleCombinationFound("");
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
        setCorrectParticleCombinationFound("")
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
                {endGame ? winner ? <div className="particles-success"> Μπράβο, βρήκες το {correctParticleCombinationFound}.<br />Παίξε ξανά πατώντας επαναφορά.</div> : <div className="particles-error">Δυστυχώς η συσχέτιση των σωματιδίων δεν είναι σωστή, παίξε ξανά πατώντας επαναφορά.</div> : null}
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