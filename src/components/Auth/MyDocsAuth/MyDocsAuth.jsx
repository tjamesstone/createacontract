import React, {Component} from 'react'
import AuthHeader from '../../Header/AuthHeader/AuthHeader'
import './MyDocsAuth.scss'
import Register from '../Register/Register'
import Login from '../Login/Login'
import {Switch, Route} from 'react-router-dom'


class MyDocsAuth extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <div className="mydocsauth">
                <AuthHeader />
                <div className="logincontent">
                    
                   <Switch>
                       <Route  path='/mydocsauth/register' component={Register}/>
                       <Route  path='/mydocsauth/login' component={Login}/>
                   </Switch>
                </div>
            </div>
        )
    }
}

export default MyDocsAuth