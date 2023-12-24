import Navbar from "components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { HeaderContainer } from "./Layout.styled";

function Layout() {
    return (
        <>
            <header> 
                <HeaderContainer>
                    <Navbar/>
                </HeaderContainer>
            </header>
            <main>
                <Outlet/>
            </main>
        </>     
    )   
}

export default Layout;