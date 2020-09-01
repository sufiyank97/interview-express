import React from 'react'


import { Header, AvailableTag, JobFairPara, Footer } from '../components/index'

const JobFairCalendar = () => {
    return (
        <div className="job-fair-calendar">
            <Header headerLinks="links2" bgColor="#006eab" />
            <JobFairPara title="Job Fair Calendar" />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default JobFairCalendar