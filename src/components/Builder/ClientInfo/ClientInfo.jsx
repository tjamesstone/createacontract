import React, { Component } from 'react'
import './ClientInfo.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleClientInfo } from '../../../ducks/clientReducer'
// import axios from 'axios'

class ClientInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client_name: '',
            signatory: ''
        }
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
        // console.log(this.state)
    }
    addClientInfo = async () => {
        const { client_name, signatory } = this.state
        // await axios.post('/api/client/new', { client_name, signatory }).then(res => {
            // console.log(res.data)
            // const {legal_name: legalName} = res.data
            this.props.handleClientInfo(client_name, signatory)
            this.props.history.push('/builder/features')
        // }
        
    }

    render() {
        return (
            <div className="clientinfo">
                <div className="clientform">
                    <div className="clientname">
                        <p>Legal Name of Client:</p>
                        <input name='client_name' placeholder='Legal Name of Client' onChange={e => this.handleChange(e, 'client_name')} value={this.state.client_name} type="text" />

                    </div>
                    <div className="signatory">
                        <p>Name of Signatory:</p>
                        <input name='signatory' placeholder='Name of Signatory' onChange={e => this.handleChange(e, 'signatory')} value={this.state.signatory} type="text" />
                    </div>
                </div>
                <div className="thebuttons">
                    <Link to='/builder/clientinfo'><button className='nextbutton' >Back to Company Info</button></Link>
                   <button onClick={() => this.addClientInfo()}
                   className='nextbutton'>Next to Features</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {handleClientInfo}) (ClientInfo)