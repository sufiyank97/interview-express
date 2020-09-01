import React, { lazy, Suspense, Fragment } from 'react'
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

const NoMatchPage = lazy(() => import('./pages/index').then(module => ({ default: module.NoMatchPage })))

// Scss File
import './app.scss'
const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                    <Route component={NoMatchPage} />
                </Switch>
            </Router>
        </Suspense>
    )
}

render(<App />, document.getElementById('root'))