import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export const Home = () => {
    const [firstname, setFirst] = useState('');
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://capstone-food-token.herokuapp.com/pizza/');

                setFirst(data.firstname);
            } catch (e) {
                setNavigate(true);
            }
        })();
    }, []);

    const logout = async () => {
        await axios.post('logout', {}, { withCredentials: true });

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/" />;
    }



    return (
        <>

            <div className="p-3 bg-primary justify-content-center" >
                <h3 >Welcome to Pizza World!!!</h3> </div>


            <header className="p-3 bg-success text-white">
                <div className="container">


                    <div className="text-end">

                        <h3>Click here to order now!!!</h3>
                        <Link to="/food" className="btn btn-outline-light me-2">Pizza</Link>


                    </div>

                </div>
            </header>
            {/* </div> */}
            <Card>
                <Card.Img variant="top" src="https://i.imgur.com/48Zw4K3.png" />
                <Card.Body>

                    <Card.Text>
                        Established in 1980, the company had operated Tricon Global Restaurants’ franchised Pizza Hut brand since its introduction in Thailand, and when their agreement was terminated.The Pizza Company was established as the company's own brand in 2001.
                        In 2004, The Pizza Company began to expand and franchise internationally and today the restaurant has franchises in Jordan, the United Arab Emirates, Saudi Arabia, Laos, China, Bahrain, Myanmar and Cambodia. There are also multiple locations in Vietnam, especially in Ho Chi Minh City.
                        The Pizza Company is currently the largest pizza fast food restaurant chain in Thailand.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}