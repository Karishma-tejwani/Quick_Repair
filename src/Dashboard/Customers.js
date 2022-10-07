import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../Style/Admin.css";

function Customers() {
  // const[currentPage, setCurrentPage] = useState(1);
  // const[custPerPage, setCustPerPage] = useState(10);
  const [users, setUsers] = useState([
    {
      UserName: "Simran",
      Email: "simivanjhara@gmail.com",
      Phone: "0303-3585181",
      Address: "Sukkur IBA",
      City: "Sukkur",
      Country: "Pakistan",
    },
    {
      UserName: "Zoya",
      Email: "zoya@gmail.com",
      Phone: "0303-2568988",
      Address: "Sukkur IBA",
      City: "Sukkur",
      Country: "Pakistan",
    },
  ]);

  // useEffect(() =>{
  //     fetch("https://dummy.restapiexample.com/api/v1/employees", {method : 'GET'}).then((res) =>
  //         res.json()).then((res.data) =>{
  //             setUsers(()=> res);
  //         });
  //       }, []);

  // const indexOfLastCust = currentPage*custPerPage;
  // const indexOfFirstCust = indexOfLastCust - custPerPage;
  // const currentCust = users.slice(indexOfFirstCust , indexOfLastCust);

  return (
    <>
      <div className="Dashboard">
        <div className="DashGlass">
          <Sidebar />
          {/* <Container className="Container-list">  */}
          <div className="Row">
            <h2>Customers List</h2>
            <Table striped bordered hover variant className="table-css">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {users.map((itm, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{itm.UserName}</td>
                        <td>{itm.Email}</td>
                        <td>{itm.Phone}</td>
                        <td>{itm.Address}</td>
                        <td>{itm.City}</td>
                        <td>{itm.Country}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
            {/* </Container>  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
