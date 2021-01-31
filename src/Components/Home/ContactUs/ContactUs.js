import React, { useState } from 'react';
import image2 from '../../../Images/image2.png';
import { Col, Container, Row, Modal, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactUs = () => {
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
        <div className="section">
            <Container className="my-2">
                <Row>
                    <Col md={6}>
                        <div className="p-3">
                            <img className="img-fluid" src={image2} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-4">
                            <h2 className="mt-5 pt-5 font-weight-bold">Stay Running and Project</h2>
                            <p className="mt-3 text-secondary">
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letter. 
                            </p>
                            <button onClick={handleShow} className="contactBtn mt-3">Contact Us</button>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;