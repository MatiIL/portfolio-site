import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Introduction.css";

const Introduction = () => {
    const [showParagraph, setShowParagraph] = useState(false);
  return (
    <Container id="hero">
      <Row>
        <Col className="d-flex flex-column justify-content-between">
          <div>
            <span>Creative. </span>
            <span>Self-learner. </span>
            <span>Team Player.</span>
          </div>
          <div>
            <TypeAnimation
              sequence={[
                "My name is Mati and I love writing articles",
                1000,
                "My name is Mati and I love writing poetry",
                1000,
                "My name is Mati and I love writing code",
                1000,
                () => setShowParagraph(true)
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={0}
            />
          </div>
          <p className={showParagraph? 'visible' : 'invisible'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fuga, eaque et neque accusamus vero minus aperiam deserunt quas minima dolor voluptates velit quia ipsam. Explicabo doloribus excepturi necessitatibus nobis.
        </p>
        </Col>
        <Col xs={6} md={4}>
          <Image src="../mic-pic.jpg" fluid roundedCircle />
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
