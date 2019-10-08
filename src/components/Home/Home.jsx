import './Home.scss'
import React, { Component } from 'react'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="home">
                <HomeHeader />
                <div className="content">
                    <div className="welcome">
                        <div className="welcome1">


                            <h2>Welcome</h2>
                            <h3 className='subtitle'>Building a SAAS contract has never been easier</h3>
                            <i className="fas fa-door-open"></i>
                            <p>Building simple, elegant contracts is what we do. Forget the cheap template you found on the internet, create a contract that perfectly suits your needs. Create an account now. </p>
                            <Link to='/homeauth/register'><button>Get Started ></button></Link>
                        </div>
                    </div>
                    <div className="howitworks">
                        <div className="howitworks1">
                            <h2>How it Works</h2>
                            <h3 className='subtitle'>You tell us what you want, and we'll build it.</h3>
                            <i className="fas fa-cogs"></i>
                            <p>We'll have you fill out a series of forms that provide us with the data we need to build a solid, legally-binding contract. And don't worry, all your data is encrypted.</p>
                            <button>Learn More ></button>
                        </div>
                    </div>
                    <div className="learnmore">
                        <div className="learnmore1">
                            <h2>Get In Touch</h2>
                            <h3 className='subtitle'>Questions? Comments? Suggestions?</h3>
                            <i className="far fa-lightbulb"></i>
                            <p>We're always looking to improve our product and help our customers. If you're looking for help with a specific part of our product, you're still in the right place. Let's talk!</p>
                            <a href="mailto:hello@createacontract.com"><button  >Reach Us ></button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
