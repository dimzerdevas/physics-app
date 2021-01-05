import React, { useState } from 'react';
import FeynmanInteraction from './feynmanInteraction';
import FeynmanRotation from './feynmanRotation';

const first_game_data_collection = [
    ["u_", "arrow", "d", "W+"],
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


function FeynmanGame() {
    const [hasChosenInteraction, setHasChosenInteraction] = useState(false);
    const [selected, setSelected] = useState({ react: '', result: '' , dataCollectionSelected: []});

    const toggleOpenGame = () => {
        setHasChosenInteraction(!hasChosenInteraction)
    };
    
    const chooseInteraction = (react, result, index) => {
        toggleOpenGame();
        const dataCollectionSelected = index === 1 ? first_game_data_collection :
                                       index === 2 ? second_game_data_collection :
                                       index === 3 ? third_game_data_collection :
                                       index === 4 ? fourth_game_data_collection : null;
        setSelected({ react, result , dataCollectionSelected});
    };

    if (!hasChosenInteraction) {
        return (
            <div>
                <header className="content-container__header">
                <h1>Feyman Διαγραμματα Παιχνιδι</h1>
                <h2>Από τους μετασχηματισμούς των Κουαρκ στις διασπάσεις των ανδρονίων</h2>
                <p>Παιξε με την ασθενη αλληλεπιδραση των λεπτονιων, των κουαρκ
                και του σωματιδιου W+ και, φυσικα, των αντισωματιδιων τους!
                Διαλεξε από τις παρακάτω κορυφές και δες πως αλληλεπιδρούν
                τα σωματιδια μεταξυ τους, στρέφοντας την κορυφη με τη φορά των
                των δεικτών του ρολογιού, με φορά αντίθετη των δεικτών του ρολογιού
                και παίρνοντας την κατοπτρική μορφή της κορυφής.
                </p>
                </header>
                <ul className="feynman-diagram--container">
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={"u"}
                            result={"d"}
                            index={1}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["u"]}
                            result={["s"]}
                            index={2}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["v"]}
                            result={["e", <sup>-</sup>]}
                            index={3}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
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

export default FeynmanGame;