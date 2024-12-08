import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          <Link className="nav-link" to="/">Product List</Link>
          <Link className="nav-link" to="/add">Add Product</Link>
          <Link className="nav-link" to="/update">Update Product</Link>
          <Link className="nav-link" to="/search">Search Product</Link>

          <Link className="nav-link" to="/login">Login </Link>
          <Link className="nav-link" to="/register">Register </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
