
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
                            name={'Aloy'}
                            expiry={10/20}
                            cvc={'332'}
                            // focused={state.focused}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Cards
                            number={'3213123'}
                            name={'SAlly'}
                            expiry={10/20}
                            cvc={'332'}
                            // focused={state.focused}
                            />
                        </Carousel.Item>
                        </Carousel>
                        <br></br>
                        </Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                            </tbody>
                            </Table>

                        </Row>
                    </Container>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                {/* <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>
            </div>
        );
    }
    
}

export default ProfileCard; 