import React, { Component } from 'react'
import './home.css'
import persImage from '../imgs/squarePhoto.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Header from '../components/header'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: false, 
            autoplay: false,
            bgColor: '#FFCAB9',
            
        }
    }
    
   

render(){   
    return(
        <div >
            
            <Header></Header>
             
            <div className='introSummary' >
                <br></br><br></br><br></br>
                <p style={{marginLeft:'5%', marginTop: '5%', fontSize:'50px', textAlign: 'left', fontWeight:'lighter', position:'fixed'}}>
                    Hi, I'm Divya!</p>
                <br></br><br></br><br></br><br></br>
                <p style={{marginLeft:'5%', marginTop: '5%', fontSize:'25px', textAlign: 'left', fontWeight:'lighter', fontFamily: 'Niveau Grotesk', position:'fixed'}}>
                Third year student @ Northwestern
                <br></br>
                Computer Science Major, Legal Studies Minor, Segal Design Certificate
                <br></br>
                Front-end Developer and Product Designer, with a focus in UX
                <br></br>
                Passionate about tech for social impact          
                </p>  
            </div>


            <div className='aboutMe' >
                    <Row style={{position:'static'}}>
                        <Col xs = {6} >
                            <img src={persImage} alt='personalImage' style={{borderRadius:'50%', marginTop:'30px', overflow:'hidden', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                        </Col>
                        <Col xs = {5} style={{marginTop:'2%'}}>
                            <h1 style={{fontFamily: 'PMingLiU-ExtB', opacity:'50%', textAlign: 'center', overflowX:'hidden'}}>
                                ABOUT ME
                            </h1>
                            <p style={{fontSize:'20px', fontWeight:'lighter', fontFamily: 'Niveau Grotesk', textAlign: 'justify', overflowX:'hidden'}}>
                                My full name is Divyanshi, but I go by Divya! I am deeply interested in using tech to make a social impact, and making sure tech is accessible for everyone. This has led me to UX design, frontend dev., and product design so that I can focus humans in designs. Head over to <a className='nav_link' href='#/work'>Work</a> to see what I've been up to!
                                <br></br>
                                In my free time, I love painting and reading! Check out <a className='nav_link' href='#/work'>Play</a> to see some of my paintings and recent reads.
                            </p>
                            <Row style={{justifyContent:'center'}}>
                                <Col md = {2}>
                                    <Button className='connectButton'
                                            style={{backgroundColor: this.state.bgColor}}
                                            href='mailto: divyanshi@u.northwestern.edu'>Email
                                    </Button>
                                </Col>
                                <Col md = {2}  style={{marginLeft:'-4%'}}>
                                <Button className='connectButton'
                                            style={{backgroundColor: this.state.bgColor}}
                                            href='https://linkedin.com/in/divyanshi-sharma-629063195/'>LinkedIn
                                    </Button>
                                </Col>
                                <Col md = {2}>
                                    <Button className='connectButton'
                                            style={{backgroundColor: this.state.bgColor}}
                                            href='https://github.com/divyanshi-sharma'>Github
                                    </Button>
                                </Col>
                            </Row>
                            <br></br><br></br>
                        </Col>
                    </Row>
                    
            </div>

        </div>
    )
}

}

