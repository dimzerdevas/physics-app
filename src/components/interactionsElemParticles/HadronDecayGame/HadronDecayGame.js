import React, { useState } from 'react';
import HadronDecayGameInstructions from './HadronDecayGameInstructions'
import HadronDecayGamePlay from './HadronDecayGamePlay'

import { Link } from 'react-router-dom'

function HadronDecayGame() {
    const [isShowingInstructions, setIsShowingInstructions] = useState(false)
    const [isGameOpen, setIsGameOpen] = useState(false)
    const [selectedHadronDecay, setSelectedHadronDecay] = useState({})

    const toggleOpenInstructions = () => {
        setIsShowingInstructions(!isShowingInstructions)
    }

    const toggleOpenGame = (hadronDecay) => {
        if (hadronDecay) {
            setSelectedHadronDecay(hadronDecay)
        }
        
        setIsGameOpen(!isGameOpen)
    }
    if (!isShowingInstructions) {
        return (
            <div>
                <h1>Διασπαση Ανδρονιων Παιχνιδι</h1>
                <div>Όπως αναφεραμε κατα τη μελετη της ισχυρης και της ασθενους πυρηνικης δύναμης
                οι αλληλεπιδράσεις μεταξύ των ανδρονίων, καθώς και οι διασπάσεις τους σε άλλα
                σωματίδια είναι εκφάνσεις των αλληλεπιδράσεων μεταξύ των κουάρκ και των λεπτονίων.
                Για να καταλάβουμε αυτή τη σχέση, ας μελετησουμε ως παραδειγμα τη διασπαση του νετρονίου:
            </div>
                <div>Γραφικα χρωματα ιστοριες</div>
                <div>Στο παρακάτω διάγραμμα, που ειναι ενα πιο σύνθετο διάγραμμα Feynman, το νετρονιο
                διασπαται σε ενα πρωτόνιο, ενα ηλεκτρόνιο κι ενα νετρίνο του ηλεκτρονίου. Και να πως:
                Το νετρόνιο αποτελείται από 1 u και 2 d κουαρκ. Το 1 d κουαρκ μετασχηματίζεται σε 1
                σωματίδιο W- και 1 u κουαρκ. Στη συνεχεια (θυμησου πως στα διαγραμματα Feynman θεωρούμε ότι
                ο χρόνος τρέχει από τα αριστερά προς τα δεξιά) το σωματιδιο W- μετασχηματιζεται σε 1
                ηλεκτρόνιο και 1 νετρινο του ηλεκτρονιου. Στο τελος της διασπασης εχουμε συνολικα 2 u και
                1 d κουαρκ, που αποτελουν το πρωτονιο, και 1 ηλεκτρόνιο και 1 νέτρινο του ηλεκτρονιου.
                Ας δούμε άλλο ένα παράδειγμα, μια διάσπαση του βαρυονίου Λ:
            </div>
                <div>Γραφικα χρωματα ιστοριες</div>
                <div>Στο παραπάνω διάγραμμα, το βαρυονιο Λ διασπάται σε 1 νετρόνιο και 1 πιονιο π
                Και να πως:
                Το βαρυονιο Λ αποτελειται απο 1 u, 1 d και 1 s κουαρκ. To 1 s κουαρκ μετασχηματιζεται
                σε 1 σωματιδιο W και 1 u κουαρκ. Στη συνεχεια το σωματιδιο W μετασχηματιζεται 1 u και 1 d κουαρκ.
                Τα 2 d και το 1 u κουαρκ σχηματιζουν ένα νετρόνιο και το 1 u και το 1 u κουαρκ σχηματίζουν
                ένα πιονιο π0.
            </div>
                <button onClick={toggleOpenInstructions}>Δοκίμασε να διασπάσεις ανδρόνιο</button>
            </div>)
    } else if (isGameOpen) {
        return (<div>
            <p>Game Open</p>
            <HadronDecayGamePlay hadronDecay={selectedHadronDecay} />
            <button onClick={toggleOpenGame}>Πίσω στις οδηγίες</button>
        </div>)
    } else {
        return (
            <div>
                <HadronDecayGameInstructions toggleOpenGame={toggleOpenGame} />
                <button onClick={toggleOpenInstructions}>Πίσω στην Θεωρία</button>
            </div>
        )
    }
}

export default HadronDecayGame;