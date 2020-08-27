import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../../assests/images/logo.svg'

const Header = (props) => {

    const { linkColor, bgColor } = props
    return (

        <header>
            <div className="container1">
                <div className="image">
                    <img
                        alt=""
                        src={Logo}
                        className="d-inline-block align-top"
                    />
                </div>
                <Nav className="ml-auto employer-header" style={{ backgroundColor: bgColor }}>
                    <Link className="nav-link" to="/job-seekers" style={{ color: linkColor }}>Job Seekers</Link>
                    <Link className="nav-link" to="/employers" style={{ color: linkColor }}>Employers</Link>
                    <Link className="nav-link" to="/job-fairs" style={{ color: linkColor }}>Recruiters</Link>
                </Nav>
            </div>
        </header>
        // <Navbar  >
        //     <Navbar.Brand href="#home">
        //         <img
        //             alt=""
        //             src={Logo}
        //             className="d-inline-block align-top"
        //         />
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav" >
        //         <Nav className="ml-auto">
        //             <Nav.Link href="#home" style={{ color: linkColor }}>Job Seekers</Nav.Link>
        //             <Nav.Link href="#link">Employers</Nav.Link>
        //             <Nav.Link href="#link">Recruiters</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>

    )
}

export default Header
