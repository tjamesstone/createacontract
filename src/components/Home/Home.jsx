import './Home.scss'
import React, {Component} from 'react'
import HomeHeader from '../Header/HomeHeader/HomeHeader'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                <HomeHeader />
                    <div className="content">
                    <div className="welcome">
                        <h2>Welcome</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore esse consequatur hic dicta laboriosam voluptate autem optio iusto repudiandae quae ipsam a officia, aliquid dolores cumque quos explicabo illo?</p>
                        <Link to ='/homeauth/login'><button>Get Started</button></Link>
                    </div>
                    <div className="howitworks">
                        <h2>How it Works</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias enim molestiae, quasi, deserunt sunt ab ad sapiente quisquam a, quidem aspernatur sequi possimus hic harum eveniet dicta nam consectetur.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="learnmore">
                        <h2>Learn More</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, in molestiae aperiam tenetur nostrum voluptas harum, ullam neque maxime alias enim quae ea! Repellat fugit saepe, officia labore dolorum quia!</p>
                        <button>Get Info</button>
                    </div>
                </div>
            </div>
        )
    }
}
