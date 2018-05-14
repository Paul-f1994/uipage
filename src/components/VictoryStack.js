import React from 'react';
import {VictoryStack} from 'victory';
import {VictoryArea} from 'victory';

export class StackChart extends React.Component {
  render() {
    return (
        <div className='stackChart'>
          <h2>Total Sales</h2>
          <p>$448.50</p>
          <VictoryStack>
            <VictoryArea
                data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
            />
            <VictoryArea
                data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
            />
            <VictoryArea
                data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
            />
          </VictoryStack>
        </div>
    );
  }
}

