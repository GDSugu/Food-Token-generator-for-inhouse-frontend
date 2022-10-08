import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import Food from "./components/Food";
import Drinks from "./components/Drinks";
import Sauces from "./components/Sauces";
import Salads from "./components/Salads";
import Pasta from "./components/Pasta";
import Desserts from "./components/Desserts";

import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import Admin from "./components/Admin"
import LoginForm from "./components/Form"
import FoodChart from './components/FoodCharts';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function App() {
    return <BrowserRouter>
        <header className="p-3 bg-dark text-white">
            <div className="container">
                
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>

                    </ul>
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-outline-light me-2" variant="dark ">
                            FoodList
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="/food" >Pizza </Dropdown.Item>
                            <Dropdown.Item href="/pasta">Pasta</Dropdown.Item>
                            <Dropdown.Item href="/salads">salads</Dropdown.Item>
                            <Dropdown.Item href="/desserts">Desserts</Dropdown.Item>
                            <Dropdown.Item href="/sauces">Sauces</Dropdown.Item>
                            <Dropdown.Item href="/drinks">Drinks</Dropdown.Item>
                            <Dropdown.Divider />
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="text-end">
                       
                        <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
                        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>

                    </div>

                </div>
            </div>
        </header>


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<LoginForm />} />
            <Route path="/food" element={<Food />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/salads" element={<Salads />} />
            <Route path="/sauces" element={<Sauces />} />
            <Route path="/pasta" element={<Pasta />} />

        </Routes>

        {/* <Button onClick={()=> alert("You are redirected to Payment page")} variant="primary">Buy</Button> */}

    </BrowserRouter>;
}

export default App;