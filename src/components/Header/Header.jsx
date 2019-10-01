import React, {Component} from 'react'
import './Header.scss'
import contractLogo from '../../Assets/2.png'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="header">
                Header
                <div className="logoandtitle">
                    <img className="logo "src={contractLogo} alt="contract"/>
                </div>
            </div>
        )
    }
}

export default Header