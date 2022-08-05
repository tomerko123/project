import React from "react";
import "../json/jsonFile.json";

function Clubs() {
    const testJson = require("../json/jsonFile.json")
    return(
        <div>
            
            <div>
            <div>שם המועדון: {testJson[1].ClubN}</div>
            <div>על המועדון: {testJson[1].About}</div>
            <div>טלפון המועדון: {testJson[1].Phone}</div>
            <div>מייל המועדון: {testJson[1].Email}</div>
            <div>מאמן : {testJson[1].Coaches}</div>
            <div>על המאמן : {testJson[1].AboutCoach}</div>
            <div>ימים : {testJson[1].Days}</div>
            <div>שעות : {testJson[1].Hours}</div>
            </div>

            <div> 
            <div>שם המועדון: {testJson[2].ClubN}</div>
            <div>על המועדון: {testJson[2].About}</div>
            <div>טלפון המועדון: {testJson[2].Phone}</div>
            <div>מייל המועדון: {testJson[2].Email}</div>
            <div>מאמן : {testJson[2].Coaches}</div>
            <div>על המאמן : {testJson[2].AboutCoach}</div>
            <div>ימים : {testJson[2].Days}</div>
            <div>שעות : {testJson[2].Hours}</div>
            </div>
            

        </div>
        
        
        
    ); 

    
}




export default Clubs;
