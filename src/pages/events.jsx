import React, { Component } from 'react'
import './events.css'
import persImage from '../imgs/pinkLakePhoto.JPG';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from '../components/header'


export default class Events extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: false, 
            autoplay: false,
        }
    }

    render() {
        return(
            <div>
                <Header></Header>
                <div className='bodyHeader' style={{position:'fixed'}}>
                    <p>Evanston Events</p>
                </div>
                <div className='bodyIntro' style={{position:'fixed', top:'200px'}}>
                    <p>A case study 
                    </p>
                </div>
            </div>
        )
    }
}