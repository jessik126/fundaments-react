import React from "react";

export default props => {
    const cb = props.whenClick
    const min = 50
    const max = 90
    const randomAge = () => parseInt(Math.random() * (max - min)) + min
    const randomNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.whenClick('Joao', 57, true)
                }
            }>Button type1</button>

            <button onClick={_ => cb('Joao', randomAge(), randomNerd())}>Send info</button>

        </div>
    )
}