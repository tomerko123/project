import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Clubs from './Clubs';
import Cancel from './Cancel';
import SignUp_new from './SignUp_new';



export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="light"  expand="lg">
                        
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/Clubs">Clubs</Nav.Link>
                                <Nav.Link as={Link} to="/Cancel">Cancel</Nav.Link>
                                <Nav.Link as={Link} to="/SignUp_new">SignUp_new</Nav.Link>

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
