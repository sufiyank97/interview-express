import React from 'react'

const loactions = [
    { date: 'Tuesday, July 25th, 2020', locName: 'Chichago,Il' },
    { date: 'Tuesday, July 25th, 2020', locName: 'Chichago,Il' },
]
const locationImg = require('../../assests/images/job-fair-calendar/location.png')
const JobFairPara = () => {
    return (
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
            <div className="job-fair-calendar-para-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.7159859942!2d-88.01214778988322!3d41.83339250495681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sin!4v1598890659975!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    )
}

export default JobFairPara
