import React from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation() {
  return (
    <Navbar bg="light" expand="xl" sticky="top" collapseOnSelect className="nav">
      <div className="navLogoAndTitle">
        {/* <Navbar.Brand as={Link} to="/"><h1 className="navTitle">Edmond Luu</h1></Navbar.Brand> */}
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <div className="navItems">
          <Nav>
            {/* <Nav.Link as={CustomLink} href="#" to="/">Home</Nav.Link>
            <Nav.Link as={CustomLink} href="#" to="/about">About</Nav.Link>
            <Nav.Link as={CustomLink} href="#" to="/projects">Projects</Nav.Link>
            <Nav.Link as={CustomLink} href="#" to="/siteinfo">Site Info</Nav.Link>
            <Nav.Link as={CustomLink} href="#" to="/contact">Contact</Nav.Link>
            <Nav.Link as={CustomLink} href="#" to="/funfacts">Fun Facts</Nav.Link> */}
            <h1>Hello</h1>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
      <Link to={to} {...props} className={isActive ? "navLink active" : "navLink"}>{children}</Link>
    )
  }
}