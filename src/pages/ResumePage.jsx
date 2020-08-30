import React from 'react'


import { Header, EmployersPara, RegisterTag, Benifits, AvailableTag, Faq, Footer } from '../components/index'


// job-seekers Para images
const flatDesign1Img = require('../assests/images/resume/para/image1.png')
const flatDesign2Img = require('../assests/images/resume/para/image2.png')
const flatDesign3Img = require('../assests/images/resume/para/image3.png')

const resflatDesign1Img = require('../assests/images/resume/para/image1-res.png')
const resflatDesign2Img = require('../assests/images/resume/para/image2-res.png')
const resflatDesign3Img = require('../assests/images/resume/para/image3-res.png')

const resumePara = {
    name: 'Resume Builder',
    quote: [
        { first: 'Tell your story...', second: 'Create a professional look with customized themes and templates' },
        { first: 'Easy to manage from any device.', second: '' }
    ],
    image3: flatDesign3Img.default,
    image2: flatDesign2Img.default,
    image1: flatDesign1Img.default,
    resImage1: resflatDesign1Img.default,
    resImage2: resflatDesign2Img.default,
    resImage3: resflatDesign3Img.default
}



// benefits images
const benifitsImage1 = require('../assests/images/resume/benefits/multi-device.png')
const benifitsImage2 = require('../assests/images/resume/benefits/share.png')
const benifitsImage3 = require('../assests/images/resume/benefits/setup.png')
const resbenifitsImage2 = require('../assests/images/resume/benefits/share1.png')
const resbenifitsImage3 = require('../assests/images/resume/benefits/setup1.png')
const benifitsImage4 = require('../assests/images/resume/benefits/recruiters.png')

const benifitsImage5 = require('../assests/images/resume/benefits/api.png')
const benifitsImage6 = require('../assests/images/resume/benefits/internet.png')

const resbenifitsImage5 = require('../assests/images/resume/benefits/api1.png')
const resbenifitsImage6 = require('../assests/images/resume/benefits/internet1.png')
const resbenifitsImage7 = require('../assests/images/resume/benefits/comming-soon1.png')

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
    image5: {
        card: true,
        image: benifitsImage5.default,
        title: 'Build your digital mobile ready resume',
        desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
    },
    image6: {
        card: true,
        image: benifitsImage6.default,
        cImage: resbenifitsImage7.default,
        title: 'Build your digital mobile ready resume',
        desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
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
            desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
        },
        {
            card: true,
            image: resbenifitsImage5.default,
            title: 'Build your digital mobile ready resume',
            desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`
        },
        {
            card: true,
            image: resbenifitsImage6.default,
            title: 'Build your digital mobile ready resume',
            desc: `Create your virtual mobile resume/website Quickly create a digital QR code link to a dynamic customized resumes that showcases your skills (via video, audio, portfolio, links)`,
            cImage: resbenifitsImage7.default
        }
    ]
}
const ResumePage = () => {
    return (
        <div>
            <Header linkColor="white" bgColor="#abc720" />
            <EmployersPara employees={resumePara} />
            <RegisterTag />
            <AvailableTag bgColor="lightgrey" />
            <Benifits benifits={resumeBenifits} />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default ResumePage
