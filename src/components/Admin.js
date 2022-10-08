import { useState, useEffect } from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"

function Admin() {

    const FORM_INITIAL_VALUES = {
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        password: "",
        cpassword: ""
    }

const [form,setForm] = useState(FORM_INITIAL_VALUES)
    return (
        <>
            <p>This is Admin login page</p>

            <form>
                <div className="form-group">
                <b> <label for="firstname">First Name</label></b>
                    <input type="email" name="firstname" className="form-control" value={form.firstname}  placeHolder="Enter the First Name" />
                </div>
                <div className="form-group">
                <b><label for="lastname">Last Name</label></b>
                    <input type="email" name="lastname" className="form-control" value={form.lastname} placeHolder="Enter the Last Name" />
                </div>
                <div className="form-group">
                <b><label for="mobile">Mobile</label></b>
                    <input type="email"  name="mobile" className="form-control" value={form.mobile}  placeHolder="Enter the Mobile Number"/>
                </div>
                <div className="form-group">
                <b><label for="email">Email ID</label></b>
                    <input type="email" name="email" className="form-control" value={form.email} placeHolder="Enter your Email Id" />
                </div>
                <div className="form-group">
                    <b><label for="password">Password</label></b>
                    <input type="email" name="password" className="form-control" value={form.password} placeHolder="Enter your password" />
                </div>
                <div className="form-group">
                <b><label for="cpassword">Confirm Password</label></b>
                    <input type="email"  name="cpassword" className="form-control" value={form.cpassword} placeHolder="Enter your password to confirm" />
                </div>
                <br></br>
                <div className="Submit">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>

        </>
    )
}

export default Admin