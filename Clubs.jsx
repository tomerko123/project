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
          

          <div className="data">

            {Data.map(({Id ,  ClubN , Address ,  Phone ,  About , Email , Coaches  , OpeningHours }) => {
              return <div key={Id}>
                <div> מועדון : </div>
                <div> {ClubN} </div>
                <div> {Address} </div>
                <div> {Phone} </div>
                <div> {About} </div>
                <div> {Email} </div> 
                <div> מאמן : </div>
                {Coaches.map(({Coach , AboutCoach , active }) =>  {
                  var Coach; 
                  if(active == true)
                  {
                    return <div> 
                    <div> {Coach} </div>
                    <div> {AboutCoach} </div>
                  </div>; 
                  }
                }
                )}
                <div>
                  שעות פעילות המועדון: 
                  {OpeningHours.map(({Day , Hours}) => {
                    return <div>
                      <div> {Day} </div> 
                      <div> {Hours} </div> 
                    </div>;
                  })}
                </div>
              </div>;
            })} 
          </div>



            {/* <h5 className="p-3 fw-bold text-black">
              Fetch Data from MYSQL Database in Reactjs
            </h5> */}
          
            {/* <table className="table table-bordered text-black">
              <thead>
                <tr>
                  <th>Ctaegoty Title</th>
                  <th>Category Heading</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table> */}


              {/* {Data.map(({ Id ,  ClubN , Address ,  Phone ,  About , Email , Coaches  }) => (
              <div key={Id}>
              <div>{ClubN}</div>
              <div>{Address}</div>
              <div>{Phone}</div>
              <div>{About}</div>
              <div>{Email}</div> 
              {Coaches.map(({Coach , AboutCoach , active}) => {
                <div>
                  <div> {Coach} </div>
                  <div> {AboutCoach} </div>
                  <div> {active} </div>
                </div>
              })}
          </div>
        ))}
             */}
     

          
        </div>      
      </Container>
    </React.Fragment>
  );
}

export default Home;
            
            





