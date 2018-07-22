import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';
import Select from './../components/Select.js';
import ToggleButton from './../components/ToggleButton.js';
import CheckboxButton from './../components/CheckboxButton.js';

class Typography extends Component {
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
            Typography
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
          mt2>
          <Box
            fg1
            mr2>
            <Select>
              <option
                value="san-francisco">
                San Francisco
              </option>
              <option
                value="roboto">
                Roboto
              </option>
              <option
                value="untitled-sans">
                Untitled Sans
              </option>
            </Select>
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

        <Flexbox
          ai_center
          mt2>
          <Box
            fg1
            mr2>
            <Select>
              <option
                value="100">
                100
              </option>
              <option
                value="200">
                200
              </option>
              <option
                value="300">
                300
              </option>
            </Select>
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

        <Flexbox
          ai_center
          mt2>
          <Box
            fg1
            mr2>
            <Input
              defaultValue="4px" />
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

        <Flexbox
          ai_center
          mt2>
          <Box
            fg1
            mr2>
            <Input
              defaultValue="4px" />
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

        <Flexbox
          ai_center
          mt2>
          <Box
            fg1
            mr2>
            <Input
              defaultValue="4px" />
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

        <Flexbox
          ai_center
          jc_spacebetween
          mt2>
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
            <Flexbox
              ai_center>
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
        </Flexbox>

        <Flexbox
          ai_center
          jc_spacebetween
          mt2>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Case
            </Text>
          </Box>
          <Box>
            <Flexbox
              ai_center>
              <ToggleButton
                name="text_transform"
                defaultChecked={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(4 16.5)" />
                  <path d="M0 0H17" transform="translate(4 12.5)" />
                  <path d="M0 0H9" transform="translate(4 8.5)" />
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_transform">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(8 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(8 8.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_transform">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(12 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(12 8.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_transform">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H17" transform="translate(4 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H17" transform="translate(4 8.5)"/>
                </svg>
              </ToggleButton>
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
        </Flexbox>

        <Flexbox
          ai_center
          jc_spacebetween
          mt2>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Decoration
            </Text>
          </Box>
          <Box>
            <Flexbox
              ai_center>
              <ToggleButton
                name="text_decoration"
                defaultChecked={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(4 16.5)" />
                  <path d="M0 0H17" transform="translate(4 12.5)" />
                  <path d="M0 0H9" transform="translate(4 8.5)" />
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_decoration">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(8 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(8 8.5)"/>
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_decoration">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(12 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(12 8.5)"/>
                </svg>
              </ToggleButton>
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
        </Flexbox>

        <Flexbox
          ai_center
          jc_spacebetween
          mt2>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Italic
            </Text>
          </Box>
          <Box>
            <Flexbox
              ai_center>
              <ToggleButton
                name="text_style"
                defaultChecked={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(4 16.5)" />
                  <path d="M0 0H17" transform="translate(4 12.5)" />
                  <path d="M0 0H9" transform="translate(4 8.5)" />
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_style">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(8 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(8 8.5)"/>
                </svg>
              </ToggleButton>
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
        </Flexbox>

        <Flexbox
          ai_center
          jc_spacebetween
          mt2>
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
            <Flexbox
              ai_center>
              <ToggleButton
                name="text_direction"
                defaultChecked={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(4 16.5)" />
                  <path d="M0 0H17" transform="translate(4 12.5)" />
                  <path d="M0 0H9" transform="translate(4 8.5)" />
                </svg>
              </ToggleButton>
              <ToggleButton
                name="text_direction">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M0 0H9" transform="translate(8 16.5)"/>
                  <path d="M0 0H17" transform="translate(4 12.5)"/>
                  <path d="M0 0H9" transform="translate(8 8.5)"/>
                </svg>
              </ToggleButton>
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
        </Flexbox>

      </Box>
    );
  }
}

export default Typography;
