import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Style/Admin.css";
import { Button, Row, Modal, Form, Col, Table } from "react-bootstrap";

function Edit() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [getData, setData] = useState([]);

  const { id } = useParams();

  //update
  const updateData = (e) => {
    e.preventDefault();

    console.log("update called");
    const val = { name, nic, phone, serviceType, address, city, country };
    console.log(val);

    fetch(`http://localhost:1234/updateSPByAdminId?id=11`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(val),
    }).then(() => {
      console.log("Record Updated!");
    });
  };

  return (
    <>
      <div className="Dashboard">
        <div className="DashGlass">
          <Sidebar />

          <div className="addbutton">
            <Table
              striped
              bordered
              hover
              variant="light"
              style={{ marginTop: 20 }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>NIC</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Service Type</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((val, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.nic}</td>
                        <td>{val.phone}</td>
                        <td>{val.address}</td>
                        <td>{val.serviceType}</td>
                        <td>{val.city}</td>
                        <td>{val.country}</td>
                        <td className="d-flex">
                          {/* <NavLink to={`/Edit?${val.id}`}> */}
                          <Button
                            variant="outline-success mx-2 w-25"
                            // onClick={updateData}
                            onClick={handleShow}
                          >
                            <span>
                              <i className="zmdi zmdi-edit zmdi-hc-2x"></i>
                            </span>
                          </Button>
                          {/* </NavLink> */}
                          <Button variant="outline-danger mx-2 w-25">
                            <span>
                              <i className="zmdi zmdi-delete zmdi-hc-2x"></i>
                            </span>
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="title1">
                {" "}
                Fill Form to Add Service Provider
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter FullName"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridNic">
                    <Form.Label>NIC</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="NIC Number"
                      name="nic"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridType">
                  <Form.Label>ServiceType</Form.Label>
                  <Form.Control
                    placeholder="Enter ServiceType"
                    name="serviceType"
                    value={serviceType}
                    onChange={(e) => setType(e.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      placeholder="Country"
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={updateData}>
                Update
              </Button> */}
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Edit;
