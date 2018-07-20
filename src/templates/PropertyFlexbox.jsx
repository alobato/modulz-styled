import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Switch from './../components/Switch.js';
import Flexbox from './../components/Flexbox.js';
import ToggleButton from './../components/ToggleButton.js';

class PropertyFlexbox extends Component {
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
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Direction
            </Text>
          </Box>
          <Box>
            <Flexbox>
              <ToggleButton
                name="flex_direction"
                defaultChecked={true}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L3.66667 3L0 6" transform="translate(14.8333 16.5)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0H11.2667" transform="translate(6.5 19.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="20" height="7" rx="0.5" transform="translate(2 2)"/>
                <path d="M0 0V7" transform="translate(7.5 2.5)"/>
                <path d="M0 0V7" transform="translate(12.5 2.5)"/>
                <path d="M0 0V7" transform="translate(17.5 2.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="flex_direction">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L3.66667 3L0 6" transform="translate(10.1667 22.5) rotate(180)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0H11.2667" transform="translate(18.4999 19.5) rotate(180)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="20" height="7" rx="0.5" transform="translate(2 2)"/>
                <path d="M0 0V7" transform="translate(7.5 2.5)"/>
                <path d="M0 0V7" transform="translate(12.5 2.5)"/>
                <path d="M0 0V7" transform="translate(17.5 2.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="flex_direction">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L3 4L6 0" transform="translate(2.5 14.5)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0V12" transform="translate(5.5 6.5)" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="0.5" y="0.5" width="20" height="7" rx="0.5" transform="translate(23 2) rotate(90)"/>
                <path d="M0 0V7" transform="translate(22.5 7.5) rotate(90)"/>
                <path d="M0 0V7" transform="translate(22.5 12.5) rotate(90)"/>
                <path d="M0 0V7" transform="translate(22.5 17.5) rotate(90)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="flex_direction">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L3 4L6 0" transform="translate(8.5 10.5) rotate(180)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0V12" transform="translate(5.5 18.5) rotate(180)" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="0.5" y="0.5" width="20" height="7" rx="0.5" transform="translate(23 2) rotate(90)"/>
                <path d="M0 0V7" transform="translate(22.5 7.5) rotate(90)"/>
                <path d="M0 0V7" transform="translate(22.5 12.5) rotate(90)"/>
                <path d="M0 0V7" transform="translate(22.5 17.5) rotate(90)"/>
                </svg>
              </ToggleButton>
            </Flexbox>
          </Box>
        </Flexbox>
        <Flexbox
          ai_center
          jc_spacebetween
          mb2>
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
                name="align_items">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 4)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_items">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 12.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_items">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 20.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 16)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_items"
                defaultChecked={true}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <path d="M16 0H0" transform="translate(4.5 20.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="16" transform="translate(10 4)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_items">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H17" transform="translate(4 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H17" transform="translate(4 8.5)"/>
                </svg>
              </ToggleButton>
            </Flexbox>
          </Box>
        </Flexbox>
        <Flexbox
          ai_center
          jc_spacebetween
          mb2>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Justify
            </Text>
          </Box>
          <Box>
            <Flexbox>
              <ToggleButton
                name="justify_content"
                defaultChecked={true}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V16" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(4 8)"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(8 8)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="justify_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V16" transform="translate(12.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(8 8)"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(12 8)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="justify_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V16" transform="translate(20.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(12 8)"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(16 8)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="justify_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V16" transform="translate(20.5 4.5)" stroke-linecap="round"/>
                <path d="M0 0V16" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(4 8)"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(16 8)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="justify_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V16" transform="translate(20.5 4.5)" stroke-linecap="round"/>
                <path d="M0 0V16" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <path d="M0 0V16" transform="translate(12.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(6 8)"/>
                <rect x="0.5" y="0.5" width="4" height="8" transform="translate(14 8)"/>
                </svg>
              </ToggleButton>
            </Flexbox>
          </Box>
        </Flexbox>
        <Flexbox
          ai_center
          jc_spacebetween
          mb2>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Content
            </Text>
          </Box>
          <Box>
            <Flexbox>
              <ToggleButton
                name="align_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 4)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 12.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 20.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
                <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 16)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_content"
                defaultChecked={true}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
                <path d="M16 0H0" transform="translate(4.5 20.5)" stroke-linecap="round"/>
                <rect x="0.5" y="0.5" width="4" height="16" transform="translate(10 4)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="align_content">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H17" transform="translate(4 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H17" transform="translate(4 8.5)"/>
                </svg>
              </ToggleButton>
            </Flexbox>
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
              Wrap
            </Text>
          </Box>
          <Box>
            <Flexbox
              ai_center>
              <Box
                mr2>
                <Switch />
              </Box>
              <ToggleButton
                name="wrap_reverse">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(12 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(12 8.5)"/>
                </svg>
              </ToggleButton>
            </Flexbox>
          </Box>
        </Flexbox>
      </Box>
    );
  }
}

export default PropertyFlexbox;
