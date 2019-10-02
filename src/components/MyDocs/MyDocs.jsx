import React, {Component} from 'react'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import './MyDocs.scss'

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
                    My docs
                    </div>
                
                </div>
                
            </div>
        )
    }
}
export default MyDocs