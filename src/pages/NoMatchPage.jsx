import React from 'react'
import { Header, Footer } from '../components/index'
const NoMatchPage = () => {
    return (
        <div>
            <Header headerLinks="links1" bgColor="#abc720" />
            <h3 className="d-flex justify-content-center mt-4">404 - Not found</h3>
            <Footer newPosition="absolute" />
        </div>
    )
}

export default NoMatchPage
