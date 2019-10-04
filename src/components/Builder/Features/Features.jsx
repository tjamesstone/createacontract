import React, { Component } from 'react'
// import Feature from './Feature/Feature'
// import blackPlus from '../../../Assets/blackplus.png'
import './Features.scss'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import {handleFeaturesInfo} from '../../../ducks/featuresReducer'
import { connect } from 'react-redux'

class Features extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            price: 0
        }
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
        // console.log(this.state)
    }

    addFeaturesInfo = async () => {
        const { title, description, price } = this.state
        // await axios.post('/api/features/new', { title, description, price }).then(res => {
            // console.log(res.data)
            // const {legal_name: legalName} = res.data
            this.props.handleFeaturesInfo(title,description,price)
            this.props.history.push('/builder/contractterms')
        // }
        // )
    }

    render() {
        return (
            <div className="features">
                <div className="info">
                    <div className="featuretitle">
                        <p>Title of Feature/Service:</p>
                        <input name='title' placeholder='Title of Service or Features' onChange={e => this.handleChange(e, 'title')} value={this.state.title} type="text" />
                    </div>
                    <div className="description">
                        <p>Description:</p>
                        <textarea name="description" placeholder="Description of Service or Features Offered to the Client" onChange={e => this.handleChange(e, 'description')} value={this.state.description} id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="price">
                        <p>Cost per Month:</p>
                        <input name='price' placeholder='Monthly Cost' onChange={e => this.handleChange(e, 'price')} value={this.state.price} type="number" />
                    </div>
                </div>
                <div className="thebuttons">
                        <Link to='/builder/clientinfo'><button className='nextbutton' >Back to Client Info</button></Link>
                        <button onClick={() => this.addFeaturesInfo()} className='nextbutton'>Next to Contract Terms</button>
                    </div>
            </div>
        )
    }
}

export default connect(null, {handleFeaturesInfo}) (Features)