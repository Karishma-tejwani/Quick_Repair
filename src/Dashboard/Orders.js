import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../Style/Admin.css";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:1234/getOrdersByAdminId?id=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setOrders(result);
      });
  }, []);

  return (
    <>
      <div className="Dashboard">
        <div className="DashGlass">
          <Sidebar />

          <div className="Row">
            <h2>Customers List</h2>
            <Table striped bordered hover variant className="table-css">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((itm, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{itm.id}</td>
                        <td>{itm.type}</td>
                        <td>{itm.date}</td>
                        <td>{itm.charges}</td>
                        <td>{itm.status}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* <div className="Dashboard">
        <div className="DashGlass">
          <Sidebar />

          <div className="Order">
            <Table striped bordered hover variant="light" className="table-css">
              <thead>
                <tr>
                  <th>OrderId</th>
                  <th>Service Type</th>
                  <th>Date</th>
                  <th>Charges</th>
                  <th>Admin</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((itm, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{itm.id}</td>
                        <td>{itm.type}</td>
                        <td>{itm.date}</td>
                        <td>{itm.charges}</td>
                        <td>{itm.adminName}</td>
                        <td>{itm.status}</td>
                        <td>
                          <span
                            className="status"
                            style={makeStyle(itm.status)}
                          >
                            {itm.status}
                          </span>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Orders;
