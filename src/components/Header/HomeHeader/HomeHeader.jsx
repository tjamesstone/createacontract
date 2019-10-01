import React, {Component} from 'react'
import './HomeHeader.scss'
import greenScroll from '../../../Assets/greenscroll.png'
import greenPlus from '../../../Assets/greenplus.png'
import greenFiling from '../../../Assets/greenfiling.png'
import {Link} from 'react-router-dom'

class HomeHeader extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
    //NEED TO BUILD A TERNARY BETWEEN .login OR .welcome DEPENDING ON IF THE USER IS LOGGED ON WILL DISPLAY ONE OR THE OTHER

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
                        <Link to='/homeauth'>
                        <button className="loginbutton"
                        >login / register</button>
                        </Link>
                    </div>
                    <div className="welcome">
                    <p>logged in as: <br/>
                        test</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader