import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WhatsApp Clone",
      description: "React Native + Express + MongoDB. Real-time chat with WebSocket, push notifications, and contact sync.",
      imgUrl: projImg1,
    },
    {
      title: "To-Do App",
      description: "Simple productivity app built using React Native and Redux Toolkit.",
      imgUrl: projImg2,
    },
    {
      title: "Hospital App",
      description: "MERN stack app with separate roles for hospitals, doctors, and patients. Includes appointment management.",
      imgUrl: projImg3,
    },
    {
      title: "CRM - The French Cake Company",
      description: "Custom CRM for lead management, form automation, and Zoho Campaign integration used by a real client.",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>These are some real-world and personal projects I've built during my 8-month development journey using React Native, Express, MongoDB, and Salesforce.</p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
