import React, { useState } from 'react'

import HadronFeynmanInteraction from './HadronDecayFeynmanInteraction';
import FeynmanRotation from '../FeynmanGame/feynmanRotation';

const first_game_data_collection = [
    ["u-", "arrow", "d", "W+"],
    ["W-", "u", "arrow", "d"],
    ["W-", "arrow", "u_", "d"],
    ["_d", "W-", "arrow", "_u"],
    ["_d", "arrow", "W+", "_u"],
    ["u", "_d", "arrow", "W+"],
];

const second_game_data_collection = [
    ["u", "arrow", "s", "W+"],
    ["W-", "u", "arrow", "s"],
    ["W-", "arrow", "_u", "s"],
    ["_s", "W-", "arrow", "_u"],
    ["_s", "arrow", "W+", "_u"],
    ["u", "_s", "arrow", "W+"],
];

const third_game_data_collection = [
    ["ve", "arrow", "e-", "W+"],
    ["W-", "ve", "arrow", "e-"],
    ["W-", "arrow", "_ve", "e-"],
    ["e+", "W-", "arrow", "_ve"],
    ["e+", "arrow", "W+", "_ve"],
    ["ve", "e+", "arrow", "W+"],
];

const fourth_game_data_collection = [
    ["vμ", "arrow", "μ-", "W+"],
    ["W-", "vμ", "arrow", "μ-"],
    ["W-", "arrow", "_vμ", "μ-"],
    ["μ+", "W-", "arrow", "_vμ"],
    ["μ+", "arrow", "W+", "_vμ"],
    ["_vμ", "μ+", "arrow", "W+"],
];

function FeynmanSection() {
    const [hasChosenInteraction, setHasChosenInteraction] = useState(false);
    const [selected, setSelected] = useState({ react: '', result: '', dataCollectionSelected: [] });

    const toggleOpenGame = () => {
        setHasChosenInteraction(!hasChosenInteraction)
    };

    const chooseInteraction = (react, result, index) => {
        console.log(react, result);
        toggleOpenGame();
        const dataCollectionSelected = index === 1 ? first_game_data_collection :
            index === 2 ? second_game_data_collection :
                index === 3 ? third_game_data_collection :
                    index === 4 ? fourth_game_data_collection : null;
        setSelected({ react, result, dataCollectionSelected });
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
                            react={["u"]}
                            result={["s"]}
                            index={2}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <HadronFeynmanInteraction
                            react={["v"]}
                            result={["e", <sup>-</sup>]}
                            index={3}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <HadronFeynmanInteraction
                            react={["v"]}
                            result={["μ", <sup>-</sup>]}
                            index={4}
                            onClick={chooseInteraction}
                        />
                    </li>
                </ul>
            </div>)
    } else {
        return (
            <div className="feynman-rotation-container">
                <FeynmanRotation toggleOpenGame={toggleOpenGame} initialReact={selected.react} initialResult={selected.result} dataCollection={selected.dataCollectionSelected} />
            </div>

        )
    }
}

export default FeynmanSection