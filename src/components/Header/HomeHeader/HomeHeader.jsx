import React, {Component} from 'react'
import './HomeHeader.scss'
import greenScroll from '../../../Assets/greenscroll.png'
import greenPlus from '../../../Assets/greenplus.png'
import greenFiling from '../../../Assets/greenfiling.png'

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
                    <img className="logo "src={greenScroll} alt="contract"/>
                </div>
                <div className="headerbuttons">
                    <div className="new">
                        <img src={greenPlus} alt="new"/>
                        <p>new</p>
                    </div>
                    <div className="mydocs">
                        <img className='filingcabinet'src={greenFiling} alt="mydocs"/>
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