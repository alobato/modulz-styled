import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const List = styled.ul`
  list-style: none;

  ${props => props.rounded && css`
    border-radius: ${theme.BORDERRADIUS_200};
  `}
`;

export default List;
