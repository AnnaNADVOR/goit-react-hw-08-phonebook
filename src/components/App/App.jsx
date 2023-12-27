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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operation";
import { useAuth } from "../../hooks/useAuth";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth(); 
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
  
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}/>
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/" />} />
          <Route path="/contacts" element={<PrivateRoute component ={PhonebookPage} redirectTo="/login"/>} />
        </Route>
      </Routes>
    )
  )
}
