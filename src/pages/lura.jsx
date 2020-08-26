import React, { Component } from 'react'
import './lura.css'
import persImage from '../imgs/pinkLakePhoto.JPG';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from '../components/header'

export default class Lura extends Component {
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
                    <p>LURA</p>
                </div>
                <div className='bodyIntro' style={{position:'fixed', top:'200px'}}>
                    <p>A dive into prototyping a service 
                        <br></br>
                        that will help brands rebuild their suppply chain in an eco-friendly way.
                    </p>
                </div>
            </div>
        )
    }
}