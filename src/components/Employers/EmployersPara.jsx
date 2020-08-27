import React, { Fragment } from 'react'

const flatDesign1Img = require('../../assests/images/employers/flat-design1.png')
const flatDesign2Img = require('../../assests/images/employers/flat-design2.png')
const flatDesign3Img = require('../../assests/images/employers/flat-design3.png')
const EmployersPara = (props) => {
    console.log(props);

    const { employees, sms } = { ...props }
    console.log(employees);

    return (
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
                <img src={employees.image1} className="employers-para-image-1" alt="" />
            </div>
        </div>
    )
}

export default EmployersPara
