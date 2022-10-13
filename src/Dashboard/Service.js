import React, { useState, useEffect } from "react";
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

function Service() {
  const [users, setUsers] = useState([]);

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
        <div className="DashGlass">
          <Sidebar />

          <div className="Row">
            <h2 className="text-center">Services</h2>
            <Table striped bordered hover variant className="table-css">
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
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
