import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../Style/Style.css";
import Background from "../Components/Background";

function HomeCleaning() {
  const [service, setService] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1234/getServiceTypeByName?name=Home Cleaning", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setService(res));
  });

  useEffect(() => {
    fetch("http://localhost:1234/getAllFeedback", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setFeedback(result);
      });
  }, []);

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
          {feedback.map((value, index) => {
            return (
              <Card
                className="mx-4 my-3"
                style={{ width: "22rem" }}
                key={index}
              >
                <Card.Body>
                  <Card.Title>Quick Repair Services</Card.Title>
                  <Card.Subtitle>{value.rating}</Card.Subtitle>
                  <Card.Text>{value.review}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default HomeCleaning;
