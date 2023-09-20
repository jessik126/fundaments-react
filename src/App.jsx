import React from "react";

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragment from './components/basics/Fragment';

export default _ => (
    <div id="app">
        <h1>React Fundaments 2</h1>
        <Fragment />
        <WithParameter title="Grades" studant="Peter" grade={9.8} />
        <WithParameter title="" studant="Mary" grade={9.5} />
        <First />
    </div>
);