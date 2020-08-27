import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, EmployersPage, RecruitersPage, JobSeekers, ResumePage, PrivateEvents, JobFair, VirtualEvent } from './pages/index'

// Scss File
import './app.scss'
const App = () => {
    return (
        <Router basename='/'>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/employers" component={EmployersPage} />
            <Route exact path="/job-seekers" component={JobSeekers} />
            <Route exact path="/private-events" component={PrivateEvents} />
            <Route exact path="/job-fairs" component={JobFair} />
            <Route exact path="/virtual-events" component={VirtualEvent} />
            <Route exact path="/resume" component={ResumePage} />
        </Router>
    )
}

render(<App />, document.getElementById('root'))