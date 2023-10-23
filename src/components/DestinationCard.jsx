import { Card, Col } from "react-bootstrap";

export const DestinationCard = ({ name, accommodations, image }) => {
  return (
    <Col md={2} style={{ margin: "20px" }}>
      <Card style={{ border: "none" }} className="mb-4">
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{accommodations}</Card.Text>
        </Card.Body>l
      </Card>
    </Col>
  );
};
