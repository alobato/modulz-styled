import React, { Component } from 'react';

import Header from './components/Header.js';
import Section from './components/Section.js';
import Container from './components/Container.js';
import Grid from './components/Grid.js';
import GridColumn from './components/GridColumn.js';
import Spacing from './components/Spacing.js';
import Alignment from './components/Alignment.js';
import Text from './components/Text.js';
import Link from './components/Link.js';
import Heading from './components/Heading.js';
import Divider from './components/Divider.js';

import ButtonSelection from './templates/ButtonSelection.jsx';
import Hero from './templates/Hero.jsx';

class App extends Component {
  render() {
    return (
      <div>

        <Section size3>
          <Container large>
            <Heading size1>
              Love life.Love yourself.
            </Heading>
            <Heading size2>
              Love life.Love yourself.
            </Heading>
            <Heading size3>
              Love life.Love yourself.
            </Heading>
            <Heading size4>
              Love life.Love yourself.
            </Heading>
            <Heading size5>
              Love life.Love yourself.
            </Heading>
            <Heading size6>
              Love life.Love yourself.
            </Heading>
          </Container>
        </Section>

        <ButtonSelection></ButtonSelection>
        <Hero></Hero>

        <Section large amberTint>
          <Container large>
            <Spacing mb8>
              <Heading large crimson>Love life.<br></br> Love yourself.</Heading>
            </Spacing>
            <Grid>
              <GridColumn column_12 bps_column_6>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading redShade>Search.</Heading>
                  </Spacing>
                  <Text>Know what you want to listen to! Just search and hit play.</Text>
                </Spacing>
                <Spacing mb5>
                  <Spacing mb2>
                    <Heading redShade>Browse.</Heading>
                  </Spacing>
                  <Text>Check out the latest charts, brand new releases and great playlists for right now.</Text>
                </Spacing>
                <Spacing>
                  <Spacing mb2>
                    <Heading redShade>Discover.</Heading>
                  </Spacing>
                  <Text>Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio.</Text>
                </Spacing>
              </GridColumn>
              <GridColumn column_12 bps_column_6>

              </GridColumn>
            </Grid>
          </Container>
        </Section>

        <Section large>
          <Container large>
            <Alignment bps_center>
              <Grid>
                <GridColumn column_12 bps_column_6>
                  <Spacing mb3>
                    <Heading thin>This is a small heading</Heading>
                  </Spacing>
                  <Text large gray_500>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </GridColumn>
                <GridColumn column_12 bps_column_6>
                  <Spacing mb3>
                    <Heading thin>This is a small heading</Heading>
                  </Spacing>
                  <Text large gray_500>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                </GridColumn>
              </Grid>
            </Alignment>
          </Container>
        </Section>

        <Divider></Divider>

        <Section medium gray_800>
          <Container large>
              <Text gray_500>Copyright &copy; 1864</Text>
          </Container>
        </Section>

      </div>
    );
  }
}

export default App;
