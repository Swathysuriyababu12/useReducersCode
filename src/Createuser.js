import { useFormik } from "formik";
import React from "react";

import { useReducer } from "react";
import { crudInitialState } from "./reducers/user-reducer";
import  userReducer  from "./reducers/user-reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Createuser() {


  const [state, dispatch] = useReducer(userReducer, crudInitialState);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      mobile: "",
      country: "IN",
      state: "TN",
      city: "CH",
    },
    validate: (values) => {
      let error = {};

      if (values.username === "" || values.username.length <= 5) {
        error.username = "Please enter a valid username";
      }

      if (values.email === "") {
        error.email = "Please enter email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Invalid email address";
      }

      if (values.mobile === "") {
        error.mobile = "Please enter mobile";
      } else if (values.mobile.length < 10 || values.mobile.length > 10) {
        error.mobile = "Mobile number should have exactly 10 digits";
      } else if (!/^\d+$/.test(values.mobile)) {
        error.mobile = "Only numbers are allowed";
      }

      return error;
    },
    onSubmit:  async (values) => {
      try {
        console.log(values)
        await axios.post(`https://64928bd0428c3d2035d03bee.mockapi.io/users`,values)
        dispatch({ type: "ADD-USER", payload: values });
        navigate("/portal/users")
      } catch (error) {
        alert("Somethign went wrong")
      }
    }
  });
  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <label>Username</label>
            <input
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              type="text"
              style={{border : (formik.touched.username && formik.errors.username) ? "1px solid red" : ""}}
            />
            {formik.touched.username ? (
              <span style={{ color: "red" }}>{formik.errors.username}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>Email</label>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              type="text"
            />
            {formik.touched.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>Phone</label>
            <input
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              type="text"
            />
            {formik.touched.mobile ? (
              <span style={{ color: "red" }}>{formik.errors.mobile}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>Country</label>
            <select
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            >
              <option value={"IN"}>India</option>
              <option value={"US"}>America</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>State</label>
            <select
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            >
              <option value={"NY"}>New York</option>
              <option value={"TN"}>Tamil Nadu</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>City</label>
            <select
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            >
              <option value={"CH"}>Chennai</option>
              <option value={"BA"}>Banglore</option>
            </select>
          </div>
          <div className="col-lg-4 mt-2">
            <input disabled={!formik.isValid} className="btn btn-primary" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
