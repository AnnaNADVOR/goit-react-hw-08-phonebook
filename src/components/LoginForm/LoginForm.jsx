import { IoLockClosed } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";
import { BsBoxArrowInLeft } from "react-icons/bs";

import {
    Form,
    FormTitle,
} from "../RegisterForm/RegisterForm.styled";

import {
    Label,
    Input,
    InputSection,
    SubmitButton,
} from "../PhoneBook/ContactForm/ContactForm.styled";

import {
    FormField,
    LinkNav,
    LinkNavInfo,
} from "./LoginForm.styled";


function LoginForm() {
    return (
        <Form>
            <FormTitle>Welcome back!</FormTitle>
            <FormField>
                <Label type="email" htmlFor="userEmail">Email</Label>
                <InputSection>
                    <Input name="userEmail" placeholder="user@email.com"></Input>
                    <HiEnvelope />
                </InputSection>
            </FormField>
             <FormField>
                <Label type="password" htmlFor="userPassword">Password</Label>
                <InputSection>
                    <Input name="userPassword" placeholder="********"></Input>
                    <IoLockClosed />
                </InputSection>
            </FormField>
            <SubmitButton type="submit">Login <BsBoxArrowInLeft /> </SubmitButton>
            <LinkNavInfo>
                <b>New user?</b>
                <LinkNav to="/register">Signup Now</LinkNav>
            </LinkNavInfo>            
        </Form>
    )
}

export default LoginForm; 