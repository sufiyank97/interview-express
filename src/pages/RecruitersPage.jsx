import React from 'react'

import { Header, EmployersPara, RegisterTag, Benifits, AvailableTag, Faq, Footer } from '../components/index'

// employers Para images
const flatDesign1Img = require('../assests/images/employers/benefits/recruiters.png')
const flatDesign2Img = require('../assests/images/employers/benefits/hire-room1.png')
const resflatDesign1Img = require('../assests/images/employers/benefits/recruiters-res.png')
const resflatDesign2Img = require('../assests/images/employers/benefits/hire-room1-res.png')
const flatDesign3Img = require('../assests/images/employers/flat-design3.png')
const recruitersPara = {
    name: 'Recruiters',
    quote: [
        { first: 'Access to hundred of candidates.', second: 'Speed interview and track feedback.' },
        { first: 'Find candidates and fill requirements faster.', second: '' }
    ],
    image3: '',
    image2: flatDesign2Img.default,
    image1: flatDesign1Img.default,
    resImage2: resflatDesign2Img.default,
    resImage1: resflatDesign1Img.default
}


//  Benifits Images
const benifitsImage1 = require('../assests/images/recruiters/benefits/join-network.png')
const benifitsImage2 = require('../assests/images/recruiters/benefits/job-room.png')
const benifitsImage3 = require('../assests/images/recruiters/benefits/job-placement.png')
const benifitsImage4 = require('../assests/images/recruiters/benefits/job-fairs.png')

const recruitersBenifits = {
    name: "Benefits",
    image1: {
        image: benifitsImage1.default,
        title: 'Join our network',
        desc: `Become a part of a growing network on specialized recruiters serving an ever
growing group of expanding companies.`
    },
    image2: {
        image: benifitsImage2.default,
        title: 'Access candidates globally',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore similique ipsa porro voluptas omnis maiores alias soluta eveniet, accusamus quae nihil quibusdam sunt fugit blanditiis excepturi earum, cumque esse.`
    },
    image3: {
        image: benifitsImage3.default,
        title: 'Access job placement opportunities',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore similique ipsa porro voluptas omnis maiores alias soluta eveniet, accusamus quae nihil quibusdam sunt fugit blanditiis excepturi earum, cumque esse.`
    },
    image4: {
        image: benifitsImage4.default,
        title: 'Get access to recruitment job fairs',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore similique ipsa porro voluptas omnis maiores alias soluta eveniet, accusamus quae nihil quibusdam sunt fugit blanditiis excepturi earum, cumque esse.`
    },
    allImages: [
        {
            image: benifitsImage1.default,
            title: 'Join our network',
            desc: `Become a part of a growing network on specialized recruiters serving an ever
    growing group of expanding companies.`
        },
        {
            image: benifitsImage2.default,
            title: 'Access candidates globally',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore similique ipsa porro voluptas omnis maiores alias soluta eveniet, accusamus quae nihil quibusdam sunt fugit blanditiis excepturi earum, cumque esse.`
        },
        {
            image: benifitsImage3.default,
            title: 'Access job placement opportunities',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore similique ipsa porro voluptas omnis maiores alias soluta eveniet, accusamus quae nihil quibusdam sunt fugit blanditiis excepturi earum, cumque esse.`
        },
        {
            image: benifitsImage4.default,
            title: 'Get access to recruitment job fairs',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore similique ipsa porro voluptas omnis maiores alias soluta eveniet, accusamus quae nihil quibusdam sunt fugit blanditiis excepturi earum, cumque esse.`
        }
    ]
}

const RecruitersPage = () => {
    return (
        <div>
            <Header headerLinks="links2" bgColor="#abc720" />
            <EmployersPara employees={recruitersPara} />
            <RegisterTag />
            <AvailableTag bgColor="lightgrey" />
            <Benifits benifits={recruitersBenifits} />
            <RegisterTag />
            <Faq />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default RecruitersPage
