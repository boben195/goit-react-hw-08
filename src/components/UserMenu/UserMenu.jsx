import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/operations";

import toast from "react-hot-toast";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut()).unwrap().then(toast.success("WOw!!! How you did it?"));
  };

  return (
    <div>
      <p>Welcome home Sanitarium!</p>
      <button onClick={handleClick}>LOG OUT</button>
    </div>
  );
};

export default UserMenu;
