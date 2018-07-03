import React, { Component } from 'react';

import Box from './components/Box.js';
import Section from './components/Section.js';
import Container from './components/Container.js';
import Text from './components/Text.js';
import Heading from './components/Heading.js';
import Divider from './components/Divider.js';
import Grid from './components/Grid.js';
import Image from './components/Image.js';
import Badge from './components/Badge.js';
import Input from './components/Input.js';
import CheckboxButton from './components/CheckboxButton.js';
import ToggleButton from './components/ToggleButton.js';
import Switch from './components/Switch.js';
import Slider from './components/Slider.js';
import Select from './components/Select.js';
import Flexbox from './components/Flexbox.js';
import List from './components/List.js';
import ListItem from './components/ListItem.js';
import LinkItem from './components/LinkItem.js';
import Button from './components/Button.js';
import LinesButton from './components/LinesButton.js';

class Composer extends Component {
  render() {
    return (
      <div
        style={{height: '100%'}}>
        <Flexbox h100>
          <Box
            br
            bcgray300
            fs0
            style={{width: '300px'}}>
            <List>
              <LinkItem>
                <Box
                  mr2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    style={{display: 'block'}}>
                    <path d="M0 0H9" transform="translate(4 16.5)" />
                    <path d="M0 0H17" transform="translate(4 12.5)" />
                    <path d="M0 0H9" transform="translate(4 8.5)" />
                  </svg>
                </Box>
                <Text size2>
                  Div
                </Text>
              </LinkItem>
              <LinkItem>
                <Box
                  mr2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    style={{display: 'block'}}>
                    <path d="M0 0H9" transform="translate(4 16.5)" />
                    <path d="M0 0H17" transform="translate(4 12.5)" />
                    <path d="M0 0H9" transform="translate(4 8.5)" />
                  </svg>
                </Box>
                <Text size2>
                  Button
                </Text>
              </LinkItem>
              <LinkItem>
                <Box
                  mr2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    style={{display: 'block'}}>
                    <path d="M0 0H9" transform="translate(4 16.5)" />
                    <path d="M0 0H17" transform="translate(4 12.5)" />
                    <path d="M0 0H9" transform="translate(4 8.5)" />
                  </svg>
                </Box>
                <Text size2>
                  Link
                </Text>
              </LinkItem>
            </List>
          </Box>
          <Box
            fg1>
          </Box>
          <Box
            bl
            bcgray300
            fs0
            style={{width: '220px'}}>
            <Box
              p3>
              <Flexbox
                mb2
                ai_center>
                <Box
                  mr2>
                  <Text
                    size1
                    gray600
                    right>
                    Width
                  </Text>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box>
                  <Input
                    value="0"/>
                </Box>
              </Flexbox>
              <Flexbox
                mb2
                ai_center>
                <Box
                  mr2>
                  <Text
                    size1
                    gray600
                    right>
                    Min
                  </Text>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box>
                  <Input
                    value="0"/>
                </Box>
              </Flexbox>
              <Flexbox
                ai_center>
                <Box
                  mr2>
                  <Text
                    size1
                    gray600
                    right>
                    Max
                  </Text>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box>
                  <Input
                    value="0"/>
                </Box>
              </Flexbox>
            </Box>

            <Box
              p3
              bt
              bcgray300>
              <Box
                mb2>
                <Text
                  size1
                  gray600>
                  Margin
                </Text>
              </Box>
              <Flexbox
                mb3
                ai_center>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box>
                  <Input
                    value="0"/>
                </Box>
              </Flexbox>
              <Box
                mb2>
                <Text
                  size1
                  gray600>
                  Padding
                </Text>
              </Box>
              <Flexbox
                ai_center>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="0"/>
                </Box>
                <Box>
                  <Input
                    value="0"/>
                </Box>
              </Flexbox>
            </Box>

            <Box
              p3
              bt
              bcgray300>
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
                    value="100"/>
                </Box>
              </Flexbox>
            </Box>

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
              <Flexbox
                ai_center
                jc_spacebetween>
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
            </Box>

            <Box
              p3
              bt
              bcgray300>
              <Box
                mb2>
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
              <Flexbox
                mb2
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
            </Box>

          </Box>
        </Flexbox>
      </div>
    );
  }
}

export default Composer;
