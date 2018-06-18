import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from './../components/Heading.js';

const StrikeEffect = styled.s`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: hsl(212, 15%, 72%);

  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: -7px;
    width: calc(100% + 14px);
    height: 2px;
    background-color: currentcolor;
    transform: rotate(-4deg);
    transform-origin: bottom left;
  }
`;

class Strike extends Component {
  render(){
    return(
      <div>
        <StrikeEffect>
          {this.props.children}
        </StrikeEffect>
      </div>
    );
  }
}

export default Strike;
