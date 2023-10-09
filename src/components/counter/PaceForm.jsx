import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="paceInput"></label>
            <input
                id="paceInput" 
                type="number" 
                value={props.pace} 
                onChange={e => props.setPace(+e.target.value)} />
        </div>
    )
}