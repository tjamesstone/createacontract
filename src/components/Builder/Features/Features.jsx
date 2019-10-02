import React, { Component } from 'react'
import Feature from './Feature/Feature'
import blackPlus from '../../../Assets/blackplus.png'
import './Features.scss'
import { Link } from 'react-router-dom'

class Features extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="features">
                <div className="whoareyouform">

                    <Feature/>
                    
               
                    <div className="addnew">
                        <img src={blackPlus} alt="plus" />
                        <p>Add new feature</p>
                    </div>
                    
                </div>
                <div className="thebuttons">
                        <Link to='/builder/companyinfo'><button className='nextbutton' >Back to Company Info</button></Link>
                        <Link to='/builder/contractterms'><button className='nextbutton'>Next to Contract Terms</button></Link>
                    </div>
            </div>
        )
    }
}

export default Features