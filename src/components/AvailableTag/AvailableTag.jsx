import React from 'react'

// download images
import appleImg from '../../assests/images/social-media/Apple.svg'
import googleImg from '../../assests/images/social-media/Google.svg'
const AvailableTag = ({ bgColor }) => {
    return (

        <div className="available-tag" style={{ backgroundColor: bgColor }}>
            <h1>Available On</h1>
            <div className="available-tag-images">
                <img src={appleImg} alt="Apple Link" />
                <img src={googleImg} alt="Android Link" />
            </div>
        </div>
    )
}

export default AvailableTag
