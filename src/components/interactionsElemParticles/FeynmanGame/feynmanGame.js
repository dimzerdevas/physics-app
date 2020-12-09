import React from 'react';
import FeynmanInteraction from './feynmanInteraction';

function FeynmanGame() {
    return (
        <div>
            <h1>Feyman Διαγραμματα Παιχνιδι</h1>
            <h2>Από τους μετασχηματισμούς των Κουαρκ στις διασπάσεις των ανδρονίων</h2>
            <div>Παιξε με την ασθενη αλληλεπιδραση των λεπτονιων, των κουαρκ
            και του σωματιδιου W+ και, φυσικα, των αντισωματιδιων τους!
            Διαλεξε από τις παρακάτω κορυφές και δες πως αλληλεπιδρούν
            τα σωματιδια μεταξυ τους, στρέφοντας την κορυφη με τη φορά των
            των δεικτών του ρολογιού, με φορά αντίθετη των δεικτών του ρολογιού
            και παίρνοντας την κατοπτρική μορφή της κορυφής.
            </div>
            <ul className="feynman-diagram--container">
                <li className="feynman-diagram">
                    <FeynmanInteraction
                        react="u"
                        result="d"
                    />
                </li>
                <li className="feynman-diagram">
                    <FeynmanInteraction
                        react="u"
                        result="s"
                    />
                </li>
                <li className="feynman-diagram">
                    <FeynmanInteraction
                        react="v"
                        result="e"
                    />
                </li>
            </ul>



        </div>)
}

export default FeynmanGame;