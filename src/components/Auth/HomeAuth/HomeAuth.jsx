import React, {Component} from 'react'
import AuthHeader from '../../Header/AuthHeader/AuthHeader'
import './HomeAuth.scss'

class HomeAuth extends Component{
    constructor(props){
        super(props)
        this.state={
            login: true
        }
    }

    render(){
        return(
            <div className="homeauth">
                <AuthHeader />
                <div className="logincontent">
                    
                   <div className="wholeregister">
                       
                    <div className="registerform">
                        <h3>REGISTER</h3>
                        <div className="firstname">
                            <p>first name:</p>
                            <input type="text"/>
                        </div>
                        <div className="lastname">
                            <p>last name:</p>
                            <input type="text"/>
                        </div>
                        <div className="email">
                            <p>email:</p>
                            <input type="text"/>
                        </div>
                        <div className="password">
                            <p>password:</p>
                            <input type="password"/>
                        </div>
                        <div className="reenterpassword">
                            <p>re-enter password:</p>
                            <input type="password"/>
                        </div>
                        <div className="registerbutton">
                            <button>Register</button>
                        </div>
                    </div>
                    <p className="firstline"
                       >Already have an account?</p>
                       <p className="switchtologin"
                       >Click here to login</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeAuth