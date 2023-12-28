import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { projectsArray } from "./projectsArray";
import { Carousel, Image } from "react-bootstrap";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [modalShow, setModalShow] = useState();
  const [projectDetails, setProjectDetails] = useState({});

  return (
    <>
      <div
        id="projects"
        className="projects-wrapper d-flex flex-column justify-content-center "
      >
        <div className="">
        <div className="align-self-start fs-3">
            <span className="projects-array">{'projectsArray'}.</span>
            <span className="map-method">{'map'}</span>
            <span className="outer-parantheses">{'('}</span>
            <span className="inner-parantheses">{'('}</span>
            <span className="project-param">{'project'}</span>
            <span className="inner-parantheses">{')'}</span>
            <span className="projects-array">{'=>'}</span>
            <span className="inner-parantheses">{' ('}</span>
            </div>
            </div>
        <div>
          <Carousel className="mt-3" controls={false} pause={false}>
            {projectsArray.length > 0 &&
              projectsArray.map((project) => (
                <Carousel.Item key={project.key} interval={2500}>
                  <Image
                    className="w-75"
                    src={project.imageSrc}
                    thumbnail
                    fluid
                  />
                  <Carousel.Caption></Carousel.Caption>
                  <div
                    className="details-btn d-inline-flex justify-content-center ms-2 mt-3"
                    onMouseEnter={() => setProjectDetails(project)}
                    onClick={() => setModalShow(true)}
                  >
                    <span>View Details</span>
                  </div>
                  <ProjectModal
                    project={projectDetails}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div className="fs-3 align-self-center mt-3">
          <span className="inner-parantheses">{')'}</span>
          <span className="outer-parantheses">{')'}</span>
          <span>{';'}</span>
          </div>
      </div>
    </>
  );
};

export default ProjectSection;
