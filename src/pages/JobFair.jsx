import React from 'react'


import { Header, EmployersPara, RegisterTag, BenifitsFirst, AvailableTag, Faq, Footer } from '../components/index'

// job-fair Para images
const flatDesign1Img = require('../assests/images/job-fair/para/job-fair1.png')
const flatDesign2Img = require('../assests/images/job-fair/para/job-fair.png')

const jobFairPara = {
    name: 'Register for a job fair',
    quote: [
        { first: 'Download our app and register for a job fair.', second: '' }
    ],
    image3: '',
    image2: flatDesign2Img.default,
    image1: flatDesign1Img.default
}

const JobFair = () => {
    return (
        <div className="job-fair">
            <Header linkColor="white" bgColor="#abc720" />
            <EmployersPara employees={jobFairPara} sms={true} />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default JobFair
