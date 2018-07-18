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
          mb1>
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
          mb1>
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
          mb1>
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
                name="text_alignment"
                defaultChecked={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(4 16.5)" />
                  <path d="M0 0H17" transform="translate(4 12.5)" />
                  <path d="M0 0H9" transform="translate(4 8.5)" />
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_alignment">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(8 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(8 8.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_alignment">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(12 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(12 8.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_alignment">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H17" transform="translate(4 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H17" transform="translate(4 8.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_alignment">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
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
