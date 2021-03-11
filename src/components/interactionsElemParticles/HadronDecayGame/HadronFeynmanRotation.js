import React, { useState } from 'react';

function HadronFeynmanRotation({ particleToMatch, dataCollection, finishMatching }) {
    const arrowHTML = <span>&#8594;</span>

    const changeDisplayedDataCollection = (dataCollection) => dataCollection.map(position => position.map(particle => {
        switch (particle) {
            case 'u_':
                return <span style={{ 'textDecoration': 'overline' }}>u</span>
            case 'u':
                return <span>u</span>
            case 'd':
                return <span>d</span>
            case 'd_':
                return <span style={{ 'textDecoration': 'overline' }}>d</span>
            case 's':
                return <span>s</span>
            case 's_':
                return <span style={{ 'textDecoration': 'overline' }}>s</span>
            case 've':
                return <span>v<sub>e</sub></span>
            case 'e-':
                return <span>e<sup>-</sup></span>
            case 'e+':
                return <span>e<sup>+</sup></span>
            case 've_':
                return <span style={{ 'textDecoration': 'overline' }}>v<sub>e</sub></span>
            case 'μ+':
                return <span>μ<sup>+</sup></span>
            case 'μ-':
                return <span>μ<sup>-</sup></span>
            case 'νμ':
                return <span>ν<sub>μ</sub></span>
            case 'νμ_':
                return <span style={{ 'textDecoration': 'overline' }}>ν<sub>μ</sub></span>
            case 'W+':
                return <span>W<sup>+</sup></span>
            case 'W-':
                return <span>W<sup>-</sup></span>
            case 'arrow':
                return "arrow"
        }
    }))

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentRelationship, setCurrentRelationship] = useState(changeDisplayedDataCollection(dataCollection)[0]);
    const [isRotationEnabled, setIsRotationEnabled] = useState(false);
    const [reversedDataCollection, setReversedDataCollection] = useState(changeDisplayedDataCollection(dataCollection));
    const [displayCorrectMatch, setDisplayCorrectMatch] = useState(null)

    const rotateRight = () => {
        let newIndex = currentIndex;
        if (dataCollection.length - 1 > currentIndex) {
            setCurrentIndex(newIndex + 1);
            isRotationEnabled ? setCurrentRelationship(changeDisplayedDataCollection(dataCollection)[newIndex + 1])
                : setCurrentRelationship(reversedDataCollection[newIndex + 1]);
        } else {
            setCurrentIndex(0);
            setCurrentRelationship(reversedDataCollection[0]);
        }
    };

    const rotateLeft = () => {
        let newIndex = currentIndex;
        if (currentIndex === 0) {
            setCurrentIndex(dataCollection.length - 1);
            !isRotationEnabled ? setCurrentRelationship(changeDisplayedDataCollection(dataCollection)[dataCollection.length - 1])
                : setCurrentRelationship(reversedDataCollection[dataCollection.length - 1]);
        } else {
            setCurrentIndex(newIndex - 1);
            setCurrentRelationship(reversedDataCollection[newIndex - 1]);
        }
    };

    const rotateOpposite = () => {
        const newRotationStatus = !isRotationEnabled;

        const newReversedDataCollection = reversedDataCollection.map((relationship, index) => {
            let newRelationship = relationship.slice();
            newRelationship[0] = relationship[3];
            newRelationship[1] = relationship[2];
            newRelationship[2] = relationship[1];
            newRelationship[3] = relationship[0];
            return newRelationship;
        });

        setReversedDataCollection(newReversedDataCollection);
        setCurrentRelationship(newReversedDataCollection[currentIndex]);
        setIsRotationEnabled(newRotationStatus);
    };

    const checkForMatch = () => {
        if (particleToMatch === currentRelationship[0].props.children && !currentRelationship[0].props.style) {
            setDisplayCorrectMatch(true)
            finishMatching(currentRelationship[0], currentRelationship[2], currentRelationship[3])
        } else {
            setDisplayCorrectMatch(false)
        }
    }

    return (
        <div className="triangle-container">
            {!displayCorrectMatch && (
                <div>
                    {currentRelationship.indexOf('arrow') === 1 ?
                        <div className="one_left_triangle">
                            <div className="center"></div>
                            <div className="hadron-left-bar"></div>
                            <div className='particle hadron-left-particle'>
                                {currentRelationship[0]}
                            </div>
                            <div className="hadron-left-top-bar"></div>
                            <div className='particle hadron-left-top-particle'>
                                {currentRelationship[2]}
                            </div>
                            <div className="hadron-left-bottom-bar"></div>
                            <div className='particle hadron-left-bottom-particle'>
                                {currentRelationship[3]}
                            </div>
                        </div> :
                        <div className="two_left_triangle">
                            <div className="center"></div>
                            <div className="hadron-right-bar"></div>
                            <div className='particle hadron-right-particle'>
                                {currentRelationship[3]}
                            </div>
                            <div className="hadron-right-bottom-bar"></div>
                            <div className='particle hadron-right-bottom-particle'>
                                {currentRelationship[0]}
                            </div>
                            <div className="hadron-right-top-bar"></div>
                            <div className='particle hadron-right-top-particle'>
                                {currentRelationship[1]}
                            </div>
                        </div>
                    }
                </div>)}
            {!displayCorrectMatch &&
                (<p style={{
                    color: 'red', position: "absolute", top: "4%", left: '66%', width: '200px'
                }}>Με αυτό το προσανατολισμό δεν μπορείς να προσαρμόσεις την κορυφή στο σωματίδιο που ενεργοποιήσες</p>)
            }
            {
                displayCorrectMatch &&
                (<p style={{ color: 'green', position: 'absolute', top: '45%', left: '76%' }}>Μπράβο!</p>)
            }
            <div className="feynman-triangle__controls" style={{ width: "100%" }}>
                <div className="feynman-triangle__rotations">
                    <button className="main-menu__option space main-menu__option--first" onClick={rotateLeft}>Αριστερή Περιστροφή</button>
                    <button className="main-menu__option space main-menu__option--first" onClick={rotateRight}>Δεξιά Περιστροφή</button>
                </div>
                <div className="feynman-triangle__reverse">
                    <button className="main-menu__option space main-menu__option--second" onClick={rotateOpposite}>Αντιστροφή</button>
                </div>
                <div className="feynman-triangle__back">
                    <button className="main-menu__option space" onClick={checkForMatch}>Επικόλληση</button>
                </div>
            </div>
        </div >
    )
}

export default HadronFeynmanRotation