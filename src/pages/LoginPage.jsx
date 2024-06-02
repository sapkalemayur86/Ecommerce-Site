import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const email = "user@test.com";
  const password = "user123";
  const navigate = useNavigate();
  const [errorVisibility, setErrorVisibility] = useState("hidden");
  return (
    <div className="login-container">
      <div className="login-component">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            if (values.email === email && values.password === password) {
              localStorage.setItem("airtribe-token", "kjsdasfjbajbfjkndv=");
              navigate("/products");
            } else {
              setErrorVisibility("visible");
            }
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p>{errors.email && touched.email && errors.email}</p>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p>{errors.password && touched.password && errors.password}</p>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

              <p
                id="loginError"
                style={{ color: "red", visibility: errorVisibility }}
              >
                <h3>"Invalid Credentials!!"</h3>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
