import React, { Component } from 'react';
import Section from './../components/Section.js';
import Container from './../components/Container.js';
import Spacing from './../components/Spacing.js';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';

import Strike from './Strike.jsx';

class CodeExport extends Component {
  render() {
    return (
      <Section size3>
        <Container large>
          <Heading size4>
            <Strike>
              Handoff
            </Strike>
            Code export
          </Heading>
          <Text size4>
            No more handoffs. No more redlines. With Modulz, you can export production-ready React components.
          </Text>
        </Container>
      </Section>
    );
  }
}

export default CodeExport;
