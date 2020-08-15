import React, { Component } from 'react'
import './home.css'
import persImage from '../imgs/pinkLakePhoto.JPG';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
   
    handleScroll=(e)=>{
        console.log(window.scrollY)
        if(window.scrollY>50){
            this.setState({display:false, autoplay: true})
        }else {
            this.setState({display:true})
        }
    }

render(){   
    return(
        <div className='bodyy'>
            
            <Header></Header>
             
            <div className='introSummary' style={{overflowX:'hidden'}}>
                <br></br><br></br><br></br>
                <p style={{marginLeft:'5%', marginTop: '5%', fontSize:'50px', textAlign: 'left', fontWeight:'lighter', position:'fixed'}}>
                    Hi, I'm Divya!
                    </p>
                    <br></br><br></br><br></br><br></br>
                <p style={{marginLeft:'5%', marginTop: '5%', fontSize:'25px', textAlign: 'left', fontWeight:'lighter', fontFamily: 'Niveau Grotesk', position:'fixed'}}>
                Third year student @ Northwestern
                <br></br>
                Computer Science Major, Legal Studies Minor, Segal Design Certificate
                <br></br>
                Front-end Developer and Product Designer, with a focus in UX
                <br></br>
                Passionate about tech for social impact
                <br></br>
                <br></br>
                <Button className='connectButton'
                        style={{backgroundColor: this.state.bgColor}}
                        href='/play'>CONNECT WITH ME
                </Button>
                </p>  
            </div>


            <div className='aboutMe' style={{position:'absolute', overflowX:'hidden'}}>
                    <Row>
                        <Col xs = {6} style={{overflow:'hidden'}}>
                            <img src={persImage} alt='personalImage' style={{marginTop:'30px',width:'55%', height:'90%', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                        </Col>
                        <Col xs = {5} style={{overflow:'hidden',marginTop:'4%'}}>
                            <h1 style={{fontFamily: 'PMingLiU-ExtB', opacity:'50%', textAlign: 'center', overflowX:'hidden'}}>
                                ABOUT ME
                            </h1>
                            <p style={{fontSize:'20px', fontWeight:'lighter', fontFamily: 'Niveau Grotesk', textAlign: 'justify', overflowX:'hidden'}}>
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

