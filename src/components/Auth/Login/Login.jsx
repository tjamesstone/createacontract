import React, {Component} from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    handleChange = (e, key) => {
        this.setState({
            [key] : e.target.value
        })
    }

    

    login = async () => {
        const {email, password} = this.state
        const res = await axios.post('/auth/login', {email, password})
        if (res.data.email){
            this.props.handleUser(res.data.email, res.data.first_name, res.data.last_name)
            this.props.history.push('/')
        } else {
            alert(`${res.data.message}`)
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