import React from 'react'


import { Header, EmployersPara, RegisterTag, Benifits, AvailableTag, RegisterJobFair, Footer } from '../components/index'


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
        title: 'Multi Device Ready',
        desc: `Access and share your resume and have it look professional from any device.`
    },
    image2: {
        card: true,
        image: resbenifitsImage2.default,
        title: 'Sharing Using Multiple Format',
        desc: `Easily share you resume using any of the following formats: Email, PDF, SMS, QR Code, e-card, API ready link, etc... Over 25 sharing formats.`
    },
    image3: {
        card: true,
        image: resbenifitsImage3.default,
        title: 'Tailor and Customize',
        desc: `Make your resume your own by building the story that tells your story.`
    },
    image4: {
        image: benifitsImage4.default,
        title: 'Tons of story elements...',
        desc: `Tell your story with our story builder and create the most unique resume format that is readable and searchable by the latest software.`
    },
    image5: {
        card: true,
        image: resbenifitsImage5.default,
        title: 'API Ready',
        desc: `Yes, your resume now has an API!`
    },
    image6: {
        card: true,
        image: resbenifitsImage6.default,
        cImage: resbenifitsImage7.default,
        title: 'Custom domain name',
        desc: `Create you custom domain to share your
        resume`
    },
    allImages: [
        {
            image: benifitsImage1.default,
            title: 'Multi Device Ready',
            desc: `Access global virtual job fairs and gain access to hundreds of employers.  Browse job openings,  interview directly, get matched, and receive offers in the same platform.`
        },
        {
            card: true,
            image: resbenifitsImage2.default,
            title: 'Sharing Using Multiple Format',
            desc: `Easily share you resume using any of the following formats: Email, PDF, SMS, QR Code, e-card, API ready link, etc... Over 25 sharing formats.`
        },
        {
            card: true,
            image: resbenifitsImage3.default,
            title: 'Tailor and Customize',
            desc: `Make your resume your own by building the story that tells your story.`
        },
        {
            image: benifitsImage4.default,
            title: 'Tons of story elements...',
            desc: `Tell your story with our story builder and create the most unique resume format that is readable and searchable by the latest software.`
        },
        {
            card: true,
            image: resbenifitsImage5.default,
            title: 'API Ready',
            desc: `Yes, your resume now has an API!`
        },
        {
            card: true,
            image: resbenifitsImage6.default,
            title: 'Custom domain name',
            desc: `Create you custom domain to share your
        resume`,
            cImage: resbenifitsImage7.default
        }
    ]
}
const ResumePage = () => {
    return (
        <div>
            <Header headerLinks="links2" bgColor="#006eab" />
            <EmployersPara employees={resumePara} />
            <RegisterTag />
            <AvailableTag bgColor="#e8e8e8" />
            <Benifits benifits={resumeBenifits} />
            <AvailableTag bgColor="white" />
            <RegisterJobFair />
            <Footer />
        </div>
    )
}

export default ResumePage
