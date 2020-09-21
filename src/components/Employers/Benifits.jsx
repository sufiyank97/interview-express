import React, { Fragment } from 'react'



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
                            <p className="global-para">
                                {benifits.image1.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="entry-box"></div>

            <div className="benefits-res-box">
                <h1>{benifits.name}:</h1>
                <div className="entry-box-res"></div>
                {
                    (Array.isArray(benifits.allImages)) ?
                        benifits.allImages.map((allImage, i, array) => (
                            <Fragment key={i}>
                                {
                                    (allImage.card) ? (
                                        <div className="benefits-res-box-card">
                                            {
                                                (allImage.cImage) ? (
                                                    <div className="benefits-res-box-card-comming">
                                                        <img src={allImage.cImage} alt="" />
                                                    </div>
                                                ) : <Fragment />
                                            }
                                            <div className="benefits-res-box-card-image">
                                                <img src={allImage.image} alt="" />
                                            </div>
                                            <div className="benefits-res-box-card-heading">
                                                <h3>{allImage.title}</h3>
                                            </div>
                                            <div className="benefits-res-box-card-para">
                                                <p className="global-para">
                                                    {allImage.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (

                                            <div className="benefits-res-box-1">
                                                <div className="benefits-res-box-1-image">
                                                    {
                                                        (i === 0) ? (
                                                            <img src={allImage.image} alt="" style={{ marginTop: '-8rem' }} />
                                                        ) : (
                                                                <img src={allImage.image} alt="" />
                                                            )
                                                    }
                                                </div>
                                                {
                                                    (i === 3) ? (
                                                        <div className="entry-box1-res"></div>
                                                    ) : null
                                                }
                                                <div className="benefits-res-box-1-text">
                                                    <div className="benefits-res-box-1-text-heading">
                                                        <h3>{allImage.title}</h3>
                                                    </div>
                                                    <div className="benefits-res-box-1-text-para">
                                                        {
                                                            Array.isArray(allImage.desc) ? (
                                                                <ul className="benefits-list">
                                                                    {
                                                                        allImage.desc.map((des, i) => (
                                                                            <li key={i}>
                                                                                {des.name}
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            ) : (
                                                                    <p className="global-para">
                                                                        {allImage.desc}
                                                                    </p>
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                }
                            </Fragment>
                        )) : null
                }
            </div>


            {
                (benifits.image2.card) ? (
                    <div className="benefits-recruiters">
                        <div className="benefits-recruiters-1-image">
                            <div className="benefits-recruiters-1-image-text">
                                <div className="benefits-recruiters-1-image-text-box" style={{ borderRadius: '1rem' }}>
                                    <div className="benefits-recruiters-1-image-text-box-img">
                                        <div className="benefits-recruiters-1-image-text-box-img-image">
                                            <img src={benifits.image2.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="benefits-recruiters-1-image-text-box-title">
                                        <h4>{benifits.image2.title}</h4>
                                        <p className="global-para">
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
                                        <p className="global-para">
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
                                <div className="benefits-box-1-text-box-img">
                                    <div className="benefits-box-1-text-box-img-image">
                                        <img src={benifits.image3.image} alt="" />
                                    </div>
                                </div>
                                <div className="benefits-box-1-text-box-title">
                                    <h4>{benifits.image3.title}</h4>
                                    <p className="global-para">
                                        {benifits.image3.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="benefits-box" style={{ marginTop: '-100px' }}>
                            <div className="benefits-box-1">
                                <div className="benefits-box-1-image">
                                    <img src={benifits.image3.image} alt="" />
                                </div>
                                <div className="benefits-box-1-text">
                                    <div className="benefits-box-1-text-heading">
                                        <h3>{benifits.image3.title}</h3>
                                    </div>
                                    <div className="benefits-box-1-text-box">
                                        <p className="global-para">
                                            {benifits.image3.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
            <div className="benefits-recruiters" style={{ marginTop: (benifits.image2.card) ? '80px' : '-150px' }}>
                <div className="benefits-recruiters-1-image">
                    <div className="benefits-recruiters-1-image-text">
                        <div className="benefits-recruiters-1-image-text-heading">
                            <h3>{benifits.image4.title}</h3>
                        </div>
                        <div className="benefits-recruiters-1-image-text-box">
                            {
                                Array.isArray(benifits.image4.desc) ? (
                                    <ul className="benefits-list">
                                        {
                                            benifits.image4.desc.map((des, i) => (
                                                <li key={i}>
                                                    {des.name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ) : (
                                        <p className="global-para">
                                            {benifits.image4.desc}
                                        </p>
                                    )
                            }
                        </div>
                    </div>
                    <img src={benifits.image4.image} alt="" />
                </div>
            </div>
            {
                (benifits.image5) ? <Fragment /> : <div className="entry-box1"></div>
            }


            {
                (benifits.image5) ? (
                    <div className="benefits-box" style={{ marginTop: '-11rem' }}>
                        <div className="benefits-box-1">

                            <div className="benefits-box-1-text-box">
                                <div className="benefits-box-1-text-box-img">
                                    <div className="benefits-box-1-text-box-img-image">
                                        <img src={benifits.image5.image} alt="" />
                                    </div>
                                </div>
                                <div className="benefits-box-1-text-box-title">
                                    <h4>{benifits.image5.title}</h4>
                                    <p className="global-para">
                                        {benifits.image5.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <Fragment />
            }


            {
                (benifits.image6) ? (
                    <>
                        <div className="benefits-recruiters" style={{ marginTop: '4rem' }}>
                            <div className="benefits-recruiters-1-image">
                                <div className="benefits-recruiters-1-image-text">
                                    <div className="benefits-recruiters-1-image-text-box" style={{ borderRadius: '1rem', flexDirection: 'column' }}>
                                        <div className="benefits-res-box-card-comming" style={{ marginTop: '-1.5rem' }}>
                                            <img src={benifits.image6.cImage} alt="" />
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div className="benefits-recruiters-1-image-text-box-img">
                                                <div className="benefits-recruiters-1-image-text-box-img-image">
                                                    <img src={benifits.image6.image} alt="" />
                                                </div>
                                            </div>
                                            <div className="benefits-recruiters-1-image-text-box-title">
                                                <h4>{benifits.image6.title}</h4>
                                                <p className="global-para">
                                                    {benifits.image6.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="entry-box1"></div>
                    </>
                ) : <Fragment />
            }
        </div >
    )
}

export default Benifits
