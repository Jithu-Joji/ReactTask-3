import React, { Component } from 'react';

import "./ColourPicker.css";

const arr = ["Red", "Green", "Blue", "Yellow", "Purple", "Cyan", "Orange", "Magenta", "Pink", "DarkGreen", "OrangeRed", "LightBlue", "Brown", "LightOrange", "DarkBlue", "Olive"];

export class Task3 extends Component {
    
    constructor(){
        super();
        this.state = {
            color: "LightGreen"
        };
        this.toggle = false;
    }

    handleColor = () => {
        this.setState({
            toggle: true
        });
    }

    checkColor = (e) => {
        this.setState({
            color: e.target.style.backgroundColor,
            toggle: false
        }, () => {
            document.querySelector(".display").style.backgroundColor = this.state.color;
        });
    }

    render(){
        return(
            <div className='container'>
                <h2><b>Color Picker</b></h2>
                <div className="display">
                    <div className='items'>
                        {(this.state.toggle) ? arr.map((item) => {
                            return (
                                <button
                                    onClick={this.checkColor}
                                    style={{
                                        margin: "5px",
                                        border: 0,
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: item,
                                        boxShadow: "2px 2px 10px #3b383a"
                                    }}
                                ></button>
                            );
                        })
                        : <p></p>}
                    </div>
                    <div className='pp'>
                        <button id="clickButton" onClick={this.handleColor} style={{ backgroundColor: this.state.color }}>Pick a color</button>
                    </div>
                </div>
            </div>
        );
    }
}
