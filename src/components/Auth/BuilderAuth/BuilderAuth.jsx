import React, {Component} from 'react'
import AuthHeader from '../../Header/AuthHeader/AuthHeader'
import './BuilderAuth.scss'
import Register from '../Register/Register'
import Login from '../Login/Login'
import {Switch, Route} from 'react-router-dom'


class BuilderAuth extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <div className="builderauth">
                <AuthHeader />
                <div className="logincontent">
                    
                   <Switch>
                       <Route  path='/builderauth/register' component={Register}/>
                       <Route  path='/builderauth/login' component={Login}/>
                   </Switch>
                </div>
            </div>
        )
    }
}

export default BuilderAuth