import React, {Component} from 'react'
import './Feature.scss'

class Feature extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            quantity: 0,
            price: 0
        }
    }

    render(){
        return(
            <div className="featureform">
                <div className="info">
                    <div className="featuretitle">
                        <p>Title:</p>
                        <input type="text"/>
                    </div>
                    <div className="description">
                        <p>Description:</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="quantity">
                        <p>Qty:</p>
                        <input type="text"/>
                    </div>
                    <div className="price">
                        <p>Price:</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className="featurebuttons">
                    <p>X</p>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}
export default Feature