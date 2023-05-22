import { Button, Col, Container, Row } from "react-bootstrap";
import projectOne from './images/ecommerce-sushi.png';
import projectTwo from './images/rutas-privadas.png';
import projectThree from './images/shop-list.png';
import { ArrowRightCircle } from 'react-bootstrap-icons'

function Projectos() {
  return (
    <section className="Projectos" id="projects">
        <h2>PROJECTS</h2>
        <div className="Projectos-container">
            <Container>
            <Row>
                <Col className="Projecto" lg={4} md={12}>
                    <img src={projectOne} alt="ecommerce app" />
                    <h4>E-commerce</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, harum.</p>
                    <Button variant="outline-dark">
                        <a href="https://jocular-crumble-48888e.netlify.app" target="_blank" rel="noopener noreferrer">
                        Live Demo
                        </a>
                    </Button>
                </Col>
                <Col className="Projecto" lg={4} md={12}>
                    <img src={projectTwo} alt="Private routes app" />
                    <h4>JWT & Cookies</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, harum.</p>
                    <Button variant="outline-dark">
                        <a href="https://super-crostata-0b6c03.netlify.app" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </Button>
                </Col>
                <Col className="Projecto" lg={4} md={12}>
                    <img src={projectThree} alt="CRUD app" />
                    <h4>CRUD App</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, harum.</p>
                    <Button variant="outline-dark">
                        <a href="https://nodejs-mongodb-tasks-crud-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </Button>
                </Col>
            </Row>
            </Container>
        </div>
        <Button className="m-4" variant="info">
            More Projects
            <ArrowRightCircle className="m-2" size={20}/>
        </Button>
    </section>
  )
}

export default Projectos