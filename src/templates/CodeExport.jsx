import React, { Component } from 'react';
import Grid from './../components/Grid.js';
import Section from './../components/Section.js';
import Container from './../components/Container.js';
import Spacing from './../components/Spacing.js';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';

import Strike from './Strike.jsx';

class CodeExport extends Component {
  render() {
    return (
      <Section size3 gray900>
        <Container size1 bp3size2>
          <Grid cols2>
            <div>
              <Heading size4 lh4 mb4 white>
                <Strike>
                  Handoff
                </Strike>
                Code export
              </Heading>
              <Text size3 lh2 white>
                No more handoffs. No more redlines. With Modulz, you can export production-ready React components.
              </Text>
            </div>
            <div>
              <Heading size4 lh4 mb4 white>
                <Strike>
                  Handoff
                </Strike>
                Code export
              </Heading>
              <Text size3 lh2 white>
                No more handoffs. No more redlines. With Modulz, you can export production-ready React components.
              </Text>
            </div>
          </Grid>
        </Container>
      </Section>
    );
  }
}

export default CodeExport;
