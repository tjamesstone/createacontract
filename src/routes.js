import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import MyDocs from './components/MyDocs/MyDocs'
import Builder from './components/Builder/Builder'
import BuilderAuth from './components/Auth/BuilderAuth/BuilderAuth'
import HomeAuth from './components/Auth/HomeAuth/HomeAuth'
import MyDocsAuth   from './components/Auth/MyDocsAuth/MyDocsAuth'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/mydocs' component={MyDocs}/>
        <Route path='/builder' component={Builder}/>
        <Route path='/builderauth' component={BuilderAuth}/>
        <Route path='/homeauth' component={HomeAuth}/>
        <Route path='/mydocsauth' component={MyDocsAuth}/>
    </Switch>
)