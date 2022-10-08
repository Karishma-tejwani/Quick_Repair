import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../Style/Style.css";
import Background from "../Components/Background";

function HomeCleaning() {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1234/getServiceTypeByName?name=Home Cleaning", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setService(res));
  });

  return (
    <>
      <Background />
      <div>
        <h1 className="text-center" style={{ marginTop: "8%" }}>
          Home Cleaning Service
        </h1>
        <Container
          className="shadow p-3 mt-5  bg-body rounded"
          style={{ marginTop: "150px" }}
        >
          <Row>
            {service.map((val, index) => {
              return (
                <>
                  <Col xs={12} md={10} lg={6}>
                    {/* <h2 className="text-center mt-5">Home Cleaning Service</h2> */}
                    <p className="fs-5 mt-5 mx-2">{val.description}</p>
                    <ul type="square" className="fs-5">
                      <li>Dusting</li>
                      <li>Sweeping</li>
                      <li>Vacuuming</li>
                      <li>Mopping</li>
                      <li>Restroom Cleaning</li>
                    </ul>
                    <p className="fs-2 mt-5">Rs.{val.charges}</p>
                    <Button
                      className="fs-5 float-end btn"
                      style={{ width: "30%", marginTop: "-10%" }}
                    >
                      Book a Service
                    </Button>
                  </Col>
                  <Col xs={6} md={6} lg={6}>
                    <img
                      src={val.image}
                      alt="Home Cleaning"
                      className="cleaningImg"
                    />
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </div>

      <Container style={{ marginTop: "32%" }}>
        <h1 className="text-center">Feedback</h1>
        <Row>
          <Card className="mx-4 my-3" style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title>Quick Repair</Card.Title>
              <Card.Subtitle>
                <span style={{ color: "goldenrod" }}>
                  {" "}
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mx-4 my-3" style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title>Justdial</Card.Title>
              <Card.Subtitle>
                <span style={{ color: "goldenrod" }}>
                  {" "}
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mx-4 my-3" style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title>Kam Kaj</Card.Title>
              <Card.Subtitle>
                <span style={{ color: "goldenrod" }}>
                  {" "}
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default HomeCleaning;
