import { BsSearch } from "react-icons/bs";
import { Section} from "./Filter.styled";
import { FormField, Label, Input, InputSection } from "../ContactForm/ContactForm.styled";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../../../redux/filterSlice";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "../../../redux/selectors";

import Notification from "../Notification/Notification";

function ContactSearch() { 
    const contacts = useSelector(selectContacts); 
    const filterValue = useSelector(selectFilter); 
    const loader = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch(); 
    const onChange = event => {
        dispatch(setFilter(event.currentTarget.value.trim()));
    }
    
    return (
        <>
            {contacts.length > 0 
                ? <Section>
                    <FormField>
                        <Label>Find contacts by name</Label>
                        <InputSection>
                            <Input  type="text" name="name" value={filterValue} onChange={(onChange)} />   
                            <BsSearch/>   
                        </InputSection>               
                    </FormField>
                </Section>
                : <>{
                    !loader && !error && <Notification message="There is no contacts" />
                }</>
            } 
        </>      
    )
}

export default ContactSearch; 