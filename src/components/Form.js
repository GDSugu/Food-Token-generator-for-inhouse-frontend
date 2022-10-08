import { Formik, Field, Form, ErrorMessage } from "formik";

import {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';
import Food from "./Food";



const FORM_INITIAL_VALUES = {
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: ""
}

function LoginForm(props) {
    const [navigate, setNavigate] = useState(false);
    
    return (
        <>
            <Formik
                initialValues={FORM_INITIAL_VALUES}
                onSubmit={ async (values) => {
                    await axios.post('https://capstone-food-token.herokuapp.com/auth/signup', values );
                    alert("Congrats!!! You have signed up successfully")
                    setNavigate(true);

                    props.history.push('/');
                  }
                }
                  
                 
            validate={(values) => {
                const errors = {}

                if (!values.firstname) {
                    errors.firstname = <span style={{ color: "red" }}> *First Name is required</span>
                }
                if (!values.lastname) {
                    errors.lastname = <span style={{ color: "red" }}> *Last Name is required</span>
                }
                if (!values.mobile) {
                    errors.mobile = <span style={{ color: "red" }}> *Mobile number is required</span>
                }

                if (!values.email) {
                    errors.email = <span style={{ color: "red" }}> *Email Id is required</span>
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = <span style={{ color: "red" }}> *Invalid email address</span>
                }

                if (!values.password) {
                    errors.password = <span style={{ color: "red" }}> *Password is required</span>
                }
                if (!values.cpassword) {
                    errors.cpassword = <span style={{ color: "red" }}> *confirm password is required</span>
                }
                if (values.cpassword != values.password) {
                    errors.cpassword = <span style={{ color: "red" }}> *confirm password mismatch</span>
                }
                return errors;
            }}


            >
            {({ handleBlur, handleChange, handleSubmit, values, touched, errors }) => {

                return (
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstname}
                                className="form-control"
                            />
                            {errors.firstname && touched.firstname && errors.firstname}
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastname}
                                className="form-control"
                            />
                            {errors.lastname && touched.lastname && errors.lastname}
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="number"
                                name="mobile"

                                onChange={handleChange}
                                onBlur={handleBlur}
                                onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                                value={values.mobile}
                                className="form-control"
                            />
                            {errors.mobile && touched.mobile && errors.mobile}
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="email">Email Id</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className="form-control"
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="form-control"
                            />
                            {errors.password && touched.password && errors.password}
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input
                                type="password"
                                name="cpassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cpassword}
                                className="form-control"
                            />
                            {errors.cpassword && touched.cpassword && errors.cpassword}
                        </div>
                        <br />

                        <div className="Submit">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>

                )
            }}


        </Formik>
        </>
    )
}

export default LoginForm;