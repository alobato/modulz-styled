import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme';

const Header = styled.header`
  background-color: ${theme.WHITE};
  padding: ${theme.SPACING_300};
  width: 100%;

  ${props => props.absolute && css`
      position: absolute;
  `}

  ${props => props.fixed && css`
      position: fixed;
  `}
`;

export default Header;
