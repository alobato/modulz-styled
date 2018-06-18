import React, { Component } from 'react';
import Section from './../components/Section.js';
import Container from './../components/Container.js';
import Grid from './../components/Grid.js';
import GridColumn from './../components/GridColumn.js';
import LinesButton from './../buttons/LinesButton.js';
import RimButton from './../buttons/RimButton.js';
import PillButton from './../buttons/PillButton.js';
import FlatButton from './../buttons/FlatButton.js';
import RectangleButton from './../buttons/RectangleButton.js';
import OffsetButton from './../buttons/OffsetButton.js';

class ButtonSelection extends Component {
  render() {
    return (
      <Section expanded>
        <Container>
            <Grid>
                <GridColumn bps_column_3>
                    <LinesButton>Button</LinesButton>
                </GridColumn>
                <GridColumn bps_column_3>
                    <PillButton blue>Pill Button</PillButton>
                </GridColumn>
                <GridColumn bps_column_3>
                    <RimButton blue>Rim Button</RimButton>
                </GridColumn>
                <GridColumn bps_column_3>
                    <FlatButton blue>Flat button</FlatButton>
                </GridColumn>
                <GridColumn bps_column_3>
                    <RectangleButton blue>Button</RectangleButton>
                </GridColumn>
                <GridColumn bps_column_3>
                    <OffsetButton blue>Button</OffsetButton>
                </GridColumn>
                <GridColumn bps_column_3>
                    <LinesButton>Button</LinesButton>
                </GridColumn>
                <GridColumn bps_column_3>
                    <LinesButton>Button</LinesButton>
                </GridColumn>
            </Grid>
        </Container>
      </Section>
    );
  }
}

export default ButtonSelection;
