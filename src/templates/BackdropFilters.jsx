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
