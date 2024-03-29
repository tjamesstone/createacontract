import React, {Component} from 'react'
import './Register.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {handleUser} from '../../../ducks/reducer'

import swal from 'sweetalert2'

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            reenterPassword: ''
        }
    }
    handleChange = (e, key) => {
        this.setState({
            [key] : e.target.value
        })
    }

    register = async () => {
        if(this.state.reenterPassword === this.state.password){
        const {first_name, last_name, email, password} = this.state
        const res = await axios.post('/auth/register', {first_name, last_name, email, password})
        if(res.data.email){
            console.log(res.data.email)
            this.props.handleUser(res.data.id, res.data.email, res.data.first_name, res.data.last_name)
            this.props.history.push('/')
        } else {
            swal.fire({type: 'error', title: 'Oops...', text:`${res.data.message}`})
        }
    } else{
        swal.fire({type: 'error', title: 'Oops...', text:'Make sure your passwords match'})
    }
    }

  

    render(){
        return(
            
                    
                   <div className="wholeregister">
                       
                    <div className="registerform">
                        <h3>REGISTER</h3>
                        <div className="firstname">
                            <p>first name:</p>
                            <input name='first_name' placeholder='First Name' onChange={e => this.handleChange(e, 'first_name')} value={this.state.first_name} type="text"/>
                        </div>
                        <div className="lastname">
                            <p>last name:</p>
                            <input name='last_name' placeholder='Last Name' onChange={e => this.handleChange(e, 'last_name')} value={this.state.last_name} type="text"/>
                        </div>
                        <div className="email">
                            <p>email:</p>
                            <input name='email' placeholder='Email' onChange={e => this.handleChange(e, 'email')} value={this.state.email} type="text"/>
                        </div>
                        
                        <div className="password">
                            <p>password:</p>
                            <input name='password' placeholder='Password' onChange={e => this.handleChange(e, 'password')} value={this.state.password} type="password"/>
                        </div>
                        <div className="reenterpassword">
                            <p>re-enter password:</p>
                            <input name='reenterPassword' placeholder='Re-Enter Password' onChange={e => this.handleChange(e, 'reenterPassword')} value={this.state.reenterPassword} type="password"/>
                        </div>
                        <div className="registerbutton">
                            <button className='theotherbutton' onClick={() => this.register()} >Register</button>
                        </div>
                    </div>
                    <p className="firstline"
                       >Already have an account?</p>
                       <Link to='login'>
                       <p className="switchtologin"
                       >Click here to login</p>
                       </Link>
                    </div>
             
        )
    }
}

export default connect(null, {handleUser})(Register)