import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import projects from "../projectsDB";

export default function SingleProject() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(
      (project) => project.id === parseInt(id)
    );
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <div className="no-project">
              <Container>
              <h2 className="text-light" >Proyecto no encontrado</h2>
              <Link to="/proyectos">
                <Button variant="light">Volver</Button>
              </Link>
              </Container>
          </div>
  }

  return (
    <div className="single p-1">
    <h2 className="mb-4 mt-4 text-light">{project.name}</h2>
      <Container className="" fluid>
        <Row>
          <Col xs={12} sm={8} md={8} lg={6}>
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Text><i>Herramientas usadas para el desarrollo: </i></Card.Text>
                <ul>
                  <Row>
                  {project.details.map((detail, i) => (
                    <Col key={`detail-${i}`} xs={4} md={4} >
                    <li><b>{detail}</b></li>
                    </Col>
                  ))}
                  </Row>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Link to="/proyectos">
            <Button variant="light">Todos los proyectos</Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
}
