import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import { Link } from "react-router-dom";

import css from "../RegistrationPage/RegistrationPage.module.css";
const RegistrationPage = () => {
  return (
    <div>
      <h3 className={css.title}>Register Account</h3>
      <RegistrationForm />
      <p className={css.text}>
        DO YOU HAVE ONE:
        <Link to="/login">SIGN IN</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
