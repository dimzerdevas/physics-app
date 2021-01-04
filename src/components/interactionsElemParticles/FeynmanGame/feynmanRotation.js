import React, {useState, useEffect } from 'react';

function FeynmanRotation({initialReact, initialResult, dataCollection}) {
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
    }
    return (
        <div>
            <div>{initialReact} {arrowHTML} {initialResult} W <sup>+</sup></div>
            <div className="feynman-triangle">
                <div className="feynman-triangle__edge feynman-triangle__edge--A">Κορυφή A{initialReact}</div>
                <div className="feynman-triangle__edge feynman-triangle__edge--B">Κορυφή B{initialResult}</div>
                <div className="feynman-triangle__edge feynman-triangle__edge--C">Κορυφή W<sup>+</sup></div>
            </div>
            <div className="feynman-triangle__controls">
                <button onClick={rotateRight}>Δεξιά Περιστροφή</button>
                <button onClick={rotateLeft}>Αριστερή Περιστροφή</button>
                <button onClick={rotateOpposite}>Αντιστροφή</button>
            </div>
        </div>
    )
}

export default FeynmanRotation;