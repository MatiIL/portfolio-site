import { Modal, Image } from "react-bootstrap";
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
        <Modal.Title id="contained-modal-title-vcenter" className="">
          {props.project.name}
        </Modal.Title>
        <button
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={props.onHide}
        />
      </Modal.Header>
      <Modal.Body className="d-flex">
        <div className="long-description w-25 p-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            ullam ducimus consequatur, illum fugit dolore eius sit deserunt
            laudantium! Sapiente repellendus sed aperiam dolores hic sunt iure
            facere et doloremque sit officia excepturi nobis, veritatis non
            omnis, blanditiis unde accusantium nulla? Ea veniam nihil deserunt
            soluta fugiat exercitationem voluptas aperiam architecto! Deleniti
            odio repellat numquam sed exercitationem voluptatum corporis
            provident totam rem enim voluptas ab nihil.
          </p>
        </div>
        <div className="w-75 d-flex flex-column">
          <Image src={props.project.codeImage} className="" fluid />
         <div className="d-flex wrap">
          {props.project.technologicalStack !== undefined &&
            props.project.technologicalStack.map((technology) => (
              <div 
              className="stack m-2 ps-2 pe-2" 
              key={technology.key}
              >
                <div className="technology">
                  {technology.name}
                </div>
              </div>
            ))}
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="text-light justify-content-between">
        <div className="d-flex visit">
          <span className="text-decoration-underline">
          Visit Website
          </span>
          <div className="ms-2">
          <img src="../external-link.png" />
          </div>
          
          </div>
        <div>{'<Source Code/>'}</div>
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
