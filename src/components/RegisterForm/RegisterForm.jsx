import { BsFillPersonFill, BsCheck2Square} from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Watch } from "react-loader-spinner";
import { registration } from "../../redux/auth/operation";
import {
    Label,
    Input,
    InputSection,
    SubmitButton,
} from "components/PhoneBook/ContactForm/ContactForm.styled";

import {
    Form,
    FormTitle,
    FormField,
} from "./RegisterForm.styled";
import { selectIsLoading } from "../../redux/auth/selectors";



function RegisterForm() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const handleSubmitForm = (event) => {
        event.preventDefault();
       
        const form = event.target;
        const userCredentials = {
            name: form.elements.userName.value, 
            email: form.elements.userEmail.value, 
            password: form.elements.userPassword.value,   
        }
        dispatch(registration(userCredentials));
        form.reset();
    } 
    return ( 
        <Form onSubmit={handleSubmitForm}>
            <FormTitle>Join us. It`s free!</FormTitle>
            <FormField>
                <Label  htmlFor="userName">User name</Label>
                <InputSection>
                    <Input type="text" name="userName" placeholder="Name Surname"></Input>
                     <BsFillPersonFill />
                </InputSection>
            </FormField>
            <FormField>
                <Label  htmlFor="userEmail">Email</Label>
                <InputSection>
                    <Input type="email" name="userEmail" placeholder="user@email.com"></Input>
                    <HiEnvelope/>
                </InputSection>
            </FormField>
            <FormField>
                <Label  htmlFor="userPassword">Password</Label>
                <InputSection>
                    <Input type="password" name="userPassword" placeholder="********"></Input>
                    <IoLockClosed />
                </InputSection>
            </FormField>
            <p>Already have an account?</p>
            <Link to='/login'>Login here</Link>
            <SubmitButton type="submit">Signup {isLoading ? <Watch color="#f8b400" /> : <BsCheck2Square />} </SubmitButton>
        </Form>     
    )
}

export default RegisterForm;