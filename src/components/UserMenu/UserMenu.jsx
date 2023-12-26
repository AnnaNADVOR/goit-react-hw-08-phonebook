import { BsBoxArrowRight } from "react-icons/bs";
import { useAuth } from "hooks/useAuth";
import {
    Button,
    UserInfo,
    Menu,
} from "./UserMenu.styled";

function UserMenu() {
    const { user } = useAuth(); 

    return (
        < Menu>
            <UserInfo>{user.email}</UserInfo>
            <Button type="button">Logout <BsBoxArrowRight /></Button>
        </ Menu>
    )
}

export default UserMenu;