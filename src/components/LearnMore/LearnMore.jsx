import React, {Component} from 'react'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import {Link} from 'react-router-dom'
import './LearnMore.scss'

class LearnMore extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <div className="learnmorecomponent">
                <HomeHeader />
                <div className="learnmorecontent">
                    <h1>How it Works</h1>
                    <i class="fas fa-cogs"></i>
                    <div className="thetexthaha">
                        <p>It's pretty simple. We'll ask you for information about your company, your client, the service you offer, and then you'll pick what kinds of terms you'd like to include in your contract. With all that info we'll put together a contract template you can then purchase and save. Once you've saved it, you'll be able to access it under the "My Docs" tab. Within that tab you'll be able to download the contract as a PDF. Get started by <Link to='homeauth/register'> <p className="thelastlinelink" >creating an account.</p> </Link>
</p>
                        <div className="lastline">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LearnMore 