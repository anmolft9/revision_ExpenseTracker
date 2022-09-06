import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useNavigate } from "react-router-dom";

export const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleOnLogout = () => {
    sessionStorage.removeItem("somethingELse");
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Expense-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {isLoggedIn ? (
              <Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
