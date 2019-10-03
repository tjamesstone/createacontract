import React, {Component} from 'react'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import './MyDocs.scss'
import blackPlus from '../../Assets/blackplus.png'
import {Link} from 'react-router-dom'

class MyDocs extends Component{
    constructor(props){
    super(props)
    this.state = {

    }
    }

    render(){
        return(
            <div className="mydocscomponent">
                <HomeHeader/>
                <div className="mydocsactual">
                    <div className="therealdocs">
                        <div className="newdoc">
                            New:
                            <Link to='/builder/companyinfo'>
                            <div className="newdoccontainer">
                                <img src={blackPlus} alt=""/>
                            </div>
                            </Link>
                        </div>
                        <div className="listofdocs">
                            <p>My Docs:</p>
                        </div>
                    
                    </div>
                
                </div>
                
            </div>
        )
    }
}
export default MyDocs