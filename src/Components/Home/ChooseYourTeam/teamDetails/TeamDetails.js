import React from "react";
import { Card, Col, Nav } from "react-bootstrap";

const TeamDetails = ({ team }) => {
  return (
    <Col md={3} sm={4} className="m-auto ">
      <Card className="text-center card-team shadow mb-3">
        <Card.Body>
          <Card.Title className="team-price">${team.price}</Card.Title>
          <p>{team.for}</p>
          <hr className="team-hr" />
          <Nav className="flex-column">
            <Nav.Link href="/home">{team.li1}</Nav.Link>
            <Nav.Link eventKey="link-1">{team.li2}</Nav.Link>
            <Nav.Link eventKey="link-2">{team.li3}</Nav.Link>
            <Nav.Link eventKey="link-3">{team.li4}</Nav.Link>
            <Nav.Link eventKey="link-4">{team.li5}</Nav.Link>
            <Nav.Link eventKey="link-5">{team.li6}</Nav.Link>
            <Nav.Link eventKey="link-6">{team.li7}</Nav.Link>
          </Nav>
          <button className="contactBtn order-btn">Order Now</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamDetails;
