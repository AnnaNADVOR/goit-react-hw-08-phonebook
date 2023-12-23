import { BsFillPersonFill, BsCheck2Square} from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";

function RegisterForm() {
    return (
         <form>
            <b>Join us. It`s free!</b>
            <div>
                <label type="text" htmlFor="userName">User name</label>
                <div>
                    <input name="userName" placeholder="Name Surname"></input>
                     <BsFillPersonFill />
                </div>
            </div>
            <div>
                <label type="email" htmlFor="userEmail">Email</label>
                <div>
                    <input name="userEmail" placeholder="user@email.com"></input>
                    <HiEnvelope/>
                </div>
            </div>
            <div>
                <label type="password" htmlFor="userPassword">Password</label>
                <div>
                    <input name="userPassword" placeholder="********"></input>
                    <IoLockClosed />
                </div>
            </div>
            <button>Signup <BsCheck2Square /></button>
        </form>
    )
}

export default RegisterForm;