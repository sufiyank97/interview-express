import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../../assests/images/logo.svg'

const Header = (props) => {
    const { headerLinks, bgColor, newHeight } = props

    const links1 = [
        { name: 'Job Seekers', link: '/job-seekers' },
        { name: 'Employers', link: '/employers' },
        { name: 'Recruiters', link: '/recruiters' }
    ]
    const links2 = [
        { name: 'Calendar', link: '/job-fair-calendar' },
        { name: 'Virtual', link: '/virtual-events' },
        { name: 'Private Events', link: '/private-events' }
    ]
    return (

        // <header>
        //     <div className="container1">
        //         <div className="image">
        //             <Link to="/">
        //                 <img
        //                     alt=""
        //                     src={Logo}
        //                     className="d-inline-block align-top"
        //                 />
        //             </Link>
        //         </div>

        //         <Nav className="ml-auto employer-header" style={{ backgroundColor: bgColor }}>
        //             <Link className="nav-link" to="/job-seekers" style={{ color: linkColor }}>Job Seekers</Link>
        //             <Link className="nav-link" to="/employers" style={{ color: linkColor }}>Employers</Link>
        //             <Link className="nav-link" to="/job-fairs" style={{ color: linkColor }}>Recruiters</Link>
        //         </Nav>
        //     </div>
        // </header>
        <Navbar expand="lg">
            <Link to="/" className="navbar-brand">
                <img
                    alt=""
                    src={Logo}
                    className="d-inline-block align-top"
                />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto employer-header" style={{ backgroundColor: bgColor, height: newHeight }}>
                    {
                        (headerLinks === "links1") ?
                            links1.map((headerLink, i) => (
                                <Link to={headerLink.link} className="nav-link" key={i}>{headerLink.name}</Link>
                            )) : links2.map((headerLink, i) => (
                                <Link to={headerLink.link} className="nav-link" key={i}>{headerLink.name}</Link>
                            ))
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header