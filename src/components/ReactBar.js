import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bars from 'react-bars';

import '../styles/ReactBar.css';

export class ReactBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: [
        {label:'sales', value:80},
      ]
    };
  }

  render() {
    return (
        <div className="demo">
          <Bars data={this.state.testData} makeUppercase={true}/>
        </div>
    );
  }
}