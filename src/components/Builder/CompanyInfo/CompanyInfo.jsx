import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class CompanyInfo extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="companyinfo">
                Step One: Company Info
                <div className="form">
                    <h2>Who Are You?</h2>
                    <div className="legalname">
                        <p>Legal Name of Company:</p>
                        <input type="text"/>
                    </div>
                    <div className="termsofservice">
                        <p>Link to Terms of Service:</p>
                        <input type="text"/>
                    </div>
                    <div className="companylogo">
                        <p>Company Logo:</p>
                        <input type="text"/>
                    </div>
                    <div className="address">
                        <p>Address:</p>
                        <input type="text"/>
                    </div>
                    <div className="city">
                        <p>City:</p>
                        <input type="text"/>
                    </div>
                    <div className="state">
                        <p>State:</p>
                        <input type="text"/>
                    </div>
                    <div className="zip">
                        <p>Zip Code:</p>
                        <input type="text"/>
                    </div>
                    
                </div>
                <Link to='/builder/features'>
                <button>Next to Features</button>
                </Link>
            </div>
        )
    }
}

export default CompanyInfo