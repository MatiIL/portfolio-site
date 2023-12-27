import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [modalShow, setModalShow] = useState();

  return (
    <>
      <div
        id="projects"
        className="projects-wrapper text-light d-flex flex-column justify-content-center "
      >
        <h1>Projects</h1>
        <Carousel className="mt-3">
          <Carousel.Item>
            <Image className="w-75" src="../payNroll2.png" thumbnail fluid />
          </Carousel.Item>
        </Carousel>
        <h3 className="mt-3">payNroll</h3>
        <p>
          Fantasy Basketball gaming platform, used by me and 10 other league
          members.
        </p>
        <div
          className="project-details mx-auto"
          onClick={() => setModalShow(true)}
        >
          View Details
        </div>
      </div>
      <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ProjectSection;
