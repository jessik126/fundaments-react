import React from "react";
import "./App.css"

import Card from "./components/layout/Card";
import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragment from './components/basics/Fragment';
import Random from "./components/basics/Random";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentsList from "./components/repet/StudentsList";

export default _ => (
    <div className="App">
        <h1>React Fundaments</h1>
        <div className="Cards">
            <Card title="#06 - Repeat">
                <StudentsList></StudentsList>
            </Card>
            <Card title="#05 - Component with Family" color="#006879">
                <Family lastname="Silva">
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Gustavo" />
                </Family>
            </Card>
            <Card title="#04 - Randon" color="blue">
                <Random min={2} max={8}></Random>
                <Random min={2} max={8}></Random>
            </Card>
            <Card title="#03 - Fragments" color="green">
                <Fragment />
            </Card>
            <Card title="#02 - Grades" color="#E34F56">
                <WithParameter title="Grades" studant="Peter" grade={9.8} />
                <WithParameter title="" studant="Mary" grade={9.5} />
            </Card>
            <Card title="#01 - First">
                <First />
            </Card>
        </div>
    </div>
);