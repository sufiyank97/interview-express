import React from 'react'
import AvailableTag from '../AvailableTag/AvailableTag'

// flat Designs Images
const eventsImg = require('../../assests/images/flat-images/my-events.png')
const roomsImg = require('../../assests/images/flat-images/my-rooms.png')
const events1Img = require('../../assests/images/flat-images/my-events1.png')
const rooms1Img = require('../../assests/images/flat-images/my-rooms1.png')
const FlatDesign = () => {
    return (
        <>
            <AvailableTag />
            <div className="container flat-design">
                <div className="events">
                    <div className="events-image">
                        <img src={eventsImg.default} alt="events Image" />
                    </div>
                    <div className="events-box">
                        <div className="events-box-first">
                            <h3>Job Seekers Love It!</h3>
                            <p>Easy to Research, Easy to Apply, Easy to Interview</p>
                        </div>
                    </div>
                </div>

                <div className="rooms">
                    <div className="rooms-image">
                        <img src={roomsImg.default} alt="rooms Image" />
                    </div>
                    <div className="rooms-box">
                        <div className="rooms-box-first">
                            <div>
                                <h3>Employers Love It!</h3>
                                <p>Easy to connect, easy to interview, easy to manage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flat-design1">
                <div className="flat-design1-events">
                    <div className="flat-design1-events-image">
                        <img src={events1Img.default} alt="events Image" />
                    </div>
                    <div className="flat-design1-events-box">
                        <h1>Job Seekers Love It!</h1>
                        <p>Easy to Research, Easy to Apply, Easy to Interview</p>
                    </div>
                </div>
                <div className="flat-design1-rooms">
                    <div className="flat-design1-rooms-image">
                        <img src={rooms1Img.default} alt="rooms Image" />
                    </div>
                    <div className="flat-design1-rooms-box">
                        <h1>Employers Love It!</h1>
                        <p>Easy to connect, easy to interview, easy to manage.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlatDesign
