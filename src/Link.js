import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'
import * as palette from './Palette.js';

const Link = styled.a`
  font-size: ${palette.FONTSIZE_400};
  color: ${palette.BLUE_500};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
