import AuthNav from "components/AuthNav/AuthNav";
import {
  Nav,
  Link,
  NavList, 
  NavItem,
  Logo,
  LogoPath,
} from "./NavBar.styled"; 

function Navbar() {
  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>  
          </NavItem>
            <NavItem>
          <Link to="/contacts"><Logo>Phone<LogoPath>book</LogoPath></Logo></Link>  
        </NavItem>
      </NavList>       
    </Nav>
    <AuthNav/> 
    </>
    )
}

export default Navbar;