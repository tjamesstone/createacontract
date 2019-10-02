import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import MyDocs from './components/MyDocs/MyDocs'
import Builder from './components/Builder/Builder'
import HomeAuth from './components/Auth/HomeAuth/HomeAuth'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/mydocs' component={MyDocs}/>
        <Route path='/builder' component={Builder}/>
        <Route path='/homeauth' component={HomeAuth}/>
    </Switch>
)