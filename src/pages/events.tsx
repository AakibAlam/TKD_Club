import Heading from "../components/heading";
import ImgCard from "../components/img-card";
import BeltTest from "../../public/belt_col.png";
import Republic from "../../public/republic.png";
import Fighting from "../../public/fighting.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Events() {
  return (
    <>
      <Heading
        title="EVENTS"
        subtitle="What We Do."
        description="Besides the daily exercise at Taekwondo Arena, We also conduct various events like Belt Promotion Test at regular intervals to develop the healthy and competitive nature among students. We also participate in Poomsae or Fight competitions organised near Kanpur. We also do a demonstration of our skills on Republic day and Independence day every year in auditorium."
      ></Heading>

      <Container>
        <Row>
          <Col sm={6}>
            <ImgCard
              image={BeltTest}
              title="Belt Promotion Test"
              desc="dfjhuiaeidskl"
            />
          </Col>
          <Col sm={6}>
            <ImgCard
              image={Republic}
              title="Republic Day Events"
              desc="dfjhuiaeidskl"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <ImgCard
              image={Fighting}
              title="Fighting Competition"
              desc="dfjhuiaeidskl"
            />
          </Col>
          <Col sm={6}>
            <ImgCard
              image={Republic}
              title="Independencd Day Events"
              desc="dfjhuiaeidskl"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Events;
