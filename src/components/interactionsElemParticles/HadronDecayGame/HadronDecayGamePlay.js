import React, { useState } from 'react';
import ParticleButton from '../../elementaryParticles/elemParticleGame/elemParticleGameButton'
import Particle from '../../elementaryParticles/elemParticleGame/elemParticle'
import HadronDecayElement from './hadronDecayElement'
import FeynmanSection from './HadronDecayFeynmanSection'
import HadronTriangle from './HadronTriangle'

import { isEqual } from 'lodash'

function HadronDecayGamePlay({ hadronDecay }) {
    const { hadron, firstProduct, secondProduct, thirdProduct } = hadronDecay

    const [selectedParticles, setSelectedParticles] = useState([])
    const [wrongChoice, setWrongChoice] = useState(false)
    const [hasCompletedFirstStage, setHasCompletedFirstStage] = useState(false)
    const [hasChosenParticleStageTwo, setHasChosenParticleStageTwo] = useState(false)
    const [hasFinishedStageTwo, setHasFinishedStageTwo] = useState(false)
    const [triangleParticles, setTriangleParticles] = useState([])

    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

    const correctCombo = {
        n: ["u", "d", "d"],
        lamda: ["u", "d", "s"],
        sigma: ["d", "d", "s"],
        omega: ["s", "s", "s"],
        kappa: ["u", "s_"],
        pi: ["u", "d_"],
    }

    const correctComboStageTwo = {
        n: ["d", "u", "d", "u-d-w"],
        lamda: ["s", "u", "d", "u-s-w"],
        sigma: ["s", "d", "d", "u-s-w"],
        omega: ["s", "s", "s", "u-s-w"],
        kappa: ["s_", "u", "u-s-w"],
        pi: ["u", "d_", "u-d-w"],
    }

    const checkCorrectParticles = (selectedParticles, givenParticle, correctParticles) => {
        const correctParticleDuplicate = findDuplicates(correctParticles)
        const isCorrectAmount = isEqual(findDuplicates(selectedParticles).sort(), correctParticleDuplicate.sort())

        if (correctParticleDuplicate[0] === givenParticle && !isCorrectAmount) {
            selectedParticles.push(givenParticle)
            setSelectedParticles(selectedParticles)
        } else if (correctParticles.includes(givenParticle) && !selectedParticles.includes(givenParticle)) {
            selectedParticles.push(givenParticle)
            setSelectedParticles(selectedParticles)
        } else {
            setWrongChoice(true)
        }

        const sortedSelectedParticles = selectedParticles.slice().sort()

        isEqual(sortedSelectedParticles, correctParticles.sort()) &&
            setHasCompletedFirstStage(true)
    }

    const addnewparticle = (particleName) => {
        setWrongChoice(false)
        const newSelectedParticles = selectedParticles.slice()

        switch (hadron[0]) {
            case 'n':
                checkCorrectParticles(newSelectedParticles, particleName, correctCombo.n)
                break;
            case 'Λ':
                checkCorrectParticles(newSelectedParticles, particleName, correctCombo.lamda)
                break;
            case 'Σ':
                checkCorrectParticles(newSelectedParticles, particleName, correctCombo.sigma)
                break;
            case 'Ω':
                checkCorrectParticles(newSelectedParticles, particleName, correctCombo.omega)
                break;
            case 'Κ':
                checkCorrectParticles(newSelectedParticles, particleName, correctCombo.kappa)
                break;
            case 'π':
                checkCorrectParticles(newSelectedParticles, particleName, correctCombo.pi)
                break;
        }
    }

    const hadronTranslator = (hadron) => {
        switch (hadron) {
            case 'n':
                return "n"
                break;
            case 'Λ':
                return "lamda"
                break;
            case 'Σ':
                return "sigma"
                break;
            case 'Ω':
                return "omega"
                break;
            case 'Κ':
                return "kappa"
                break;
            case 'π':
                return "pi"
                break;
        }
    }

    const chooseParticleToMatchDecay = () => {
        setHasChosenParticleStageTwo(true)
    }


    const finishTriangleMatching = (left, topRight, bottomRight) => {
        setHasFinishedStageTwo(!hasFinishedStageTwo)
        setTriangleParticles([left, topRight, bottomRight])
    }
    return (
        <div>

            <HadronDecayElement
                hadron={hadron}
                firstProduct={firstProduct}
                secondProduct={secondProduct}
                thirdProduct={thirdProduct}
            />
            <div className="hadron-game-container">
                <div >
                    <p>Χρειάζεσαι {hadron[0] === "Κ" || hadron[0] === "π" ? 2 : 3} κουαρκ</p>
                    <p>Επιλεγμένα:</p>
                    <Particle classStyle={" primary_particle"} name={hadron} />
                    {!hasCompletedFirstStage &&
                        (<div className="particle-display">
                            {selectedParticles.map((particleName, index) => {
                                return (
                                    <Particle
                                        name={particleName}
                                        index={index}
                                        key={index}
                                        classStyle={" particle_hadron_" + index}
                                    />
                                )
                            })}
                        </div>)}
                    {hasCompletedFirstStage &&
                        (<div className="particle-display">
                            {selectedParticles.map((particleName, index) => {
                                return (
                                    <Particle
                                        name={particleName}
                                        onClick={chooseParticleToMatchDecay}
                                        isClickable={hasCompletedFirstStage}
                                        index={index}
                                        correctParticle={correctComboStageTwo[hadronTranslator(hadron[0])][0]}
                                        key={index}
                                        hasCompletedStageTwo={hasFinishedStageTwo}
                                        classStyle={" particle_hadron_" + index}
                                        triangleParticles={triangleParticles}
                                    />
                                )
                            }
                            )}
                        </div>)}
                    {wrongChoice && !hasCompletedFirstStage && <p>Επιλέξτε κάποιο άλλο κουάρκ σωματίδιο</p>}
                    {hasCompletedFirstStage && <p>Συμπληρώσατε όλα τα κουαρκ σωστά</p>}
                </div>
                {!hasCompletedFirstStage &&
                    (<div className="quark-particles-container">
                        <ParticleButton
                            id="u"
                            name="u"
                            load="2/3"
                            index="1"
                            displayedName={["u"]}
                            addnewparticle={addnewparticle}
                        />
                        <ParticleButton
                            id="d"
                            name="d"
                            load="-1/3"
                            index="2"
                            displayedName={["d"]}
                            addnewparticle={addnewparticle}
                        />
                        <ParticleButton
                            id="s"
                            name="s"
                            load="-1/3"
                            index="3"
                            displayedName={["s"]}
                            addnewparticle={addnewparticle}
                        />
                        <ParticleButton
                            id="u_"
                            name="u_"
                            load="-2/3"
                            index="4"
                            displayedName={[<span style={{ 'textDecoration': 'overline' }}>u</span>]}
                            addnewparticle={addnewparticle}
                        />
                        <ParticleButton
                            id="d_"
                            name="d_"
                            load="1/3"
                            index="5"
                            displayedName={[<span style={{ 'textDecoration': 'overline' }}>d</span>]}
                            addnewparticle={addnewparticle}
                        />
                        <ParticleButton
                            id="s_"
                            name="s_"
                            load="1/3"
                            index="6"
                            displayedName={[<span style={{ 'textDecoration': 'overline' }}>s</span>]}
                            addnewparticle={addnewparticle}
                        />
                    </div>)}
                {hasCompletedFirstStage && (
                    <FeynmanSection
                        name={hadronTranslator(hadron[0])}
                        correctCombo={correctComboStageTwo[hadronTranslator(hadron[0])][3]}
                        correctParticle={correctComboStageTwo[hadronTranslator(hadron[0])][0]}
                        hasChosenCorrectParticle={hasChosenParticleStageTwo}
                        finishMatching={finishTriangleMatching}
                    />)
                }
            </div>


        </div>)
}

export default HadronDecayGamePlay;