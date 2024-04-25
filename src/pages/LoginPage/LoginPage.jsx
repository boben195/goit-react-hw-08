import LoginForm from "../../components/LoginForm/LoginForm";

import { Link } from "react-router-dom";

import css from "../LoginPage/LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <h3 className={css.title}>LOG IN</h3>
      <LoginForm />
      <p className={css.text}>
        Create account:
        <Link to="/register">SIGN UP</Link>
      </p>
    </div>
  );
};

export default LoginPage;
