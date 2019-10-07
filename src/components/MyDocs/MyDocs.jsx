import React, {Component} from 'react'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import './MyDocs.scss'
import blackPlus from '../../Assets/blackplus.png'
import {Link} from 'react-router-dom'
import axios from 'axios'

class MyDocs extends Component{
    constructor(props){
    super(props)
    this.state = {
        userDocs: true,
        docs: []
        }
    }
    componentDidMount(){
        this.getDocuments()
    }

    handleChange(key, e){
        this.setState({
            [key]: e.target.value
        })
    }

    getDocuments = async () => {
        const res = await axios.get(`/api/documents/?userdocs=${this.state.userDocs}`)
        
        this.setState({
            docs: res.data
        })
    }

    render(){
        const {docs} = this.state
        return(
            <div className="mydocscomponent">
                <HomeHeader/>
                <div className="mydocsactual">
                    <div className="therealdocs">
                        <div className="newdoc">
                            <p>New:</p>
                            <Link to='/builder/companyinfo'>
                            <div className="newdoccontainer">
                                <img src={blackPlus} alt=""/>
                            </div>
                            </Link>
                        </div>
                        <div className="listofdocs">
                            <div className="listofdocstitle">
                                <p>My Docs:</p>
                            </div>
                            <div className="listofdocsactual">
                                {docs.map(doc => (
                                    <Link key = {doc.id} to={`/doc/${doc.id}`}> 
                                    <div className="individualdoc">
                                        <p className='individualcontracttitle'
                                        >{doc.contract_name}</p>
                                        <p className='clicktoviewdetails'
                                        >Click to view contract details</p>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                            
                        </div>
                    
                    </div>
                
                </div>
                
            </div>
        )
    }
}
export default MyDocs