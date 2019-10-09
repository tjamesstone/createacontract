import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    // console.log(token)
    let response = await axios.post("/charge", {
      id: token.id
    });
  
    if (response.statusText === 'OK') console.log("Purchase Complete!")  
    this.setState({
        complete: true
    })
}

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <h3>Want to save this contract? Purchase for $5</h3>
        <CardElement />
        <button className="loginbutton contractlol" onClick={this.submit}>Purchase</button>
        <img src="https://apolloartistry.com/wp-content/uploads/2017/03/powered-by-stripe.png" alt="powered by stripe"/>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);