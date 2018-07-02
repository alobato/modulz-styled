import React, { Component } from 'react';
import Section from './../components/Section.js';
import Container from './../components/Container.js';
import Alignment from './../components/Alignment.js';
import Box from './../components/Box.js';
import Heading from './../components/Heading.js';
import Link from './../components/Link.js';
import PillButton from './../buttons/PillButton.js';
import Text from './../components/Text.js';

class Hero extends Component {
  render() {
    return (
      <Section size3>
        <Container size3>
          <Alignment center>
            <Box mb4>
              <Heading size6>A big ass heading to introduce stuff</Heading>
            </Box>
            <Heading size4 lh5 gray600>A little ass sub heading to support the big ass heading above. Try not to exceed three lines of text.</Heading>
            <Box mt5>
              <Box mr3>
                <Link teal>See how it works</Link>
              </Box>
              <Box ml3>
                <Link teal>Explore the features</Link>
              </Box>
            </Box>
            <Box mt6>
              <Box mr4>
                <PillButton large white>Get started</PillButton>
              </Box>
              <Box mr4>
                <PillButton large crimson>Learn more</PillButton>
              </Box>
            </Box>
            <Box mt3>
              <Text size1 gray600>* Make sure you read this before signing up.</Text>
            </Box>
          </Alignment>
        </Container>
      </Section>
    );
  }
}

export default Hero;
