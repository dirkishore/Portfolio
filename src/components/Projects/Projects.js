import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import CollegeSocialMedia from "../../Assets/Projects/CollegeSocialMedia.png";
import memeGenerator from "../../Assets/Projects/memeGenerator.png";
import suicide from "../../Assets/Projects/suicide.png";
import spicy from "../../Assets/Projects/spicy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memeGenerator}
              isBlog={false}
              title="Meme Generator"
              description="Meme Generator is a website where we can generate our memes and share it in any social media sites. It is build on React Js. Technologies used: Axios, JSON."
              ghLink="https://github.com/dirkishore/meme-generator.git"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spicy}
              isBlog={false}
              title="Spicy"
              description="Spicy is my mini Project which is created to enhance my Designing Skills. In this website we can buy all the spices like chilli powder, Turmeric, milk masala, Tea masala, etc,. It is Build on React.Js, Bootstrap."
              ghLink="https://github.com/dirkishore/E-Commerce.git"
              demoLink="https://dirkishore.github.io/E-Commerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CollegeSocialMedia}
              isBlog={false}
              title="College Social Media"
              description="A College Social Media application is a web-based programme that is tailored to a specific college. This curriculum brings all students on campus together, allowing them to meet new individuals throughout their time at college. Managed the development of an information-sharing platform for placement officers, enabling streamlined communication and coordination on upcoming college events."
              ghLink="https://github.com/dirkishore/College_Social_Media.git"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
