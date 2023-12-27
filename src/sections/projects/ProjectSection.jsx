import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { projectsArray } from "./projectsArray";
import { Carousel, Image, Button, ButtonGroup } from "react-bootstrap";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [modalShow, setModalShow] = useState();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div
        id="projects"
        className="projects-wrapper text-light d-flex flex-column justify-content-center "
      >
        <h1>My Projects Portfolio</h1>
        <div className="">
          <Carousel 
          className="mt-3" 
          indicators={false}
          >
            {projectsArray.length > 0 &&
              projectsArray.map((project) => (
                <Carousel.Item key={project.key}>
                  <Image
                    className="project-img w-75"
                    src={project.imageSrc}
                    thumbnail
                    fluid
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                  <div 
                  className="text-dark details-btn d-inline-flex justify-content-center ms-2 mt-3"
                  onClick={() => setModalShow(true)}
                  ><span>
                    View Details

                  </span>
                    </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </div>

      <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ProjectSection;
