import React, { useState } from 'react';
import HadronDecayGameInstructions from './HadronDecayGameInstructions'
import HadronDecayGamePlay from './HadronDecayGamePlay'

function HadronDecayGame() {
    const [isGameOpen, setIsGameOpen] = useState(false)
    const [selectedHadronDecay, setSelectedHadronDecay] = useState({})

    const toggleOpenGame = (hadronDecay) => {
        if (hadronDecay) {
            setSelectedHadronDecay(hadronDecay)
        }
        setIsGameOpen(!isGameOpen)
    }

    if (!isGameOpen) {
        return (
            <HadronDecayGameInstructions toggleOpenGame={toggleOpenGame} />
        )
    } else {
        return (
            <div>
                <HadronDecayGamePlay hadronDecay={selectedHadronDecay} />
                <button
                    className="main-menu__option"
                    style={{ width: '16%', fontSize: '20px', position: 'absolute', top: '50%', left: '35%' }}
                    onClick={toggleOpenGame}>
                    Πίσω στις οδηγίες
                </button>
            </div>)
    }
}
export default HadronDecayGame;