import LoginForm from "../../components/LoginForm/LoginForm";

import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h3>LOG IN</h3>
      <LoginForm />
      <p>
        Your Account
        <Link to="/register">SIGN UP</Link>
      </p>
    </div>
  );
};

export default LoginPage;
