import React from 'react';
import { Link } from 'react-router-dom'

function FeynmanInteraction(props) {
    return (
        <div >
            <Link to="feynman-game-rotation">
                <button type="radio">O</button>
            </Link>
            <span>{props.react} → {props.result} W+</span> 
        </div>)
}

export default FeynmanInteraction;