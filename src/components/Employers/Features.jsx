import React from 'react'
const interviewImg = require('../../assests/images/employers/features/interview.png')
const onlineBroImg = require('../../assests/images/employers/features/online-bro.png')
const onlineImg = require('../../assests/images/employers/features/online.png')
const Features = () => {
    return (
        <div className="features">
            <h1>Platform Features:</h1>
            <div className="features-interview">
                <div className="features-interview-image">
                    <img src={interviewImg.default} alt="" />
                </div>
                <div className="features-interview-card">
                    <div className="card-box">
                        <h1>One-on-One</h1>
                        <p>Add screener questions, then interview one-on-one, one-to-many or many-to-one. The platform allows for team collaboration as your interactions seamlessly flow from from interview to hire as quickly as you need.</p>
                    </div>
                </div>
            </div>

            <div className="features-interview">
                <div className="features-interview-card">
                    <div className="card-box">
                        <h1>One-on-One</h1>
                        <p>Add screener questions, then interview one-on-one, one-to-many or many-to-one. The platform allows for team collaboration as your interactions seamlessly flow from from interview to hire as quickly as you need.</p>
                    </div>
                </div>
                <div className="features-interview-image">
                    <img src={onlineBroImg.default} alt="" />
                </div>
            </div>

            <div className="features-interview">
                <div className="features-interview-image">
                    <img src={onlineImg.default} alt="" />
                </div>
                <div className="features-interview-card">
                    <div className="card-box">
                        <h1>One-on-One</h1>
                        <p>Add screener questions, then interview one-on-one, one-to-many or many-to-one. The platform allows for team collaboration as your interactions seamlessly flow from from interview to hire as quickly as you need.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features