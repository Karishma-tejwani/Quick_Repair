import { useState, useEffect } from "react";
import apiCall from "../Components/apiCall";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Style.css";

function ElectricalAppliance() {
  const [service, setService] = useState([]);
  const [feedback, setFeedback] = useState([]);
  // const getSeviceType = () => {
  //   apiCall("getServiceTypeByName?name=Cleaning", null, "GET", null, null)
  //     .then((res) => {
  //       console.log(res);
  //       setService(() => res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getSeviceType();
  // }, []);

  useEffect(() => {
    fetch("http://localhost:1234/getServiceTypeByName?name=mechanic", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setService(res));
  });

  useEffect(() => {
    fetch("http://localhost:1234/getFeedbackByRating?rating=5", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setFeedback(res));
  });

  return (
    <div>
      <Container
        className="shadow p-3 mb-5 bg-body rounded"
        style={{ marginTop: "150px" }}
      >
        <Row>
          {service.map((val, index) => {
            return (
              <>
                <Col xs={12} md={10} lg={6}>
                  <h2 className="text-center mt-5">
                    Electrical Appliances Service
                  </h2>
                  <p className="fs-5 mt-4 mx-2">{val.description}</p>
                  <ul type="square" className="fs-5">
                    <li>Maintain and repair electrical control</li>
                    <li>lighting systems</li>
                  </ul>
                  <p className="fs-2 mt-5">Rs.{val.charges}</p>
                  <Button className="fs-5 float-end btn">Book a Service</Button>
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
  );
}

export default ElectricalAppliance;
