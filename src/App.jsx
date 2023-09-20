import React from "react";

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragment from './components/basics/Fragment';
import Random from "./components/basics/Random";

export default _ => (
    <div id="app">
        <h1>React Fundaments 2</h1>
        <Random min={2} max={8}></Random>
        <Random min={2} max={8}></Random>
        <Fragment />
        <WithParameter title="Grades" studant="Peter" grade={9.8} />
        <WithParameter title="" studant="Mary" grade={9.5} />
        <First />
    </div>
);