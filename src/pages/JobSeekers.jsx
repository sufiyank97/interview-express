import React from 'react'

import { Header, EmployersPara, RegisterTag, Benifits, AvailableTag, Faq, Footer } from '../components/index'

// job-seekers Para images
const flatDesign1Img = require('../assests/images/job-seekers/para/hire-room1.png')
const flatDesign2Img = require('../assests/images/job-seekers/para/hire-room.png')

const jobSeekersPara = {
    name: 'Job Seekers',
    quote: [
        { first: 'Access hundreds of companies.', second: 'Access hundreds of companies.' },
        { first: 'Get hired faster.', second: '' }
    ],
    image3: '',
    image2: flatDesign2Img.default,
    image1: flatDesign1Img.default
}


const benifitsImage1 = require('../assests/images/job-seekers/benefits/unlimited-access.png')
const benifitsImage2 = require('../assests/images/job-seekers/benefits/smartphone.png')
const benifitsImage3 = require('../assests/images/job-seekers/benefits/profile.png')
const benifitsImage4 = require('../assests/images/job-seekers/benefits/resources.png')

const jobSeekersBenifits = {
    name: "Benefits",
    image1: {
        image: benifitsImage1.default,
        title: 'Unlimited Access',
        desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
    },
    image2: {
        card: true,
        image: benifitsImage2.default,
        title: 'Connect with Recruiters',
        desc: `Create your customized virtual mobile resume.  Quickly create a digital QR code link to a dynamic customized resume that showcases your skills (via video, audio, portfolio, and/or links)`
    },
    image3: {
        card: true,
        image: benifitsImage3.default,
        title: 'Build your digital mobile ready resume',
        desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
    },
    image4: {
        image: benifitsImage4.default,
        title: 'Other features from InterviewXpress',
        desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
    },
}
const JobSeekers = () => {
    return (
        <div>
            <Header linkColor="white" bgColor="#abc720" />
            <EmployersPara employees={jobSeekersPara} />
            <RegisterTag />
            <AvailableTag bgColor="lightgrey" />
            <Benifits benifits={jobSeekersBenifits} />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default JobSeekers
