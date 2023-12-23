import Navbar from "components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
    return (
        <>
              <header>
             <Navbar/>
        </header>
        <main>
                <Outlet/>
        </main>
        </>
      
    )
    
}

export default Layout;