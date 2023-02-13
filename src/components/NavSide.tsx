import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
export default function NavSide() {
  return (
    <div>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <br />
      <NavLink to="/post-management">Posts Management</NavLink>
      <br />
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
}
