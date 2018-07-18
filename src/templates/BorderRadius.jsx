import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';

class BorderRadius extends Component {
  render() {
    return (
      <Box
        p3
        bt
        bcgray300>
        <Box
          mb2>
          <Text
            size1
            gray600>
            Corner radius
          </Text>
        </Box>
        <Flexbox
          jc_spacebetween
          mb2>
          <Box>
            <Input
              defaultValue="0"
              size="6"/>
          </Box>
          <Box>
            <Input
              defaultValue="0"
              size="6"/>
          </Box>
        </Flexbox>
        <Flexbox
          jc_spacebetween>
          <Box>
            <Input
              defaultValue="0"
              size="6"/>
          </Box>
          <Box>
            <Input
              defaultValue="0"
              size="6"/>
          </Box>
        </Flexbox>
      </Box>
    );
  }
}

export default BorderRadius;
