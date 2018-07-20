import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
import Flexbox from './../components/Flexbox.js';
import Select from './../components/Select.js';
import ToggleButton from './../components/ToggleButton.js';

class Typography extends Component {
  render() {
    return (
      <Box
        p3
        bt
        bcgray300>
        <Box
          mb2>
          <Box>
            <Flexbox>
              <Box
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
              <Box>
                <Input />
              </Box>
            </Flexbox>
          </Box>
        </Box>

        <Box
          mb2>
          <Box>
            <Flexbox wrap>
              <Box
                w50
                pr2>
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
                w50
                pl2
                mb2>
                <Input
                  defaultValue="4px" />
              </Box>
              <Flexbox
                w50
                pr1>
                <Box
                  pr1>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="hsl(208, 18%, 50%)" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0L3 4L0 0" transform="translate(4.5 16.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 4L3 0L0 4" transform="translate(4.5 4.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0 0H7" transform="translate(13.5 6.5)" stroke-linecap="round"/>
                  <path d="M0 0H7" transform="translate(13.5 10.5)" stroke-linecap="round"/>
                  <path d="M0 0H7" transform="translate(13.5 14.5)" stroke-linecap="round"/>
                  <path d="M0 0H4" transform="translate(13.5 18.5)" stroke-linecap="round"/>
                  <path d="M0.5 0C0.5 -0.276142 0.276142 -0.5 0 -0.5C-0.276142 -0.5 -0.5 -0.276142 -0.5 0H0.5ZM-0.5 15C-0.5 15.2761 -0.276142 15.5 0 15.5C0.276142 15.5 0.5 15.2761 0.5 15H-0.5ZM-0.5 0V15H0.5V0H-0.5Z" transform="translate(7.5 4.5)" stroke="none" fill="hsl(208, 18%, 50%)"/>
                  </svg>
                </Box>
                <Input
                  defaultValue="100%" />
              </Flexbox>
              <Box
                w50
                pl1>
                <Flexbox>
                  <Box
                    pr1>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="hsl(208, 18%, 50%)" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6L0 3L3 0" transform="translate(4.5 14.5)" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M0 6L3 3L0 0" transform="translate(17.5 14.5)" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 7L3 0L0 7" transform="translate(5.5 4.5)" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6 0L3 7L0 0" transform="translate(13.5 4.5)" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.5 0.5C14.7761 0.5 15 0.276142 15 0C15 -0.276142 14.7761 -0.5 14.5 -0.5V0.5ZM0 -0.5C-0.276142 -0.5 -0.5 -0.276142 -0.5 0C-0.5 0.276142 -0.276142 0.5 0 0.5V-0.5ZM14.5 -0.5H0V0.5H14.5V-0.5Z" transform="translate(5 17.5)" stroke="none" fill="hsl(208, 18%, 50%)"/>
                      <path d="M3 0.5C3.27614 0.5 3.5 0.276142 3.5 0C3.5 -0.276142 3.27614 -0.5 3 -0.5V0.5ZM0 -0.5C-0.276142 -0.5 -0.5 -0.276142 -0.5 0C-0.5 0.276142 -0.276142 0.5 0 0.5V-0.5ZM3 -0.5H0V0.5H3V-0.5Z" transform="translate(7 8.5)" stroke="none" fill="hsl(208, 18%, 50%)"/>
                    </svg>
                  </Box>
                  <Input
                    type="text"
                    defaultValue="100%" />
                </Flexbox>
              </Box>
            </Flexbox>
          </Box>
        </Box>

        <Flexbox
          ai_center
          jc_spacebetween
          mb1>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Alignment
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
            </Flexbox>
          </Box>
        </Flexbox>

        <Flexbox
          ai_center
          jc_spacebetween
          mb1>
          <Box
            mr2>
            <Text
              gray600
              size1
              right>
              Transform
            </Text>
          </Box>
          <Box>
            <Flexbox>
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
            </Flexbox>
          </Box>
        </Flexbox>

        <Flexbox
          ai_center
          jc_spacebetween
          mb1>
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
            <Flexbox>
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
            </Flexbox>
          </Box>
        </Flexbox>

        <Flexbox
          ai_center
          jc_spacebetween
          mb1>
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
            <Flexbox>
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
              Direction
            </Text>
          </Box>
          <Box>
            <Flexbox>
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
            </Flexbox>
          </Box>
        </Flexbox>

      </Box>
    );
  }
}

export default Typography;
