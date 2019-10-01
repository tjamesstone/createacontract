import React, {Component} from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <div className="wholelogin">
                       
            <div className="loginform">
                <h3>LOGIN</h3>
                
                <div className="email">
                    <p>email:</p>
                    <input type="text"/>
                </div>
                <div className="password">
                    <p>password:</p>
                    <input type="password"/>
                </div>
                
                <div className="registerbutton">
                    <button>Login</button>
                </div>
            </div>
            <p className="firstline"
               >Haven't set up an account yet?</p>
               <Link to='register'>
               <p className="switchtologin"
               >Click here to register</p>
               </Link>
            </div>
        )
    }
}

export default Login