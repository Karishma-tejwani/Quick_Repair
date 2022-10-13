import { useEffect, useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
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
// const [users, setUsers] = useState([]);

// useEffect(() => {
//   fetch("http://localhost:1234/getAllServices", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       setUsers(result);
//     });
// }, []);

//   return (
//     <>
// <div className="Dashboard">
//   <div className="Dash">
//     <Sidebar />
//     <h1 className="text-center" style={{ color: "white" }}>
//       Services
//     </h1>
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
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:1234/getAllServices", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  return (
    <>
      <div className="Dashboard">
        <div className="DashGlass my-2" style={{ display: "grid" }}>
          <Sidebar id={id} />
          <div className="Row" style={{ marginTop: "45%" }}>
            <h1 className="text-center">Services</h1>

            {users.map((itm, index) => {
              return (
                <div className="col-md-4" style={{ display: "inline-block" }}>
                  <CardGroup>
                    <Card key={index}>
                      <Card.Img variant="bottom" src={itm.image} />
                      <Card.Body>
                        <Card.Title>
                          <strong>{itm.serviceName}</strong>
                        </Card.Title>
                        <Card.Text>
                          <p>{itm.description}</p>
                          <p>Rs {itm.charges}/-</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
