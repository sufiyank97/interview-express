import React from 'react'
import { Header, EmployersPara, RegisterTag, Benifits, Recruit, Features, AvailableTag, Footer } from '../components/index'

const flatDesign1Img = require('../assests/images/employers/flat-design1.png')
const resflatDesign1Img = require('../assests/images/employers/flat-design1-res.png')
const flatDesign2Img = require('../assests/images/employers/flat-design2.png')
const resflatDesign2Img = require('../assests/images/employers/flat-design2-res.png')
const flatDesign3Img = require('../assests/images/employers/flat-design3.png')
const resflatDesign3Img = require('../assests/images/employers/flat-design3-res.png')

const empPara = {
    name: 'Employers',
    quote: [
        { first: 'Quick and easy interview process', second: 'Nationwide exposure and access' },
        { first: 'Weekly targeted job fairs', second: 'Virtual access from anywhere.' }
    ],
    image3: flatDesign3Img.default,
    image2: flatDesign2Img.default,
    image1: flatDesign1Img.default,
    resImage1: resflatDesign1Img.default,
    resImage2: resflatDesign2Img.default,
    resImage3: resflatDesign3Img.default
}

const benifitsImage1 = require('../assests/images/employers/benefits/hire-room1.png')
const benifitsImage2 = require('../assests/images/employers/benefits/recruiters.png')
const benifitsImage3 = require('../assests/images/employers/benefits/rooms.png')
const benifitsImage4 = require('../assests/images/employers/benefits/welcome.png')

const empBenifits = {
    name: "Benefits",
    image1: {
        image: benifitsImage1.default,
        title: 'Unlimited Access',
        desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
    },
    image2: {

        image: benifitsImage2.default,
        title: 'Connect with Recruiters',
        desc: `Create your customized virtual mobile resume.  Quickly create a digital QR code link to a dynamic customized resume that showcases your skills (via video, audio, portfolio, and/or links)`
    },
    image3: {

        image: benifitsImage3.default,
        title: 'Build your digital mobile ready resume',
        desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
    },
    image4: {
        image: benifitsImage4.default,
        title: 'Other features from InterviewXpress',
        desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
    },
    allImages: [
        {
            image: benifitsImage1.default,
            title: 'Unlimited Access',
            desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
        },
        {

            image: benifitsImage2.default,
            title: 'Connect with Recruiters',
            desc: `Create your customized virtual mobile resume.  Quickly create a digital QR code link to a dynamic customized resume that showcases your skills (via video, audio, portfolio, and/or links)`
        },
        {

            image: benifitsImage3.default,
            title: 'Build your digital mobile ready resume',
            desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
        },
        {
            image: benifitsImage4.default,
            title: 'Other features from InterviewXpress',
            desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
        },
    ]
}

const EmployersPage = () => {
    return (
        <div>
            <Header headerLinks="links2" bgColor="#abc720" />
            <EmployersPara employees={empPara} />
            <RegisterTag />
            <Benifits benifits={empBenifits} />
            <Recruit />
            <RegisterTag />
            <Features />
            <AvailableTag />
            <Footer />
        </div>
    )
}

export default EmployersPage