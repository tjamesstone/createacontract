import React, {Component} from 'react'
import greenScroll from '../../../Assets/greenscroll.png'
// import greenPlus from '../../../Assets/greenplus.png'
// import greenFiling from '../../../Assets/greenfiling.png'
import './AuthHeader.scss'
import {Link} from 'react-router-dom'


class AuthHeader extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="header">
                <Link to='/'>
                <div className="logoandtitle">
                    <img className="logo"src={greenScroll} alt="contract"/>
                    <p className='title'
                    >createacontract.com</p>
                </div>
                </Link>
                <div className="headerbuttons">
                    {/* <div className="new">
                        <img className="plusimg"src={greenPlus} alt="new"/>
                        <p>new</p>
                    </div>
                    <div className="mydocs">
                        <img className='filingcabinet'src={greenFiling} alt="mydocs"/>
                        <p>my docs</p>
                    </div> */}
                    {/* <div className="login">
                        <button className="loginbutton"
                        >login / register</button>
                    </div> */}
                    {/* <div className="welcome">
                        <p>logged in as: <br/>
                        test</p>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default AuthHeader 