import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Oval} from 'react-loader-spinner'
import { deleteContact } from "./../../../redux/operations";
import {
    ContactInfo,
    Name,
    RemoveButton,
} from "./ContactItem.styled";
import { selectDeleteContactId, selectIsLoading } from "../../../redux/selectors";

function ContactItem({ contact }) {
    const dispatch = useDispatch(); 
    const loader = useSelector(selectIsLoading);
    const dellId = useSelector(selectDeleteContactId);
  
    const onDeleteContact = () => {
        dispatch(deleteContact(contact.id));           
    }
    
    const dellContact = loader && contact.id===dellId; 
    return (
        <>            
            <ContactInfo>
                <Name>{contact.name}</Name> 
                <p>{contact.number}</p>  
            </ContactInfo>                          
            <RemoveButton onClick={onDeleteContact} type="button"> 
                {dellContact ? <Oval color="#f8b400" /> : <BsFillTrash3Fill /> }
            </RemoveButton>                       
        </>              
    )
}

export default ContactItem;