import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoachImg from "../../../public/neutral.jpg";
import { Button } from "react-bootstrap";
import "./coach.css";

function Coach() {
  return (
    <div className="coach-container">
      <Row className="align-items-center justify-content-center">
        <Col sm={1}></Col>
        <Col className="img-item" sm={4}>
          <img src={CoachImg} alt="Coach" className="coach-img" />
          <h1 style={{ fontSize: "60px" }}>Balram Yadav </h1>
          <h1>5th Dan Black Belt</h1>
        </Col>
        <Col sm={1}></Col>
        <Col className="txt-item d-flex align-items-center" sm={5}>
          <div>
            <h1 style={{ fontSize: "60px" }}>Instructor</h1>
            <p className="info">
              Coach Balram Yadav is a 5th Dan Black Belt holder in Taekwondo. He
              has been teaching Taekwondo in IIT Kanpur for the past 20 years.
              He has trained many students who have represented IIT Kanpur in
              various national level competitions. He has also been awarded the
              best coach award by IIT Kanpur.
            </p>
            <Button className="btn">Show more...</Button>
          </div>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </div>
  );
}

export default Coach;
