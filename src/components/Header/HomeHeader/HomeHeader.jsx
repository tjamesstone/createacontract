import React, {Component} from 'react'
import './HomeHeader.scss'
import greenScroll from '../../../Assets/greenscroll.png'
import greenPlus from '../../../Assets/greenplus.png'
import greenFiling from '../../../Assets/greenfiling.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {handleUser, clearState} from '../../../ducks/reducer'
import {withRouter} from 'react-router-dom'

class HomeHeader extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        axios.get('/api/auth/me').then( res => {
            if(!res.data[0].email){
                
            } else {
    
                this.getUserById()
                // console.log(res.data[0])
            }
        })
        .catch( err => {
            // console.log(this.props)
            // console.log(this.props.history)
            if(this.props.location.pathname !== '/homeauth/login' && this.props.location.pathname !== '/homeauth/register'){
            this.props.history.push('/')}
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
        if(this.props.user.email){
            return(
                
                <div className="header">
                <Link to ='/'>
                    <div className="logoandtitle">
                        <img className="logo"src={greenScroll} alt="contract"/>
                        <div className="title">
                            <p className='fonttitle'
                            >Create A Contract</p>
                            <div className="commie">
                            <p className='com'
                            >.com</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </Link>
                <div className="headerbuttons">
                    <Link to='/builder/companyinfo'>
                    <div className="new">
                        <img className="plusimg"src={greenPlus} alt="new"/>
                        <p>new</p>
                    </div>
                    
                    </Link>
                    <Link to ='/mydocs'>
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
                    <div className="welcomeheader">
                    <p>logged in as: <br/>
                        {this.props.user.first_name} {this.props.user.last_name}</p>
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
                    <Link to ='/'>
                    <div className="logoandtitle">
                        <img className="logo"src={greenScroll} alt="contract"/>
                        <div className="title">
                            <p className='fonttitle'
                            >Create A Contract</p>
                            <div className="commie">
                            <p className='com'
                            >.com</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    </Link>
                    <div className="headerbuttons">
                        {/* <Link to='/builderauth'>
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
                        </Link> */}
                       
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
  
    return reduxState
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeHeader))