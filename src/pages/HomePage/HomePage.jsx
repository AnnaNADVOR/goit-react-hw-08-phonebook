import { HomeSection } from "./HomePage.styled"; 
import { MdConnectWithoutContact } from "react-icons/md";
function HomePage() {
    return (
        <HomeSection>
            <div>                
                <h1>Welcome to <span>Phone<span>book</span></span></h1>
                <p>Save the most important contacts to always be in touch!</p>  
                <MdConnectWithoutContact />
            </div>
        </HomeSection>
    )
}

export default HomePage; 