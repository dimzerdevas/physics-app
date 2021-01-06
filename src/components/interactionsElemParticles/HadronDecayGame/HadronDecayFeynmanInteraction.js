import React from 'react';

function HadronFeynmanInteraction({ react, result, onClick, index }) {

    const chooseInteraction = () => {
        onClick(react, result, index)
    }

    return (
        <div>
            <input className="pointer" id={{react} + "_" + {result}} type="radio" name="feynman-interaction" onClick={chooseInteraction} />
            <label for={{react} + "_" + {result}}
                   className="feynman-diagram__label pointer">
                {react}-{result}-W
            </label>
        </div>
    )
}

export default HadronFeynmanInteraction;