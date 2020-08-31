import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, EmployersPage, RecruitersPage, JobSeekers, ResumePage, PrivateEvents, JobFair, VirtualEvent, JobFairCalendar } from './pages/index'

// Scss File
import './app.scss'
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/employers" component={EmployersPage} />
                <Route path="/job-seekers" component={JobSeekers} />
                <Route path="/private-events" component={PrivateEvents} />
                <Route path="/job-fairs" component={JobFair} />
                <Route path="/virtual-events" component={VirtualEvent} />
                <Route path="/resume" component={ResumePage} />
                <Route path="/recruiters" component={RecruitersPage} />
                <Route path="/job-fair-calendar" component={JobFairCalendar} />
            </Switch>

        </Router>
    )
}

render(<App />, document.getElementById('root'))