import React from 'react';

function GameInstructions(props) {
    return (
        <div className="instructions" style={!props.isShowingInstructions && {display: 'none'}}>
            Οδηγιες για το παιχνιδι 
            <button onClick={props.toggleInstructions}>X</button>
        </div>
    )
}

export default GameInstructions;