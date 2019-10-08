import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import CompanyInfo from './CompanyInfo/CompanyInfo'
import ContractTerms from './ContractTerms/ContractTerms'
import Features from './Features/Features'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import ContractPreview from './ContractPreview/ContractPreview'
import ClientInfo from './ClientInfo/ClientInfo'
import './Builder.scss'


class Builder extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="builder">
                <HomeHeader />
                
                <Switch>
                    <Route path ='/builder/companyinfo' component={CompanyInfo}/>
                    <Route path ='/builder/features' component={Features}/>
                    <Route path ='/builder/contractterms' component={ContractTerms}/>
                    <Route path ='/builder/contractpreview' component={ContractPreview}/>
                    <Route path ='/builder/clientinfo' component={ClientInfo}/>
                </Switch>
            </div>
        )
    }
}

export default Builder