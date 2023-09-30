import React, {useState} from "react";
import IndirectChild from "./IndirectChild";

export default props => {
    const [name, setName] = useState('?');
    const [age, setAge] = useState(0);
    const [nerd, setNerd] = useState(false);


    function sendInfo(nameParam, ageParam, nerdParam){
         setName(nameParam);
         setAge(ageParam);
         setNerd(nerdParam);
    }

    return (
        <div>
            <div>Pai: {name} - {age} - {nerd ? 'True' : 'False'} </div>
            <IndirectChild whenClick={sendInfo }/>
        </div>
    )
}