import React from 'react'
import AvailableTag from '../AvailableTag/AvailableTag'

// flat Designs Images
import eventsImg from '../../assests/images/flat-images/my-events.png'
import roomsImg from '../../assests/images/flat-images/my-rooms.png'
const FlatDesign = () => {
    return (
        <>
            <AvailableTag />
            <div className="container">
                <div className="events">
                    <div className="events-image">
                        <img src={eventsImg} alt="events Image" />
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
                        <img src={roomsImg} alt="rooms Image" />
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
        </>
    )
}

export default FlatDesign
