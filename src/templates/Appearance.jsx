import React, { Component } from 'react';
import Box from './../components/Box.js';
import BorderRadius from './../templates/BorderRadius.jsx';
import Opacity from './../templates/Opacity.jsx';
import Flexbox from './../components/Flexbox.js';
import Heading from './../components/Heading.js';

class Appearance extends Component {
  render() {
    return (
      <Box
        bt
        bcgray300
        p3>
        <Flexbox
          ai_center
          jc_spacebetween
          style={{margin: '-5px 0 0 0'}}>
          <Heading
            size1>
            Appearance
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
        <Opacity />
        <BorderRadius />
      </Box>
    );
  }
}

export default Appearance;
