import LazyLoad from "react-lazy-load";
import { Row, Card, Col, Stack, Button, Badge } from 'react-bootstrap';
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio">
    <h2 className="text-light text-center p-4">Projects</h2>
      <LazyLoad height={400} threshold={0.99}>
      <Row xs={1} md={2} className="row g-4 animate__animated animate__fadeInBottomLeft">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="m-2">
            <Card.Img variant="top" src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Stack direction="horizontal" gap={3}>
                <Badge bg="dark">Firebase</Badge>
                <Badge bg="dark">React</Badge>
                <Badge bg="dark">Boostrap</Badge>
              </Stack>
              <br />
              <Stack direction="horizontal" gap={1}>
                <Button variant="outline-dark" size="sm">Live Demo</Button>
                <Button variant="outline-dark" size="sm">Github</Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </LazyLoad>
    </div>
  );
}

export default Portfolio;
