import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${palette.SPACING_600};
  margin-left: -${palette.SPACING_600};

  ${props => props.stretch && css` align-items: stretch; `}
  ${props => props.vcenter && css` align-items: center; `}
  ${props => props.vflexEnd && css` align-items: flex-end; `}

  ${props => props.hcenter && css` justify-content: center; `}
  ${props => props.hflexEnd && css` justify-content: flexEnd; `}
  ${props => props.around && css` justify-content: space-around; `}
  ${props => props.between && css` justify-content: space-between; `}

  & > .grid-column {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-top: ${palette.SPACING_600};
    padding-left: ${palette.SPACING_600};
    width: 100%;
  }
`;

export default Grid;
