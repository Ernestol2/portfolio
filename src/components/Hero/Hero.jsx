import { Col, Row, Stack } from 'react-bootstrap';
import { Github, Linkedin, Twitter, Discord } from 'react-bootstrap-icons';
import './hero.css'

function Hero() {
  return (
    <div className='Hero'>
      <Row className='Hero-section'> 
        <Col md="4" lg="3">
          <div className='Hero-left animate__animated animate__fadeInUp'>
                <h6>Hi, my name is</h6>
                <h1 className='fs-1'>Ernesto Lopez</h1>
                <h6>A FullStack Javascript web developer</h6>
                <br />
                <Stack direction='horizontal' gap={3}>
                  <Discord  size={40}/>
                  <Github   size={40}/>
                  <Linkedin size={40}/>
                  <Twitter  size={40}/>
                </Stack>
          </div>
        </Col>
        <Col md="8" lg="5">
          <div className='Hero-right'>
              <h4>About Me</h4>
              <br />
              <p>As a full-stack JavaScript developer, I have been studying since February 2022 through FreeCodeCamp. I successfully completed courses in frontend development using React and Bootstrap, responsive web design with HTML, CSS, and JavaScript, as well as JavaScript intermediate algorithms.</p>
              <br />
              <p>I also accomplished the backend development and APIs course, gaining knowledge of npm, Node.js, Express, and databases like MongoDB and Mongoose. Over the past six months, I have primarily focused on creating beginner and mid-level applications using React, further enhancing my skills and experience.</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Hero

{/*
<div className='Hero'> 
        <section className='Hero-section animate__animated animate__fadeInUp'>
            <div className='Hero-left'>
              <h6>Hi, my name is</h6>
              <h1 className='fs-1'>Ernesto Lopez</h1>
              <h6>A FullStack Javascript web developer</h6>
              <br />
              <Stack direction='horizontal' gap={3}>
                <Discord  size={40}/>
                <Github   size={40}/>
                <Linkedin size={40}/>
                <Twitter  size={40}/>
              </Stack>
            </div>
            <div className='Hero-right'>
              <p>I am a full-stack JavaScript developer with a passion for creating web applications. Since February 2022, I have been studying extensively on FreeCodeCamp, an online learning platform. It has provided me with a solid foundation in various aspects of web development.</p>
              <br />
              <p>During my time on FreeCodeCamp, I completed the Frontend Development course, where I gained expertise in React and Bootstrap. These frameworks have enabled me to build dynamic and visually appealing user interfaces. Additionally, I also completed the Responsive Web Design certification, which enhanced my skills in HTML, CSS, and JavaScript.</p>
            </div>
        </section>
    </div>
*/}


{/*
<p>During my time on FreeCodeCamp, I completed the Frontend Development course, where I gained expertise in React and Bootstrap. These frameworks have enabled me to build dynamic and visually appealing user interfaces. Additionally, I also completed the Responsive Web Design certification, which enhanced my skills in HTML, CSS, and JavaScript.</p>
              <br />
              <p>In my pursuit of becoming a well-rounded developer, I undertook the JavaScript Intermediate Algorithms and Backend Development with APIs courses. These courses expanded my knowledge of JavaScript and equipped me with the skills to build robust backend systems. I gained proficiency in using npm, Node.js, Express, and worked with databases like MongoDB and Mongoose.</p>
              <br />
              <p>Over the past six months, I have focused on honing my skills by creating various applications, predominantly using React. While most of these applications were aimed at beginners and had mid-level complexity, they have allowed me to apply my knowledge and gain hands-on experience. I am excited to continue growing as a developer and taking on more challenging projects in the future.</p>
*/}