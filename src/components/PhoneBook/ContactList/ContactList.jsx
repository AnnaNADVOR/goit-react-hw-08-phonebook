import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { List, Contact } from "./ContactList.styled";
import { selectContacts, selectFilter, selectVibleContacts} from "../../../redux/selectors";
import Notification from "../Notification/Notification";

function ContactList() {
    const visibleContacts = useSelector(selectVibleContacts); 
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter); 
 
    return (
        <List>          
            {contacts.length > 0 && visibleContacts.length === 0
                ? (<Notification message={`Contact's name "${filter}" not found.`} />)
                : <>
                    {visibleContacts.map(contact =>
                        <Contact key={contact.id}>
                            <ContactItem contact={contact}/>
                        </Contact>     
                    )}
                </>
            }                 
        </List>              
    )
}

export default ContactList; 