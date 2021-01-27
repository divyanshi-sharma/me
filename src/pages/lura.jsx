import React, { Component } from 'react'
import './lura.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from '../components/header'
import HomeVideo from '../imgs/LuraHomePage_Trim.mp4';
import brainstorm1 from '../imgs/brainstorm1.jpg';
import brainstorm2 from '../imgs/brainstorm2.jpg';
import wireframe from '../imgs/wireframe.png';
import finalProto from '../imgs/finalProto.mp4';

export default class Lura extends Component {
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
                    <p>LURA</p>
                </div>
                <div className='bodyIntro' style={{position:'relative', top:'100px'}}>
                    <p>A dive into prototyping a service 
                        <br></br>
                        that will help brands rebuild their suppply chain in an eco-friendly way.
                    </p>
                </div>
                <Row className='overview' > 
                    <Col md = {5} style={{marginTop:'12%', marginLeft:'5%'}}>
                        <video loop style={video} autoPlay controls onPlay={()=>{new Event("video_play")}}>
                            <source src={HomeVideo}/>
                        </video>
                    </Col>
                    <Col md={5} style={{marginTop:'10%'}}>
                        <b>Overview</b> <br></br>
                        Lura is a startup that uses an online platform to transform  the sourcing process for sustainable clothing production.
                        This case study is about one feature of the platform, the Virtual Consultation, which allows designers to input their needs and wants and be matched with the best fabrics for them. 
                        <br></br>
                        <b>Roles</b> <br></br>
                        UI Designer, UX Designer
                        <br></br>
                        <b>Tools</b> <br></br>
                        Adobe XD, Figma
                    </Col>
                </Row>
                <div className='main-case-study' style={{width:'100vw'}}>
                    <div style={{margin:'auto', width:'80vw', textAlign: 'left'}}>
                    <br></br><br></br><b style={{fontSize:'25px'}}>Problem: </b> <i style={{fontSize:'25px'}}>Like a Needle in a Haystack</i> <br></br>
                    Finding fabrics, also known as sourcing, is often one of the most time consuming and tedious parts of the apparel designing process. In person sourcing often involves going through large bins of fabric and trying to find something suitable for your design, or finding something to be inspired to create by. Online sourcing is even more difficult because on top of the existing problem of sorting through things, <b>designers can no longer rely on how the fabric feels and looks in person.</b> Through research, we found that competitor companies focus more on the shipping process and minimums for ordering instead of trying to aid designers and brands find fabrics. In terms of interface, brands complain that it’s <b>hard to navigate with the overwhelming amount of fabric and convoluted filters.</b>
                    <br></br>
                    Thus, we outlined two goals: 
                    <br></br>
                    <br></br>
                    <div style= {{textAlign:'center'}}>
                    1. Allow designers to choose fabrics based on textile/touch characteristics (e.g. hand feel)
                    <br></br>
                    2. Make the experience of online sourcing easier, more intuitive, and more similar to in person sourcing
                    </div>
                    <br></br>
                    <b style={{fontSize:'25px'}}>Ideation: </b><i style={{fontSize:'25px'}}>If The Shoe Fits</i> <br></br>
                    Each designer comes into the sourcing process with different levels of certainty about what they’re looking for, and a whole host of different requirements for the fabric. Thus, we decided the best way to know what’s best for the designer is to ask them about their needs and wants. After brainstorming, we decided to go with a virtual quiz that serves as a consultation and helps the designer find the best fabric from our database. 
                    <br></br>
                    <Row  style={{marginLeft: '15%', justifyContent:'center'}}>
                        <Col md={5}>
                            <img src={brainstorm1} alt='brainstorm1' style={{marginTop:'30px', overflow:'hidden', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                        </Col>
                        <Col md={5}>
                            <img src={brainstorm2} alt='brainstorm' style={{marginTop:'30px', overflow:'hidden', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                            
                        </Col>
                        
                        <i style={{marginTop:'3%', marginRight:'20%', fontSize:'15px'}}>Initial brainstorm of questions that needed to be answered in the consultation.</i>
                    </Row>
                    <br></br>
                    We also drew up a wireframe on Figma to outline flow. 
                    <br></br>
                        <img src={wireframe} alt='personalImage' style={{marginLeft:'23.5%', marginTop:'30px', overflow:'hidden', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                    <br></br>
                    <br></br>
                    <b style={{fontSize:'25px'}}>Solution: </b><i style={{fontSize:'25px'}}>The Perfect Fit</i> <br></br>
                    We conducted user research and interviews to figure out which characteristics were most important when looking for a fabric and decided on eight basic questions to help narrow down the available fabrics. 
                    After our first round of user testing with designers using our prototype in AdobeXD, we made changes according to their feedback. Multiple users said that they didn't have time for a long quiz, and since there wasn't any indication as to how much was left of the quiz, they considered quitting it. Based on that, we added a progress marker so that people taking the quiz aren’t overwhelmed. We also adjusted some questions by making them specific, since the designers
                    said that they would prefer more clear options. Here is the final prototype. 
                    <br></br>
                    <br></br>
                        <video loop style={video} autoPlay controls onPlay={()=>{new Event("video_play")}}>
                            <source src={finalProto}/>
                        </video>
                        <br></br>
                        <br></br>
                    <b style={{fontSize:'25px'}}>Next Steps: </b><i style={{fontSize:'25px'}}>Sew What Now?</i> <br></br>
                    The timeline was determined by when we wanted to publish the quiz on the website to roll it out. After some post-publishing user testing and reflection, we realized that not every person values each characteristic of the fabric the same. 
                    So, we want to work to design and add an importance scale that will allow the designers to choose how essential each question is to them. We will measure success of this by seeing the completion rate of the quiz, as well as conducting more user tests when we add in the new feature.
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
                </div>
            </div>
        )
    }
}

const video = {
    width: '90%', 
    boxShadow: '0 0 50px 0 rgba(0,0,0,0.35)',
    borderRadius: '6px',
    backgroundColor:'#F8F8F8',
    marginLeft:'5%',
}