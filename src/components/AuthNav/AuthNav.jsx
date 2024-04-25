import { Link } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";
const AuthNav = () => {
  return (
    <div className={css.container}>
      <Link to="/register">REGISTER</Link>
      <Link to="login">LOGIN</Link>
    </div>
  );
};

export default AuthNav;
