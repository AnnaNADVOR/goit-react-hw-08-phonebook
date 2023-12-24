import { useEffect } from "react";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import Loader from "components/Loader/Loader";
import ContactForm from "components/PhoneBook/ContactForm/ContactForm";
import Filter from "../../components/PhoneBook/Filter/Filter";
import ContactList from "components/PhoneBook/ContactList/ContactList";

import {
    BookFormSection,
    Container,
    Message,
    FilterSection,
    FilterContainer,
    InfoContainer,
} from "./PhonebookPage.styled";

function PhonebookPage() {
    const loader = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
      
    return (
        <>
            <BookFormSection>
                <Container>
                    <ContactForm/>  
               </Container> 
            </BookFormSection>  
            <FilterSection>
                <FilterContainer>
                    <Filter />
                    {/* <InfoContainer> */}
                       {/* {loader && !error && <Loader />} */}
                    {error && <Message>Something went wrong.</Message>}  
                    {/* </InfoContainer> */}
                   
                    <ContactList />
                </FilterContainer>
            </FilterSection>
        </>    
    )
}

export default PhonebookPage; 