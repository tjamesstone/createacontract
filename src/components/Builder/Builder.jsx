import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import CompanyInfo from './CompanyInfo/CompanyInfo'
import ContractTerms from './ContractTerms/ContractTerms'
import Features from './Features/Features'


class Builder extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="builder">
                Builder
                <Switch>
                    <Route path ='/builder/companyinfo' component={CompanyInfo}/>
                    <Route path ='/builder/features' component={Features}/>
                    <Route path ='/builder/contractterms' component={ContractTerms}/>
                </Switch>
            </div>
        )
    }
}

export default Builder