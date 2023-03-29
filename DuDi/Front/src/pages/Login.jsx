/* importing the form */
import LoginForm from "../components/forms/LoginForm";
/* importing the style for this page */
import './../styles/loginStyle.css';

const Login = () => {
    return ( 
        <div className="login-container">
            <LoginForm/>
        </div>
     );
}
 
export default Login;