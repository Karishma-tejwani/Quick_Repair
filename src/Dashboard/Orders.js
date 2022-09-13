import React, { useState, UseEffect } from "react";
import axios from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Style/Admin.css";
import { Table } from "react-bootstrap";
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
  const [orders, setOrders] = useState([
    {
      OrderId: "1",
      UserName: "Simran",
      Email: "simivanjhara@gmail.com",
      Phone: "03033585181",
      city: "Sukkur",
      ServiceName: "Plumber",
      status: "Approved",
    },
    {
      OrderId: "1",
      UserName: "Simran",
      Email: "simivanjhara@gmail.com",
      Phone: "03033585181",
      city: "Sukkur",
      ServiceName: "Plumber",
      status: "Pending",
    },
  ]);

  return (
    <div className="Dashboard">
      <div className="DashGlass">
        <Sidebar />

        <div className="Order">
          <Table striped bordered hover variant="light" className="table-css">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>ServiceName</th>
                <th>City</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((itm, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{itm.OrderId}</td>
                      <td>{itm.UserName}</td>
                      <td>{itm.Email}</td>
                      <td>{itm.Phone}</td>
                      <td>{itm.ServiceName}</td>
                      <td>{itm.City}</td>
                      <td>
                        <span className="status" style={makeStyle(itm.status)}>
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
    </div>
  );
};

export default Orders;
