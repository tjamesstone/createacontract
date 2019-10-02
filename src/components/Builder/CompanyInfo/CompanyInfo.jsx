import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './CompanyInfo.scss'

class CompanyInfo extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="companyinfo">
                <div className="whoareyouform">
                    <h2 className='whotitle'
                    >Who Are You?</h2>
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
                <div className="nothing">
                    <p></p>
                
                <Link to='/builder/features'>
                <button className='nextbutton'
                >Next to Features</button>
                </Link>
                </div>
            </div>
        )
    }
}

export default CompanyInfo