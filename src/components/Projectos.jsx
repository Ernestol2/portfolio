import { Button, Col, Container, Row } from "react-bootstrap";
import projectOne from "../images/ecommerce-sushi.png";
import projectTwo from "../images/rutas-privadas.png";
import pagination from "../images/pagination.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Projectos() {
  return (
    <section className="Projectos" id="projects">
      <h2>PROYECTOS</h2>
      <div className="Projectos-container">
        <Container>
          <Row>
            <Col className="Projecto" lg={4} md={5} xs={10}>
              <img src={projectOne} alt="ecommerce app" />
              <h4>E-commerce</h4>
              <p>
                Este Proyecto fue creado con React, React-Router, Bootstrap,
                Materil-UI, Context API, Firebase & Local Storage.
              </p>
              <a
                href="https://jocular-crumble-48888e.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-light">Visitar sitio</Button>
              </a>
            </Col>
            <Col className="Projecto" lg={4} md={5} xs={10}>
              <img src={projectTwo} alt="Private routes app" />
              <h4>Private Routes-JWT</h4>
              <p>
                Las tecnologias usadas en este proyecto fueron: React,
                React-Router, JWT, Mongoose, MongoDB, Bcrypt, Express,Bootstrap,
                Axios & Fetch.
              </p>
              <a
                href="https://super-crostata-0b6c03.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-light">Visitar sitio</Button>
              </a>
            </Col>
            <Col className="Projecto" lg={4} md={5} xs={10}>
              <img src={pagination} alt="pagination app" />
              <h4>Pagination & Filter</h4>
              <p>
                Simple paginacion de productos usando bootstrap.
                Usando el metodo filter para filtrar los elementos que se quieran mostrar.
              </p>
              <a
                href="https://pagination-crud-mern.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-light">Visitar sitio</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Link to="/proyectos" relative="path">
        <Button className="m-4" variant="light">
          Mas Proyectos
          <ArrowRightCircle className="m-2" size={20} />
        </Button>
      </Link>
    </section>
  );
}

export default Projectos;
