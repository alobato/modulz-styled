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
import CodeExport from './templates/CodeExport.jsx';

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
        <CodeExport></CodeExport>

      </div>
    );
  }
}

export default App;
