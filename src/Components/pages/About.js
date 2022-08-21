import React, { Component } from 'react'

import "../../json/jsonFile2.json";

function thisPage1() {
    const testJson = require("../../json/jsonFile2.json"); 
    return(
        
        <div>
            
            <div>על המועדון: {testJson[0].About}</div>
            <div>על מנהל המועדון: {testJson[0].AboutManger}</div>

        </div>
        
        
    ); 

    
}


export default thisPage1;
