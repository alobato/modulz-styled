import React, { Component } from 'react';
import Section from './../components/Section.js';
import Container from './../components/Container.js';
import Alignment from './../components/Alignment.js';
import Spacing from './../components/Spacing.js';
import Heading from './../components/Heading.js';
import Link from './../components/Link.js';
import PillButton from './../buttons/PillButton.js';
import Text from './../components/Text.js';

class Hero extends Component {
  render() {
    return (
      <Section size3>
        <Container>
          <Alignment center>
            <Spacing mb4>
              <Heading large>A big ass heading to introduce stuff</Heading>
            </Spacing>
            <Heading thin gray>A little ass sub heading to support the big ass heading above. Try not to exceed three lines of text.</Heading>
            <Spacing mt5>
              <Spacing inline mr3>
                <Link teal>See how it works</Link>
              </Spacing>
              <Spacing inline ml3>
                <Link teal>Explore the features</Link>
              </Spacing>
            </Spacing>
            <Spacing mt6>
              <Spacing inline mr4>
                <PillButton large white>Get started</PillButton>
              </Spacing>
              <Spacing inline mr4>
                <PillButton large crimson>Learn more</PillButton>
              </Spacing>
            </Spacing>
            <Spacing mt3>
              <Text small gray_500>* Make sure you read this before signing up.</Text>
            </Spacing>
          </Alignment>
        </Container>
      </Section>
    );
  }
}

export default Hero;
