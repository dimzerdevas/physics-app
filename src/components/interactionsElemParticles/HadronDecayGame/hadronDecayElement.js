import React from 'react';
import HadronDecayGamePlay from './HadronDecayGamePlay';

const HadronDecayElement = ({ hadron, firstProduct, secondProduct, thirdProduct }) => {
    const arrowHTML = <span>&#8594;</span>
    return (
        <label> {hadron} {arrowHTML} {firstProduct} {secondProduct} {thirdProduct}</label>
    )
}

export default HadronDecayElement;