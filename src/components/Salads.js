import React from "react";

import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';



import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";




function Salads(props) {

    const [token, setToken] = useState("")
    const [salad, setsalad] = useState([])
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

   

    const foodtoken = () => {
        alert(`Congrats!!! Your Food item has been added to your cart successfully`)
    }

    const getPosts = async () => {
        try {
            let response = await fetch("https://capstone-food-token.herokuapp.com/salads/");
            response = await response.json()
            setsalad(response);

        }
        catch (err) {
            console.log(err.message)

        }
    }
    getPosts()
    useEffect(() => {
        getPosts();
    }, [])


    return (
        <>
            <Container>
                <Row>
                    {
                        salad.map(p => {
                            return (
                                <>
                                    <Col md={2}>  </Col>

                                    <Card style={{ width: '18rem' }} key={p.id}>
                                        <Card.Img variant="top" src={p.image} />
                                        <br></br>
                                        <Card.Body>
                                            <Card.Title>{p.name}</Card.Title>
                                            <Card.Text>
                                                {p.description}

                                            </Card.Text>

                                            <Button onClick={foodtoken} variant="primary">Add to cart</Button>{"         "}
                                        </Card.Body>
                                    </Card>


                                </>



                            )
                        })
                    }

                </Row>

            </Container>



        </>
    )
}

export default Salads