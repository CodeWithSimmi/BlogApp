// import "./register.css"
// import { Link } from "react-router-dom"



// export default function Register() {


//     return (
//         <div className="register">
        
//        <span className="registerTitle">Register</span>
//       <form className="registerForm">
//         <label>Username</label>
//         <input className="registerInput" type="text" placeholder="Enter your username..." />
//         <label>Email</label>
//         <input className="registerInput" type="text" placeholder="Enter your email..." />
//         <label>Password</label>
//         <input className="registerInput" type="password" placeholder="Enter your password..." />
//         <button className="registerButton">Register</button>
//       </form>
//         <button className="registerLoginButton"><Link to="/login" className="link">LOGIN</Link></button> 
//     </div>
//     )
// }


import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" method="POST" action="register.php">
                <label>Username</label>
                <input className="registerInput" name="username" type="text" placeholder="Enter your username..." value="rusername"/>
                <label>Email</label>
                <input className="registerInput" name="email" type="text" placeholder="Enter your email... " value="remail" />
                <label>Password</label>
                <input className="registerInput" name="password" type="password" placeholder="Enter your password..." value="rpassword" />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton"><Link to="/login" className="link">LOGIN</Link></button>
        </div>
    );
}
