import React from 'react'

const groupImg = require('../../assests/images/virtual-event/para/group.png')
const recruitersImg = require('../../assests/images/virtual-event/para/recruiters1.png')
const VirtualPara = () => {
    return (
        <div className="virtual-para">
            <div className="virtual-para-text">
                <div className="virtual-para-text-1">
                    <h1>Virtual Event</h1>
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
                <img src={recruitersImg.default} alt="" />
            </div>
        </div>
    )
}

export default VirtualPara
