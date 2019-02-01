
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Container, Col, Row, Jumbotron, Badge,Carousel, Table} from 'react-bootstrap'
// import StackedBar from './stackedBar/stackedBar'
// import './ProfileCard.css'
// import {Bar} from 'react-chartjs-2';
// import HSBar from "react-horizontal-stacked-bar-chart";
import Cards from 'react-credit-cards';


class ProfileCard extends Component{
    render(){
        return(
            <div>
                <Card className="text-center shadow fixed-W">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                        <Carousel> 
                        <Carousel.Item>
                        <Cards
                            number={'123123'}
                            name={'John Phillips'}
                            expiry={'10/22'}
                            cvc={'332'}
                            // focused={state.focused}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Cards
                            number={'3213123'}
                            name={'John Phillips'}
                            expiry={'03/11'}
                            cvc={'222'}
                            // focused={state.focused}
                            />
                        </Carousel.Item>
                        </Carousel>
                        <br></br>
                        </Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>TXN</th>
                                <th>Receiver</th>
                                <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>ATM</td>
                                <td>Otto</td>
                                <td>$10.01</td>
                                </tr>
                                <tr>
                                <td>CRT</td>
                                <td>Maxi</td>
                                <td>$0.02</td>
                                </tr>
                            </tbody>
                        </Table>

                        </Row>
                    </Container>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                {/* <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text> */}
                </Card.Body>
                <Card.Footer className="text-muted">
                <Button variant="faded">See More</Button>
                </Card.Footer>
                </Card>
            </div>
        );
    }
    
}

export default ProfileCard; 