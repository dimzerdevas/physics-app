import React, { useState } from 'react'

import HadronFeynmanInteraction from './HadronDecayFeynmanInteraction';
import HadronFeynmanRotation from './HadronFeynmanRotation';

const first_game_data_collection = [
    ["u", "arrow", "d", "W+"],
    ["W-", "u", "arrow", "d"],
    ["W-", "arrow", "u_", "d"],
    ["d_", "W-", "arrow", "u_"],
    ["d_", "arrow", "W+", "u_"],
    ["u", "d_", "arrow", "W+"],
];

const second_game_data_collection = [
    ["u", "arrow", "s", "W+"],
    ["W-", "u", "arrow", "s"],
    ["W-", "arrow", "u_", "s"],
    ["s_", "W-", "arrow", "u_"],
    ["s_", "arrow", "W+", "u_"],
    ["u", "s_", "arrow", "W+"],
];

const third_game_data_collection = [
    ["ve", "arrow", "e-", "W+"],
    ["W-", "ve", "arrow", "e-"],
    ["W-", "arrow", "ve_", "e-"],
    ["e+", "W-", "arrow", "ve_"],
    ["e+", "arrow", "W+", "ve_"],
    ["ve", "e+", "arrow", "W+"],
];

const fourth_game_data_collection = [
    ["vμ", "arrow", "μ-", "W+"],
    ["W-", "vμ", "arrow", "μ-"],
    ["W-", "arrow", "vμ_", "μ-"],
    ["μ+", "W-", "arrow", "vμ_"],
    ["μ+", "arrow", "W+", "vμ_"],
    ["vμ_", "μ+", "arrow", "W+"],
];

function FeynmanSection({ correctCombo, correctParticle, name, hasChosenCorrectParticle, finishMatching }) {
    const [hasChosenInteraction, setHasChosenInteraction] = useState(false);
    const [selected, setSelected] = useState({ react: '', result: '', dataCollectionSelected: [] });
    const [displayWrongChoiceMessage, setDisplayWrongChoiceMessage] = useState(false)
    const [displayChooseParticleMessage, setDisplayChooseParticleMessage] = useState(false)

    const toggleOpenGame = () => {
        setHasChosenInteraction(!hasChosenInteraction)
    };

    let decayElementName;
    switch (name) {
        case 'n':
            decayElementName = "του νετρονίου"
            break;
        case 'Λ':
            decayElementName = "του σωματιδίου Λάμδα"
            break;
        case 'Σ':
            decayElementName = <span>του σωματιδίου Σ<sup>-</sup></span>
            break;
    }

    const chooseInteraction = (react, result, index) => {
        setDisplayWrongChoiceMessage(false)
        setDisplayChooseParticleMessage(false)

        const decayOption = `${react}-${result}-w`

        if (!hasChosenCorrectParticle) {
            setDisplayChooseParticleMessage(true)
        } else if (decayOption === correctCombo) {
            toggleOpenGame();
            const dataCollectionSelected = index === 1 ? first_game_data_collection :
                index === 2 ? second_game_data_collection :
                    index === 3 ? third_game_data_collection :
                        index === 4 ? fourth_game_data_collection : null;
            setSelected({ react, result, dataCollectionSelected });
        } else {
            setDisplayWrongChoiceMessage(true)
        }
    };

    if (!hasChosenInteraction) {
        return (
            <div>
                <ul className="feynman-diagram--container">
                    <li className="feynman-diagram">
                        <HadronFeynmanInteraction
                            react={"u"}
                            result={"d"}
                            index={1}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <HadronFeynmanInteraction
                            react={["e"]}
                            result={["v", <sub>e</sub>]}
                            index={3}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <HadronFeynmanInteraction
                            react={["u"]}
                            result={["s"]}
                            index={2}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <HadronFeynmanInteraction
                            react={["μ"]}
                            result={["ν", <sub>μ</sub>]}
                            index={4}
                            onClick={chooseInteraction}
                        />
                    </li>
                </ul>
                {displayWrongChoiceMessage &&
                    (<p style={{ color: 'red' }}>Αυτό το κουάρκ δεν μετασχηματίζεται σε αυτή τη διάσπαση {decayElementName}</p>)}
                {displayChooseParticleMessage && !hasChosenCorrectParticle &&
                    (<p style={{ color: 'red' }}>Επελεξε ενα κουαρκ για να μετασχηματίσεις σε αυτή τη διάσπαση</p>)
                }
            </div>)
    } else {
        return (
            <div className="feynman-rotation-container">
                <HadronFeynmanRotation
                    particleToMatch={correctParticle}
                    finishMatching={finishMatching}
                    dataCollection={selected.dataCollectionSelected}
                />
            </div>

        )
    }
}

export default FeynmanSection