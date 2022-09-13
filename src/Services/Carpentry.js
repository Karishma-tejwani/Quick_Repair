import { useState, useEffect, useRef } from "react";
import { Container, Row, ListGroup, Button, Card } from "react-bootstrap";
import apiCall from "../Components/apiCall";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Style.css";
import carpentry1 from "../images/carpentry1.jpg";
import carpentry2 from "../images/carpentry2.jpg";
import carpentry3 from "../images/carpentry3.jpg";
import carpentry4 from "../images/carpentry.png";

const images = [carpentry1, carpentry2, carpentry3, carpentry4];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <i className="zmdi zmdi-arrow-right"></i>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <i className="zmdi zmdi-arrow-left"></i>
    </div>
  );
}

function EmptyArrow({ onClick }) {
  return <></>;
}

function Carpentry() {
  const [index, setIndex] = useState(0);
  const [service, setService] = useState([]);

  const getSeviceType = () => {
    apiCall("getServiceTypeByName?name=Carpenter", null, "GET", null, null)
      .then((res) => {
        setService(() => res);
      })
      .catch((err) => {
        console.log(err.messae);
      });
  };

  useEffect(() => {
    getSeviceType();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (curr, next) => setIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (curr, next) => (
      <div className={curr === index ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <h2 className="header">Carpentry Service</h2>
        <div className="slideshow">
          <Slider {...settings}>
            {images.map((img, ind) => {
              return (
                <>
                  <div
                    className={ind === index ? "slideshow-active" : "slideshow"}
                  >
                    <img src={img} alt="carpentry service" />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
        <Row>
          {service.map((val) => {
            return (
              <>
                <Card style={{ width: "55rem", marginLeft: "16%" }}>
                  <Card.Body>
                    <Card.Text>{val.description}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>Price is: {val.charges}</Card.Text>
                    <Button
                      style={{ marginLeft: "80%", marginTop: "-100px" }}
                      variant="primary"
                    >
                      Book a Service
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
export default Carpentry;
