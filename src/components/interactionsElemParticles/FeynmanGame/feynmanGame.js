import React, { useState } from 'react';
import FeynmanInteraction from './feynmanInteraction';
import FeynmanRotation from './feynmanRotation';

const first_game_data_collection = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

const second_game_data_collection = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

const third_game_data_collection = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

const fourth_game_data_collection = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];


function FeynmanGame() {
    const [hasChosenInteraction, setHasChosenInteraction] = useState(false)
    const [selected, setSelected] = useState({ react: '', result: '' })

    const toggleOpenGame = () => {
        setHasChosenInteraction(!hasChosenInteraction)
    };
    
    const chooseInteraction = (react, result) => {
        toggleOpenGame();
        setSelected({ react, result });
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
                            react={["u"]}
                            result={["d"]}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["u"]}
                            result={["s"]}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["v"]}
                            result={["e", <sup>-</sup>]}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["v"]}
                            result={["μ", <sup>-</sup>]}
                            onClick={chooseInteraction}
                        />
                    </li>
                </ul>
            </div>)
    } else {
        return (
            <div className="feynman-rotation-container">
                <FeynmanRotation initialReact={selected.react} initialResult={selected.result} />
                <button onClick={toggleOpenGame}>Πίσω στην Θεωρία</button>
            </div>

        )
    }
}

export default FeynmanGame;