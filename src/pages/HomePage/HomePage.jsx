import css from "../HomePage/HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>YOUR PHONEBOOK</h1>
      <p className={css.text}>Do your want create your own phonebook?</p>
    </div>
  );
};

export default HomePage;
