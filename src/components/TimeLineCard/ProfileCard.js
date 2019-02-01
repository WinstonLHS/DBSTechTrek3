
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Container, Col, Row, Jumbotron, Badge, Table} from 'react-bootstrap'
// import StackedBar from './stackedBar/stackedBar'
import './ProfileCard.css'
// import {Bar} from 'react-chartjs-2';
import HSBar from "react-horizontal-stacked-bar-chart";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const divStyle = {
    marginleft: 50,
    marginright: 50,
    
};

class ProfileCard extends Component{
    render(){
        return(
            <div>
                <Card className="text-center shadow fixed-W ">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    {/* <Jumbotron fluid> */}
                    <Container>
                        <Row>
                        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date= "2/1/2019"
    
  >
    
   <Table>
         <tbody>
          <tr>
            <th scope="row"></th>
            <td>From : Jane </td>
            <td>Amount : $100 </td>
          </tr>
          </tbody>
          </Table>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date= "3/1/2019"
   
  >
   <Table>
         <tbody>
          <tr>
            <th scope="row"></th>
            <td>From : Peter </td>
            <td>Amount : $320 </td>

          </tr>
          </tbody>
         </Table>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date= "4/1/2019"
   
  >
    <Table>
         <tbody>
          <tr>
            <th scope="row"></th>
            <td>From : Jane </td>
            <td>Amount : $150 </td>
          </tr>
          </tbody>
           </Table>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date= "5/1/2019"
    
  >
    <Table>
         <tbody>
          <tr>
            <th scope="row">2</th>
            <td>From : kane </td>
            <td>Amount : $5200 </td>
          </tr>
          </tbody>
         </Table>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
        date= "6/1/2019"
  >
    <Table>
         <tbody>
          <tr>
            <th scope="row"></th>
            <td>From : Jane </td>
            <td>Amount : $1500 </td>
          </tr>
          </tbody>
          </Table>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
  date= "7/1/2019"
   
  >
   <Table>
         <tbody>
          <tr>
            <th scope="row"></th>
            <td>From : Jane </td>
            <td>Amount : $500 </td>
          </tr>
          </tbody>
          </Table>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date= "8/1/2019"
    
  >
    <Table>
         <tbody>
          <tr>
            <th scope="row"></th>
            <td>From : Jackson </td>
            <td>Amount : $500 </td>
          </tr>
          </tbody>
           </Table>
  </VerticalTimelineElement>
  
</VerticalTimeline>
                        </Row>
                    </Container>
                    {/* </Jumbotron> */}
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