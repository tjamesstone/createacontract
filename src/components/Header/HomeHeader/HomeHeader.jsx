import React, {Component} from 'react'
import './HomeHeader.scss'
import greenScroll from '../../../Assets/greenscroll.png'
import greenPlus from '../../../Assets/greenplus.png'
import greenFiling from '../../../Assets/greenfiling.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {handleUser, clearState} from '../../../ducks/reducer'

class HomeHeader extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        axios.get('/api/auth/me').then( res => {
            if(!res.data){

            } else {
    
                this.getUserById()
                // console.log(res.data[0])
            }
        })
        
    }

    getUserById = async () => {
         await axios.get('/api/auth/me').then( res => {

        this.props.handleUser(res.data[0].email, res.data[0].first_name, res.data[0].last_name)
         })
         .catch( err => {
             console.log(`here's a problem ${err}`)
         })
        // console.log(res.data)
    }

    userLogout = async () => {
        await axios.delete('/auth/logout').then( res => {

        this.props.clearState()
        })
    }

    render(){
    //NEED TO BUILD A TERNARY BETWEEN .login OR .welcome DEPENDING ON IF THE USER IS LOGGED ON WILL DISPLAY ONE OR THE OTHER
        if(this.props.email){
            return(
                <div className="header">
                
                <div className="logoandtitle">
                    <img className="logo"src={greenScroll} alt="contract"/>
                    <p className='title'
                    >createacontract.com</p>
                </div>
                <div className="headerbuttons">
                    <Link to='/builderauth'>
                    <div className="new">
                        <img className="plusimg"src={greenPlus} alt="new"/>
                        <p>new</p>
                    </div>
                    </Link>
                    <Link to ='/mydocsauth'>
                    <div className="mydocs">
                        <img className='filingcabinet'src={greenFiling} alt="mydocs"/>
                        <p>my docs</p>
                    </div>
                    </Link>
                   
                    {/* <div className="login">
                        <Link to='/homeauth/login'>
                        <button className="loginbutton"
                        >login / register</button>
                        </Link>
                    </div> */}
                    <div className="welcome">
                    <p>logged in as: <br/>
                        {this.props.first_name} {this.props.last_name}</p>
                    </div>
                    <div className="login">
                        <button onClick={() => this.userLogout()} className='loginbutton'>Log out</button>
                    </div>
                </div>
            </div>
            )
        } else {
            return(
                <div className="header">
                    
                    <div className="logoandtitle">
                        <img className="logo"src={greenScroll} alt="contract"/>
                        <p className='title'
                        >createacontract.com</p>
                    </div>
                    <div className="headerbuttons">
                        <Link to='/builderauth'>
                        <div className="new">
                            <img className="plusimg"src={greenPlus} alt="new"/>
                            <p>new</p>
                        </div>
                        </Link>
                        <Link to ='/mydocsauth'>
                        <div className="mydocs">
                            <img className='filingcabinet'src={greenFiling} alt="mydocs"/>
                            <p>my docs</p>
                        </div>
                        </Link>
                       
                        <div className="login">
                            <Link to='/homeauth/login'>
                            <button className="loginbutton"
                            >login / register</button>
                            </Link>
                        </div>
                        {/* <div className="welcome">
                        <p>logged in as: <br/>
                            {this.props.first_name} {this.props.last_name}</p>
                        </div>
                        <div className="login">
                            <button onClick={() => this.userLogout()} className='loginbutton'>Log out</button>
                        </div> */}
                    </div>
                </div>
            )
        }
        
        
    }
}
const mapDispatchToProps = {handleUser, clearState}

const mapStateToProps = reduxState => {
    const {email, first_name, last_name} = reduxState
    return {email, first_name, last_name}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)