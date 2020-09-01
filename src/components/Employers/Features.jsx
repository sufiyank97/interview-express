import React from 'react'
const interviewImg = require('../../assests/images/employers/features/interview.png')
const onlineBroImg = require('../../assests/images/employers/features/online-bro.png')
const onlineImg = require('../../assests/images/employers/features/online.png')
const resinterviewImg = require('../../assests/images/employers/features/interview-res.png')
const resonlineBroImg = require('../../assests/images/employers/features/online-bro-res.png')
const resonlineImg = require('../../assests/images/employers/features/online-res.png')

const featuresArray = [
    {
        image: resinterviewImg.default,
        title: 'One-on-One',
        desc: `Add screener questions, then interview one-on-one, one-to-many or many-to-one. The platform allows for team collaboration as your interactions seamlessly flow from from interview to hire as quickly as you need.`
    },
    {
        image: resonlineBroImg.default,
        title: 'Multi-platform access',
        desc: `Our mobile app was built with a unique process in mind to accelerate your interviewing process. Access your information from multiple devices to make your job search seamless.`
    },
    {
        image: resonlineImg.default,
        title: 'Feedback and candidate export',
        desc: `Collect feedback from your team and priority candidates, rate them by experience, communications, leadership and other skill groups. Use our integration tools to export or directly import into an ATS tool.`
    }
]
const Features = () => {

    return (
        <div className="features">
            <h1 className="global-title">Platform Features:</h1>
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
                    <div className="card-box" style={{ boxShadow: '0 50px 50px 0 rgba(171, 199, 32, 0.3)' }}>
                        <h1>Multi-platform access</h1>
                        <p>Our mobile app was built with a unique process in mind to accelerate your interviewing process. Access your information from multiple devices to make your job search seamless.</p>
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
                        <h1>Feedback and candidate export</h1>
                        <p>Collect feedback from your team and priority candidates, rate them by experience, communications, leadership and other skill groups. Use our integration tools to export or directly import into an ATS tool.</p>
                    </div>
                </div>
            </div>


            {
                featuresArray.map((feature, i) => (
                    <div className="features-res" key={i}>
                        <div className="features-res-image">
                            <img src={feature.image} alt="" />
                        </div>
                        <div className="features-res-para">
                            {
                                (i === 1) ? (
                                    <div className="card-box" style={{ boxShadow: '0 50px 50px 0 rgba(171, 199, 32, 0.3)' }}>
                                        <h1>{feature.title}</h1>
                                        <p>
                                            {feature.desc}
                                        </p>
                                    </div>
                                ) : (
                                        <div className="card-box">
                                            <h1>{feature.title}</h1>
                                            <p>
                                                {feature.desc}
                                            </p>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Features