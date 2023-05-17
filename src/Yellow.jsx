import { Badge, Button, Image, Stack } from "react-bootstrap";
import projectThree from './images/shop-list.png';
import cssIcon from './icons/css-icon.png';
import htmlIcon from './icons/html-icon.png';
import reactIcon from './icons/react-icon.png'; 
import expressIcon from './icons/express-icon.png';
import nodeIcon from './icons/node-icon.png';
import mongoIcon from './icons/mongo-icon.png';
import gitIcon from './icons/git-icon.png';
import bootstrapIcon from './icons/bootstrap-icon.png';
import jsIcon from './icons/js-icon.png';



function Yellow() {
  return (
    <section className="yellow">
      <div className="red-div">
      <h4 className="m-2">A CRUD app with Express and MongoDB</h4>
        <p className="m-2">
          This is a CRUD app that allows users to add, edit, and delete notes.
          Users can also add notes to a shopping list.         
        </p>
        <div>
          <div className="m-3">
            <Badge className="m-1" bg="secondary">
              Node.js
            </Badge>
            <Badge className="m-1" bg="secondary">
              Express
            </Badge>
            <Badge className="m-1" bg="secondary">
              MongoDB
            </Badge>
            <Badge className="m-1" bg="secondary">
              Bootstrap
            </Badge>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
            <img src={projectThree} alt="food app image" />
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
      <br />
      <div className="mt-4 red-div">
        <h4>Skills</h4>

        <div className="skills">
          <div className="first-set">
            <Stack direction="horizontal" gap={3}>
              <Image src={cssIcon} alt="" roundedCircle fluid/>
              <Image src={htmlIcon} alt="" roundedCircle fluid/>
              <Image src={nodeIcon} alt="" roundedCircle fluid/>
            </Stack>
            <br />
            <Stack direction="horizontal" gap={3}>
              <Image src={expressIcon} alt="" roundedCircle fluid/>
              <Image src={bootstrapIcon} alt="" roundedCircle fluid/>
              <Image src={mongoIcon} alt="" roundedCircle fluid/>
            </Stack>
            <br />
            <Stack direction="horizontal" gap={3}>
              <Image src={gitIcon} alt="" roundedCircle fluid/>
              <Image src={reactIcon} alt="" roundedCircle fluid/>
              <Image src={jsIcon} alt="" roundedCircle fluid/>
            </Stack>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Yellow
