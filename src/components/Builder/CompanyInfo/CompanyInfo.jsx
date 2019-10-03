import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import './CompanyInfo.scss'
import {connect} from 'react-redux'
import {handleCompanyInfo} from '../../../ducks/companyReducer'
import axios from 'axios'

class CompanyInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            legal_name: '',
            terms_of_service: '',
            logo: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }
    

    handleChange = (e, key) => {
        this.setState({
            [key] : e.target.value
        })
        // console.log(this.state)
    }

    addCompanyInfo = async () => {
        const {legal_name, terms_of_service, logo, address, city, state, zipcode} = this.state
        await axios.post('/api/company/new', {legal_name, terms_of_service, logo, address, city, state, zipcode}).then( res => {
            // console.log(res.data)
            // const {legal_name: legalName} = res.data
            this.props.handleCompanyInfo(res.data.legal_name, res.data.terms_of_service, res.data.logo, res.data.address, res.data.city, res.data.state, res.data.zipcode)
            this.props.history.push('/builder/clientinfo')

        }

        )

    }

    render(){
        return(
            <div className="companyinfo">
                <div className="whoareyouform">
                    <h2 className='whotitle'
                    >Who Are You?</h2>
                    <div className="legalname">
                        <p>Legal Name of Company:</p>
                        <input name='legal_name' placeholder='Legal Name' onChange={e => this.handleChange(e, 'legal_name')} value={this.state.legal_name} type="text"/>
                    </div>
                    <div className="termsofservice">
                        <p>Link to Terms of Service:</p>
                        <input name='terms_of_service' placeholder='Terms of Service' onChange={e => this.handleChange(e, 'terms_of_service')} value={this.state.terms_of_service} type="text"/>
                    </div>
                    <div className="companylogo">
                        <p>Company Logo:</p>
                        <input name='logo' placeholder='Logo' onChange={e => this.handleChange(e, 'logo')} value={this.state.logo} type="text"/>
                    </div>
                    <div className="address">
                        <p>Address:</p>
                        <input name='address' placeholder='Address' onChange={e => this.handleChange(e, 'address')} value={this.state.address} type="text"/>
                    </div>
                    <div className="city">
                        <p>City:</p>
                        <input name='city' placeholder='City' onChange={e => this.handleChange(e, 'city')} value={this.state.city} type="text"/>
                    </div>
                    <div className="state">
                        <p>State:</p>
                        <input name='state' placeholder='State' onChange={e => this.handleChange(e, 'state')} value={this.state.state} type="text"/>
                    </div>
                    <div className="zip">
                        <p>Zip Code:</p>
                        <input name='zipcode' placeholder='Zip Code' onChange={e => this.handleChange(e, 'zipcode')} value={this.state.zipcode} type="text"/>
                    </div>
                    
                </div>
                <div className="nothing">
                    <p></p>
                
                {/* <Link to='/builder/features'> */}
                <button className='nextbutton' onClick={() => this.addCompanyInfo()}
                >Next to Features</button>
                {/* </Link> */}
                </div>
            </div>
        )
    }
}

export default connect(null, {handleCompanyInfo}) (CompanyInfo)