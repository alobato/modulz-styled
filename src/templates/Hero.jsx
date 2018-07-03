import React, { Component } from 'react';
import Section from './../components/Section.js';
import Container from './../components/Container.js';
import Box from './../components/Box.js';
import Heading from './../components/Heading.js';
import Link from './../components/Link.js';
import LinesButton from './../components/LinesButton.js';
import Text from './../components/Text.js';
import Flexbox from './../components/Flexbox.js';

class Hero extends Component {
  render() {
    return (
      <Section size3>
        <Container size3>
          <Box center>
            <Box mb4>
              <Heading size6>A big ass heading to introduce stuff</Heading>
            </Box>
            <Heading size4 lh5 gray600>A little ass sub heading to support the big ass heading above. Try not to exceed three lines of text.</Heading>
            <Flexbox jc_center mt5>
              <Box mr3>
                <Link teal>See how it works</Link>
              </Box>
              <Box ml3>
                <Link teal>Explore the features</Link>
              </Box>
            </Flexbox>
            <Flexbox jc_center mt6>
              <Box mr4>
                <LinesButton large white>Get started</LinesButton>
              </Box>
              <Box mr4>
                <LinesButton large crimson>Learn more</LinesButton>
              </Box>
            </Flexbox>
            <Box mt3>
              <Text size1 gray600>* Make sure you read this before signing up.</Text>
            </Box>
          </Box>
        </Container>
      </Section>
    );
  }
}

export default Hero;
