import { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import calculatorReact from './images/calculator-react.png'
import colorFlipper from './images/color-flipper.png' 
import drumMachine from './images/drum-machine.png'
import pomodoroClock from './images/pomodoro-clock.png'
import portafolio from './images/portafolio.png'
import ecommerce from './images/sushi-store.png'

 
export default function MoreProjects() {

  useEffect(() => {
    window.scrollTo(0 , 0);
  }, [])


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
                    <Card.Title>Color Flipper</Card.Title>
                    <Card.Text>
                      Proyecto para generar colores hex aleatorios usando HTML, CSS y javaScript.
                    </Card.Text>
                    <a href="https://hex-color-generator-el.netlify.app/" target='_blank' rel='noreferrer'>
                    <Button variant="outline-light">Visitar</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src={drumMachine} />
                  <Card.Body>
                    <Card.Title>Drum Machine</Card.Title>
                    <Card.Text>
                      Proyecto para recrear una bateria. Una pequeña pantalla muestra el sonido reproducido.
                    </Card.Text>
                    <a href="https://super-torte-46389c.netlify.app/" target='_blank' rel='noreferrer'>

                      <Button variant="outline-light">Visitar</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src={ecommerce} />
                  <Card.Body>
                    <Card.Title>E-commerce</Card.Title>
                    <Card.Text>
                      Proyecto creado con React. Usando un context API para manejar el estado global de la aplicacion.
                    </Card.Text>
                    <a href="https://jocular-crumble-48888e.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button variant="outline-light">Visitar</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src={calculatorReact} />
                  <Card.Body>
                    <Card.Title>javaScript Calculator</Card.Title>
                    <Card.Text>
                      Proyecto creado con React y bootstrap para los estilos. Una simple pero muy eficiente calculadora.
                    </Card.Text>
                    <a href="https://new-calculator-elopez.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button variant="outline-light">Visitar</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src={portafolio} />
                  <Card.Body>
                    <Card.Title>Portafolio</Card.Title>
                    <Card.Text>
                      Vite.js, React-router, React-bootstrap, React-lazy-load son algunos de los paquetes que se usaron para su construccion.
                    </Card.Text>
                    <a href="https://ernesto-lopez-portfolio.netlify.app/" target='_blank' rel='noreferrer'>
                      <Button variant="outline-light">Visitar</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
              <Card style={{ width: '23rem' }}>
                  <Card.Img variant="top" src={pomodoroClock} />
                  <Card.Body>
                    <Card.Title>Pomodoro Clock</Card.Title>
                    <Card.Text>
                      Reloj de cuenta regresiva desarrollado con javaScript.
                      Simula un reloj para descansar despues de un periodo de trabajo determinado.  
                    </Card.Text>
                    <a href="https://bucolic-mooncake-46cb13.netlify.app/" target='_blank' rel='noreferrer'>
                    <Button variant="outline-light">Visitar</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Link to='/' relative='path'>
          <Button className='m-4' variant='outline-dark'>
            Volver
          </Button>
        </Link>
    </div>
  )
}
