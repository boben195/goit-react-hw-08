import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Navigition = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={getNavLinkClass} to="/">
        HOME
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClass} to="/contacts">
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
};

export default Navigition;
