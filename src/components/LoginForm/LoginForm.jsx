import { IoLockClosed } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";
import { BsBoxArrowInLeft } from "react-icons/bs";
// import { BsBoxArrowRight } from "react-icons/bs";
// <BsBoxArrowRight />

function LoginForm() {
    return (
        <form>
            <b>Welcome back!</b>
            <div>
                <label type="email" htmlFor="userEmail">Email</label>
                <div>
                    <input name="userEmail" placeholder="user@email.com"></input>
                    <HiEnvelope />
                </div>
            </div>
             <div>
                <label type="password" htmlFor="userPassword">Password</label>
                <div>
                    <input name="userPassword" placeholder="********"></input>
                    <IoLockClosed />
                </div>
            </div>
            <button type="submit">Login <BsBoxArrowInLeft /> </button>
            {/* <b>New user?</b>
            <NavLink to="register">Signup Now</NavLink> */}
        </form>
    )
}

export default LoginForm; 