import {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';


export const Register = () => {
    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [navigate, setNavigate] = useState(false);


    const submit = async e => {
        e.preventDefault();
        
        await axios.post('"https://capstone-food-token.herokuapp.com/signup"', {
            firstname,lastname,mobile,email,email,password,cpassword
        });
        

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return <main className="form-signin">
    <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <div className="form-floating">
            <input className="form-control" placeholder="Name"
                   onChange={e => setFirst(e.target.value)}
            />
            <label>First Name</label>
        </div>
        <div className="form-floating">
            <input className="form-control" placeholder="Name"
                   onChange={e => setLast(e.target.value)}
            />
            <label>Last Name</label>
        </div>
        <div className="form-floating">
            <input type="number" className="form-control" id="floatingInputmobile" placeholder="9752436253"
                   onChange={e => setMobile(e.target.value)}
            />
            <label htmlFor="floatingInput">Mobile</label>
        </div>

        

        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                   onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                   onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-floating">
            <input type="password" className="form-control" id="floatingCPassword" placeholder="CPassword"
                   onChange={e => setcPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
</main>
}





// import {useState} from "react";
// import axios from "axios";
// import {NavLink} from 'react-router-dom';

// function Register (props) {
    // const [firstname, setFirst] = useState('');
    // const [lastname, setLast] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [cpassword, setcPassword] = useState('');
    // const [navigate, setNavigate] = useState(false);

//     const submit = async e => {
//         e.preventDefault();

//         await axios.post('http://localhost:3002/auth/signup', {
//             firstname,lastname,mobile,email,email,password,cpassword
//         });

        
//     }

    

//     return (
//         <>
    //     <main className="form-signin">
    //     <form onSubmit={submit}>
    //         <h1 className="h3 mb-3 fw-normal">Please register</h1>

    //         <div className="form-floating">
    //             <input className="form-control" placeholder="Name"
    //                    onChange={e => setFirst(e.target.value)}
    //             />
    //             <label>First Name</label>
    //         </div>
    //         <div className="form-floating">
    //             <input className="form-control" placeholder="Name"
    //                    onChange={e => setLast(e.target.value)}
    //             />
    //             <label>Last Name</label>
    //         </div>
    //         <div className="form-floating">
    //             <input type="number" className="form-control" id="floatingInput" placeholder="9752436253"
    //                    onChange={e => setMobile(e.target.value)}
    //             />
    //             <label htmlFor="floatingInput">Mobile</label>
    //         </div>

            

    //         <div className="form-floating">
    //             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    //                    onChange={e => setEmail(e.target.value)}
    //             />
    //             <label htmlFor="floatingInput">Email address</label>
    //         </div>

    //         <div className="form-floating">
    //             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
    //                    onChange={e => setPassword(e.target.value)}
    //             />
    //             <label htmlFor="floatingPassword">Password</label>
    //         </div>

    //         <div className="form-floating">
    //             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
    //                    onChange={e => setcPassword(e.target.value)}
    //             />
    //             <label htmlFor="floatingPassword">Confirm Password</label>
    //         </div>

    //         <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    //     </form>
    // </main>
//         </>
//     ) 
// }

// export default Register
