import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import Buttons from "./Buttons";
import PaceForm from "./PaceForm";

export default class Counter extends Component {
    // //One way using constructor and super
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         number: props.initialNumber
    //     }
    // }
    // //Another is direct with state:

    state = {
        number: this.props.initialNumber || 0,
        pace: this.props.initialPace || 5,
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.pace,
        });
    }
    dec = () => {
        this.setState({
            number: this.state.number - this.state.pace,
        });
    }

    //set in the same file (without components)
    // setPace = (event) => {
    //     this.setState({
    //         pace: +e.target.value,
    //     });
    // }

    //set with component (indirect communication - child send data to father)
    setPace = (newPace) => {
        this.setState({
            pace: newPace,
        });
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number}/>
                <PaceForm pace={this.pace} setPace={this.setPace}/>
                <Buttons setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}


//the 'export default' can be the last thing in this file, just use 'export default Counter'