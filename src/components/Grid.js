import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${theme.SPACING_600};
  margin-left: -${theme.SPACING_600};

  ${props => props.stretch && css` align-items: stretch; `}
  ${props => props.vcenter && css` align-items: center; `}
  ${props => props.vflexEnd && css` align-items: flex-end; `}

  ${props => props.hcenter && css` justify-content: center; `}
  ${props => props.hflexEnd && css` justify-content: flexEnd; `}
  ${props => props.around && css` justify-content: space-around; `}
  ${props => props.between && css` justify-content: space-between; `}
`;

export default Grid;
