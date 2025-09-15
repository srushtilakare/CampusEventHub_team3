import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";


const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <p>Please login first.</p>;
  }

  return (
    <div style={{ margin: "50px auto", maxWidth: "600px" }}>
      <h2>Welcome, {user.fullName} 👋</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>College: {user.college}</p>
      <p>City: {user.city}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
