import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -32px;
  margin-left: -32px;

  & > .grid-column {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-top: 32px;
    padding-left: 32px;
    width: 100%;
  }

  ${props => props.small && css`
    margin-top: -8px;
    margin-left: -8px;
  `}

  ${props => props.zero && css`
    margin-top: 0;
    margin-left: 0;
  `}
`;

export default Grid;
