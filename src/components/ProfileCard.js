
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

        fetch('https://techtrek-api-gateway.cfapps.io/customers/:userName',{method: 'GET', mode:'cors',
        headers: {'PD2':'806ba7f9-963a-4761-badd-3242f56552a3','Content-Type':'application/x-www-form-urlencoded'}})
        .then(function(res){console.log(res)})

        return(
            <div>
                <Card className="text-center shadow fixed-W ">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col sm={4}>
                            John Phillips <br>  
                            </br>
                            <div style={{fontSize: '15px'}}>
                            Last Login: 2 hours ago
                            </div>
                            </Col>
                            <Col sm={4}>
                            <HSBar data={[{ value: 10 }, { value: 20 }, {value: 30}]} />
                            </Col>
                            <Col sm={4}>
                            <Button variant="danger">
                            Messages <Badge variant="light">2</Badge>
                            <span className="sr-only">unread messages</span>
                            </Button>
                            <br></br>
                            <Button variant="danger">
                            Alerts <Badge variant="light">9</Badge>
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
                {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">
                <Button variant="faded">See More</Button>
                </Card.Footer>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>
            </div>
        );
    }
    
}

export default ProfileCard; 