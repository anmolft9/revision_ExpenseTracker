import "./App.css";
// import { Button, Container } from "react-bootstrap";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Register } from "./components/Register";
import { MainLayout } from "./components/layout/MainLayout";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
