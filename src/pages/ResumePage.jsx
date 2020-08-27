import React from 'react'


import { Header, EmployersPara, RegisterTag, Benifits, AvailableTag, Faq, Footer } from '../components/index'


// job-seekers Para images
const flatDesign1Img = require('../assests/images/resume/para/image1.png')
const flatDesign2Img = require('../assests/images/resume/para/image2.png')
const flatDesign3Img = require('../assests/images/resume/para/image3.png')

const resumePara = {
    name: 'Resume Builder',
    quote: [
        { first: 'Tell your story...', second: 'Create a professional look with customized themes and templates' },
        { first: 'Easy to manage from any device.', second: '' }
    ],
    image3: flatDesign3Img.default,
    image2: flatDesign2Img.default,
    image1: flatDesign1Img.default
}



// benefits images
const benifitsImage1 = require('../assests/images/resume/benefits/multi-device.png')
const benifitsImage2 = require('../assests/images/resume/benefits/share.png')
const benifitsImage3 = require('../assests/images/resume/benefits/setup.png')
const benifitsImage4 = require('../assests/images/resume/benefits/recruiters.png')

const resumeBenifits = {
    name: "Features",
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
const ResumePage = () => {
    return (
        <div>
            <Header linkColor="white" bgColor="#abc720" />
            <EmployersPara employees={resumePara} />
            <RegisterTag />
            <AvailableTag bgColor="lightgrey" />
            <Benifits benifits={resumeBenifits} />
            <Footer />
        </div>
    )
}

export default ResumePage
