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
                pl2>
                <Input
                  defaultValue="4px" />
              </Box>
              <Box
                w50
                pr2>
                <Input
                  defaultValue="4px" />
              </Box>
              <Box
                w50
                pl2>
                <Input
                  defaultValue="4px" />
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
                checked={true}>
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
                name="text_alignment"
                checked={true}>
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
              Decoration
            </Text>
          </Box>
          <Box>
            <Flexbox>
              <ToggleButton
                name="text_alignment"
                checked={true}>
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
                name="text_alignment"
                checked={true}>
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
                name="text_alignment"
                checked={true}>
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
            </Flexbox>
          </Box>
        </Flexbox>

      </Box>
    );
  }
}

export default Typography;
