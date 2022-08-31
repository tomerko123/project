import React, { useEffect , useState } from 'react'
import jsonFile2 from "../../json/jsonFile2.json";
import axios from "axios"; 


function thisPage1() {
    // const [testJson , setTestJson] = React.useState([]); 
    /*  
    useEffect(() => {
        axios
        .get("../../json/jsonFile2.json")
        .then((res) => setTestJson(res.data)) 
        .catch(err => console.log(err)) 
    } , []); 
    */
    // const testJson = require("../../json/jsonFile2.json"); 
    return(
        
        <div> 
            {jsonFile2 &&
        jsonFile2?.map(({ Instagram ,  Facebook , AboutManger ,  Manager ,  About , Small ,Phone , Email , Address , ClubN, Id }) => (
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


export default thisPage1;
