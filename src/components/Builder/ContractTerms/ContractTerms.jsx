import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './ContractTerms.scss'

class ContractTerms extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="contractterms">
                Step Three: Contract Terms
                <div className="whoareyouform">
                    <div className="effectivedate">
                        <p>Effective Date:</p>
                        <input type="date"/>
                    </div>
                    <div className="contractlength">
                        <p>Contract Length:</p>
                        <input type="number"/>
                        <p>months</p>
                    </div>
                    <div className="autorenew">
                        <p>Auto Renew?</p>
                        <select name="autorenew" id="">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="paymentfrequency">
                        <p>Payment Frequency:</p>
                        <select name="payment" id="">
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="semiannually">Semi-Annually</option>
                            <option value="annually">Annually</option>
                        </select>
                    </div>
                    <div className="collectionsprotection">
                        <p>Collections Protection:</p>
                        <select name="collections" id="">
                            <option value="none">None</option>
                            <option value="standard">Standard</option>
                            <option value="full">Full</option>
                        </select>
                    </div>
                    <div className="chargeback">
                        <p>Chargeback Protection</p>
                        <select name="chargebackprotection" id="">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select> 
                        
                    </div>
                    {/* <div className="other">
                        <p>Other:</p>
                        <p>This would be any other term you would like to include</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div> */}
                </div>
                <div className="thebuttons">
                    <Link to='/builder/features'><button className='nextbutton' >Back to Features</button></Link>
                    
                    <Link to='/builder/contractpreview'> <button className='nextbutton'>Finish</button> </Link>
                </div>
            </div>
        )
    }
}

export default ContractTerms