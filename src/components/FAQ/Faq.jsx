import React from 'react'


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
        </div>
    )
}

export default Faq
