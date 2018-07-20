import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';
import ToggleButton from './../components/ToggleButton.js';

class PropertyFlexItem extends Component {
  render() {
    return (
      <Box
        p3
        bt
        bcgray300>
        <Flexbox
          ai_center
          jc_spacebetween
          mb2>
          <Box>
            <Text
              gray600
              size1
              right>
              Order
            </Text>
          </Box>
          <Box>
            <Box>
              <Input
                defaultValue="0"
                size="6"/>
            </Box>
          </Box>
        </Flexbox>
        <Flexbox
          ai_center
          jc_spacebetween
          mb2>
          <Box>
            <Text
              gray600
              size1
              right>
              Grow
            </Text>
          </Box>
          <Box>
            <Box>
              <Input
                defaultValue="0"
                size="6"/>
            </Box>
          </Box>
        </Flexbox>
        <Flexbox
          ai_center
          jc_spacebetween
          mb2>
          <Box>
            <Text
              gray600
              size1
              right>
              Shrink
            </Text>
          </Box>
          <Box>
            <Box>
              <Input
                defaultValue="0"
                size="6"/>
            </Box>
          </Box>
        </Flexbox>
        <Flexbox
          ai_center
          jc_spacebetween>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Align
            </Text>
          </Box>
          <Box>
            <Flexbox>
              <ToggleButton
                name="align_self">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 4)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_self">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 12.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_self">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 20.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 16)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_self"
                defaultChecked={true}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <path d="M16 0H0" transform="translate(4.5 20.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="16" transform="translate(10 4)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_self">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H17" transform="translate(4 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H17" transform="translate(4 8.5)"/>
                </svg>
              </ToggleButton>
            </Flexbox>
          </Box>
        </Flexbox>
      </Box>
    );
  }
}

export default PropertyFlexItem;
