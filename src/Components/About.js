import about from "../images/about.jpg";
import "../Style/Style.css";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1
              className="text-center text-uppercase"
              style={{ marginTop: "25%" }}
            >
              About Us
            </h1>
            <p className="fs-5 fst-italic text-muted">
              Our aim is to provide services that ease the people facing
              household issues. So, our main purpose of quick Repair is to
              provide expert and cost-effective solutions to the problems
              related to household activities that people are facing on daily
              basis.
            </p>
            <br />
            <h3 className="text-center">Why Quick Repair?</h3>
            <p className="text-muted fs-5">
              Our system will provide an appropriate skilled person for basic
              household activities at their doorstep. Our system will allow
              authenticated service providers which will be verified by agency
              to access the functionality of the service provider.
              <ol type="i">
                <li>Avaliable 24/7</li>
                <li>100% Quality Work</li>
                <li>Highly Trained Skilled Worker</li>
                <li>Customer satisfaction</li>
              </ol>
            </p>
          </div>
          <div className="col-5" style={{ marginTop: "17%" }}>
            <img src={about} alt="About image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
