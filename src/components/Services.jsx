import { Col, Container, Row } from "react-bootstrap";
import Icon from './Icon'
import services from "../servicesDB";


export default function Services() {
  return (
    <Container>
    <h2 className="text-center m-4">SERVICIOS</h2>
        <Row>
            {services.map(service => (
                <Col key={service.id} >
                <Icon
                    iconName={service.icon}
                    size={30} />
                <h2>{service.name}</h2>
                <p>{service.description}</p>
            </Col>
            ))}
        </Row>
    </Container>
  )
}
