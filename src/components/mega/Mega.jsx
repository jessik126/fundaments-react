import React, {useState} from "react";

export default props => {
    let [numbersGenerated, setNumbersGenerated] = useState([]);

    let [amount, setChangeValue] = useState(props.amount)
    function whenChange(e) {
        setChangeValue(e.target.value);
    }


    function generateNumbers() {
        var numbers = [];
        var i = 0, value;
        while(i < amount) {
            value = parseInt(Math.random() * (60 - 1) + 1)
            if (numbers.find(e => e === value) === undefined) {
                numbers.push(value)
                i++;
            }
        }
        return numbers.sort(function(a, b){return a - b});
    }

    function generate() {
        numbersGenerated = setNumbersGenerated( generateNumbers() )
        console.log(numbersGenerated)
    }

    return (
        <div>
            <h2>Random Numbers to Mega</h2>
            <label>Amount: </label>
            <input type="number" value={amount} onChange={whenChange}/>
            <button onClick={generate}>Generate</button>
            <p> {numbersGenerated.length > 0 ? "Numbers:" : ""} {numbersGenerated.toString()}</p>
        </div>
    )
}