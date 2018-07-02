import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const ListItem = styled.li`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  color: inherit;
  display: flex;
  align-items: center;
  outline: none;
  line-height: 1;
  padding-left: ${theme.SPACING_300};
  padding-right: ${theme.SPACING_300};
  padding-top: ${theme.SPACING_200};
  padding-bottom: ${theme.SPACING_200};
  text-decoration: none;
  width: 100%;

  ${props => props.size1 && css`
    min-height: ${theme.SPACING_600};
  `}

  ${props => props.size2 && css`
    min-height: ${theme.SPACING_700};
  `}

  ${props => props.rounded && css`
    border-radius: ${theme.BORDERRADIUS_200};
  `}
`;

export default ListItem;
