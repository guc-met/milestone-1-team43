import React, { Component } from 'react';
import Calendar1 from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  
}
export default function render() {
       
    return (
      <div>
        <Calendar1 
         
        />
      </div>
    );
  }