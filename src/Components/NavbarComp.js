import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 
import './NavbarComp.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Clubs from './pages/Clubs';
import Cancel from './pages/Cancel';
import SignUp_new from './pages/SignUp_new';



export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div className='header' >

                    <Navbar  expand="lg" fixed="top">
                        
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '250px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">בית</Nav.Link>
                                <Nav.Link as={Link} to="/about">אודות</Nav.Link>
                                <Nav.Link as={Link} to="/Clubs">מועדונים</Nav.Link>
                                <Nav.Link as={Link} to="/SignUp_new">הרשמה</Nav.Link>
                                <Nav.Link as={Link} to="/Cancel">ביטול הרשמה</Nav.Link>
                                <Nav.Link as={Link} to="/contact">צור קשר</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/Clubs">
                            <Clubs />
                        </Route>
                        <Route path="/Cancel">
                            <Cancel />
                        </Route>
                        <Route path="/SignUp_new">
                            <SignUp_new />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
