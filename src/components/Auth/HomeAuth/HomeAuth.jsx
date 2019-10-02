import React, {Component} from 'react'
import AuthHeader from '../../Header/AuthHeader/AuthHeader'
import './HomeAuth.scss'
import Register from '../Register/Register'
import Login from '../Login/Login'
import {Switch, Route} from 'react-router-dom'


class HomeAuth extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
    }



    render(){
        return(
            <div className="homeauth">
                <AuthHeader />
                <div className="logincontent">
                    
                   <Switch>
                       <Route  path='/homeauth/register' component={Register}/>
                       <Route  path='/homeauth/login' component={Login}/>
                   </Switch>
                </div>
            </div>
        )
    }
}

export default HomeAuth