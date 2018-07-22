import React, { Component } from 'react';
import Heading from './../components/Heading.js';
import Text from './../components/Text.js';
import Box from './../components/Box.js';
import Input from './../components/Input.js';
import Slider from './../components/Slider.js';
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
            Backdrop filters
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
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
              right>
              <Input
                defaultValue="0"
                size="4"/>
            </Box>
          </Box>

        </Box>
      </Box>
    );
  }
}

export default Filters;
