import React from "react";

export default props => {
    const {min, max} = props; //Destructuring js
    var num = Math.floor(Math.random() * (max - min) + min)
    return (
        <div>
            <h2>Randon</h2>
            <p>Randon number between {min} and {max} is {num}</p>
        </div>
    )
}