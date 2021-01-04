import React, { useEffect } from 'react';

function FeynmanRotation({initialReact, initialResult}) {
    const arrowHTML = <span>&#8594;</span>

    const rotateRight = () => {
        console.log('right')
        const feynmanTriangle = document.querySelector(".feynman-triangle")
        feynmanTriangle.classList.toggle('rotated')
    }
    const rotateLeft = () => {
        console.log('left')
    }
    const rotateOpposite = () => {
        console.log('opposite')
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
        </div>)
}

export default FeynmanRotation;