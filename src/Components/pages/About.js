import React, { useEffect , useState } from 'react'
import Data from "../../json/jsonFile2.json";
import axios from "axios"; 


function About() {

    return(
        
        <div> 
          
            {Data.map(({ Instagram ,  Facebook , AboutManger ,  Manager ,  About , Small ,Phone , Email , Address , ClubN, Id }) => (
          <div key={Id}>
            <div>{ClubN}</div>
            <div>{Address}</div>
            <div>{Small}</div>
            <div>{Phone}</div>
            <div>{Email}</div>
            <div>{About}</div>
            <div>{Manager}</div>
            <div>{AboutManger}</div>
            <div>{Facebook}</div>
            <div>{Instagram}</div>
          </div>
        ))}
        </div>
    ); 
}


export default About;
