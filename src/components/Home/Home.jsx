import './Home.scss'
import React, {Component} from 'react'
import AuthHeader from '../Header/AuthHeader/AuthHeader'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                <AuthHeader />
                Home
                
            </div>
        )
    }
}
