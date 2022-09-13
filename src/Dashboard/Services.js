import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import plumber from "../images/plumber.jpg";
import carpentry from "../images/carpentry.png";
import electrician from "../images/electrician.jpg";
import cleaning from "../images/cleaning.png";
import laundry from "../images/laundry.jpg";
import painting from "../images/painting.png";
import "../Style/Admin.css";
import { Card, Button, Row, Col } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);

  // const pics = [
  //     {
  //         pic : carpentry,
  //     },
  //     {
  //         pic : plumber,
  //     },
  //     {
  //         pic: laundry,
  //     },
  //     {
  //         pic : painting,
  //     },
  //     {
  //         pic : cleaning,
  //     },
  //     {
  //         pic : electrician,
  //     },

  //]
  useEffect(() => {
    fetch("http://localhost:1234/getAllServices", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setServices(() => res);
      });
  }, []);
  return (
    <>
      <div className="Dashboard">
        <div className="DashGlass">
          <Sidebar />
          <div className="services">
            <Row>
              {services.map((itm, i) => {
                return (
                  <>
                    <Col md={4}>
                      <Card
                        variant="dark"
                        style={{ width: "16rem" }}
                        className="card"
                      >
                        <Card.Header>{itm.serviceName}</Card.Header>
                        <Card.Img>{itm.image}</Card.Img>

                        <Card.Footer>{itm.charges}</Card.Footer>
                      </Card>
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
