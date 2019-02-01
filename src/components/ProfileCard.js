
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Container, Col, Row, Jumbotron, Badge} from 'react-bootstrap'
// import StackedBar from './stackedBar/stackedBar'
import './ProfileCard.css'
// import {Bar} from 'react-chartjs-2';
import HSBar from "react-horizontal-stacked-bar-chart";


class ProfileCard extends Component{
    render(){
        return(
            <div>
                <Card className="text-center shadow fixed-W ">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col sm={4}>
                            John Phillips
                            </Col>
                            <Col sm={4}>
                            <HSBar data={[{ value: 10 }, { value: 20 }, {value: 30}]} />
                            </Col>
                            <Col sm={4}>
                            <Button variant="primary">
                            Profile <Badge variant="light">9</Badge>
                            <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                            Profile <Badge variant="light">9</Badge>
                            <span className="sr-only">unread messages</span>
                            </Button>
                            </Col>
                        </Row>
                    </Container>
                    </Jumbotron>
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