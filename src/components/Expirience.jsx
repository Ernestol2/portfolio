import { Col, Container, Row } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import bootstrapIcon from '../icons/bootstrap-icon.png';
import cssIcon from '../icons/css-icon.png';
import htmlIcon from '../icons/html-icon.png';
import jsIcon from '../icons/js-icon.png';
import reactIcon from '../icons/react-icon.png';
import expressIcon from '../icons/express-icon.png';
import mongoIcon from '../icons/mongo-icon3.png';
import gitIcon from '../icons/git-icon2.png';
import nodeIcon from '../icons/node-icon.png';

function Expirience() {
  return (
    <section className="Expirience" id="skills">
    <h2>TECNOLOGIAS</h2>
        <div className="Expirience-container">
            <Container>
                <Row className="g-4">
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6}>
                            <img src={bootstrapIcon} alt="bootstrap icon" />
                            <h4>Bootstrap</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6}>
                            <img src={cssIcon} alt="css icon" />
                            <h4>CSS</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6} sm>
                            <img src={jsIcon} alt="javascript icon" />
                            <h4>JavaScript</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6} sm>
                            <img src={nodeIcon} alt="nodejs icon" />
                            <h4>Node.js</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6} sm>
                            <img src={htmlIcon} alt="html icon" />
                            <h4>HTML</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6} sm>
                            <img src={reactIcon} alt="react icon" />
                            <h4>React.js</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6} sm>
                            <img src={expressIcon} alt="express icon" />
                            <h4>Express</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6} sm>
                            <img src={mongoIcon} alt="mongodb icon" />
                            <h4>MongoDB</h4>
                        </Col>
                    </LazyLoad>
                    <LazyLoad height={150} width={150} threshold={0.95}>
                        <Col className="skills" xs={6} sm>
                            <img src={gitIcon} alt="git icon" />
                            <h4>Git</h4>
                        </Col>
                    </LazyLoad>
                </Row>                
            </Container>
        </div>
    </section>
  )
}

export default Expirience