import React, { Component } from 'react'
import './dd.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from '../components/header'
import path from '../imgs/DDpath.png';
import brainstorm1 from '../imgs/brainstorm1.jpg';
import brainstorm2 from '../imgs/brainstorm2.jpg';
import wireframe from '../imgs/wireframe.png';
import finalProto from '../imgs/ddvideo.mp4';

export default class DD extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: false, 
            autoplay: false,
        }
    }
    handleScroll=(e)=>{
        console.log(window.scrollY)
        if(window.scrollY>10){
            this.setState({display:false, autoplay: true})
        }else {
            this.setState({display:true})
        }
    }
    render() {
        window.addEventListener('scroll', this.handleScroll);
        return(
            <div>
                <Header></Header>
                <div className='bodyHeader' style={{position:'relative'}}>
                    <p>D&D</p>
                </div>
                <div className='bodyIntro' style={{position:'relative', top:'100px'}}>
                    <p>A project for a design-a-thon by AdobexAmazon 
                        <br></br>
                        
                    </p>
                </div>
                <Row className='overview' > 
                    <Col md = {5} style={{marginTop:'12%', marginLeft:'5%'}}>
                        <img src={path} alt='brainstorm1' style={{width:'100%', height:'200%', overflow:'hidden', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                    </Col>
                    <Col md={5} style={{marginTop:'10%'}}>
                    <b>Prompt:</b> 
                    <br/>
                    Design an app that will help middle schoolers discover design, as both a career and a passion.
                        <br></br>
                        <b>Roles</b> <br></br>
                        UI Designer, UX Designer
                        <br></br>
                        <b>Tools</b> <br></br>
                        Adobe XD
                    </Col>
                </Row>
                <div className='main-case-study' style={{width:'100vw'}}>
                <br></br>
                        <br></br>
                        <video loop style={video} autoPlay controls onPlay={()=>{new Event("video_play")}}>
                            <source src={finalProto}/>
                        </video>
                        <br/> <br/>
                        <div style={{width:'50%', marginLeft: '25%'}}>
                        <i>A look into one of the features of the app we came up with - the design challenge experience. Given multiple prompts, some user generated, the students pick one and walk through the design process for it to come up with a solution.</i>
                        </div>
                    <br></br>
                    <br></br>
                    </div>
                
            </div>
        )
    }
}

const video = {
    width: '80%', 
    boxShadow: '0 0 50px 0 rgba(0,0,0,0.35)',
    borderRadius: '6px',
    backgroundColor:'#F8F8F8',
    marginLeft:'0%',
}