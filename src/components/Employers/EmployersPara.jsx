import React, { Fragment } from 'react'

const EmployersPara = (props) => {

    const { employees, sms } = { ...props }
    return (
        <>
            <div className="employers-para">
                <div className="employers-para-text">
                    <h1>{employees.name}</h1>
                    <div className="employers-para-text-quote">
                        {
                            employees.quote.map((ele, i) => (
                                <Fragment key={i}>
                                    <h1 className="employers-para-text-quote-1">{ele.first}</h1>
                                    <h1 className="employers-para-text-quote-2">{ele.second}</h1>
                                </Fragment>
                            ))
                        }
                    </div>
                    {
                        sms ? (
                            <div className="employers-para-text-sms">
                                <h1>Get a SMS download link...</h1>
                                <input type="text" placeholder="Enter phone Number" />
                                <button>Send</button>
                            </div>
                        ) : <Fragment />
                    }
                </div>
                <div className="employers-para-image">
                    <img src={employees.image3} className="employers-para-image-3" alt="" />
                    <img src={employees.image2} className="employers-para-image-2" alt="" />
                    {
                        (employees.resImage1 && !employees.resImage2) ? (
                            <img src={employees.image1} className="employers-para-image-11" alt="" />
                        ) : (
                                <img src={employees.image1} className="employers-para-image-1" alt="" />
                            )
                    }
                </div>
            </div>


            <div className="employers-mobile">
                <div className="employers-mobile-image">
                    <div className="image-header"></div>
                    <div className="employers-mobile-images container">
                        {
                            (employees.image2 && employees.image1 && employees.image3) ? (
                                <>
                                    <img src={employees.resImage3} className="employers-mobile-images-3" alt="" />
                                    <img src={employees.resImage2} className="employers-mobile-images-2" alt="" />
                                    <img src={employees.resImage1} className="employers-mobile-images-1" alt="" />
                                </>
                            ) : (employees.image2 && employees.image1) ? (
                                <>
                                    <img src={employees.resImage2} className="employers-mobile-images-22" alt="" />
                                    <img src={employees.resImage1} className="employers-mobile-images-12" alt="" />
                                </>
                            ) : (employees.resImage1) ? (
                                <img src={employees.image1} className="employers-para-image-11" alt="" />
                            ) : (
                                            <img src={employees.image1} className="employers-para-image-1" alt="" />
                                        )
                        }
                    </div>
                </div>
                <div className="employers-para-text">
                    <h1>{employees.name}</h1>
                    <div className="employers-para-text-quote">
                        {
                            employees.quote.map((ele, i) => (
                                <Fragment key={i}>
                                    <h1 className="employers-para-text-quote-1">{ele.first}</h1>
                                    <h1 className="employers-para-text-quote-2">{ele.second}</h1>
                                </Fragment>
                            ))
                        }

                    </div>
                    {
                        sms ? (
                            <div className="employers-para-text-sms">
                                <h1>Get a SMS download link...</h1>
                                <input type="text" placeholder="Enter phone Number" />
                                <button>Send</button>
                            </div>
                        ) : <Fragment />
                    }
                </div>
            </div>
        </>
    )
}

export default EmployersPara
