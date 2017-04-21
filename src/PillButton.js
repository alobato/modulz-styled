import React from 'react';
import styled from 'styled-components';
import Button from './Button.js';
import * as palette from './Palette.js';

const PillButton = styled(Button)`
  padding: ${(props) => props.large ? '0 24px' : '0 16px'};
  border-radius: 9999px;
  background-color:
    ${(props) =>
      props.white ? 'hsl(0, 0%, 100%)' :
      props.red ? 'hsl(0, 92%, 61%)' :
      props.pink ? 'hsl(332, 94%, 55%)' :
      props.purple ? 'hsl(288, 64%, 42%)' :
      props.indigo ? 'hsl(226, 56%, 48%)' :
      props.blue ? 'hsl(204, 95%, 50%)' :
      props.teal ? 'hsl(172, 100%, 35%)' :
      props.green ? 'hsl(132, 52%, 53%)' :
      props.lime ? 'hsl(68, 74%, 50%)' :
      props.yellow ? 'hsl(54, 98%, 50%)' :
      props.amber ? 'hsl(46, 100%, 57%)' :
      props.orange ? 'hsl(36, 100%, 50%)' :
      props.crimson ? 'hsl(18, 100%, 60%)' :
      props.lavender ? 'hsl(255, 74%, 60%)' :
      props.violet ? 'hsl(264, 52%, 45%)' :
      ''
    };
    font-size: ${(props) => props.large ? '14px' : '12px'};
  height: ${(props) => props.large ? '40px' : ''};
  min-width: ${(props) => props.large ? '40px' : ''};
  line-height: ${(props) => props.large ? '40px' : ''};
  color: white;
  box-shadow: 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export default PillButton;
