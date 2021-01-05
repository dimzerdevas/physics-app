import React, {useState, useEffect } from 'react';
import Particle from "../../elementaryParticles/elemParticleGame/elemParticle";

function FeynmanRotation({toggleOpenGame, initialReact, initialResult, dataCollection}) {
    const arrowHTML = <span>&#8594;</span>

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentRelationship, setCurrentRelationship] = useState(dataCollection[0]);

    // useEffect(() => {
    //     console.log(currentIndex, currentRelationship, 'hey')
    // }, [currentIndex, currentRelationship]);

    const rotateRight = () => {
        let newIndex = currentIndex;
        if (dataCollection.length-1 > currentIndex) {
            setCurrentIndex(newIndex+1);
            setCurrentRelationship(dataCollection[newIndex+1]);
        } else {
            setCurrentIndex(0);
            setCurrentRelationship(dataCollection[0]);
        }
    };

    const rotateLeft = () => {
        let newIndex = currentIndex;
        if ( currentIndex === 0 ) {
            setCurrentIndex(dataCollection.length-1);
            setCurrentRelationship(dataCollection[dataCollection.length-1]);
        } else {
            setCurrentIndex(newIndex-1);
            setCurrentRelationship(dataCollection[newIndex-1]);
        }
    };

    const rotateOpposite = () => {
    };
    return (
        <div className="triangle-container">
            { currentRelationship.indexOf('arrow') === 1 ?
                <div className="one_left_triangle">
                    <div className="center"></div>
                    <div className="left-bar"></div>
                    <div className='particle left-particle'>
                        {currentRelationship[0]}
                    </div>
                    <div className="left-top-bar"></div>
                    <div className='particle left-top-particle'>
                        {currentRelationship[2]}
                    </div>
                    <div className="left-bottom-bar"></div>
                    <div className='particle left-bottom-particle'>
                        {currentRelationship[3]}
                    </div>
                </div> :
                <div className="two_left_triangle">
                    <div className="center"></div>
                    <div className="right-bar"></div>
                    <div className='particle right-particle'>
                        {currentRelationship[3]}
                    </div>
                    <div className="right-top-bar"></div>
                    <div className='particle right-top-particle'>
                        {currentRelationship[1]}
                    </div>
                    <div className="right-bottom-bar"></div>
                    <div className='particle right-bottom-particle'>
                        {currentRelationship[0]}
                    </div>
                </div>
            }
            <div className="feynman-triangle__controls">
                <button onClick={rotateRight}>Δεξιά Περιστροφή</button>
                <button onClick={rotateLeft}>Αριστερή Περιστροφή</button>
                <button onClick={rotateOpposite}>Αντιστροφή</button>
                <button onClick={toggleOpenGame}>Πίσω στην Θεωρία</button>
            </div>
        </div>
    )
}

export default FeynmanRotation;