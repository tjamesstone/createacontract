import React, { Component } from 'react'
import axios from 'axios'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import './IndividualContract.scss'
import {Link} from 'react-router-dom'
import TheContract from './TheContract/TheContract'


class IndividualContract extends Component {
    constructor(props) {
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
        
    }
    componentDidMount() {
        this.getOneDocument()
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    
    changeShowInput = () => {
        this.setState({
            showInput: !this.state.showInput
        })
    }

    updateDoc = async () => {
        let update = {
            contract_name: this.state.contract_name
        }

        await axios.put(`/api/doc/${this.state.id}`, update)
        this.changeShowInput()
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
        // console.log(this.state)

    }

    render() {
       
        return (

            <div className="individualcontract">
                <HomeHeader />
                <div className="editthetitle">
                    {this.state.showInput === false ?
                    <h3 onDoubleClick={() => this.changeShowInput()} className='contracttitlebyid'>{this.state.contract_name}</h3>
                    : <div className="updatebox">
                        <input name='contract_name' placeholder='Contract Name' onChange={e => this.handleChange(e, 'contract_name')} value={this.state.contract_name} type="text"/>
                        <button className='backtodocs' onClick={() => this.updateDoc()}>Edit</button>
                        <button className='backtodocs' onClick={() => this.changeShowInput()} >Cancel</button>
                    </div>

                    }
                    
                    
                </div>
                <TheContract />
                
                <div className="contractbuttons">
                <Link to='/mydocs'> <button className='backtodocs' >Back to My Docs</button></Link>
                <button className='backtodocs' >Save as PDF</button>
                </div>

            </div>
        )
    }
}

export default IndividualContract