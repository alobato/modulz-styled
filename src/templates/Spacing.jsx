import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';
import Divider from './../components/Divider.js';
import CheckboxButton from './../components/CheckboxButton.js';

class Spacing extends Component {
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
            Spacing
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
          jc_spacebetween
          mt2>
          <Text
            size1
            gray600>
            Margin
          </Text>
          <Flexbox>
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
        </Flexbox>
        <Flexbox
          ai_center
          mt1>
          <Box>
            <Input
              defaultValue="0"/>
          </Box>
          <Box
            mr2
            ml2>
            <Box
              mb3>
              <Input
                defaultValue="0"/>
            </Box>
            <Box
              mb3
              center>
              <CheckboxButton
                checked="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="currentColor">
                  <path d="M5.00003 0H3.5C1 0 0 1.5 0 3C0 4.5 0.999974 6 3.5 6H5.00003" transform="translate(0.5 4.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0 0H1.5C4 0 5 1.5 5 3C5 4.5 4 6 1.5 6H0" transform="translate(9.5 4.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 0H0" transform="translate(4.5 7.5)" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box>
              <Input
                defaultValue="0"/>
            </Box>
          </Box>
          <Box>
            <Input
              defaultValue="0"/>
          </Box>
        </Flexbox>

        <Box
          mt3>
          <Divider />
        </Box>

        <Flexbox
          ai_center
          jc_spacebetween
          mt3>
          <Text
            size1
            gray600>
            Padding
          </Text>
          <Flexbox>
            <Box
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Flexbox>
        </Flexbox>
        <Flexbox
          ai_center
          mt1>
          <Box>
            <Input
              defaultValue="0"/>
          </Box>
          <Box
            mr2
            ml2>
            <Box
              mb3>
              <Input
                defaultValue="0"/>
            </Box>
            <Box
              mb3
              center>
              <CheckboxButton
                checked="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="currentColor">
                  <path d="M5.00003 0H3.5C1 0 0 1.5 0 3C0 4.5 0.999974 6 3.5 6H5.00003" transform="translate(0.5 4.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0 0H1.5C4 0 5 1.5 5 3C5 4.5 4 6 1.5 6H0" transform="translate(9.5 4.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 0H0" transform="translate(4.5 7.5)" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box>
              <Input
                defaultValue="0"/>
            </Box>
          </Box>
          <Box>
            <Input
              defaultValue="0"/>
          </Box>
        </Flexbox>

      </Box>
    );
  }
}

export default Spacing;
