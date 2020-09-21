import React from 'react'

const groupImg = require('../../assests/images/virtual-event/para/group.png')
// const recruitersImg = require('../../assests/images/virtual-event/para/recruiters1.png')
const recruiters1Img = require('../../assests/images/virtual-event/para/recruiters2.png')


const VirtualPara = () => {
    return (
        <>
            <div className="virtual-para">
                <div className="virtual-para-text">
                    <div className="virtual-para-text-1">
                        <h1 className="virtual-para-text-header">Virtual Event</h1>
                        <h1 className="virtual-para-text-quote">
                            Register via Mobile.
                    </h1>
                        <h1 className="virtual-para-text-quote">
                            Access from Anywhere.
                    </h1>
                        <img src={groupImg.default} alt="" />
                    </div>
                    <div className="virtual-para-text-2">
                        <h1 className="virtual-para-text-quote">
                            Interview Faster.
                    </h1>
                        <h1 className="virtual-para-text-quote">
                            Find Better Matches
                    </h1>
                        <h1 className="virtual-para-text-quote">
                            Find More Candidates.
                    </h1>
                        <h1 className="virtual-para-text-quote">
                            Get Hired Faster.
                    </h1>
                    </div>
                </div>
                <div className="virtual-para-image">
                    <img src={recruiters1Img.default} alt="" />
                </div>
            </div>

            <div className="virtual-mobile">
                <div className="image-header ml-auto"></div>
                <div className="virtual-mobile-image">
                    <img src={recruiters1Img.default} alt="" />
                </div>
                <div className="virtual-mobile-text">
                    <h1 className="virtual-para-text-header">Virtual Event</h1>
                    <div className="virtual-mobile-text-quote">
                        <h1 className="virtual-mobile-text-quote-h1">
                            Register via Mobile.
                    </h1>
                        <h1 className="virtual-mobile-text-quote-h1 quote1">
                            Access from Anywhere.
                    </h1>
                        <h1 className="virtual-mobile-text-quote-h1">
                            Interview Faster.
                    </h1>
                        <h1 className="virtual-mobile-text-quote-h1 quote1">
                            Find Better Matches
                    </h1>
                        <h1 className="virtual-mobile-text-quote-h1">
                            Find More Candidates.
                    </h1>
                        <h1 className="virtual-mobile-text-quote-h1 quote1">
                            Get Hired Faster.
                    </h1>
                    </div>
                    <img src={groupImg.default} alt="" />
                </div>
            </div>
        </>
    )
}

export default VirtualPara
