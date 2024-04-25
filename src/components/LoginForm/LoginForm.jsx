import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import css from "../LoginForm/LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const ContactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email addrs").required("Required"),
    password: Yup.string().min(8, "Must be min 8 symbols").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch(toast.error("WTF!!! Some error again!!!"));
  };
  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label className={css.text}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>

        <label className={css.text}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>

        <button className={css.btn} type="submit">
          LOGIN
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
