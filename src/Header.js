import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const user= JSON.parse(localStorage.getItem('user-info'));
  console.warn("user",user);
  function logout(){
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link className="nav-link" to="/">
                Product List
              </Link>
              <Link className="nav-link" to="/add">
                Add Product
              </Link>
              
              <Link className="nav-link" to="/search">
                Search Product
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login{" "}
              </Link>
              <Link className="nav-link" to="/register">
                Register{" "}
              </Link>
            </>
          )}
        </Nav>
        <Nav>
        {
          localStorage.getItem('user-info') ?
          <NavDropdown title={user && user.name}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </NavDropdown>
          :null
        }
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
