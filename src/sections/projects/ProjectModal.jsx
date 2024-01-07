import { Modal, Image } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import "react-accessible-accordion/dist/fancy-example.css";
import "./ProjectSection.css";

const ProjectModal = (props) => {
  return (
    <Modal
      {...props}
      className="modal-background"
      fullscreen={true}
      scrollable={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.project.name}
        </Modal.Title>
        <button
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={props.onHide}
        />
      </Modal.Header>
      <Modal.Body className="long-description d-flex">
        <Accordion
          allowZeroExpanded
          className="project-info d-flex"
        >
          {props.project.fullInfo !== undefined &&
            props.project.fullInfo.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {item.text}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
        </Accordion>
        <div className="code-img d-flex flex-column">
          <Zoom classDialog="custom-zoom">
          <Image src={props.project.codeImage} fluid id="my-tooltip-anchor" />
          </Zoom>
          <div className="stack-wrapper d-flex wrap">
            {props.project.technologicalStack !== undefined &&
              props.project.technologicalStack.map((technology) => (
                <div className="stack m-2 ps-2 pe-2" key={technology.key}>
                  <div className="technology">{technology.name}</div>
                </div>
              ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="text-light justify-content-between">
        <a
          href={props.project.siteUrl}
          target="_blank"
          rel="noreferrer"
          className="d-flex visit"
        >
          <span className="text-decoration-underline text-light">
            Visit Website
          </span>
          <div className="ms-2">
            <img src="../external-link.png" />
          </div>
        </a>
        <a
          href={props.project.githubRepo}
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light"
        >
          {"<Source Code/>"}
        </a>
        <div
          className="modal-close-btn d-flex justify-content-center"
          onClick={props.onHide}
        >
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
