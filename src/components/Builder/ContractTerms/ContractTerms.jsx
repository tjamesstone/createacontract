import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './ContractTerms.scss'

class ContractTerms extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="contractterms">
                Step Three: Contract Terms
                <div className="whoareyouform">
                    <div className="effectivedate">
                        <p>Effective Date:</p>
                        <input type="date"/>
                    </div>
                    <div className="contractlength">
                        <p>Contract Length:</p>
                        <input type="number"/>
                    </div>
                    <div className="autorenew">
                        <p>Auto Renew?</p>
                        <input type="checkbox"/>
                    </div>
                    <div className="other">
                        <p>Other:</p>
                        <p>This would be any other term you would like to include</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="thebuttons">
                    <Link to='/builder/features'><button className='nextbutton' >Back to Features</button></Link>
                    <button className='nextbutton'>Finish</button>
                </div>
            </div>
        )
    }
}

export default ContractTerms