import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
    FormSection,
    FormContainer,
} from "./RegisterPage.styled";

function RegisterPage() {
    return (
        <FormSection>
            <FormContainer> 
                <RegisterForm />
            </FormContainer> 
        </FormSection>      
    )
}

export default RegisterPage; 