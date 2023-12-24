import {
    HomeSection,
    HomeTitle,
    Logo,
    LogoPath,
    HomeContainer,   
} from "./HomePage.styled"; 

function HomePage() {
    return (
        <HomeSection>
            <HomeContainer>                
                <HomeTitle>Welcome to <Logo>Phone<LogoPath>book</LogoPath></Logo></HomeTitle>
                <p>Save the most important contacts to always be in touch!</p>  
            </HomeContainer>
        </HomeSection>
    )
}

export default HomePage; 