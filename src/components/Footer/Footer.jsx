import React from 'react'
import { Link } from 'react-router-dom'
const bgImage = require('../../assests/images/logo.svg')
const facebookImg = require('../../assests/images/social-media/facebook.svg')
const instaImg = require('../../assests/images/social-media/insta.svg')
const linkdinImg = require('../../assests/images/social-media/linkdin.svg')
const twitterImg = require('../../assests/images/social-media/twitter.svg')

// const Footer = () => {
//     return (
//         <div className="footer row">
//             {/* <div className="container row"> */}
//                 <div className="footer-left col">
//                     <div className="footer-left-social-links">
//                         <img src={facebookImg.default} alt="" />
//                         <img src={twitterImg.default} alt="" />
//                         <img src={instaImg.default} alt="" />
//                         <img src={linkdinImg.default} alt="" />
//                     </div>
//                     <div className="footer-left-links">
//                         <ul>
//                             <li>Employers</li>
//                             <li>Virtual Events</li>
//                             <li>About Us</li>
//                             <li>Job Seekers</li>
//                             <li>Private Events</li>
//                             <li>Features</li>
//                             <li>Recruiters</li>
//                             <li>Event Calendar</li>
//                             <li>Contact</li>
//                             <li>Job Fairs</li>
//                             <li>Download</li>
//                             <li>Careers</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="footer-right col">
//                     <div className="footer-right-image">
//                         <img src={bgImage.default} alt="" />
//                         <p>Made in Austin. All member work copyright of respective owner, otherwise © 2020 InterviewXpress</p>
//                     </div>
//                 </div>
//             </div>
//         // </div>
//     )
// }



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-sm-12 mr-auto">
                        <div className="footer-left-social-links">
                            <img src={facebookImg.default} alt="" />
                            <img src={twitterImg.default} alt="" />
                            <img src={instaImg.default} alt="" />
                            <img src={linkdinImg.default} alt="" />
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
