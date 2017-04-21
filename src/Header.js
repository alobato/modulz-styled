import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './Palette.js';

const Header = styled.header`
  background-color: ${palette.WHITE};
  padding: ${palette.SPACING_300};
  width: 100%;

  ${props => props.absolute && css`
      position: absolute;
  `}

  ${props => props.fixed && css`
      position: fixed;
  `}
`;

export default Header;
