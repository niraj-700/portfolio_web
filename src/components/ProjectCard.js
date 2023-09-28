import React from 'react';
import { Card, CardBody, CardTitle, CardText, Col, Row } from 'react-bootstrap';

function ProjectCard({ projects }) {
  return (
    <Row>
      {projects.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={34}>
          <Card>
          <Card.Img variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectCard;
