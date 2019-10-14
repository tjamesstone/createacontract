import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import {connect} from 'react-redux'
import {handlePayment} from './ducks/paymentReducer'
import swal from 'sweetalert2'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    try {
      let {token} = await this.props.stripe.createToken({name: "Name"});
    // console.log(token)
    let response = await axios.post("/charge", {
      id: token.id
    });
    
    if (response.statusText === 'OK') console.log("Purchase Complete!")  
    this.setState({
        complete: true
    })
    console.log(this.state.complete)
    this.props.handlePayment(this.state.complete)
    } catch (error) {
      swal.fire({type: 'error', title: 'Oops...', text:`Payment failed, poor boy. Double check your card details or use your parent's card.`})
    }
    



}

  render() {
    if (this.state.complete) return <div className="paymentsuccessful whoareyouform"><h2>Your Payment Processed Successfully</h2> <img src="https://securionpay.com/wp-content/uploads/2016/10/icn-completed-mobile.svg" alt="payment complete"/> <h4>Now Scroll Down and Click 'Save Contract' to Save it to Your Documents</h4></div>;

    return (
      <div className="checkout">
        <h3> Your total comes to $5</h3>
        <CardElement />
        <button className="loginbutton contractlol" onClick={this.submit}>Purchase</button>
        <img src="https://apolloartistry.com/wp-content/uploads/2017/03/powered-by-stripe.png" alt="powered by stripe"/>
      </div>
    );
  }
}

// export default injectStripe(CheckoutForm)
export default connect(null, {handlePayment}) (injectStripe(CheckoutForm))