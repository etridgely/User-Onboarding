import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, status }) {
  const [users, setUsers] = useState([]);
  console.log("this is touched", touched);
  useEffect(() => {
    if (status) {
    setUsers([...users, status]);
    }
  }, [status]);
  
  return (
    <div>
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="name" name="name" placeholder="Kapitalist Name" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Innocent Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Sekure Password" />
      </div>
      <div className="secure-menu">
        <Field component="select" className="security-select" name="security">
          <option>How Sekure You Want Data, Komrade?</option>
          <option value="Not Secure">Nyet</option>
          <option value="Secure">Secure</option>
          <option value="Very Secure">Very Sekure</option>
        </Field>
      </div>
      <label className="checkbox-container">
          Accept Legit TOS
        <Field type="checkbox" name="security" checked={values.tos} />
        <span className="checkmark" />
      </label>
      <button type="submit">Submit</button>
    </Form>
   
      {users.map(user => (
         <ul key={user.id}>
         <li>Name: {user.name}</li>
         <li>Email: {user.email}</li>
        </ul>
        ))}
    </div>
  );
}

const UserForm = withFormik({
    
  mapPropsToValues({ name, email, password, select, tos}) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      select: select || "",
      tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setStatus, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          setStatus(res.data);
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(LoginForm);


export default UserForm;