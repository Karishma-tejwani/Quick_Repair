import { Card, CardGroup, Button } from "react-bootstrap";
import "../Style/Admin.css";

// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import "../Style/Admin.css";
// import { Card, Container, Row, Col, Table } from "react-bootstrap";
// const makeStyle = (status) => {
//   if (status === "Approved") {
//     return {
//       background: "rgb(145 254 159 / 47%)",
//       color: "green",
//     };
//   } else if (status === "Pending") {
//     return {
//       background: "#ffadad8f",
//       color: "red",
//     };
//   } else {
//     return {
//       background: "#59bfff",
//       color: "white",
//     };
//   }
// };

// function Service() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:1234/getAllServices", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         setUsers(result);
//       });
//   }, []);

//   return (
//     <>
//       <div className="Dashboard">
//         <div className="Dash">
//           <Sidebar />
//           <h1 className="text-center" style={{ color: "white" }}>
//             Services
//           </h1>
{
  /* <Table striped bordered hover variant className="table-css">
            <thead>
              <tr>
                <th>Image</th>
                <th>Service Type</th>
                <th>Description</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              {users.map((itm, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{itm.image}</td>
                      <td>{itm.serviceName}</td>
                      <td>{itm.description}</td>
                      <td>{itm.charges}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table> */
}
//           <div className="row">
//             {users.map((itm, index) => {
//               return (
//                 <>
//                   {/* <div className="container"> */}

//                   <div className="col-md-4">
//                     <Card
//                       // style={{
//                       //   width: "25rem",
//                       //   display: "grid",
//                       //   marginTop: "2px",
//                       //   marginLeft: "180px",
//                       // }}
//                       key={index}
//                     >
//                       <Card.Img variant="top" src={itm.image} />
//                       <Card.Body>
//                         <Card.Title>{itm.serviceName}</Card.Title>
//                         <Card.Text>{itm.description}</Card.Text>
//                         <Card.Text>{itm.charges}</Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </div>

//                   {/* </div> */}
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Service;

function Service() {
  return (
    <>
      <CardGroup>
        {Array.from({ length: 10 }).map((_, index) => (
          <Card className={"card-grid"} key={index}>
            <Card.Img
              className={"card-img"}
              variant="bottom"
              src={
                "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
              }
            />
            <Card.Body>
              <Card.Title>
                <strong>Lorem ipsum dolor sit amet</strong>
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores harum, illum. Accusamus assumenda commodi consequuntur
                  cumque, delectus deleniti dolorum eum illum nam nostrum
                  provident quaerat quisquam quos reiciendis, reprehenderit
                  voluptas!
                </p>
              </Card.Text>
              <Button
                variant="primary"
                href="www.google.com"
                rel={"noopener noreferrer"}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
}

export default Service;
