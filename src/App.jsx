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
import ProductTable from "./components/repet/ProductTable";
import EvenOrOdd from "./components/Conditional/EvenOrOdd";
import UserInfo from "./components/Conditional/UserInfo";
import DirectFather from "./components/communication/DirectFather";
import IndirectFather from "./components/communication/IndirectFather";

export default _ => (
    <div className="App">
        <h1>React Fundaments</h1>
        <div className="Cards">

            <Card title="#10 - Indirect Communication" color="cian">
                <IndirectFather />
            </Card>
            <Card title="#09 - Direct Communication" color="brown">
                <DirectFather />
            </Card>
            <Card title="#08 - Conditional Render" color="purple">
                <EvenOrOdd number={21}></EvenOrOdd>
                <UserInfo user={{ name: 'Fernando' }}></UserInfo>
                <UserInfo user={{}} />
                <UserInfo />
            </Card>
            <Card title="#07 - Repeat Table" color="pink">
                <ProductTable />
            </Card>
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