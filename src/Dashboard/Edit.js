import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Button, Row, Modal, Form, Col } from "react-bootstrap";

function Edit() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [val, setVal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviveType: "",
    city: "",
    country: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setVal((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams();
  console.log(id);

  const getData = async (e) => {
    const res = await fetch(`/getproduct/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("Error");
    } else {
      setVal(data);
      console.log("Get Data!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateprovider = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, serviveType, city, country } = val;

    const resp = await fetch(`/updateproduct/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        serviveType,
        city,
        country,
      }),
    });
    const anotherdata = await resp.json();
    console.log(anotherdata);

    if (resp.status === 422 || !anotherdata) {
      alert("Fill Data");
    } else {
      setVal(anotherdata);
      alert("Data Updated!");
      navigate("/AddProvider");
    }
  };

  return (
    <>
      <NavLink to="/Add">Home</NavLink>
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
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter FullName"
                  name="name"
                  value={val.name}
                  onChange={setData}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={val.email}
                  onChange={setData}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Enter Phone Number"
                name="phone"
                value={val.phone}
                onChange={setData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                name="address"
                value={val.address}
                onChange={setData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>ServiceType</Form.Label>
              <Form.Control
                placeholder="Enter ServiceType"
                name="serviceType"
                value={val.serviceType}
                onChange={setData}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control name="city" value={val.city} onChange={setData} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  placeholder="Country"
                  name="country"
                  value={val.country}
                  onChange={setData}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={updateprovider}>
            Update
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
