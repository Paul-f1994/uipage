import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export class NavBar extends React.Component {
  render() {
    return (
        <ButtonGroup>
          <Button>TODAY</Button>
          <Button>WEEK</Button>
          <Button>MONTH</Button>
        </ButtonGroup>
    );
  }
}