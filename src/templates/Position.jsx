import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';
import Select from './../components/Select.js';
import ToggleButton from './../components/ToggleButton.js';

class Position extends Component {
  render() {
    return (
      <Box
        p3
        bt
        bcgray300>
        <Flexbox
          ai_center
          jc_spacebetween
          style={{margin: '-5px 0 0 0'}}>
          <Heading
            size1>
            Position
          </Heading>
          <Box
            style={{
              margin: '0 -5px 0 0',
              color: 'hsl(220,100%,50%)'}}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{display: 'block'}}>
              <path d="M0 0H14" transform="translate(5.5 12.5)"></path>
              <path d="M0 14V0" transform="translate(12.5 5.5)"></path>
            </svg>
          </Box>
        </Flexbox>
        <Flexbox
          ai_center
          mb2>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Position
            </Text>
          </Box>
          <Box
            fg1>
            <Select>
              <option
                value="static">
                Static
              </option>
              <option
                value="absolute">
                Absolute
              </option>
              <option
                value="fixed">
                Fixed
              </option>
              <option
                value="sticky">
                Sticky
              </option>
            </Select>
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
              Pin
            </Text>
          </Box>
          <Box>
            <Flexbox>
              <ToggleButton
                name="text_alignment"
                checked={true}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L5 0L0 6" transform="translate(7.5 7.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0V13" transform="translate(12.5 7.5)" stroke="black" stroke-linecap="round"/>
                <path d="M0 0H16" transform="translate(4.5 4.5)" stroke="black" stroke-linecap="round"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_alignment">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L6 5L0 10" transform="translate(11.5 7.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0H13" transform="translate(4.5 12.5)" stroke="black" stroke-linecap="round"/>
                <path d="M0 0V16" transform="translate(20.5 4.5)" stroke="black" stroke-linecap="round"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_alignment">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L5 6L0 0" transform="translate(7.5 11.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0V13" transform="translate(12.5 4.5)" stroke="black" stroke-linecap="round"/>
                <path d="M0 0H16" transform="translate(4.5 20.5)" stroke="black" stroke-linecap="round"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_alignment">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0L0 5L6 10" transform="translate(7.5 7.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 0H13" transform="translate(7.5 12.5)" stroke="black" stroke-linecap="round"/>
                <path d="M0 0V16" transform="translate(4.5 4.5)" stroke="black" stroke-linecap="round"/>
                </svg>
              </ToggleButton>
            </Flexbox>
          </Box>
        </Flexbox>
      </Box>
    );
  }
}

export default Position;
