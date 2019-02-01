import React, { Component } from 'react'
import './login.css'


import axios from 'axios'

class login extends Component {
  constructor () {
    super()
    this.state = {
      userName: ''
    }
    

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    
    var configX = {
      url: '/customers/:userName',
      baseURL: 'https://techtrek-api-gateway.cfapps.io/',
      headers: {'identity': 'PD2','token': '806ba7f9-963a-4761-badd-3242f56552a3'},
      method: 'get',
      timeout: 5000,
      params: {
        userName: 'marytan'
      },

    }
    axios.request(configX);
    //axios({ method: 'POST', url: 'https://techtrek-api-gateway.cfapps.io', headers: {authorization: '806ba7f9-963a-4761-badd-3242f56552a3'}, data: { user: 'PD2' } })
    
    //axios.defaults.headers.post['token']='806ba7f9-963a-4761-badd-3242f56552a3';
    //axios.defaults.headers.post['identity']='PD2';
    //axios.get('https://techtrek-api-gateway.cfapps.io/customers/marytan')
    //  .then(response => this.setState({userName: response.data.name}));
    //console.log(this.state.userName);
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>LOGIN</button>
        <p>{this.state.userName}</p>
      </div>
    )
  }
}
export default login