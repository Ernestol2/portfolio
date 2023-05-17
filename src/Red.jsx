import { Badge, Button } from "react-bootstrap";
import projectOne from "./images/ecommerce-sushi.png";
import projectTwo from "./images/rutas-privadas.png"

function Red() {
  return (
    <section className="red">
      <h2>PROJECTS</h2>
      <div className="red-div">
        <h4 className="m-2">E-commerce with React and Firebase</h4>
        <p className="m-2">
          Food app style with Bootstrap, CSS and Material UI. Also Reactjs
          Context API was used to manage the data.
        </p>
        <div>
          <div className="m-3">
            <Badge className="m-1" bg="secondary">
              React
            </Badge>
            <Badge className="m-1" bg="secondary">
              Context API
            </Badge>
            <Badge className="m-1" bg="secondary">
              Bootstrap
            </Badge>
            <Badge className="m-1" bg="secondary">
              Material-UI
            </Badge>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
            <img src={projectOne} alt="food app image" />
            <Button
              href="https://jocular-crumble-48888e.netlify.app/"
              className="m-4"
              size="sm"
              variant="outline-light"
            >
              Live Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="red-div">
      <h4 className="m-2">Privates Routes with JWT and Cookies</h4>
        <p className="m-2">  
        A private routes manager with JWT and cookies. React-router-dom and I also 
        fecth some fake users and products to give a better experience to the App.
        </p>
        <div>
          <div className="m-3">
            <Badge className="m-1" bg="secondary">
              React
            </Badge>
            <Badge className="m-1" bg="secondary">
              React-Router
            </Badge>
            <Badge className="m-1" bg="secondary">
              JWT
            </Badge>
            <Badge className="m-1" bg="secondary">
              Bootstrap
            </Badge>
            <Badge className="m-1" bg="secondary">
              MongoDB
            </Badge>
            <Badge className="m-1" bg="secondary">
              Express
            </Badge>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
            <img src={projectTwo} alt="food app image" />
            <Button
              href="https://jocular-crumble-48888e.netlify.app/"
              className="m-4"
              size="sm"
              variant="outline-light"
            >
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Red;
