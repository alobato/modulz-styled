import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';
import CheckboxButton from './../components/CheckboxButton.js';

class Opacity extends Component {
  render() {
    return (
      <Box
        pt2>
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
              value="100" />
          </Box>
          <Box
            pl1>
            <CheckboxButton>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
              </svg>
            </CheckboxButton>
          </Box>
          <Box
            pl1>
            <CheckboxButton>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
              </svg>
            </CheckboxButton>
          </Box>
        </Flexbox>
      </Box>
    );
  }
}

export default Opacity;
