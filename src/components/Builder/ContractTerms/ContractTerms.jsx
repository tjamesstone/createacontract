import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './ContractTerms.scss'
// import axios from 'axios'
import {handleTermsInfo} from '../../../ducks/termsReducer'
import {connect} from 'react-redux'

class ContractTerms extends Component{
    constructor(props){
        super(props)
        this.state = {
            effective_date: '',
            contract_length: null,
            autorenew: 'yes',
            payment_frequency: 'monthly',
            collections_protection: 'basic',
            chargeback_protection: 'yes'
        }
    }
    handleChange = (e, key) => {
        this.setState({
            [key] : e.target.value
        })
        // console.log(this.state)
    }
    addTermsInfo = async () => {
        const { effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection} = this.state
        // await axios.post('/api/terms/new', {effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection }).then(res => {
            // console.log(res.data)
            
            this.props.handleTermsInfo(effective_date, contract_length, autorenew, payment_frequency, collections_protection,chargeback_protection)
            this.props.history.push('/builder/contractpreview')
        // }
        // )
    }

    render(){
        
        return(
            <div className="contractterms">
                
                <div className="whoareyouform">
                <h2 className='whotitle'
                    >What Are The Terms?</h2>
                    <div className="effectivedate">
                        <p>Effective Date:</p>
                        <input className='theshininginput' name='effective_date' placeholder='Effective Date' onChange={e => this.handleChange(e, 'effective_date')} value={this.state.effective_date} type="date"/>
                    </div>
                    <div className="contractlength">
                        <p>Contract Length (in months):</p>
                        <input name='contract_length' placeholder='# of months' onChange={e => this.handleChange(e, 'contract_length')} value={this.state.contract_length} type="number"/>
                        
                    </div>
                    <div className="autorenew">
                        <p>Auto Renew?</p>
                        <select name="autorenew" id="" onChange={e => this.handleChange(e, 'autorenew')} value={this.state.autorenew}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="paymentfrequency">
                        <p>Payment Frequency:</p>
                        <select name="payment_frequency" id="" onChange={e => this.handleChange(e, 'payment_frequency')} value={this.state.payment_frequency} >
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="semiannually">Semi-Annually</option>
                            <option value="annually">Annually</option>
                        </select>
                    </div>
                    <div className="collectionsprotection">
                        <p>Collections Protection:</p>
                        <select name="collections_protection" id="" onChange={e => this.handleChange(e, 'collections_protection')} value={this.state.collections_protection} >
                            <option value="basic">Basic</option>
                            <option value="full">Full</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    <div className="chargeback">
                        <p>Chargeback Protection</p>
                        <select name="chargeback_protection" id="" onChange={e => this.handleChange(e, 'chargeback_protection')} value={this.state.chargeback_protection}>
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
                    
                     <button onClick={() => this.addTermsInfo()} className='nextbutton'>Finish</button> 
                </div>
            </div>
        )
    }
}

export default connect(null, {handleTermsInfo}) (ContractTerms)