import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import laundry from "../images/laundry.png";
import Plumber from "../images/Plumber.png";
import Image from "react-bootstrap/Image";
import "../Style/Style.css";

function AllServices() {
  return (
    <>
      <Container>
        <Row xs={1} md={2}>
          <Col className="col1">
            <Image src={laundry} roundedCircle></Image>
            <h2>Plaining</h2>
          </Col>
          <Col className="col2">
            <Image src={laundry} roundedCircle className="image"></Image>
            <br />
            <h1>Services</h1>
          </Col>
          <Col className="col3">
            <Image src={Plumber} roundedCircle></Image>
            <h2 className="head">Goal</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllServices;
