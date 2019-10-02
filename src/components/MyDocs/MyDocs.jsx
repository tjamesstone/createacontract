import React, {Component} from 'react'
import MyDocsHeader from '../Header/MyDocsHeader/MyDocsHeader'
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
                <MyDocsHeader/>
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