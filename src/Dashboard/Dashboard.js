import React from "react";
import "../Style/Admin.css";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();

  return (
    <div className="Dashboard">
      <div className="DashGlass">
        <Sidebar id={id} />
      </div>
    </div>
  );
};

export default Dashboard;
