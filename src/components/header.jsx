import React, { Component } from 'react'
import {Nav} from 'react-bootstrap';
import  Logo from '../imgs/selflogo2.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './header.css'


export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: false, 
            autoplay: false,
        }
    }

render(){   
    return(          
            <div className='header'>
                <Row style={{overflowX:'hidden'}}>
                    <Col md = {3}>
                        <a href='#/home'><img src={Logo} alt='logo' style={{marginLeft:'-35%',width:'35%', height:'100%'}}/></a>
                    </Col>
                    <Col md={6}></Col>
                    <Col md = {1} style={{marginTop:'3vw'}}>  
                        <Nav.Link href='#/work' className='nav_link'>WORK</Nav.Link>
                    </Col>
                    <Col md = {1} style={{marginTop:'3vw'}}>
                        <Nav.Link href='#/play' className='nav_link'>PLAY</Nav.Link>
                    </Col>
                </Row>  
            </div>
    )
}
}
