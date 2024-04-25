import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">REGISTER</Link>
      <Link to="login">LOGIN</Link>
    </div>
  );
};

export default AuthNav;
