import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './Palette.js';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${palette.SPACING_500};
  margin-left: -${palette.SPACING_500};

  & > .grid-column {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-top: ${palette.SPACING_500};;
    padding-left: ${palette.SPACING_500};;
    width: 100%;
  }

  ${props => props.small && css`
    margin-top: -${palette.SPACING_200};
    margin-left: -${palette.SPACING_200};
  `}

  ${props => props.zero && css`
    margin-top: 0;
    margin-left: 0;
  `}
`;

export default Grid;
