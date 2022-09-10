import React from "react";
import Data from "../../json/jsonFile.json";

function Clubs() {
    const testJson = require("../../json/jsonFile.json"); 
    console.log(Data[0].ClubN);
    return(
        <div id="Clubs">
            <div>
            <div>שם המועדון: {Data[0].ClubN}</div>
            <div>על המועדון: {Data[0].About}</div>
            <div>טלפון המועדון: {Data[0].Phone}</div>
            <div>מייל המועדון: {Data[0].Email}</div>
            <div>מאמן: {Data[0].Coaches[0].Coach}</div>
            <div>על המאמן: {Data[0].Coaches[0].AboutCoach}</div>
            {Data[0].OpeningHours.map(function (OpeningHours){
                return(
                    <div>
                        <div>יום: {OpeningHours.Day}</div>
                        <div>שעות: {OpeningHours.Hours}</div>
                    </div>
                );
            })}
            </div>
            
            <div> 
            <div>שם המועדון: {Data[1].ClubN}</div>
            <div>על המועדון: {Data[1].About}</div>
            <div>טלפון המועדון: {Data[1].Phone}</div>
            <div>מייל המועדון: {Data[1].Email}</div>
            <div>מאמן : {Data[1].Coaches[1].Coach}</div>
            <div>על המאמן : {Data[1].Coaches[1].AboutCoach}</div>
            {Data[1].OpeningHours.map(function (OpeningHours){
                return(
                    <div>
                        <div>יום: {OpeningHours.Day}</div>
                        <div>שעות: {OpeningHours.Hours}</div>
                    </div>
                );
            })}
            </div>

        </div>
    ); 

    
}




export default Clubs;
