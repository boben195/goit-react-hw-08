import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

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
      .wrap()
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
      <Form>
        <label>
          Email
          <Field placeholder="enter name" type="email" name="email" />
        </label>

        <label>
          Number
          <Field type="password" name="password" />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
