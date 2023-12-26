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
                    <Input
                        name="userEmail"
                        placeholder="user@email.com"
                        required
                    />
                    <HiEnvelope />
                </InputSection>
            </FormField>
             <FormField>
                <Label  htmlFor="userPassword">Password</Label>
                <InputSection>
                    <Input
                        name="userPassword"
                        type="password"
                        placeholder="********"
                        required
                    />
                    <IoLockClosed />
                </InputSection>
            </FormField>
            <LinkNavInfo>
                <b>New user?</b>
                <LinkNav to="/register">Signup Now</LinkNav>
            </LinkNavInfo> 
            <SubmitButton type="submit">Login <BsBoxArrowInLeft /> </SubmitButton>                   
        </Form>
    )
}

export default LoginForm; 