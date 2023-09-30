import React, {useState} from "react";

export default props => {
    const [changeValue, setChangeValue] = useState("Change Value")
    const unchangeValue = "Read Only"

    function whenChange(e) {
        setChangeValue(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{changeValue}</h2>
            <input value={changeValue} onChange={whenChange} />
            <input value={unchangeValue} readOnly />
            <input value={undefined} /> 
            {/* undefined = open field to change, uncontrolled */}
        </div>
    )
}