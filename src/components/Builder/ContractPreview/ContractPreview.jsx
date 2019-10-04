import React, { Component } from 'react'
import './ContractPreview.scss'
// import {Document, Page} from 'react-pdf'
import { connect } from 'react-redux'
import axios from 'axios'

class ContractPreview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contract_name: ''
        }
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    saveCompanyInfo = async () => {
        // console.log(this.props)
        const { contract_name } = this.state
        const { legal_name, terms_of_service, logo, address, city, state, zipcode } = this.props.company
        const { client_name, signatory } = this.props.client
        const { title, description, price } = this.props.features
        const { effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection } = this.props.terms
        // console.log(legal_name)
        const companyRes = await axios.post('/api/company/new', { legal_name, terms_of_service, logo, address, city, state, zipcode })
        const clientRes = await axios.post('/api/client/new', { client_name, signatory })
        const featuresRes = await axios.post('/api/features/new', { title, description, price })
        const termsRes = await axios.post('/api/terms/new', { effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection })

        let company_id = companyRes.data.id
        let client_id = clientRes.data.id
        let features_id = featuresRes.data.id
        let terms_id = termsRes.data.id

        await axios.post('/api/contracts/new', { contract_name, company_id, client_id, features_id, terms_id })
    }



    render() {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        return (
            <div className="contractpreview">
                <div className="contractname">
                    <p>Name this contract:</p>
                    <input name='contract_name' placeholder='Contract Name' onChange={e => this.handleChange(e, 'contract_name')} value={this.state.contract_name} type="text" />
                </div>
                <div className="actualcontract">
                    <header>
                        <div className="logoandaddress">
                            <img className='thelogoimage' src={this.props.company.logo} alt="logo" />
                            <div className="address">
                                <p>{this.props.company.legal_name}</p>
                                <p>{this.props.company.address}</p>
                                <p>{this.props.company.city}</p>
                                <p>{this.props.company.state}</p>
                                <p>{this.props.company.zipcode}</p>
                            </div>
                        </div>
                        <div className="officialcontract">
                            <h1>Official Service Agreement</h1>
                            <p>Between {this.props.company.legal_name} and {this.props.client.client_name}</p>
                        </div>
                        <div className='preparedon' >
                            <p>Prepared on </p>
                            <p>{month}/{day}/{year}</p>
                            <p>for {this.props.client.signatory}</p>
                        </div>
                    </header>
                    <div className="fineprint">
                        <p>This agreement, together with terms and conditions specified at {this.props.company.terms_of_service} constitute the complete and exclusive statement of all mutual understandings and agreement between {this.props.company.legal_name}, and the client {this.props.client.client_name}, as to its subject matter and superseding all prior or contemporaneous proposals, communications and understandings, oral or written. Except as expressly set forth herein, this agreement may not be amended, changed, or modified, except by a written document that is duly signed by each party's authorized representative.</p>
                    </div>
                    <div className="offeredservice">
                        <h2>Description of Services:</h2>
                        <h3>a{this.props.features.title}</h3>
                        <p>{this.props.features.description}</p>
                        <div className="theprice">
                            <div className="thesecondlayerprice">
                                <h4>Price:</h4>
                                <p>{this.props.features.price} per month</p>
                            </div>
                            <h6>***Will be paid {this.props.terms.payment_frequency} by {this.props.client.client_name}  ***</h6>
                        </div>
                    </div>
                    <div className="theterms">
                        <h2>Contract Terms</h2>
                        <div className="theeffectiveda">
                            <h4>Effective Date:</h4> 
                            <p>{this.props.terms.effective_date}</p>
                        </div>
                        <div className="theterm">
                            <h4>Term:</h4>
                            {this.props.terms.contract_length} months. {this.props.terms.autorenew === 'yes' ? <p>This License Agreement will automatically renew every {this.props.terms.contract_length} months unless written notice of cancellation is
received at least 60 days prior to the end of the current term.</p> : <p>At the end of this initial term of {this.props.terms.contract_length} months, this contract will not auto-renew.</p>}
                        </div>
                        

                        <h4>Payment Terms: Fees are due and payable at the time of acceptance of this agreement. All fees including, recurring {this.props.terms.payment_frequency} charges, professional service fees, etc. are due upon receipt,
unless otherwise specified by {this.props.company.company_name}</h4>
                        {/* {this.props.terms.collections_protection !== 'none' ? this.props.terms.collections_protection !== 'basic' : <div> </div> : <h4> {this.props.company.company_name} reserves the right to send any outstanding balance to their collection agency. All fees charged by the collection firm will be charged directly to the client in addition to the outstanding balance.</h4> :  {this.props.company.company_name} reserves the right to send any outstanding balance to their collection agency. All fees charged by the collection firm will be charged directly to the client in addition to the outstanding balance. Additionally the signatory of this contract {this.props.client.signatory} agrees to be a personal guarantor of any outstanding balances in relation to this agreement, including in any case where payment was not recieved by {this.props.client.client_name}}
                             */}

                        {/* {0 === 1 ? 0 === 0 : <div>asdf</div> ? 0 === 2 ? <div>qwerty</div> : <div>doodoo</div> : <div>tate</div>} */}
                        <div className='taxcompliance' >
                            <h4>Tax Compliance: </h4>
                            <p>All fees charged hereunder are exclusive of any value added tax (VAT), sales tax, consumption tax, or any other similar tax. In addition to the fees payable hereunder, {this.props.company.company_name} reserves the right to charge to the {this.props.client.client_name} any applicable sales, consumption, VAT, or similar taxes imposed by any federal, state, or local government authority upon the services rendered or any deliverables provided hereunder, other than any taxes based upon {this.props.company.legal_name}’s income or payroll.</p>
                        </div>
                        {this.props.terms.autorenew === 'yes' ?
                            <h4>Cancellation Policy: After confirmed receipt of the cancellation request, the contract is valid for until the end of the current term and all charges within that time frame are still valid. As previously stated, this license agreement will automatically renew at the end of each current term unless written notice of cancellation is received at least 60 days prior to the end of the current term.</h4>
                            : <h4>Cancellation Policy: After confirmed receipt of the cancellation request, the contract is valid for until the end of the current term and all charges within that time frame are still valid. </h4>
                        }
                    </div>
                    <div className="signature">
                        <p>By signing this contract, I hereby represent and warrant that I am duly authorized to execute this binding contract on behalf of the {this.props.client.client_name} named above, and I, {this.props.client.signatory} accept, on behalf of the client, all terms regardless of employment status, or usage of the platform. By accepting this agreement, I give Grow permission to charge the client with the payment method provided according to the payment terms.</p>
                        <div className="signatory">
                            <h6>{this.props.client.signatory}</h6>
                            <div className="thedate">
                                <p>________________________________</p>
                                <div className="">Date: _______________</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contractbuttons">
                    <button
                        onClick={() => this.saveCompanyInfo()}
                    >Save Contract</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    const { user, company, client, features, terms } = reduxState
    return { user, company, client, features, terms }
}

export default connect(mapStateToProps)(ContractPreview)