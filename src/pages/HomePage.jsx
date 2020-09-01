import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Header, FlatDesign, RegisterTag, Footer } from '../components/index'

// employers
import employersImg from '../assests/images/employers/employers.svg'
import calendarImg from '../assests/images/employers/calendar.svg'
import searchImg from '../assests/images/employers/search.svg'
import lifebuoyImg from '../assests/images/employers/lifebuoy.svg'
import googleCalendarImg from '../assests/images/employers/google-calendar.svg'
// job Seekers
import jobSeekerImg from '../assests/images/home-page/job-seekers1.svg'
import customerServiceImg from '../assests/images/home-page/customer-service.svg'
import surfaceImg from '../assests/images/home-page/surface1.svg'
import timeImg from '../assests/images/home-page/time.svg'
// arrows
import arrowGreen from '../assests/images/arrows/arrow-green.svg'
import arrowBlue from '../assests/images/arrows/arrow-blue.svg'


const jobSeekers = [
    { id: 1, image: surfaceImg, desc: 'Are you looking for a new career?' },
    { id: 2, image: timeImg, desc: 'Tired of interviewing the old time-consuming way?' },
    { id: 3, image: customerServiceImg, desc: 'Need help connecting with a recruiter to find your perfect job?' }
]

const employers = [
    { id: 1, image: calendarImg, desc: 'ime-consuming, resource-wasting way?' },
    { id: 2, image: searchImg, desc: 'Unsure how we are improving the quality of candidates?' },
    { id: 3, image: lifebuoyImg, desc: 'Feeling overwhelmed with the candidate pool?' },
    { id: 4, image: googleCalendarImg, desc: 'Need to make your interview process more efficient? Wasting time in between interviews?' },
]



const HomePage = () => {
    return (
        <>
            <Header headerLinks="links1" />
            <div className="data data-first" >
                <div className="data-text1">
                    <h1>Job Seekers</h1>
                    <ListGroup>
                        {
                            jobSeekers.map(jobSeeker => (
                                <ListGroup.Item key={jobSeeker.id}>
                                    <img src={jobSeeker.image} />
                                    <div className="list-group-item-text">
                                        {jobSeeker.desc}
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                    <div className="data-arrow" style={{ marginTop: '-3rem' }}>
                        <img src={arrowGreen} />
                    </div>
                </div>
                <div className="data-image-first">
                    <img src={jobSeekerImg} />
                </div>
            </div>

            <div className="data">
                <div className="data-image-second">
                    <img src={employersImg} />
                </div>
                <div className="data-text" style={{ marginTop: '3rem' }}>
                    <h1>Employers</h1>
                    <ListGroup>
                        {
                            employers.map(employer => (
                                <ListGroup.Item key={employer.id}>
                                    <img src={employer.image} />
                                    <div className="list-group-item-text">
                                        {employer.desc}
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                    <div className="data-arrow">
                        <img src={arrowBlue} />
                    </div>
                </div>
            </div>

            <FlatDesign />
            <RegisterTag />
            <Footer />
        </>
    )
}

export default HomePage
