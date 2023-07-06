import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import calculatorReact from './images/calculator-react.png'
import colorFlipper from './images/color-flipper.png' 
import drumMachine from './images/drum-machine.png'
import pomodoroClock from './images/pomodoro-clock.png'
import portafolio from './images/portafolio.png'
import ecommerce from './images/sushi-store.png'

 
export default function MoreProjects() {
  return (
    <div className='more'>
      <h2>OTROS PROYECTOS</h2>
        <div className='more-container'>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src={colorFlipper} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                    </Card.Text>
                    <Button variant="outline-dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card style={{ width: '24.5rem' }}>
                  <Card.Img variant="top" src={drumMachine} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                    </Card.Text>
                    <Button variant="outline-dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Card style={{ width: '24.5rem' }}>
                  <Card.Img variant="top" src={ecommerce} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                    </Card.Text>
                    <Button variant="outline-dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card style={{ width: '24.5rem' }}>
                  <Card.Img variant="top" src={calculatorReact} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                    </Card.Text>
                    <Button variant="outline-dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Card style={{ width: '24.5rem' }}>
                  <Card.Img variant="top" src={portafolio} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                    </Card.Text>
                    <Button variant="outline-dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card style={{ width: '24.5rem' }}>
                  <Card.Img variant="top" src={pomodoroClock} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                    </Card.Text>
                    <Button variant="outline-dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Link to='/' relative='path'>
          <Button className='m-4' variant='dark'>
            Volver
          </Button>
        </Link>
    </div>
  )
}
