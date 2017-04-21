import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90vw;

  ${props => props.small && css`
    @media screen and (min-width: 68em) {
      width: 33.3333333333vw;
    }
  `}

  ${props => props.medium && css`
    @media screen and (min-width: 38em) {
      width: 75vw;
    }

    @media screen and (min-width: 68em) {
      width: 58.3333333333vw;
    }
  `}

  ${props => props.large && css`
    @media screen and (min-width: 38em) {
      width: 75vw;
    }
  `}
`;

export default Container;
