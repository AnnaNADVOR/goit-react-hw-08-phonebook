// import {Helmet} from "react-helmet";
import LoginForm from "components/LoginForm/LoginForm";
import { FormContainer, FormSection } from "pages/RegisterPage/RegisterPage.styled";

function LoginPage() {
    return (
        <>
 {/* <Helmet>
                <title>Login</title>
            </Helmet> */}
        <FormSection>
           
                <FormContainer>
                    <LoginForm/>
                </FormContainer> 
        

            </FormSection>
            </>)
}
export default LoginPage;