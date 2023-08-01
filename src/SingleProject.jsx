import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Navigation from './Navigation'
import projects from './projectsDB'

export default function SingleProject() {

    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
      const foundProject = projects.find((project) => project.id === parseInt(id));
      setProject(foundProject)
    }, [id])

    if(!project) {
        return <div>No project found</div>
    }
    
  return (
    <>
    <Navigation />
      <Container className="single p-4" fluid>
        <h2 className="mb-4">{project.name}</h2>
        <Row>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Text>{project.price}</Card.Text>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>description mas grande aca</Card.Text>
              </Card.Body>
            </Card>
          </Col>
                <Link to="/proyectos">
                  <Button variant="info" >Todos los proyectos</Button>
                </Link>
        </Row>
      </Container>

    </>
  )
}
