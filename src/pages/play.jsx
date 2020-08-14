import React, { Component} from 'react'
import Header from '../components/header'
import './play.css'

class Play extends Component {
    render() {
        return (
            <div className='body'>
                <Header></Header>
                <div className='bodyHeader' style={{position:'fixed',top:'125px'}}>
                    <p>PLAY</p>
                    <p style={{fontSize:'35px', letterSpacing:'0px', fontWeight:'lighter'}}>in progress!</p>
                </div>
            </div>
        )
    }
}
export default Play;