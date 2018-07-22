import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import CheckboxButton from './../components/CheckboxButton.js';
import Flexbox from './../components/Flexbox.js';

class Filters extends Component {
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
            Filters
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
        <Box
          table>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Blur
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Brightness
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Contrast
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Grayscale
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Hue
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Invert
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Opacity
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Saturate
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

          <Box
            pb1>
          </Box>

          <Box
            tablerow>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Text
                gray600
                size1
                right>
                Sepia
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr2>
              <Slider
                type="range"
                defaultValue="0" />
            </Box>
            <Box
              tablecell
              alignmiddle
              right
              pr1>
              <Input
                defaultValue="0"
                size="12"/>
            </Box>
            <Box
              tablecell
              alignmiddle
              pr1>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </CheckboxButton>
            </Box>
            <Box
              tablecell
              alignmiddle>
              <CheckboxButton>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="6" height="8" rx="0.5" transform="translate(4 4)" stroke-linecap="round" stroke-linejoin="bevel"/>
                  <path d="M0 0H8" transform="translate(3.5 4.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(5.5 2.5)" stroke-linecap="round"/>
                </svg>
              </CheckboxButton>
            </Box>
          </Box>

        </Box>
      </Box>
    );
  }
}

export default Filters;
