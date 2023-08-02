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
    <>
      <Container className="single p-4" fluid>
        <h2 className="mb-4 text-light">{project.name}</h2>
        <Row>
          <Col xs={12} sm={8} md={8} lg={6}>
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>Herramientas usadas para el desarrollo: </Card.Text>
                <ul>
                  {project.details.map((detail, i) => (
                    <li key={`detail-${i}`}>{detail}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Link to="/proyectos">
            <Button variant="light">Todos los proyectos</Button>
          </Link>
        </Row>
      </Container>
    </>
  );
}
