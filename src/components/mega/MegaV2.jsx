import React, { useState } from "react";
import "./Mega.css"

export default props => {
    function generateNumberOutArray(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(random) ?
            generateNumberOutArray(min, max, array) :
            random
    }

    function generateNumbers(amount) {
        const numbers = Array(amount)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateNumberOutArray(1, 60, nums)
                console.log([...nums, newNumber])
                return [...nums, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numbers
    }

    const [amount, setAmount] = useState(props.amount || 6)
    const initialNumbers = Array(amount).fill(0); // or generateNumbers(amount)
    const [numbers, setNumbers] = useState(initialNumbers)

    let numbersHtml = numbers.map( i => {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var customStyle = { backgroundColor: randomColor };
        return (
            // <span className="numberCircle">
            //     {i}
            // </span>

            <span className="Ball" style={customStyle}>
                {i.toString().padStart(2, '0')}
            </span>
        )
    })

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <div>
                <label>Numbers' amount</label>
                <input min="1" max="20" type="number" value={amount}
                    onChange={e => {
                        setAmount(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value)) //to generate without click on button
                    }} />
            </div>
            <button onClick={_ => setNumbers(generateNumbers(amount))}>Generate Numbers</button>
            <h3 id="numbers" >{numbersHtml}</h3>
            
        </div>
    )
}

