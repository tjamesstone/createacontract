import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import MyDocs from './components/MyDocs/MyDocs'
import Builder from './components/Builder/Builder'
import HomeAuth from './components/Auth/HomeAuth/HomeAuth'
import IndividualContract from './components/IndividualContract/IndividualContract'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/mydocs' component={MyDocs}/>
        <Route path='/builder' component={Builder}/>
        <Route path='/homeauth' component={HomeAuth}/>
        <Route path='/doc/:docid' component={IndividualContract}/>
    </Switch>
)