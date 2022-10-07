// import { useState, useEffect } from "react";
// import apiCall from "../Components/apiCall";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "../Style/Style.css";

// function Laundry() {
//   const [service, setService] = useState([]);
//   const [feedback, setFeedback] = useState([]);
//   // const getSeviceType = () => {
//   //   apiCall("getServiceTypeByName?name=Cleaning", null, "GET", null, null)
//   //     .then((res) => {
//   //       console.log(res);
//   //       setService(() => res);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };

//   // useEffect(() => {
//   //   getSeviceType();
//   // }, []);

//   useEffect(() => {
//     fetch("http://localhost:1234/getServiceTypeByName?name=Laundry", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => setService(res));
//   });

//   useEffect(() => {
//     fetch("http://localhost:1234/getFeedbackByRating?rating=5", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => setFeedback(res));
//   });

//   return (
//     <div>
//       <Container
//         className="shadow p-3 mb-5 bg-body rounded"
//         style={{ marginTop: "150px" }}
//       >
//         <Row>
//           {service.map((val, index) => {
//             return (
//               <>
//                 <Col xs={12} md={10} lg={6}>
//                   <h2 className="text-center mt-5">Laundry Service</h2>
//                   <p className="fs-5 mt-4 mx-2">{val.description}</p>
//                   <ul type="square" className="fs-5">
//                     <li>wash</li>
//                     <li>Dry</li>
//                     <li>Iron your clothes</li>
//                   </ul>
//                   <p className="fs-2 mt-5">Rs.{val.charges}</p>
//                   <Button className="fs-5 float-end btn">Book a Service</Button>
//                 </Col>
//                 <Col xs={6} md={6} lg={6}>
//                   <img
//                     src={val.image}
//                     alt="Home Cleaning"
//                     className="cleaningImg"
//                   />
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Laundry;

// import { useState, useEffect } from "react";
// import apiCall from "../Components/apiCall";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "../Style/Style.css";

// function ElectricalAppliance() {
//   const [service, setService] = useState([]);
//   const [feedback, setFeedback] = useState([]);
//   // const getSeviceType = () => {
//   //   apiCall("getServiceTypeByName?name=Cleaning", null, "GET", null, null)
//   //     .then((res) => {
//   //       console.log(res);
//   //       setService(() => res);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };

//   // useEffect(() => {
//   //   getSeviceType();
//   // }, []);

//   useEffect(() => {
//     fetch("http://localhost:1234/getServiceTypeByName?name=mechanic", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => setService(res));
//   });

//   useEffect(() => {
//     fetch("http://localhost:1234/getFeedbackByRating?rating=5", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => setFeedback(res));
//   });

//   return (
//     <div>
//       <Container
//         className="shadow p-3 mb-5 bg-body rounded"
//         style={{ marginTop: "150px" }}
//       >
//         <Row>
//           {service.map((val, index) => {
//             return (
//               <>
//                 <Col xs={12} md={10} lg={6}>
//                   <h2 className="text-center mt-5">
//                     Electrical Appliances Service
//                   </h2>
//                   <p className="fs-5 mt-4 mx-2">{val.description}</p>
//                   <ul type="square" className="fs-5">
//                     <li>Maintain and repair electrical control</li>
//                     <li>lighting systems</li>
//                   </ul>
//                   <p className="fs-2 mt-5">Rs.{val.charges}</p>
//                   <Button className="fs-5 float-end btn">Book a Service</Button>
//                 </Col>
//                 <Col xs={6} md={6} lg={6}>
//                   <img
//                     src={val.image}
//                     alt="Home Cleaning"
//                     className="cleaningImg"
//                   />
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ElectricalAppliance;

// import { useState, useEffect, useRef } from "react";
// import { Container, Row, ListGroup, Button, Card } from "react-bootstrap";
// import apiCall from "../Components/apiCall";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../Style/Style.css";
// import carpentry1 from "../images/carpentry1.jpg";
// import carpentry2 from "../images/carpentry2.jpg";
// import carpentry3 from "../images/carpentry3.jpg";
// import carpentry4 from "../images/carpentry.png";

// const images = [carpentry1, carpentry2, carpentry3, carpentry4];

// function SampleNextArrow({ onClick }) {
//   return (
//     <div className="arrow arrow-right" onClick={onClick}>
//       <i className="zmdi zmdi-arrow-right"></i>
//     </div>
//   );
// }

// function SamplePrevArrow({ onClick }) {
//   return (
//     <div className="arrow arrow-left" onClick={onClick}>
//       <i className="zmdi zmdi-arrow-left"></i>
//     </div>
//   );
// }

// function EmptyArrow({ onClick }) {
//   return <></>;
// }

// function Carpentry() {
//   const [index, setIndex] = useState(0);
//   const [service, setService] = useState([]);

//   const getSeviceType = () => {
//     apiCall("getServiceTypeByName?name=Carpenter", null, "GET", null, null)
//       .then((res) => {
//         setService(() => res);
//       })
//       .catch((err) => {
//         console.log(err.messae);
//       });
//   };

//   useEffect(() => {
//     getSeviceType();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     beforeChange: (curr, next) => setIndex(next),
//     centerMode: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     appendDots: (dots) => (
//       <div>
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: (curr, next) => (
//       <div className={curr === index ? "dot dot-active" : "dot"}></div>
//     ),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//           nextArrow: <EmptyArrow />,
//           prevArrow: <EmptyArrow />,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <Container>
//         <h2 className="header">Carpentry Service</h2>
//         <div className="slideshow">
//           <Slider {...settings}>
//             {images.map((img, ind) => {
//               return (
//                 <>
//                   <div
//                     className={ind === index ? "slideshow-active" : "slideshow"}
//                   >
//                     <img src={img} alt="carpentry service" />
//                   </div>
//                 </>
//               );
//             })}
//           </Slider>
//         </div>
//         <Row>
//           {service.map((val) => {
//             return (
//               <>
//                 <Card style={{ width: "55rem", marginLeft: "16%" }}>
//                   <Card.Body>
//                     <Card.Text>{val.description}</Card.Text>
//                   </Card.Body>
//                   <Card.Body>
//                     <Card.Text>Price is: {val.charges}</Card.Text>
//                     <Button
//                       style={{ marginLeft: "80%", marginTop: "-100px" }}
//                       variant="primary"
//                     >
//                       Book a Service
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </>
//             );
//           })}
//         </Row>
//       </Container>
//     </>
//   );
// }
// export default Carpentry;

import { useState, useEffect } from "react";
import apiCall from "../Components/apiCall";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../Style/Style.css";
import Background from "../Components/Background";

function Laundry() {
  const [service, setService] = useState([]);

  // const fetchLink = () => {
  //   apiCall("Home Cleaning", null, "GET", null, null)
  //     .then((res) => {
  //       res.json();

  //       if (res) {
  //         console.log(res);
  //       }
  //     })
  //     .then((res) => setService(res))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchLink();
  // }, []);

  useEffect(() => {
    fetch("http://localhost:1234/getServiceTypeByName?name=laundry", {
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
          Electrical Appliance Repair Service
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
                    <p className="fs-5 mt-5 mx-2">{val.description}</p>
                    <ul type="square" className="fs-5">
                      <li>wash</li>
                      <li>Dry</li>
                      <li>Iron your clothes</li>
                    </ul>
                    <p className="fs-2 mt-5">Rs.{val.charges}</p>
                    <Button
                      className="fs-5 float-end btn"
                      style={{ width: "80%", marginTop: "-10%" }}
                    >
                      Book a Service
                    </Button>
                  </Col>
                  <Col xs={6} md={6} lg={6}>
                    <img
                      src={val.image}
                      alt="Carpentry"
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

export default Laundry;
