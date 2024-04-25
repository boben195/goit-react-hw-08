import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div>
      <h3>Register Account</h3>
      <RegistrationForm />
      <p>
        DO YOU HAVE ONE
        <Link to="login">SIGN IN</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
