import { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import projects from '../projectsDB'

 
export default function MoreProjects() {

  useEffect(() => {
    window.scrollTo(0 , 0);
  }, [])


  return (
    <div className='more'>
      <h2>PROYECTOS</h2>
        <div className='more-container'>
          <Container>
            <Row>
              {projects.map(project => (
                <Col key={project.id}  xs={10} sm={6} md={6} lg={4}>
                  <Card>
                    <Card.Img className='img-fluid' variant='top' src={project.imageUrl} />
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Link to={project.url} target='_blank' rel='noreferrer'>
                        <Button variant='outline-light' size='sm'>Visitar</Button>
                      </Link>{' '}
                      <Link to={`/proyectos/${project.id}`}>
                        <Button className='details' variant='info' size='sm'>Detalles</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <Link to='/' relative='path'>
            <Button className='m-4' variant='outline-dark'>Volver</Button>
          </Link>
        </div>
    </div>
  )
}
          

