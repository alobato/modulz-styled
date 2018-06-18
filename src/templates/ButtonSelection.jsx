import React, { Component } from 'react';
import Section from './../components/Section.js';
import Container from './../components/Container.js';
import Grid from './../components/Grid.js';
import LinesButton from './../buttons/LinesButton.js';
import RimButton from './../buttons/RimButton.js';
import PillButton from './../buttons/PillButton.js';
import FlatButton from './../buttons/FlatButton.js';
import RectangleButton from './../buttons/RectangleButton.js';
import OffsetButton from './../buttons/OffsetButton.js';

class ButtonSelection extends Component {
  render() {
    return (
      <Section size3>
        <Container size3>
            <Grid cols4>
              <LinesButton>Button</LinesButton>
              <PillButton blue>Pill Button</PillButton>
              <RimButton blue>Rim Button</RimButton>
              <FlatButton blue>Flat button</FlatButton>
              <RectangleButton blue>Button</RectangleButton>
              <OffsetButton blue>Button</OffsetButton>
              <LinesButton>Button</LinesButton>
              <LinesButton>Button</LinesButton>
            </Grid>
        </Container>
      </Section>
    );
  }
}

export default ButtonSelection;
