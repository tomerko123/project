import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Data from "../../json/jsonFile.json";

function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("../../json/jsonFile.json");
      const getdata = await res.json();
      setCategory(getdata);
      // console.log(getdata);
    };

    getcategory();
  },[]);


  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-sm-8 text-success">
            <h5 className="p-3 fw-bold text-black">
              Fetch Data from MYSQL Database in Reactjs
            </h5>
          
            <table className="table table-bordered text-black">
              <thead>
                <tr>
                  <th>Ctaegoty Title</th>
                  <th>Category Heading</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
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
            </table>
          </div>
        </div>      
      </Container>
    </React.Fragment>
  );
}

export default Home;
            
            





