import React, { Component } from 'react'
import HomeHeader from '../../Header/HomeHeader/HomeHeader'
import './HomeAuth.scss'
import Register from '../Register/Register'
import Login from '../Login/Login'
// import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
// import {handleUser, clearState} from '../../../ducks/reducer'
// import axios from 'axios'


class HomeAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
    }

    // getUserByEmail = async () => {
    //     let
    // }



    render() {
        return (
            <div className="homeauth">
                <HomeHeader />

                <div className="logincontent">
                    {/* <StripeProvider apiKey="pk_test_H21FPRzyUnnPvwBceOQ84lnq00iyS0A5sp">
                        <div className="example">
                            <h1>React Stripe Elements Example</h1>
                            <Elements>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </StripeProvider> */}
                    <Switch>
                        <Route path='/homeauth/register' component={Register} />
                        <Route path='/homeauth/login' component={Login} />
                    </Switch>

                </div>
            </div>
        )
    }
}

export default HomeAuth