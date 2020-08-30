import React, { useState, Fragment } from 'react'


const faqValues = [
    {
        ques: 'What is a good question to put here?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet nihil tempora officia provident laudantium fuga quibusdam soluta labore, eligendi repellat, aspernatur vero! Enim sint earum eos in ut distinctio!`
    },
    {
        ques: 'What is a good question to put here?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet nihil tempora officia provident laudantium fuga quibusdam soluta labore, eligendi repellat, aspernatur vero! Enim sint earum eos in ut distinctio!`
    },
    {
        ques: 'What is a good question to put here?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet nihil tempora officia provident laudantium fuga quibusdam soluta labore, eligendi repellat, aspernatur vero! Enim sint earum eos in ut distinctio!`
    },
    {
        ques: 'What is a good question to put here?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet nihil tempora officia provident laudantium fuga quibusdam soluta labore, eligendi repellat, aspernatur vero! Enim sint earum eos in ut distinctio!`
    }
]
const Faq = () => {
    const [state, setState] = useState({ id: null, active: false })
    const activeHandler = (id) => {
        setState({
            ...state,
            active: !state.active,
            id
        })
    }
    return (
        <div className="faq">
            <h1>FAQ:</h1>
            {
                faqValues.map((faqValue, i) => (
                    <div className="faq-card" key={i}>
                        <h1>{faqValue.ques}</h1>
                        <p>{faqValue.answer}</p>
                    </div>
                ))
            }

            {
                faqValues.map((faqValue, i) => (
                    <div className="faq-mobile-card" onClick={() => activeHandler(i)} key={i}>
                        <div className="faq-mobile-card-ques">
                            <h1>{faqValue.ques}</h1>
                            {
                                (state.id === i) ? (state.active) ? (<span>-</span>) : (<span>+</span>) : (<span>+</span>)
                            }

                        </div>
                        {
                            (state.id === i) ? (state.active) ? (
                                <div className="faq-mobile-card-ans">
                                    <p>{faqValue.answer}</p>
                                </div>
                            ) : <Fragment /> : null
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default Faq
