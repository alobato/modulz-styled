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
        <Flexbox>
          <Box br bcgray300>
            <Heading size2 gray600 mb6>
              Layers
            </Heading>
          </Box>
          <Box>
            <Heading size2 gray600 mb6>
              Devices
            </Heading>
          </Box>
          <Box bl bcgray300>
            <Heading size2 gray600 mb6>
              Styles
            </Heading>
          </Box>
        </Flexbox>
      </div>
    );
  }
}

export default Composer;
