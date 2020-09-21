import React from 'react'


import { Header, AvailableTag, JobFairPara, Footer } from '../components/index'

const JobFairCalendar = () => {
    return (
        <div className="job-fair-calendar">
            <Header headerLinks="links2" bgColor="#006eab" newHeight="7rem" />
            <JobFairPara title="Job Fair Calendar" top="-5rem" />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}


export default JobFairCalendar