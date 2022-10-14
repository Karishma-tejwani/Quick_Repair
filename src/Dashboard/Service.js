import { useEffect, useState } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Style/Admin.css";

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
        <div className="DashGlass" style={{ display: "grid" }}>
          <Sidebar id={id} />
          <div
            style={{
              marginLeft: "15%",
              height: "90%",
              width: "100%",
              overflowY: "scroll",
              borderRadius: "2rem",
            }}
          >
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
