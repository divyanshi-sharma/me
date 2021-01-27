import React, { Component } from 'react'
import Header from '../components/header'
import Lura from '../imgs/luraLaptopMockup1.jpg'
import FFH from '../imgs/farFromHomeImgMockup.jpg'
import Events from '../imgs/ddmockup.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {Nav} from 'react-bootstrap';
import './work.css'

class Work extends Component {
    
    render() {
        return (
            <div className='bodyy'>
                <Header></Header>

                <div className='bodyHeader'>
                    <p>WORK</p>
                </div>
                <div className='workExamples' style={{position:'relative', marginTop:'17vw', justifyContent:'center'}}>
                    <br></br>
                    <h1 className='uxTitle' style={{position:'relative'}}>UX DESIGN</h1>
                    <br></br>
                    <div className='lura'>
                            <a href='#/lura'><img className='image' src={Lura} alt='LuraHomepage' style={{width:'100%', height:'90%', borderRadius:'4px', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/></a>
                            <div class="overlay">
                                <Nav.Link className='exTitle' href='#/lura'>LURA</Nav.Link>Lura is a startup that uses an online platform to streamline the sourcing process for sustainable clothing production by digitizing the fashion industry for small brands and helping them rebuild their supply chain in an eco-friendly way.</div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='events'>
                            <a href='#/discoverdesign'><img className='image' src={Events} alt='ddHome' style={{width:'100%', height:'50%', borderRadius:'4px', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/></a>
                            <div class="overlay">
                            <Nav.Link className='exTitle' href='#/discoverdesign'>Discover & Design</Nav.Link>Discover & Design is an app that was created for the AdobexAmazon Creative Jam Challenge. The prompt was to come up with a way for high schoolers to discover what design is and careers in design.</div>
                    </div>
                    <br></br>
                    <br></br>
                    <h1 className='frontendTitle' style={{position:'relative'}}>FRONTEND DEV + DESIGN</h1>
                    <br></br>
                    <div className='ffh'>
                            <a ><img className='image' src={FFH} alt='ffH' style={{width:'100%', height:'50%', borderRadius:'4px', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/></a>
                            <div class="overlay">
                            <Nav.Link className='exTitle'>FAR FROM HOME</Nav.Link>Far From Home is a website made for COMP_SCI 330: Human Computer Interaction. It helps homesick freshmen feel better at school and stay connected to loved ones.</div>
                    </div>               
                </div>
                
                
            </div>
        )
    }
}
export default Work;

