import React from 'react'
import { Link } from 'react-router-dom'
const bgImage = require('../../assests/images/logo.svg')
const facebookImg = require('../../assests/images/social-media/facebook.svg')
const instaImg = require('../../assests/images/social-media/insta.svg')
const linkdinImg = require('../../assests/images/social-media/linkdin.svg')
const twitterImg = require('../../assests/images/social-media/twitter.svg')


const Footer = ({ newPosition }) => {
    return (
        <footer className="footer" style={{ position: newPosition }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-sm-12 ">
                        <div className="footer-left-social-links">
                            <img src={facebookImg.default} className="fb-img" alt="" />
                            <img src={twitterImg.default} className="social-img" alt="" />
                            <img src={instaImg.default} className="social-img" alt="" />
                            <img src={linkdinImg.default} className="social-img" alt="" />
                        </div>
                        <div className="footer-left-links ">
                            <ul className="list-unstyled mx-auto">
                                <li>
                                    <Link to="/employers">
                                        Employers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/virtual-events">
                                        Virtual Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/job-seekers">
                                        Job Seekers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/private-events">
                                        Private Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/features">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/recruiters">
                                        Recruiters
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/job-fair-calendar">
                                        Event Calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/job-fairs">
                                        Job Fairs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume">
                                        Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="footer-right-image">
                            <img src={bgImage.default} alt="" />
                            <p>Made in Austin. All member work copyright of respective owner, otherwise © 2020 InterviewXpress</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
