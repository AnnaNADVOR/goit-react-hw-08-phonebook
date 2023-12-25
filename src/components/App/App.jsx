// import ContactForm from "../PhoneBook/ContactForm/ContactForm";
// import ContactList from "../PhoneBook/ContactList/ContactList";
// import Filter from "../PhoneBook/Filter/Filter";
// import { useEffect } from "react";
// import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
// import Loader from "components/Loader/Loader";
import { Route, Routes} from "react-router-dom";
// import { lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "../../redux/contacts/operations";
import Layout from "components/Layout/Layout";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import HomePage from "pages/HomePage/HomePage";
import PhonebookPage from "pages/PhonebookPage/PhonebookPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<PhonebookPage/>} />
        </Route>
      </Routes>
    </>   
  )
}
