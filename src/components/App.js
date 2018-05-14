import React, {Component} from 'react';
import '../styles/App.css';
import {PieChart} from './PieChart';
import {StackChart} from './VictoryStack';
import {SaleForm} from './SaleForm'
import {NavBar} from './NavBar'
import {Header} from './Header'
import {ReactBar} from './ReactBar'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <NavBar/>
          <ReactBar/>
          <StackChart/>
          <PieChart/>
          <SaleForm/>
        </div>
    );
  }
}

export default App;
