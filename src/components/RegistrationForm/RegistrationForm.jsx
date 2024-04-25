import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email addrs").required("Required"),
    password: Yup.string().min(8, "Must be min 8 symbols").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
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
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field placeholder="enter name" type="email" name="email" />
        </label>

        <label>
          Number
          <Field type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
