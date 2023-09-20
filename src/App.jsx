import React from "react";

import Card from "./components/layout/Card";
import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragment from './components/basics/Fragment';
import Random from "./components/basics/Random";

export default _ => (
    <div id="app">
        <h1>React Fundaments</h1>
        <Card title="#04 - Randon">
            <Random min={2} max={8}></Random>
            <Random min={2} max={8}></Random>
        </Card>
        <Card title="#03 - Fragments">
            <Fragment />
        </Card>
        <Card title="#02 - Grades">
            <WithParameter title="Grades" studant="Peter" grade={9.8} />
            <WithParameter title="" studant="Mary" grade={9.5} />
        </Card>
        <Card title="#01 - First">
            <First />
        </Card>
    </div>
);