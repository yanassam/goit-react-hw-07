import s from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// ********
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        phone: values.number,
      })
    );
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <label htmlFor={nameId}>{"Name*"}</label>
          <Field type="text" name="name" id={nameId} autoComplete="false" />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div>
          <label htmlFor={numberId}>{"Number*"}</label>
          <Field
            type="phone"
            name="number"
            id={numberId}
            autoComplete="false"
            className={s.number}
          />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
