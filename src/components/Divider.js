import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const Divider = styled.hr`
  display: block;
  background-color: ${palette.GRAY_300};
  width: ${palette.SPACING_700};
  height: 2px;
  border: none;
  margin: 0 auto;
`;

export default Divider;
