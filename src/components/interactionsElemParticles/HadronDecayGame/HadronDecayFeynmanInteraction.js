import React from 'react';

function HadronFeynmanInteraction({ react, result, onClick, index }) {
    const arrowHTML = <span>&#8594;</span>

    const chooseInteraction = () => {
        onClick(react, result, index)
    }

    return (
        <div>
            <input className="pointer" id={{react} + "_" + {result}} type="radio" onClick={chooseInteraction} />
            <label for={{react} + "_" + {result}}
                   className="feynman-diagram__label pointer">
                {react}-{result}-W
            </label>
        </div>
    )
}

export default HadronFeynmanInteraction;