import { Button, Col, Container, Row } from "react-bootstrap";
import projectOne from './images/ecommerce-sushi.png';
import projectTwo from './images/rutas-privadas.png';
import projectThree from './images/shop-list.png';
import { ArrowRightCircle } from 'react-bootstrap-icons'

function Projectos() {
  return (
    <section className="Projectos" id="projects">
        <h2>PROYECTOS</h2>
        <div className="Projectos-container">
        <Container>
            <Row>
                <Col className="Projecto" lg={4} md={12}>
                    <img src={projectOne} alt="ecommerce app" />
                    <h4>E-commerce</h4>
                    <p>Este Proyecto fue creado con React, React-Router, Bootstrap, Materil-UI, Context API, Firebase & Local Storage.</p>
                    <Button variant="outline-dark">
                        <a href="https://jocular-crumble-48888e.netlify.app" target="_blank" rel="noopener noreferrer">
                        Visitar sitio
                        </a>
                    </Button>
                </Col>
                <Col className="Projecto" lg={4} md={12}>
                    <img src={projectTwo} alt="Private routes app" />
                    <h4>Private Routes-JWT</h4>
                    <p>Las tecnologias usadas en este proyecto fueron: React, React-Router, JWT, Mongoose, MongoDB, Bcrypt, Express,Bootstrap, Axios & Fetch.</p>
                    <Button variant="outline-dark">
                        <a href="https://super-crostata-0b6c03.netlify.app" target="_blank" rel="noopener noreferrer">
                        Visitar sitio
                        </a>
                    </Button>
                </Col>
                <Col className="Projecto" lg={4} md={12}>
                    <img src={projectThree} alt="CRUD app" />
                    <h4>CRUD App</h4>
                    <p>En este proyecto usamos el patron de diseño MVC (modelo vista controlador), Nodejs, Mongoose, MongoDB, Express, Bootstrap.</p>
                    <Button variant="outline-dark">
                        <a href="https://nodejs-mongodb-tasks-crud-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                        Visitar sitio
                        </a>
                    </Button>
                </Col>
            </Row>
        </Container>
        </div>
        <Button className="m-4" variant="info">
            Mas Proyectos
            <ArrowRightCircle className="m-2" size={20}/>
        </Button>
    </section>
  )
}

export default Projectos