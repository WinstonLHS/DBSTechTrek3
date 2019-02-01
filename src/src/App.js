import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table} from 'reactstrap';
import logo from './logo.svg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import './App.css';

const divStyle = {
    marginleft: 50,
    marginright: 50,
    
};



class App extends Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      dropdownOpen1: false,

      dropdownOpen2:false
    };
  }

  toggle1() {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1,
      dropdownOpen2:this.state.dropdownOpen2
    });

  }

     toggle2() {
    this.setState({
      dropdownOpen1: this.state.dropdownOpen1,
      dropdownOpen2:!this.state.dropdownOpen2
    });

  }

  render() {
    return (
      <div>
      <ButtonDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
        <DropdownToggle caret>
          Make Investment
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Make Investment</DropdownItem>
          <DropdownItem disabled>
          Making Investment information


          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>


      <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
        <DropdownToggle caret>
          Manage Investment
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Manage Investment</DropdownItem>
          <DropdownItem disabled>Manage Investment information</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>


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
      </div>
    );
  }
}

export default App;
