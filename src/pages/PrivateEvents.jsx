import React from 'react'

import { Header, EmployersPara, ContactUs, BenifitsFirst, AvailableTag, Footer } from '../components/index'


// private events Para images
const flatDesign1Img = require('../assests/images/private-events/interview2.png')
const resflatDesign1Img = require('../assests/images/private-events/interview1.png')

const privateEventsPara = {
    name: 'Private Events',
    quote: [
        { first: 'Need to fill vast candidates?', second: 'Nationwide exposure and access.' },
        { first: 'Streamlined interview process.', second: 'Customized process and event.' }
    ],
    image3: '',
    image2: '',
    image1: flatDesign1Img.default,
    resImage1: resflatDesign1Img.default
}

const PrivateEvents = () => {
    return (
        <div>
            <Header linkColor="white" bgColor="#abc720" />
            <EmployersPara employees={privateEventsPara} />
            <ContactUs />
            <AvailableTag bgColor="white" />
            <Footer />
        </div>
    )
}

export default PrivateEvents
