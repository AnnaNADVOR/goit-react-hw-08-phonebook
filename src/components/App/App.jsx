import ContactForm from "../PhoneBook/ContactForm/ContactForm";
import ContactList from "../PhoneBook/ContactList/ContactList";
import Filter from "../PhoneBook/Filter/Filter";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "../../redux/selectors";
import Loader from "components/Loader/Loader";
import { Route, Routes, Navigate} from "react-router-dom";
import { lazy } from "react";



import {
  Container,
  MainTitle,
  SecondaryTitle,
  Titleparth,
  Message,
} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import Layout from "components/Layout/Layout";
import LoginPage from "pages/LoginPage/LoginPage";

import RegisterPage from "pages/RegisterPage/RegisterPage";
import HomePage from "pages/HomePage/HomePage";



export default function App() {
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Route>
      {/* <Container>
      <MainTitle>Phone<Titleparth>Book</Titleparth></MainTitle>
      <ContactForm/>
      <SecondaryTitle>Contacts</SecondaryTitle>       
      <Filter />
      {loader && !error && <Loader />}
      {error && <Message>Something went wrong.</Message>}
      <ContactList />
    </Container> */}

    </Routes>
    </>
   
  )
}
