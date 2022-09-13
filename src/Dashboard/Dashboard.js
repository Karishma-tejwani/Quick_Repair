import React from "react";
import "../Style/Admin.css";
import Sidebar from "./Sidebar";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="DashGlass">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
