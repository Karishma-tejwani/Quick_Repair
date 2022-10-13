import { Carousel, NavLink } from "react-bootstrap";
import slider1 from "../images/cover4.jpeg";
import slider2 from "../images/cover.jpeg";
import slider3 from "../images/cover1.jpg";
import service1 from "../images/bg.PNG";
import service2 from "../images/homeService.jpg";
import "../Style/Style.css";
import Typed from "react-typed";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";

function CardSlider() {
  const slides = [
    {
      path: "/cleaning",
      image:
        "https://image.shutterstock.com/image-vector/janitors-team-working-professional-tools-260nw-1337751395.jpg",
      title: "Home Cleaning Service",
      desc: "Dusting, sweeping, vacuuming, mopping, and restroom cleaning.",
    },
    {
      path: "/laundry",
      image:
        "https://previews.123rf.com/images/unitonevector/unitonevector1904/unitonevector190403694/122989734-husband-help-in-household-promotion-flat-design-cartoon-wife-ironing-clothes-man-unloads-laundry-fro.jpg",
      title: "Laundry Service",
      desc: "The laundry service will wash, dry, and iron your clothes.",
    },
    {
      path: "/painting",
      image:
        "https://t4.ftcdn.net/jpg/02/44/79/73/360_F_244797342_trJTVjRpxixJfjoMSQuq29tPGQWkQ4e9.jpg",
      title: "Home Painting Service",
      desc: "Our services include interior, exterior, cabinets and more.",
    },
    {
      path: "/electrical",
      image:
        "https://img.freepik.com/premium-vector/electronic-repair-service-center-illustration-cartoon-flat-family-people-pay-professional-repairing-home-electrical-appliance_169479-795.jpg?w=2000",
      title: "Electrical Appliance Repair Service",
      desc: "Maintain and repair electrical control, and lighting systems.",
    },
    {
      path: "/plumbing",
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/14/12/plumbing-problems-plumbers-fixing-shower-in-bath-vector-26261412.jpg",
      title: "Plumbing Service",
      desc: "Maintain water supply systems, repair broken drainage lines.",
    },
    {
      path: "/carpentry",
      image:
        "https://t4.ftcdn.net/jpg/01/40/74/63/360_F_140746379_1eF9pMfnfz0ZuEwNj0zmqmfsJeRsOnoF.jpg",
      title: "carpentry Service",
      desc: "Builds cabinets, doors, floors, or other wooden fixtures.",
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  return (
    <>
      <div id="main-slider-container">
        <div className="slider-icon left" onClick={slideLeft}>
          <i className="zmdi zmdi-chevron-left zmdi-hc-4x"></i>
        </div>
        <div id="slider">
          {slides.map((slide, index) => {
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-img"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-desc">{slide.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="slider-icon right" onClick={slideRight}>
          <i className="zmdi zmdi-chevron-right zmdi-hc-4x"></i>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      {/* ----------------Carousel---------------- */}
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h3 className="heading">
              <Typed
                strings={["Welcome to Quick Repair for Home!"]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
            style={{ height: "100vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
            style={{ height: "100vh" }}
          />
        </Carousel.Item>
      </Carousel>

      {/* --------------------Cards------------------------- */}

      <h1 className="text-center mt-5">Our Services</h1>
      <div id="body">
        <CardSlider />
      </div>

      {/* -----------------About the System-------------------- */}

      <div className="main">
        <div className="col-md-12">
          <div className="row" style={{ marginTop: "20%" }}>
            <div
              className="col-md-4 col-lg-4 col-sm-12 offset-2 mt-lg-5 col1"
              data-aos="fade-right"
            >
              <h3 className="head3">About the System</h3>
              <p className="para mt-3">
                Several aspects like painting, home cleaning, plumbing,
                electrical works, laundry and carpentry services are involved in
                a system to provide happy and healthy home atmosphere in order
                to satisfy consumers. We aim to help in providing optimal
                solutions to all your household troubles with more efficiency,
                ease and majorly, a delicate touch.
              </p>
            </div>

            <div
              className="col-md-4 col-lg-4 col-sm-12 offset-1 mt-lg-5 col2"
              data-aos="fade-left"
            >
              <img src={service1} alt="Service1" className="w-75" />
            </div>

            {/* ----------------------Our Purpose---------------- */}
            <div className="row">
              <div
                className="col-md-5 col-lg-5 col-sm-12 offset-2 mt-lg-2 col1"
                data-aos="fade-right"
              >
                <img src={service2} alt="Service2" className="w-75 h-100" />
              </div>

              <div
                className="col-md-4 col-lg-4 col-sm-12 mt-lg-5 p-lg-5 col2"
                data-aos="fade-left"
              >
                <h3 className="head3 mt-5">Our Purpose</h3>
                <p className="para mt-3">
                  Our purpose is to build a system to resolve variety of
                  household problems. To overcome these problems, we are trying
                  to provide a platform to fill the communication gap between
                  technology and end-users and provide suitable solutions to all
                  household problems with more efficiency, quickly and majorly,
                  a delicate touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
