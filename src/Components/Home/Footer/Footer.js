import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../Images/Logo.png';
import facebook from '../../../Images/facebook.png';
import twitter from '../../../Images/twitter.png';
import linkedin from '../../../Images/linkedin.png';
import dribble from '../../../Images/dribble.png';

const Footer = () => {
    return (
        <div className="section footer">
           <Container className="my-3">
               <Row>
                   <Col md={5} className="px-5 footer-icon mb-3">
                       <img style={{width:"120px"}} src={logo} alt=""/>
                       <p className="iconStyle">
                           <a href="#"><img src={facebook} alt=""/></a>
                           <a href="#"><img src={twitter} alt=""/></a>
                           <a href="#"><img src={linkedin} alt=""/></a>
                           <a href="#"><img src={dribble} alt=""/></a>
                       </p>
                   </Col>
                   <Col md={7}>
                        <Row className="text-secondary footer-des">
                            <Col sm={12} md={4} className="mb-3">
                                <span>Feature</span> <br/>
                                <span>Enterprise</span> <br/>
                                <span>Pricing</span>
                            </Col>
                            <Col sm={12} md={4} className="mb-3">
                                <span>About Us</span> <br/>
                                <span>Terms of Service</span> <br/>
                                <span>Security</span> <br/>
                                <span>Login</span>
                            </Col>
                            <Col sm={12} md={4} className="mb-3">
                                <span>Blog</span> <br/>
                                <span>Help Center</span> <br/>
                                <span>Contact Us</span> <br/>
                                <span>Status</span>                            
                            </Col>
                        </Row>
                        <Row className="text-secondary mt-3 text-center">
                            <Col><span>Copyright @ 2020 All rights reserved, SCIC-TEAM9</span></Col>
                        </Row>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Footer;