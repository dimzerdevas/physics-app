import React, { useEffect } from 'react';

function FeynmanRotation(props) {

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
            <div>A{props.react} → B{props.result} W+</div>
            <div className="feynman-triangle">
                <div className="feynman-triangle__edge feynman-triangle__edge--A">Κορυφή A{props.react}</div>
                <div className="feynman-triangle__edge feynman-triangle__edge--B">Κορυφή B{props.result}</div>
                <div className="feynman-triangle__edge feynman-triangle__edge--C">Κορυφή W+</div>
            </div>
            <div className="feynman-triangle__controls">
                <button onClick={rotateRight}>Δεξιά Περιστροφή</button>
                <button onClick={rotateLeft}>Αριστερή Περιστροφή</button>
                <button onClick={rotateOpposite}>Αντιστροφή</button>
            </div>
        </div>)
}

export default FeynmanRotation;