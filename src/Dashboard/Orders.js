import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../Style/Admin.css";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
const Orders = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:1234/getOrdersByAdminId?id=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("users", result);
        setUsers(result);
      });
  }, []);

  return (
    <>
      <div className="Dashboard">
        <div className="DashGlass">
          <Sidebar id={id} />

          <div
            style={{
              marginLeft: "15%",
              height: "90%",
              width: "100%",
            }}
          >
            <h2 className="text-center">Order List</h2>
            <Table striped bordered hover variant className="table-css">
              <thead>
                <tr>
                  <th>Admin Name</th>
                  <th>Service Type</th>
                  <th>Charges</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((itm, i) => {
                  return (
                    <tr key={itm.id}>
                      <td>{itm.adminName}</td>
                      <td>{itm.type}</td>
                      <td>{itm.charges}</td>
                      <td>{itm.phone}</td>
                      <td>{itm.date}</td>
                      <td>{itm.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
