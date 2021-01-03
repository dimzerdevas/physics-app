import React, { useState } from 'react';
import ParticleButton from '../../elementaryParticles/elemParticleGame/elemParticleGameButton'
import Particle from '../../elementaryParticles/elemParticleGame/elemParticle'

import { isEqual } from 'lodash'

function HadronDecayGamePlay({ hadronDecay }) {
    const { hadron, firstProduct, secondProduct, thirdProduct } = hadronDecay

    const HadronDecayElement = ({ hadron, firstProduct, secondProduct, thirdProduct }) => {
        const arrowHTML = <span>&#8594;</span>
        return (
            <label> {hadron} {arrowHTML} {firstProduct} {secondProduct} {thirdProduct}</label>
        )
    }

    const [selectedParticles, setSelectedParticles] = useState([])
    const [wrongChoice, setWrongChoice] = useState(false)
    const [hasCompletedFirstStage, setHasCompletedFirstStage] = useState(false)

    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    const correctCombo = {
        n: ["u", "d", "d"],
        lamda: ["u", "d", "s"],
        sigma: ["d", "d", "s"],
        omega: ["s", "s", "s"],
        kappa: ["u", "s_"],
        pi: ["u", "d_"],
    }

    const checkCorrectParticles = (selectedParticles, givenParticle, correctParticles) => {
        console.log(selectedParticles, givenParticle, correctParticles)

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
        isEqual(selectedParticles.sort(), correctParticles.sort()) && setHasCompletedFirstStage(true)
    }

    const selectParticles = (particleName) => {
        setWrongChoice(false)
        let duplicates = findDuplicates(selectedParticles)
        const newSelectedParticles = selectedParticles.slice()

        switch (hadron[0]) {
            case 'n':
                console.log(correctCombo.n)
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
                <Particle name={hadron} />
                <div >
                    <p>Χρειάζεσαι {hadron[0] === "Κ" || hadron[0] === "π" ? 2 : 3} κουαρκ</p>
                    <p>Επιλεγμένα:</p>
                    <div className="particle-display">
                        {selectedParticles.map((particleName, index) => {
                            return (
                                <Particle
                                    name={particleName}
                                    key={index}
                                />
                            )
                        })}
                    </div>

                    {wrongChoice && !hasCompletedFirstStage && <p>Επιλέξτε κάποιο άλλο κουάρκ σωματίδιο</p>}
                    {hasCompletedFirstStage && <p>Συμπληρώσατε όλα τα κουαρκ σωστά</p>}
                </div>
                <div className="quark-particles-container">
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