import React from "react";
import { Layout, Space } from "antd";
import RouterApp from "../src/router";
import { Link } from "react-router-dom";
import "./assets/style.scss";

const App: React.FC = () => (
  <div>
    <RouterApp />
  </div>
);

export default App;
