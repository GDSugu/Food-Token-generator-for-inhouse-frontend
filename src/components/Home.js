import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import FoodChart from "./FoodCharts"

export const Home = () => {
   
    const [navigate, setNavigate] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const { data } = await axios.get('http://localhost:3002/pizza/');

               
    //         } catch (e) {
    //             setNavigate(true);
                
    //             if (navigate) {
    //                 return <Navigate to="/" />;
    //             }
            
    //         }
    //     })();
    // }, []);

        (async () => {
            try {
                const { data } = await axios.get('https://capstone-food-token.herokuapp.com/pizza/');

               
            } catch (e) {
                setNavigate(true);
                
                if (navigate) {
                    return <Navigate to="/" />;
                }
            
            }
        });
 
    return (
        <>
            <div className="p-3 bg-white text-center text-primary " >
                <h3><i>Welcome to Tasty Food restaurant!!!</i></h3> 
            </div>

            <header className="p-3 bg-primary text-white">
                <div className="container">

                    <div className="text-end">

                        <h3>Click here to order now!!!</h3>
                        <Link to="/food" className="btn btn-outline-dark me-5">Pizza</Link>

                    </div>

                </div>
            </header>

           
            
            <Card>
               
                <Card.Body>
                    <Card.Text>
                        Established in 1980, the company had operated Tricon Global Restaurants’ franchised Pizza Hut brand since its introduction in Thailand, and when their agreement was terminated.The Pizza Company was established as the company's own brand in 2001.
                        In 2004, The Pizza Company began to expand and franchise internationally and today the restaurant has franchises in Jordan, the United Arab Emirates,India, Saudi Arabia, Laos, China, Bahrain, Myanmar and Cambodia. There are also multiple locations in Vietnam, especially in Ho Chi Minh City.
                        The Pizza Company is currently the largest pizza fast food restaurant chain in Thailand.
                    </Card.Text>
                    <Card.Img variant="top" src="https://i.imgur.com/48Zw4K3.png" />
                    
                </Card.Body>
            </Card>

            <Card>
               <Card.Body>
                    <FoodChart/>
               </Card.Body>
           </Card>
        </>
    )
}