import LoginForm from "components/LoginForm/LoginForm";
import { FormContainer, FormSection } from "pages/RegisterPage/RegisterPage.styled";

function LoginPage() {
    return (
        <FormSection>
            <FormContainer>
                <LoginForm/>
            </FormContainer>
        </FormSection>
    )
}
export default LoginPage;