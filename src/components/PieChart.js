import React from 'react';
import {VictoryPie} from 'victory';

export class PieChart extends React.Component {
  render() {
    return (
        <div className='pieChart'>
          <VictoryPie/>
        </div>
    );
  }
}


