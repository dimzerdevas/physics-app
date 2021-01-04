import React from 'react';
import { Link } from 'react-router-dom'

function FeynmanInteraction({ react, result, onClick }) {
    const arrowHTML = <span>&#8594;</span>

    const chooseInteraction = () => {
        onClick(react, result)
    }

    return (
        <div >
            <input type="radio" onClick={chooseInteraction}></input>
            <span>{react} {arrowHTML} {result} W<sup>+</sup></span>
        </div>)
}

export default FeynmanInteraction;