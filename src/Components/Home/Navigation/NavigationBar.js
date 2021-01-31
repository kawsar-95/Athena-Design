import React, { useState } from 'react';
import './NavigationBar.css';
import { Navbar, Container, Nav, Modal, Button, Form, } from 'react-bootstrap';
import logo from '../../../Images/Group 86.png';
import emailjs from 'emailjs-com';

const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function sendEmail(e) {
        emailjs.sendForm('gmail', 'template_qvl7vwa', e.target, 'user_uktqzsfvvtFj4eiijhidP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="link">Home</Nav.Link>
                    <Nav.Link className="link">About</Nav.Link>
                    <Nav.Link className="link">Services</Nav.Link>
                    <Nav.Link className="link">Pricing</Nav.Link>
                    <Nav.Link className="link">Our Team</Nav.Link>
                    <Nav.Link><button onClick={handleShow} className="contactBtn">Contact us</button></Nav.Link>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Contact With Us</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={sendEmail}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="user_name" require placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="user_email" require placeholder="Enter Your Email" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control name="message" as="textarea" rows={3} require placeholder="Message..."/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button><input className="btn text-white" type="submit" value="Send" /></Button>
                        </Modal.Footer>
                    </Modal>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;