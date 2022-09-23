import React, { Component } from 'react'
import Slider from "../slider"; 
import './Home.css';

export default class Home extends Component {
    render() {

        return (
            <div>
                <h1>Home</h1>
                <p>This is home.</p> 
                <div> 
                <Slider/>
                </div>
                
            </div>
        )
    }
}
