import React, { Component, useRef, useEffect } from 'react'
import './work.css'
import  Logo from '../imgs/Logo.png';
import persImage from '../imgs/personalimage.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Work extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: true, 
            autoplay: false,
        }
    }

render(){
    window.addEventListener('scroll', this.handleScroll);
    return(
        <div className='body' >
            
            <div className='header'>
                <Row style={{overflowX:'hidden'}}>
                    <Col md = {3}>
                        <img src={Logo} alt='header' style={{width:'40%', height:'100%'}} href='/'/>
                    </Col>
                    <Col md={6}></Col>
                    <Col md = {1} style={{marginTop:'50px'}}>  
                        <h4 href='/'>WORK</h4>
                    </Col>
                    <Col md = {1} style={{marginTop:'50px'}}>
                        <h4 href='/'>PLAY</h4>
                    </Col>
                </Row>  
            </div>
        
        </div>
        
        
    )
}

}

