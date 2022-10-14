import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, NavLink } from "react-bootstrap";
import "../Style/Style.css";
import Background from "../Components/Background";
import { useNavigate } from "react-router-dom";

function ElectricalAppliance() {
  const [service, setService] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:1234/getServiceTypeByName?name=electrical", {
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

  function handleClick() {
    navigate("/booking");
  }

  return (
    <>
      <Background />
      <div>
        <h1 className="text-center" style={{ marginTop: "8%" }}>
          Electrical Appliance Service
        </h1>

        <div className="offset-md-2">
          <Container
            className="shadow p-3 mt-5  bg-body rounded"
            style={{ marginTop: "150px" }}
          >
            <Row>
              {service.map((val, index) => {
                return (
                  <>
                    <Col xs={12} md={10} lg={6}>
                      <p className="fs-5 mt-5 mx-2">{val.description}</p>
                      <ul type="square" className="fs-5">
                        <li>Maintain and repair electrical control</li>
                        <li>lighting systems</li>
                      </ul>
                      <p className="fs-2 mt-5">Rs.{val.charges}/-</p>
                      <NavLink
                        to={"/booking"}
                        onClick={handleClick}
                        className="fs-5 float-end btn btn-primary"
                        style={{
                          width: "30%",
                          marginTop: "-10%",
                          color: "white",
                        }}
                      >
                        Book a Service
                      </NavLink>
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
      </div>

      <h1 style={{ marginLeft: "45%", marginTop: "5%" }}>Feedback</h1>
      <Container>
        <div style={{ marginTop: "4%", marginLeft: "20%", padding: "5px" }}>
          <Row>
            {feedback.map((value, index) => {
              return (
                <Card
                  className="mx-auto my-2"
                  style={{ width: "22rem" }}
                  key={index}
                >
                  <Card.Body>
                    <Card.Title>Quick Repair Services</Card.Title>
                    <Card.Subtitle>
                      <span style={{ color: "goldenrod" }}>
                        {" "}
                        <i class="zmdi zmdi-star"></i>
                        <i class="zmdi zmdi-star"></i>
                        <i class="zmdi zmdi-star"></i>
                        <i class="zmdi zmdi-star"></i>
                      </span>
                    </Card.Subtitle>
                    <Card.Text>{value.review}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ElectricalAppliance;
