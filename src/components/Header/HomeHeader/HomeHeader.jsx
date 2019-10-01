import React, {Component} from 'react'
import './HomeHeader.scss'
import contractLogo from '../../Assets/2.png'

class HomeHeader extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="homeheader">
                
                <div className="logoandtitle">
                    <img className="logo "src={contractLogo} alt="contract"/>
                </div>
                <div className="headerbuttons">
                    <div className="new">
                        <img src="" alt="new"/>
                        <p>new</p>
                    </div>
                    <div className="mydocs">
                        <img src="" alt="mydocs"/>
                        <p>my docs</p>
                    </div>

                    <button>register</button>
                    <button>login</button>
                </div>
            </div>
        )
    }
}

export default HomeHeader