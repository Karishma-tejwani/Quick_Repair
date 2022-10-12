import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Table from "react-bootstrap/Table";
import "../Style/Admin.css";

function Customers() {
  const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   const response = await fetch("http://localhost:1234/getAllCustomers");
  //   setUsers(await response.json());
  // };

  useEffect(() => {
    fetch("http://localhost:1234/getAllCustomers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
    // getUsers();
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
                {users.map((itm, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{itm.name}</td>
                        <td>{itm.email}</td>
                        <td>{itm.phone}</td>
                        <td>{itm.address}</td>
                        <td>{itm.city}</td>
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

export default Customers;
