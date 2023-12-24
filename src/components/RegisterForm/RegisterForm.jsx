import { BsFillPersonFill, BsCheck2Square} from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";

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

function RegisterForm() {
    return ( 
        <Form>
            <FormTitle>Join us. It`s free!</FormTitle>
            <FormField>
                <Label type="text" htmlFor="userName">User name</Label>
                <InputSection>
                    <Input name="userName" placeholder="Name Surname"></Input>
                     <BsFillPersonFill />
                </InputSection>
            </FormField>
            <FormField>
                <Label type="email" htmlFor="userEmail">Email</Label>
                <InputSection>
                    <Input name="userEmail" placeholder="user@email.com"></Input>
                    <HiEnvelope/>
                </InputSection>
            </FormField>
            <FormField>
                <Label type="password" htmlFor="userPassword">Password</Label>
                <InputSection>
                    <Input name="userPassword" placeholder="********"></Input>
                    <IoLockClosed />
                </InputSection>
            </FormField>
            <SubmitButton type="submit">Signup <BsCheck2Square /></SubmitButton>
        </Form>     
    )
}

export default RegisterForm;