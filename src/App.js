import React, { Component } from 'react';

import Section from './Section.js';
import Container from './Container.js';
import Grid from './Grid.js';
import Spacing from './Spacing.js';
import Alignment from './Alignment.js';
import Button from './Button.js';
import Text from './Text.js';
import Link from './Link.js';
import Heading from './Heading.js';
import PillButton from './PillButton.js';

class App extends Component {
  render() {
    return (
      <div>
        <Section small>
          <Container large>
            <Grid>
              <div className="grid-column">
                <Text>Logo</Text>
              </div>
              <div className="grid-column">
                <Alignment right>
                  <Grid>
                    <div className="grid-column">
                      <Link>Features</Link>
                    </div>
                    <div className="grid-column">
                      <Link>About</Link>
                    </div>
                    <div className="grid-column">
                      <Link>Pricing</Link>
                    </div>
                    <div className="grid-column">
                      <Link>Blog</Link>
                    </div>
                  </Grid>
                </Alignment>
              </div>
            </Grid>
          </Container>
        </Section>
        <Section large>
          <Container small>
            <Alignment center>
              <Spacing mb4>
                <Heading>This is a main heading</Heading>
              </Spacing>
              <Heading thin>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Heading>
              <Spacing mt6>
                <PillButton large blue>Get started</PillButton>
              </Spacing>
            </Alignment>
          </Container>
        </Section>
        <Section large snow>
          <Container>
            <Alignment center>
              <Spacing mb5>
                <Heading>This is a main heading</Heading>
                <Spacing mt1>
                  <Heading thin steel>This is a small heading</Heading>
                </Spacing>
              </Spacing>
            </Alignment>
            <Grid>
              <div className="grid-column">
                <Text large>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                <Spacing mt6>
                  <PillButton large blue>Get started</PillButton>
                </Spacing>
              </div>
              <div className="grid-column">
                <Grid>
                  <div className="grid-column">
                    <Text steel>We’re looking for talented creatives from all disciplines. Our team is focused on creating beautiful, functional designs that fit people’s lives. We’d love for you to join us.</Text>
                  </div>
                  <div className="grid-column">
                    <Text steel>We are having a problem billing your account. Please enter a new payment method or check with your payment provider.</Text>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
