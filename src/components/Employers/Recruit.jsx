import React from 'react'
const unlimitedImg = require('../../assests/images/employers/recruit/unlimited-access.png')
const bestCandidatesImg = require('../../assests/images/employers/recruit/best-candidates.png')

const Recruit = () => {
    return (
        <div className="recruit">
            <h1>Recruit from anywhere.</h1>
            <div className="recruit-card-1">
                <div className="recruit-card-1-box">
                    <h1>Unlimited Access</h1>
                    <h6>Centralize your team while recruiting from anywhere..</h6>
                    <h6>
                        Access over 250 candidates per event.
                    </h6>
                    <h6>
                        The Events platform enables recruiters to view resumes and invite job seekers to interview.</h6>


                </div>
                <div className="recruit-card-1-image">
                    <img src={unlimitedImg.default} alt="" />
                </div>
            </div>
            <div className="recruit-card-2">
                <div className="recruit-card-2-box">
                    <h1>Unlimited Access</h1>
                    <h6>Centralize your team while recruiting from anywhere..</h6>
                    <h6>
                        Access over 250 candidates per event.
                    </h6>
                    <h6>
                        The Events platform enables recruiters to view resumes and invite job seekers to interview.</h6>


                </div>
                <div className="recruit-card-2-image">
                    <img src={bestCandidatesImg.default} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Recruit
