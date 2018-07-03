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
            <Heading
              size2
              gray600
              mb6>
              Layers
            </Heading>
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
            <Heading
              size2
              gray600
              mb6>
              Devices
            </Heading>
          </Box>
          <Box
            bl
            bcgray300
            fs0
            style={{width: '210px'}}>
            <Heading
              size2
              gray600
              mb6>
              Styles
            </Heading>
            <Box
              p2
              bt
              bcgray300>
              <Flexbox
                mb2
                ai_center>
                <Box
                  mr2>
                  <Text
                    size1
                    right>
                    Width
                  </Text>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="Auto"/>
                </Box>
                <Box>
                  <Input
                    value="Auto"/>
                </Box>
              </Flexbox>
              <Flexbox
                mb2
                ai_center>
                <Box
                  mr2>
                  <Text
                    size1
                    right>
                    Min
                  </Text>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="Auto"/>
                </Box>
                <Box>
                  <Input
                    value="Auto"/>
                </Box>
              </Flexbox>
              <Flexbox
                mb2
                ai_center>
                <Box
                  mr2>
                  <Text
                    size1
                    right>
                    Max
                  </Text>
                </Box>
                <Box
                  mr2>
                  <Input
                    value="Auto"/>
                </Box>
                <Box>
                  <Input
                    value="Auto"/>
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
