import './Home.scss'
import React, {Component} from 'react'
import HomeHeader from '../Header/HomeHeader/HomeHeader'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                <HomeHeader />
                Home
                
            </div>
        )
    }
}
