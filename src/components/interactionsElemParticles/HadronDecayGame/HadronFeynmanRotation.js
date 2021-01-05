import React, {useState} from 'react';

function HadronFeynmanRotation ({dataCollection}) {
    const arrowHTML = <span>&#8594;</span>

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentRelationship, setCurrentRelationship] = useState(dataCollection[0]);
    const [isRotationEnabled, setIsRotationEnabled] = useState(false);
    const [reversedDataCollection, setReversedDataCollection] = useState(dataCollection);

    const rotateRight = () => {
        let newIndex = currentIndex;
        if (dataCollection.length-1 > currentIndex) {
            setCurrentIndex(newIndex+1);
            isRotationEnabled ? setCurrentRelationship(dataCollection[newIndex+1])
                              : setCurrentRelationship(reversedDataCollection[newIndex+1]);
        } else {
            setCurrentIndex(0);
            setCurrentRelationship(reversedDataCollection[0]);
        }
    };

    const rotateLeft = () => {
        let newIndex = currentIndex;
        if ( currentIndex === 0 ) {
            setCurrentIndex(dataCollection.length-1);
            !isRotationEnabled ? setCurrentRelationship(dataCollection[dataCollection.length-1])
                              : setCurrentRelationship(reversedDataCollection[dataCollection.length-1]);
        } else {
            setCurrentIndex(newIndex-1);
            setCurrentRelationship(reversedDataCollection[newIndex-1]);
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
        
    }

    return (
        <div className="triangle-container">
            { currentRelationship.indexOf('arrow') === 1 ?
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
            <div className="feynman-triangle__controls">
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
        </div>
    )
}

export default HadronFeynmanRotation