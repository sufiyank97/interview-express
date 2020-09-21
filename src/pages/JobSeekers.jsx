import React from 'react'

import { Header, EmployersPara, RegisterTag, Benifits, AvailableTag, JobFairPara, Footer } from '../components/index'

// job-seekers Para images
const flatDesign1Img = require('../assests/images/job-seekers/para/hire-room1.png')
const resflatDesign1Img = require('../assests/images/job-seekers/para/hire-room1-res.png')
const flatDesign2Img = require('../assests/images/job-seekers/para/hire-room.png')
const resflatDesign2Img = require('../assests/images/job-seekers/para/hire-room-res.png')

const jobSeekersPara = {
    name: 'Job Seekers',
    quote: [
        { first: 'Access hundreds of companies.', second: 'Access hundreds of companies.' },
        { first: 'Get hired faster.', second: '' }
    ],
    image3: '',
    image2: flatDesign2Img.default,
    image1: flatDesign1Img.default,
    resImage2: resflatDesign2Img.default,
    resImage1: resflatDesign1Img.default
}


const benifitsImage1 = require('../assests/images/job-seekers/benefits/unlimited-access.png')
const benifitsImage2 = require('../assests/images/job-seekers/benefits/smartphone.png')
const resbenifitsImage2 = require('../assests/images/job-seekers/benefits/smartphone1-res.png')
const benifitsImage3 = require('../assests/images/job-seekers/benefits/profile.png')
const resbenifitsImage3 = require('../assests/images/job-seekers/benefits/profile-res.png')
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
        image: resbenifitsImage2.default,
        title: 'Connect with Recruiters',
        desc: `Create your customized virtual mobile resume.  Quickly create a digital QR code link to a dynamic customized resume that showcases your skills (via video, audio, portfolio, and/or links)`
    },
    image3: {
        card: true,
        image: resbenifitsImage3.default,
        title: 'Build your digital mobile ready resume',
        desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
    },
    image4: {
        image: benifitsImage4.default,
        title: 'Other features from InterviewXpress',
        desc: [
            { name: 'Spend your time more efficiently' },
            { name: 'Schedule more interviews with opportunities better suited to your skill set via   Smart Matching' },
            { name: 'Receive feedback to improve your virtual interviewing skills' },
        ]
    },
    allImages: [
        {
            image: benifitsImage1.default,
            title: 'Unlimited Access',
            desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
        },
        {
            card: true,
            image: resbenifitsImage2.default,
            title: 'Connect with Recruiters',
            desc: `Create your customized virtual mobile resume.  Quickly create a digital QR code link to a dynamic customized resume that showcases your skills (via video, audio, portfolio, and/or links)`
        },
        {
            card: true,
            image: resbenifitsImage3.default,
            title: 'Build your digital mobile ready resume',
            desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
        },
        {
            image: benifitsImage4.default,
            title: 'Other features from InterviewXpress',
            desc: [
                { name: 'Spend your time more efficiently' },
                { name: 'Schedule more interviews with opportunities better suited to your skill set via   Smart Matching' },
                { name: 'Receive feedback to improve your virtual interviewing skills' },
            ]
        },
    ]
}

const JobSeekers = () => {
    return (
        <div>
            <Header headerLinks="links2" bgColor="#006eab" />
            <EmployersPara employees={jobSeekersPara} />
            <RegisterTag />
            <AvailableTag bgColor="#e8e8e8" />
            <Benifits benifits={jobSeekersBenifits} />
            <RegisterTag />
            <JobFairPara />
            <RegisterTag />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default JobSeekers
