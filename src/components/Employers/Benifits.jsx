import React from 'react'



const Benifits = ({ benifits }) => {
    return (
        <div className="benefits">
            <div className="benefits-box">
                <h1>{benifits.name}:</h1>
                <div className="benefits-box-1">
                    <div className="benefits-box-1-image">
                        <img src={benifits.image1.image} alt="" />
                    </div>
                    <div className="benefits-box-1-text">
                        <div className="benefits-box-1-text-heading">
                            <h3>{benifits.image1.title}</h3>
                        </div>
                        <div className="benefits-box-1-text-box">
                            <p>
                                {benifits.image1.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="entry-box"></div>


            {
                (benifits.image2.card) ? (

                    <div className="benefits-recruiters">
                        <div className="benefits-recruiters-1-image">
                            <div className="benefits-recruiters-1-image-text">

                                <div className="benefits-recruiters-1-image-text-box" style={{ borderRadius: '1rem' }}>
                                    <div className="benefits-recruiters-1-image-text-box-image">
                                        <img src={benifits.image2.image} alt="" />
                                    </div>
                                    <div className="benefits-recruiters-1-image-text-box-title">
                                        <h3>{benifits.image2.title}</h3>
                                        <p>
                                            {benifits.image2.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="benefits-recruiters">
                            <div className="benefits-recruiters-1-image">
                                <div className="benefits-recruiters-1-image-text">
                                    <div className="benefits-recruiters-1-image-text-heading">
                                        <h3>{benifits.image2.title}</h3>
                                    </div>
                                    <div className="benefits-recruiters-1-image-text-box">
                                        <p>
                                            {benifits.image2.desc}
                                        </p>
                                    </div>
                                </div>
                                <img src={benifits.image2.image} alt="" />
                            </div>
                        </div>
                    )
            }


            {
                (benifits.image3.card) ? (

                    <div className="benefits-box" style={{ marginTop: '80px' }}>
                        <div className="benefits-box-1">

                            <div className="benefits-box-1-text-box">
                                <div className="benefits-box-1-text-box-image">
                                    <img src={benifits.image3.image} alt="" />
                                </div>
                                <div className="benefits-box-1-text-box-title">
                                    <h3>{benifits.image3.title}</h3>
                                    <p>
                                        {benifits.image3.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="benefits-box" style={{ marginTop: '-50px' }}>
                            <div className="benefits-box-1">
                                <div className="benefits-box-1-image">
                                    <img src={benifits.image3.image} alt="" />
                                </div>
                                <div className="benefits-box-1-text">
                                    <div className="benefits-box-1-text-heading">
                                        <h3>{benifits.image3.title}</h3>
                                    </div>
                                    <div className="benefits-box-1-text-box">
                                        <p>
                                            {benifits.image3.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
            <div className="benefits-recruiters" style={{ marginTop: (benifits.image2.card) ? '20px' : '-200px' }}>
                <div className="benefits-recruiters-1-image">
                    <div className="benefits-recruiters-1-image-text">
                        <div className="benefits-recruiters-1-image-text-heading">
                            <h3>{benifits.image4.title}</h3>
                        </div>
                        <div className="benefits-recruiters-1-image-text-box">
                            <p>
                                {benifits.image4.desc}
                            </p>
                        </div>
                    </div>
                    <img src={benifits.image4.image} alt="" />
                </div>
            </div>
            <div className="entry-box1"></div>
        </div>
    )
}

export default Benifits
