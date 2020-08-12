import React, { Component, useRef, useEffect } from 'react'
import './work.css'
import  Logo from '../imgs/Logo.png';
import persImage from '../imgs/personalimage.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home extends Component {
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
             
            <div className='introSummary'>
                <br></br><br></br><br></br>
                <p style={{marginLeft:'5%', marginTop: '5%', fontSize:'50px', fontWeight:'lighter', position:'fixed'}}>
                    Hi, I'm Divya!
                    </p>
                    <br></br><br></br><br></br><br></br>
                <p style={{marginLeft:'5%', marginTop: '5%', fontSize:'25px', fontWeight:'lighter', fontFamily: 'Niveau Grotesk', position:'fixed'}}>
                Third year student @ Northwestern
                <br></br>
                Computer Science Major, Legal Studies Minor, Segal Design Certificate
                <br></br>
                Front-end Developer and Product Designer, with a focus in UX
                <br></br>
                Passionate about tech for social impact
                </p>
            </div>

            <div className='aboutMe' style={{overflowX:'hidden'}}>
                    <Row style={{overflowX:'hidden'}}>
                        <Col md = {6} style={{overflowX:'hidden'}}>
                            <img src={persImage} alt='personalImage' style={{marginLeft:'80px', marginTop:'30px',width:'55%', height:'90%'}}/>
                        </Col>
                        <Col md = {5} style={{overflowX:'hidden',marginTop:'10px'}}>
                            <h1 style={{fontFamily: 'PMingLiU-ExtB', opacity:'50%', textAlign: 'center', overflowX:'hidden'}}>
                                ABOUT ME
                            </h1>
                            <p style={{fontSize:'25px', fontWeight:'lighter', fontFamily: 'Niveau Grotesk', textAlign: 'justify', overflowX:'hidden'}}>
                                My full name is Divyanshi, but I go by Divya! I am deeply interested in using tech to make a social impact, and making sure tech is accessible for everyone. This has led me to UX design, frontend dev., and product design so that I can focus humans in designs. Head over to "Work" to see what I've been up to!
                                <br></br>
                                In my free time, I love painting and reading! Check out "Play" to see some of my paintings and recent reads.
                            </p>
                        </Col>
                    </Row>  
            </div>

        
        </div>
        
        
    )
}

}

