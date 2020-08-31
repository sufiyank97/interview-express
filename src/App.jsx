import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { HomePage, EmployersPage, RecruitersPage, JobSeekers, ResumePage, PrivateEvents, JobFair, VirtualEvent, JobFairCalendar } from './pages/index'

const HomePage = lazy(() => import('./pages/index').then((module) => ({ default: module.HomePage })))
const EmployersPage = lazy(() => import('./pages/index').then((module) => ({ default: module.EmployersPage })))
const RecruitersPage = lazy(() => import('./pages/index').then((module) => ({ default: module.RecruitersPage })))
const JobSeekers = lazy(() => import('./pages/index').then((module) => ({ default: module.JobSeekers })))
const ResumePage = lazy(() => import('./pages/index').then((module) => ({ default: module.ResumePage })))
const PrivateEvents = lazy(() => import('./pages/index').then((module) => ({ default: module.PrivateEvents })))
const JobFair = lazy(() => import('./pages/index').then((module) => ({ default: module.JobFair })))
const VirtualEvent = lazy(() => import('./pages/index').then((module) => ({ default: module.VirtualEvent })))
const JobFairCalendar = lazy(() => import('./pages/index').then((module) => ({ default: module.JobFairCalendar })))


// const { HomePage, EmployersPage, RecruitersPage, JobSeekers, ResumePage, PrivateEvents, JobFair, VirtualEvent, JobFairCalendar } = lazy(() => import('./pages/index'))
// Scss File
import './app.scss'
const App = () => {
    return (
        <Router>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/employers" component={EmployersPage} />
                    <Route path="/job-seekers" component={JobSeekers} />
                    <Route path="/private-events" component={PrivateEvents} />
                    <Route path="/job-fairs" component={JobFair} />
                    <Route path="/virtual-events" component={VirtualEvent} />
                    <Route path="/resume" component={ResumePage} />
                    <Route path="/recruiters" component={RecruitersPage} />
                    <Route path="/job-fair-calendar" component={JobFairCalendar} />
                </Suspense>
            </Switch>

        </Router>
    )
}

render(<App />, document.getElementById('root'))