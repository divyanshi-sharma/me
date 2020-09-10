import React, { Component } from 'react'
import Header from '../components/header'
import Lura from '../imgs/luraImg.png'
import FFH from '../imgs/farFromHomeImg.png'
import Events from '../imgs/eventsImg.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {Nav} from 'react-bootstrap';
import './work.css'

class Work extends Component {
    render() {
        return (
            <div className='body'>
                <Header></Header>

                <div className='bodyHeader' style={{position:'fixed'}}>
                    <p>WORK</p>
                </div>
                <div className='bodyIntro' style={{position:'fixed', top:'200px'}}>
                    <p>I've done work with UX Design, frontend dev, and backend dev.
                        <br></br>
                    Below are some examples of each.
                    </p>
                </div>
            
                <div className='workExamples' style={{position:'relative', marginTop:'25vw', justifyContent:'center'}}>
                    <br></br>
                    <h1 className='uxTitle' style={{position:'relative', marginLeft:'1%'}}>UX AND DESIGN</h1>
                    <br></br>
                    <div className='lura'>
                            <a href='#/lura'><img className='image' src={Lura} alt='LuraHomepage' style={{width:'100%', height:'90%', borderRadius:'4px', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/></a>
                            <div class="overlay">
                                <Nav.Link className='exTitle' href='#/lura'>LURA</Nav.Link>Lura is a startup that uses an online platform to streamline the sourcing process for sustainable clothing production by digitizing the fashion industry for small brands and helping them rebuild their supply chain in an eco-friendly way.</div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='events'>
                            <a href='#/lura'><img className='image' src={Events} alt='eventsHome' style={{width:'100%', height:'50%', borderRadius:'4px', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/></a>
                            <div class="overlay">
                            <Nav.Link className='exTitle' href='#/lura'>EVANSTON EVENTS</Nav.Link>Evanston Events is an app that was created for Google Developer Student Clubs. It serves as a place for students to find out about events in the area, and clubs and local businesses to advertise their events.</div>
                    </div>
                    <br></br>
                    <br></br>
                    <h1 className='frontendTitle' style={{position:'relative'}}>FRONTEND DEV + DESIGN</h1>
                    <br></br>
                    <div className='ffh'>
                            <a href='#/lura'><img className='image' src={FFH} alt='ffH' style={{width:'100%', height:'90%', borderRadius:'4px', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/></a>
                            <div class="overlay">
                            <Nav.Link className='exTitle' href='#/lura'>FAR FROM HOME</Nav.Link>Far From Home is a website made for COMP_SCI 330: Human Computer Interaction. It helps homesick freshmen feel better at school and stay connected to loved ones.</div>
                    </div>               
                </div>
                <br></br>
                
            </div>
        )
    }
}
export default Work;

