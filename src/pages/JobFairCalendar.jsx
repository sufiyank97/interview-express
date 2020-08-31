import React from 'react'


import { Header, EmployersPara, RegisterTag, Benifits, AvailableTag, Faq, Footer } from '../components/index'

const loactions = [
    { date: 'Tuesday, July 25th, 2020', locName: 'Chichago,Il' },
    { date: 'Tuesday, July 25th, 2020', locName: 'Chichago,Il' },
]
const locationImg = require('../assests/images/job-fair-calendar/location.png')
const JobFairCalendar = () => {
    return (
        <div className="job-fair-calendar">
            <Header linkColor="white" bgColor="#006eab" />
            <div className="job-fair-calendar-para">
                <div className="job-fair-calendar-para-text">
                    <h1>Job Fair Calendar</h1>
                    {
                        loactions.map((location, i) => (

                            <div className="job-fair-calendar-para-text-box" key={i}>
                                <div className="job-fair-calendar-para-text-box-1">
                                    <h3>{location.date}</h3>
                                    <div className="job-fair-calendar-para-text-box-1-image">
                                        <img src={locationImg.default} alt="" />
                                        <p>{location.locName}</p>
                                    </div>
                                </div>
                                <div className="job-fair-calendar-para-text-box-button">
                                    <button>Register</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="job-fair-calendar-para-map"></div>
            </div>
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default JobFairCalendar