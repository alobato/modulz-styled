import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';

class Opacity extends Component {
  render() {
    return (
      <Box
        p3
        bt
        bcgray300>
        <Flexbox
          ai_center>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Opacity
            </Text>
          </Box>
          <Box
            mr2>
            <Slider
              type="range"
              defaultValue="100" />
          </Box>
          <Box>
            <Input
              value="100"
              size="4" />
          </Box>
        </Flexbox>
      </Box>
    );
  }
}

export default Opacity;
