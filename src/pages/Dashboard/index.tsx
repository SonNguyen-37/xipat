import { Button } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import Revenue from "./Revenue";
import Subcription from "./Subcription";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the Dashboard page</h1>
      <Button onClick={() => navigate("Subcription")}>Subcription</Button>
      <Button onClick={() => navigate("Revenue")}>Revenue</Button>
      <Routes>
        <Route path="Subcription" element={<Subcription />} />
        <Route path="Revenue" element={<Revenue />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
