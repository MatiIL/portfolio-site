import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { projectsArray } from "./projectsArray";
import { Carousel, Image } from "react-bootstrap";
import { Tooltip } from 'react-tooltip';
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
          <Carousel 
          className="mt-3" 
          controls={false} 
          interval={1500}
          slide={true}
          wrap={true}
          pause='hover'
          >
            {projectsArray.length > 0 &&
              projectsArray.map((project) => (
                <Carousel.Item key={project.key} >
                  <Image
                    className="w-75"
                    src={project.imageSrc}
                    thumbnail
                    fluid
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={project.shortDescription}
                    data-tooltip-delay-show={500}
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
          <Tooltip id="my-tooltip" place="right"/>
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
