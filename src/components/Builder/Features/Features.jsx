import React, { Component } from 'react'
// import Feature from './Feature/Feature'
// import blackPlus from '../../../Assets/blackplus.png'
import './Features.scss'
import { Link } from 'react-router-dom'

class Features extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            price: 0
        }
    }

    render() {
        return (
            <div className="features">
                <div className="info">
                    <div className="featuretitle">
                        <p>Title of Feature/Service:</p>
                        <input type="text"/>
                    </div>
                    <div className="description">
                        <p>Description:</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="price">
                        <p>Cost per Month:</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className="thebuttons">
                        <Link to='/builder/clientinfo'><button className='nextbutton' >Back to Client Info</button></Link>
                        <Link to='/builder/contractterms'><button className='nextbutton'>Next to Contract Terms</button></Link>
                    </div>
            </div>
        )
    }
}

export default Features