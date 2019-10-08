import React, {Component} from 'react'
import axios from 'axios'
import './TheContract.scss'
import {withRouter} from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import {Link} from 'react-router-dom'

 


class TheContract extends Component{
    constructor(props){
        super(props)
        this.state = {
            address: '',
            autorenew: '',
            chargeback_protection: '',
            city: '',
            client_name: '',
            collections_protection: '',
            contract_length: '',
            contract_name: '',
            description: '',
            effective_date: '',
            id: '',
            legal_name: '',
            logo: '',
            payment_frequency: '',
            price: '',
            signatory: '',
            state: '',
            terms_of_service: '',
            title: '',
            user_id: '',
            zipcode: 0,
            showInput: false
        }
        this.contractRef = React.createRef()
        this.pdfDocument = this.pdfDocument.bind(this)
    }
    componentDidMount() {
        this.getOneDocument()
    }
    
    pdfDocument(){
        const input = document.getElementById('whattosave')
        // const input = this.contractRef.current.outerHTML
        // console.log(input)
        html2canvas(input, { y: 134, scale: 2})
        // html2canvas(input)
        .then((canvas) => {
            // console.log(canvas)
            const imgData = canvas.toDataURL('image/svg')
            const pdf = new jsPDF()
            
            pdf.addImage(imgData, 'JPEG', 0, 0, 210, 298)
            // console.log(pdf)
            pdf.save('contract.pdf')
        })
        .catch( err => {
            console.log(`There's an error: ${err}`)
        })
    }
  
    

    getOneDocument = async () => {
        const res = await axios.get(`/api/doc/${this.props.match.params.id}`)
        // console.log(res)
        this.setState({
            address: res.data[0].address,
            autorenew: res.data[0].autorenew,
            chargeback_protection: res.data[0].chargeback_protection,
            city: res.data[0].city,
            client_name: res.data[0].client_name,
            collections_protection: res.data[0].collections_protection,
            contract_length: res.data[0].contract_length,
            contract_name: res.data[0].contract_name,
            description: res.data[0].description,
            effective_date: res.data[0].effective_date,
            id: res.data[0].id,
            legal_name: res.data[0].legal_name,
            logo: res.data[0].logo,
            payment_frequency: res.data[0].payment_frequency,
            price: res.data[0].price,
            signatory: res.data[0].signatory,
            state: res.data[0].state,
            terms_of_service: res.data[0].terms_of_service,
            title: res.data[0].title,
            user_id: res.data[0].user_id,
            zipcode: res.data[0].zipcode
        })
    }

    
    render() {
       
        return(
            <div className="parent">
            <div id='whattosave' className="actualcontract" ref={this.contractRef}
      >
                    <header>
                        <div className="logoandaddress">
                            <img className='thelogoimage' src={this.state.logo} alt="logo" />
                            <div className="address">
                                <p className='haha'
                                >{this.state.legal_name}</p>
                                <p>{this.state.address}</p>
                                <p>{this.state.city}, {this.state.state}, {this.state.zipcode}</p>
                              
                            </div>
                        </div>
                        <div className="officialcontract">
                            <h1>Official Service Agreement</h1>
                        </div>
                        <div className='preparedon' >
                            <p>Prepared for {this.state.signatory}</p>

                        </div>
                    </header>
                    <div className="fineprint">
                        <p >This agreement, together with terms and conditions specified at {this.state.terms_of_service} constitute the complete and exclusive statement of all mutual understandings and agreement between {this.state.legal_name}, and the client {this.state.client_name}, as to its subject matter and superseding all prior or contemporaneous proposals, communications and understandings, oral or written. Except as expressly set forth herein, this agreement may not be amended, changed, or modified, except by a written document that is duly signed by each party's authorized representative.</p>
                    </div>
                    <div className="offeredservice">
                        <h2>Description of Services</h2>
                        <div className="actualservice">
                            <h3>{this.state.title}</h3>
                            <p className='termstext'>{this.state.description}</p>
                            <div className="theprice">
                                <div className="thesecondlayerprice">
                                    <h4>Price:</h4>
                                    <p className='termstext'> ${this.state.price} per month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="theterms">
                        <h2>Contract Terms</h2>
                        <div className="theeffectiveda">
                            <h4>Effective Date:</h4>
                            <p className='termstext'>{this.state.effective_date}</p>
                        </div>
                        <div className="theactualterm">
                            <h4>Term:</h4>
                            <div className="theactualtermtext">


                                <p
                                    className='termstext'
                                > {this.state.contract_length} months. </p> {this.state.autorenew === 'yes' ? <p className='termstext'
                                > This License Agreement will automatically renew every {this.state.contract_length} months unless written notice of cancellation is
received at least 60 days prior to the end of the current term.</p> : <p className='termstext' >At the end of this initial term of {this.state.contract_length} months, this contract will not auto-renew.</p>}

                            </div>
                        </div>

                        <div className="thepaymentterms">
                            <h4>Payment Terms: </h4>
                            <p className='termstext'>Fees are due and payable at the time of acceptance of this agreement. All fees including, recurring {this.state.payment_frequency} charges, professional service fees, etc. are due upon receipt,
unless otherwise specified by {this.state.legal_name}. Additionally all fees will be payed {this.state.payment_frequency} by {this.state.client_name}.</p>
                            {/* {this.state.collections_protection !== 'none' ? this.state.collections_protection !== 'basic' : <div> </div> : <h4> {this.state.company_name} reserves the right to send any outstanding balance to their collection agency. All fees charged by the collection firm will be charged directly to the client in addition to the outstanding balance.</h4> :  {this.state.company_name} reserves the right to send any outstanding balance to their collection agency. All fees charged by the collection firm will be charged directly to the client in addition to the outstanding balance. Additionally the signatory of this contract {this.state.signatory} agrees to be a personal guarantor of any outstanding balances in relation to this agreement, including in any case where payment was not recieved by {this.state.client_name}}
                             */}

                            {/* {0 === 1 ? 0 === 0 : <div>asdf</div> ? 0 === 2 ? <div>qwerty</div> : <div>doodoo</div> : <div>tate</div>} */}
                        </div>
                        <div className='taxcompliance' >
                            <h4>Tax Compliance: </h4>
                            <p className='termstext'>All fees charged hereunder are exclusive of any value added tax (VAT), sales tax, consumption tax, or any other similar tax. In addition to the fees payable hereunder, {this.state.company_name} reserves the right to charge to the {this.state.client_name} any applicable sales, consumption, VAT, or similar taxes imposed by any federal, state, or local government authority upon the services rendered or any deliverables provided hereunder, other than any taxes based upon {this.state.legal_name}’s income or payroll.</p>
                        </div>
                        <div className="thecancellationpolicy">
                            <h4>Cancellation Policy: </h4>
                            {this.state.autorenew === 'yes' ?
                                <div className="cancellationone">

                                    <p className='termstext'> After confirmed receipt of the cancellation request, the contract is valid for until the end of the current term and all charges within that time frame are still valid. As previously stated, this license agreement will automatically renew at the end of each current term unless written notice of cancellation is received at least 60 days prior to the end of the current term. </p>
                                </div>

                                :
                                <div className="cancellationtwo">
                                    <p className='termstext'> After confirmed receipt of the cancellation request, the contract is valid for until the end of the current term and all charges within that time frame are still valid.</p>
                                </div>
                            }
                        </div>

                    </div>
                    <div className="signature">
                        <h2>Client Authorization</h2>
                        <p className='termstext' >By signing this contract, I hereby represent and warrant that I am duly authorized to execute this binding contract on behalf of the {this.state.client_name} named above, and I, {this.state.signatory} accept, on behalf of the client, all terms regardless of employment status, or usage of the platform. By accepting this agreement, I give Grow permission to charge the client with the payment method provided according to the payment terms.</p>
                        <div className="signatory">

                            <div className="thedate">
                                <h6 className="thesignatory" >{this.state.signatory}</h6>
                                <p className="termstext" >x________________________________ Date: _______________</p>
                                <div className="termstext"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contractbuttons">
                <Link to='/mydocs'> <button className='backtodocs' >Back to My Docs</button></Link>
                <button className='backtodocs' onClick={() => this.pdfDocument()} >Save as PDF</button>
                </div>
                </div>
        )
    }
}

export default withRouter(TheContract)