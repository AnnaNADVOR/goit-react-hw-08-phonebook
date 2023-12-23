const { NavLink } = require("react-router-dom");

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                  <NavLink to="/">Phonebook</NavLink>  
          </li>
                          {/* <li>
                  <NavLink to="/contacts">Contacts</NavLink>  
                </li> */}
                <li>
                  <NavLink to="/login">Login</NavLink>  
          </li>
                          <li>
                  <NavLink to="/register">Register</NavLink>  
                </li>
            </ul>            
        </nav>
    )
}

export default Navbar;