import React from "react";
import "../Style/Admin.css";
import Sidebar from "./Sidebar";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ToggleBtn from "./ToggleBtn";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();

  return (
    <div className="Dashboard">
      <div className="DashGlass">
        <Sidebar id={id} />
        {/* <ToggleBtn /> */}
      </div>
    </div>
  );
};

export default Dashboard;
