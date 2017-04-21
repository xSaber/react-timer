import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

/**
 * Header component, visible on all pages
 */
export default class Header extends Component {
    render () {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>React timer app</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/" activeClassName="active">
                            <NavItem eventKey={2}>Timer</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/countdown" activeClassName="active">
                            <NavItem eventKey={3}>Countdown</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
