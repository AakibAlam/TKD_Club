import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./activity.css";

function Activity() {
  return (
    <div>
      <Container className="activity-container">
        <Row>
          <Col sm={3} className="activity-col">
            <h2>Activities</h2>
            <ul>
              <li>Regular Exercise</li>
              <li>Basic Stretching</li>
              <li>Self defence</li>
              <li>Kicks and Punches</li>
              <li>Tae-gueks</li>
            </ul>
          </Col>
          <Col sm={5} className="activity-col">
            <h2>Venue and Timing</h2>
            <ul>
              <li>
                Taekwondo Arena, PE Ground (Opposite to the main gate of
                Stadium)
              </li>
              <li>
                06:30 pm to 08:00 pm (Monday to Friday) 06:30 pm to 07:00 pm -
                Exercise 07:00 pm to 08:00 pm - Taekwondo Practice
              </li>
            </ul>
          </Col>
          <Col sm={4} className="activity-col">
            <h2>HOW TO JOIN</h2>
            <ul>
              <li>
                Come to TKD Arena and meet our Coach or Any of Coordinator/
                Secretary present there..
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Activity;
