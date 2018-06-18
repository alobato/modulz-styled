import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Divider = styled.hr`
  display: block;
  background-color: ${theme.GRAY_300};
  width: ${theme.SPACING_700};
  height: 2px;
  border: none;
  margin: 0 auto;
`;

export default Divider;
