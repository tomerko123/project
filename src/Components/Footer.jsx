import React from "react"
import "../json/jsonFile.json";

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Clubs from './pages/Clubs';

const testJson = require("../json/jsonFile.json")
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">{testJson[0].ClubN}</h5>
                <p>{testJson[0].About}</p>
            </div>

            
            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="Home">Home</a></li>
                    <li><a href="Contact">Contact</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Clubs">Clubs</a></li>
                </ul>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> {testJson[0].Address}
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                {testJson[0].Email}
              

              </p>
              <p>
                <i className='fas fa-phone me-3'></i> {testJson[0].Phone}
              </p>
              
            </div>
        </div>
    </div>

   

</footer>

export default Footer