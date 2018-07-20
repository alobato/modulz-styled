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

import Layers from './templates/Layers.jsx';
import Spacing from './templates/Spacing.jsx';
import Dimensions from './templates/Dimensions.jsx';
import PropertyFlexbox from './templates/PropertyFlexbox.jsx';
import PropertyFlexItem from './templates/PropertyFlexItem.jsx';
import BorderRadius from './templates/BorderRadius.jsx';
import Opacity from './templates/Opacity.jsx';
import Typography from './templates/Typography.jsx';
import Position from './templates/Position.jsx';
import Transforms from './templates/Transforms.jsx';
import Filters from './templates/Filters.jsx';
import BackdropFilters from './templates/BackdropFilters.jsx';

class Composer extends Component {
  render() {
    return (
      <div
        style={{height: '100%'}}>
        <Flexbox
          h100>
          <Box
            br
            bcgray300
            fs0
            style={{width: '300px'}}>
            <Flexbox
              h100
              column>
              <Box
                bb
                bcgray300
                p1>
                <Flexbox
                  jc_spacebetween>
                  <Box>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H17" transform="translate(4 18.5)" stroke="black"/>
                    <path d="M0 0H17" transform="translate(4 12.5)" stroke="black"/>
                    <path d="M0 0H17" transform="translate(4 6.5)" stroke="black"/>
                    </svg>
                  </Box>
                  <Box>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H14" transform="translate(5.5 12.5)" stroke="black" stroke-linecap="round"/>
                    <path d="M0 14V0" transform="translate(12.5 5.5)" stroke="black" stroke-linecap="round"/>
                    </svg>
                  </Box>
                </Flexbox>
              </Box>
              <Layers />
            </Flexbox>
          </Box>
          <Box
            fg1>
            <Flexbox
              h100
              column>
              <Box
                bb
                bcgray300
                p1>
                <Flexbox
                  jc_spacebetween>
                  <Flexbox
                    ai_center>
                    <Box
                      mr1>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H10" transform="translate(2.5 7.5)" stroke="black" stroke-linecap="round"/>
                      </svg>
                    </Box>
                    <Box
                      mr1>
                      <Text
                        size1
                        tnum>
                        100%
                      </Text>
                    </Box>
                    <Box>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H10" transform="translate(2.5 7.5)" stroke="black" stroke-linecap="round"/>
                      <path d="M0 10V0" transform="translate(7.5 2.5)" stroke="black" stroke-linecap="round"/>
                      </svg>
                    </Box>
                  </Flexbox>
                  <Flexbox
                    ai_center>
                    <Box
                      mr1>
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0V16L12 8L0 0Z" transform="translate(6.5 4.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </Box>
                    <Box>
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0V7H16V0" transform="translate(4.5 13.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M0 0V11" transform="translate(12.5 4.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M0 0L3 4L6 0" transform="translate(9.5 11.5)" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </Box>
                  </Flexbox>
                </Flexbox>
              </Box>
              <Box
                oyauto>
                <Flexbox>
                  <Box
                    border
                    bcgray300
                    p9
                    white
                    ml3>
                  </Box>
                  <Box
                    border
                    bcgray300
                    p9
                    white
                    ml3>
                  </Box>
                </Flexbox>
              </Box>
            </Flexbox>
          </Box>
          <Box
            bl
            bcgray300
            fs0
            oyauto
            style={{width: '220px'}}>
            <Dimensions />
            <PropertyFlexbox />
            <PropertyFlexItem />
            <Spacing />
            <Opacity />
            <BorderRadius />
            <Typography />
            <Position />
            <Transforms />
            <Filters />
            <BackdropFilters />
          </Box>
        </Flexbox>
      </div>
    );
  }
}

export default Composer;
